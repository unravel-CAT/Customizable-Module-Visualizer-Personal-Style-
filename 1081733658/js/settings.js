window.wallpaperPropertyListener = {

    setPaused: function (isPaused) {

        var video = $("#background-video");
        video.paused = isPaused;

        WALLPAPER.background_engine.Enable(!isPaused);
        WALLPAPER.visualizer.Enable(!isPaused);
    },

    applyGeneralProperties: function (properties) {

        // Set visualizer settings
        visualizer_settings(properties);
    },

    applyUserProperties: function (properties) {

        //启动项
        properties.visual_bar_enabled.value = true;
        properties.visual_bar2_enabled.value = false;
        properties.background_enabled.value = true;
        properties.perspective_enabled.value = false;
        properties.clock_enable.value = false;
        properties.confetti_enable.value = false;
        properties.grid_enabled.value = false;
        properties.visualizer_enabled.value = false;
        properties.foreground_enable.value = false;
        properties.icue_enable.value = false;
        // visual_bar设置
        properties.visual_bar_numberbars.value = 54;
        properties.visual_bar_channel.value = "STEREO";
        properties.visual_bar_channel_option.value = 1;
        properties.visual_bar_channel_mirror.value = false;
        properties.visual_bar_strength.value = 100;
        properties.visual_bar_enablecolor.value = true;
        properties.visual_bar_color.value = "0.7529411764705882 0.7529411764705882 0.7529411764705882";
        properties.visual_bar_alpha.value = 100;
        properties.visual_bar_verticalposition.value = 95;
        properties.visual_bar_horizontalposition.value = -40;
        properties.visual_bar_hideinactive.value = true;
        properties.visual_bar_hideinactivetimeout.value = 0;
        properties.visual_bar_hideinactivefadeduration.value = 1;
        properties.visual_bar_rotation.value = 0;
        properties.visual_bar_heightlimit.value = 0;
        properties.visual_bar_circlemode.value = 0;
        properties.visual_bar_type.value = 1;
        properties.visual_bar_spline_layers.value = 1;
        properties.visual_bar_spline_empty_endpoints.value = false;
        properties.visual_bar_spline_fill_alpha.value = 50;
        properties.visual_bar_enablerotation.value = false;
        properties.visual_bar_enableborder.value = false;
        properties.visual_bar_zindex.value = 1;
        properties.visual_bar_holdindicator.value = false;
        properties.visual_bar_block_mode.value = false;
        //background设置
        properties.background_scaletofit.value = false;
        properties.background_edit.value = false;
        properties.background_effect.value = true;
        properties.background_colorEffectsEnabled.value = true;
        properties.background_effect_hueshift.value = 0;
        properties.background_huerotate.value = 0;
        properties.background_effect_huerotation.value = false;
        properties.background_effect_huerotateenabled.value = false;
        properties.background_effect_hueshift.value = true;
        properties.background_effect_hueshiftstrength.value = 124;
        properties.background_effect_hueshiftpermreset.value = false;
        properties.background_effect_blur.value = true;
        properties.background_effect_blurstrength.value = 100;
        properties.background_effect_bounce.value = true;
        properties.background_effect_bouncestrength.value = 24;
        properties.background_effect_bassshake.value = true;
        properties.background_effect_bassshakestrength.value = 100;
        properties.background_effect_hilight.value = true;
        properties.background_effect_hilightstrength.value = 147;
        properties.background_effect_rocking.value = false;
        // properties.background__effect_glitch.value = true; // 导致无背景图
        properties.background_effect_glitchbasslevel.value = 15;
        properties.background_effect_glitcherrors.value = 15;
        properties.background_effect_glitchopacity.value = 10;
        properties.background_effect_glitchstrength.value = 10;

        // Log Window
        if (properties.visualizer_showlog) {
            ARTHESIAN.Helper.Logger.showLogWindow(properties.visualizer_showlog.value);
        }

        // Set visualizer settings
        visualizer_settings(properties);

        // Set the rainbowbars settings
        visual_bar_settings(properties);
        visual_bar2_settings(properties);

        // Set perspective settings
        perspective_settings(properties);

        // Set clock settings
        clock_settings(properties);

        // Set background settings
        background_settings(properties);
        handle_background_edits(properties);

        // Set foreground settings
        foreground_settings(properties);
        handle_foreground_edits(properties);

        // Set confetti settings
        confetti_settings(properties);

        // Background Grid settings
        grid_settings(properties);

        // icue settings
        icue_settings(properties);
    }
}

window.wallpaperPluginListener = {
    onPluginLoaded: function (name, version) {
        if (name === 'cue') {
            ARTHESIAN.Helper.iCUE.init();
        }
    }
};