;

/**
 * Visualisations module object
 * 
 * @param {any} $ 
 * @param {any} createjs 
 * @param {any} document 
 * @param {any} visualisations 
 * @param {any} undefined 
 * @returns 
 */
var visualisations = (function($, createjs, document, visualisations, undefined) {

    visualisations = visualisations || {};

    /**
     * Hold Indicator
     * 
     * @param {any} id 
     * @param {any} settings 
     * @returns 
     */
    visualisations.hold_indicator = function(id, settings) {

        // Declare a scope for Visualizer
        var scope = {};

        scope.id = id;

        // Bind 'this'
        var _this = this;

        // Private variables for within the plugin only ( no user/ code interaction )
        _this.variables = {
            indicators: []
        }

        // The default values ( which can be overriden by supplied settings )
        var _DEFAULTS = {

            enabled: false,

            holdDuration: 5, // number in miliseconds
            holdResetDuration: 1000,  
            holdResetSmooth: "cubicIn",     
            color: "red",
            width: 25,
            height: 10,

            lineCapsType: 0,
        }

        scope.stage = null;
        scope.canvas = null;
        scope.parent = null;

        scope.gameObject = new createjs.Container();

        scope.settings = $.extend(_DEFAULTS, settings);

        /**
         * Init method for this Visual
         * 
         */
        scope.init = function(parent) {

            if (!createjs) { console.error("This visual requires CreateJS to operate!"); }

            scope.canvas = parent.canvas;
            scope.stage = parent.stage;
            scope.parent = parent;

            _this.create();

            // Add to state
            scope.stage.addChild(scope.gameObject);
        }

        /**
         * Create all the indicators once, update them at update()
         */
        var draw_container;
        _this.create = function () {

            // Clear the current gameObject
            scope.gameObject.removeAllChildren();
            _this.variables.indicators = [];

            // Create new container
            draw_container = new createjs.Container();

            for(let i = 0; i < scope.parent.settings.precision; i++) {

                // Create indicator
                const indicator = new createjs.Shape();
    
                // Add the hold indicators
                draw_container.addChild(indicator);
                _this.variables.indicators.push(indicator);
            }

            // Add the container to the gameObject
            scope.gameObject.addChild(draw_container);
        }

        /**
         * The Update method processes the Audio Data Array as provided by Wallpaper Engine ( number array )
         * 
         * @param {Array<number>} data 
         */
        scope.update = function(data) {
            
            _this.draw(data);

            // Match 'Hide when no sound' of parent
            if(scope.parent) {
                scope.gameObject.alpha = scope.parent.gameObject.alpha;
            }

            if(scope.stage) {
                scope.stage.addChild(scope.gameObject);
            }
        }

        /**
         * Draw method for the visual
         * 
         * @param {any} data 
         */
        var point_y;
        var point_x;
        _this.draw = function(data) {

            if(!_this.variables.indicators.length) { return; }

            scope.gameObject.x = (scope.parent.settings.barsHorizontalPosition / 200) * scope.canvas.width + (scope.canvas.width * 0.5);
            scope.gameObject.y = (scope.parent.settings.barsVerticalPosition / 200) * scope.canvas.height + (scope.canvas.height * 0.5);

            draw_totalWidth = (data.length * (scope.parent.settings.barGap)) - scope.parent.settings.barGap; // subtract one barGap :)
            draw_container.width = draw_totalWidth;

            if (!scope.parent.settings.circleMode) {
                draw_container.regX = (draw_totalWidth / 2);
            } else {
                draw_container.regX = 0;
            }

            const now = new Date().getTime();

            point_x = scope.settings.width / 2;

            for(const [i, d] of data.entries()) {
                
                const indicator = _this.variables.indicators[i];

                indicator.x = i * scope.parent.settings.barGap;
                indicator.regX = point_x;

                point_y = d * (scope.parent.settings.strengthMultiplier);

                if (scope.parent.settings.heightLimit && point_y > scope.parent.settings.heightLimit) {
                    point_y = scope.parent.settings.heightLimit;
                }

                draw_startPoint = ((200 - scope.parent.settings.verticalGrowthOffset) / 100) * point_y;

                if(indicator.value > draw_startPoint) {
                    if (indicator.lastHoldTime + scope.settings.holdDuration < now) {
                        if(indicator.value > 0) {
                            indicator.tween = createjs.Tween.get(indicator, {
                                override: false
                            }).to({ value: 0 }, scope.settings.holdResetDuration, createjs.Ease[scope.settings.holdResetSmooth]);
                        }
                    }
                } else {
                    indicator.value = draw_startPoint;
                    indicator.lastHoldTime = now;
                    if(indicator.tween) {
                        createjs.Tween.removeTweens(indicator)
                    }
                }

                let parentCapOffset = scope.parent.settings.lineCapsType ? 0.5 * scope.parent.settings.barWidth : 0;

                indicator.graphics.clear().s(scope.settings.color).ss(scope.settings.height, scope.settings.lineCapsType).mt(point_x - (scope.settings.width / 2), -indicator.value - parentCapOffset - scope.settings.height / 2).lt(point_x + (scope.settings.width / 2), -indicator.value - parentCapOffset - scope.settings.height / 2);

                if (scope.parent.settings.circleMode) {
                    indicator.rotation = scope.parent.settings.arc_degrees * (i / scope.parent.settings.precision);
                    indicator.regY = scope.parent.settings.circleSize;
                    indicator.x = 0
                } else {
                    indicator.rotation = 0
                    indicator.regY = 0
                }
            }

            draw_container.rotation = scope.parent.settings.rotation + scope.parent.variables.rotation + (180 + scope.parent.settings.arc_degrees * -0.5);
        }

        /**
         * Remove a gameobject from the scene
         * 
         * @param {any} obj 
         */
        _this.removeGameObject = function(obj) {
            obj.parent.removeChild(obj);
        }

        // _this.init();

        return scope;
    };

    return visualisations;

}(jQuery, createjs, document, visualisations || {}));