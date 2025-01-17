{
    Buy_Me_A_Drink: {
        order: 999999,
            text: <hr><a href='https://steamcommunity.com/linkfilter/?url=https://www.paypal.com/paypalme/ennevanziel'>Like the wallpaper? Buy me a drink!<br><img src='https://www.arthesian.pro/static/img/donate.png' width='200' height='60' /></a>,
                value: null
    },
    Logo: {
        order: 99999,
            text: <hr><a style='border-top:2px solid #777;padding-top:20px;margin:20px;width:225px;display:block' href='https://steamcommunity.com/linkfilter/?url=https://arthesian.pro'><img src='https://www.arthesian.pro/static/img/arthesian.png' width='100' height='100' style='margin-right: 30px;' /> © Arthesian</a>,
                value: null
    },
    _d0: {
        order: 0,
            type: divider,
                value: null
    },
    alignmentfliph: {
        icon: fa-exchange,
            order: -12,
                text: ui_browse_properties_alignment_flip_horizontally,
                    type: bool,
                        value: false
    },
    audioprocessing: {
        icon: fa-microphone,
            order: -21,
                text: ui_browse_properties_audio_recording,
                    type: bool,
                        value: true
    },
    background_color: {
        condition: background_enable.value && background_type.value == 1,
            order: 2020,
                text: ui_background_color,
                    type: color,
                        value: 0 0 0
    },
    background_colorEffectsEnabled: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2509,
                text: Color Effects,
                    type: bool,
                        value: true
    },
    background_edit: {
        condition: background_enable.value && !(background_type.value == 1),
            order: 2260,
                text: Adjust Background Colors,
                    type: bool,
                        value: false
    },
    background_edit_brightness: {
        condition: background_enable.value && !(background_type.value == 1) && background_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 2262,
                            text: Brightness,
                                type: slider,
                                    value: 100
    },
    background_edit_contrast: {
        condition: background_enable.value && !(background_type.value == 1) && background_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 2261,
                            text: Contrast,
                                type: slider,
                                    value: 100
    },
    background_edit_grayscale: {
        condition: background_enable.value && !(background_type.value == 1) && background_edit.value,
            max: 100,
                min: 0,
                    order: 2264,
                        text: Grayscale,
                            type: slider,
                                value: 0
    },
    background_edit_invert: {
        condition: background_enable.value && !(background_type.value == 1) && background_edit.value,
            order: 2265,
                text: Invert Colors,
                    type: bool,
                        value: false
    },
    background_edit_saturation: {
        condition: background_enable.value && !(background_type.value == 1) && background_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 2263,
                            text: Saturation,
                                type: slider,
                                    value: 100
    },
    background_effect: {
        condition: background_enable.value && !(background_type.value == 1) ? background_effect.value ? background_effect.text = background_effect.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : background_effect.text = background_effect.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger') : false,
            order: 2500,
                text: <hr><span class='ugcDanger'>Background Effects: Disabled</span><hr>,
                    type: bool,
                        value: true
    },
    background_effect_bassshake: {
        condition: background_effect.value && background_enable.value && !(background_type.value == 1),
            order: 2715,
                text: Shake on Bass,
                    type: bool,
                        value: true
    },
    background_effect_bassshakestrength: {
        condition: background_effect_bassshake.value && background_effect.value && background_enable.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 25,
                        order: 2716,
                            text: Shake strength,
                                type: slider,
                                    value: 100
    },
    background_effect_blur: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2600,
                text: ui_background_effect_blur,
                    type: bool,
                        value: true
    },
    background_effect_blurstrength: {
        condition: background_effect_blur.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2610,
                            text: ui_background_effect_blurstrength,
                                type: slider,
                                    value: 100
    },
    background_effect_bounce: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2700,
                text: ui_background_effect_bounce,
                    type: bool,
                        value: true
    },
    background_effect_bouncestrength: {
        condition: background_effect_bounce.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2710,
                            text: ui_background_effect_bouncestrength,
                                type: slider,
                                    value: 24
    },
    background_effect_glitch: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2880,
                text: ui_background_effect_glitch,
                    type: bool,
                        value: true
    },
    background_effect_glitchbasslevel: {
        condition: background_effect_glitch.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 150,
                    min: 10,
                        order: 2895,
                            text: ui_background_effect_glitchbasslevel,
                                type: slider,
                                    value: 15
    },
    background_effect_glitcherrors: {
        condition: background_effect_glitch.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2890,
                            text: ui_background_effect_glitcherrors,
                                type: slider,
                                    value: 15
    },
    background_effect_glitchopacity: {
        condition: background_effect_glitch.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 100,
                    min: 10,
                        order: 2895,
                            text: ui_background_effect_glitchopacity,
                                type: slider,
                                    value: 10
    },
    background_effect_glitchstrength: {
        condition: background_effect_glitch.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2885,
                            text: ui_background_effect_glitchstrength,
                                type: slider,
                                    value: 10
    },
    background_effect_hilight: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2800,
                text: ui_background_effect_hilight,
                    type: bool,
                        value: true
    },
    background_effect_hilightstrength: {
        condition: background_effect_hilight.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2810,
                            text: ui_background_effect_hilightstrength,
                                type: slider,
                                    value: 147
    },
    background_effect_huerotateenabled: {
        condition: background_colorEffectsEnabled.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2570,
                text: ui_background_effect_huerotateenabled,
                    type: bool,
                        value: false
    },
    background_effect_huerotatestrength: {
        condition: background_colorEffectsEnabled.value && background_effect_huerotateenabled.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 25,
                        order: 2575,
                            text: ui_background_effect_huerotatestrength,
                                type: slider,
                                    value: 200
    },
    background_effect_huerotation: {
        condition: background_colorEffectsEnabled.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2550,
                text: ui_background_effect_huerotation,
                    type: bool,
                        value: false
    },
    background_effect_huerotationduration: {
        condition: background_colorEffectsEnabled.value && background_effect_huerotation.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 60,
                    min: 1,
                        order: 2555,
                            text: ui_background_effect_huerotationduration,
                                type: slider,
                                    value: 10
    },
    background_effect_hueshift: {
        condition: background_colorEffectsEnabled.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2580,
                text: ui_background_effect_hueshift,
                    type: bool,
                        value: true
    },
    background_effect_hueshiftpermreset: {
        condition: background_colorEffectsEnabled.value && background_effect_hueshift.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2582,
                text: ui_background_effect_hueshiftpermreset,
                    type: bool,
                        value: false
    },
    background_effect_hueshiftpermresetduration: {
        condition: background_colorEffectsEnabled.value && background_effect_hueshiftpermreset.value && background_effect_hueshift.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 10,
                    min: 0,
                        order: 2585,
                            text: ui_background_effect_hueshiftpermresetduration,
                                type: slider,
                                    value: 1
    },
    background_effect_hueshiftpermresettimeout: {
        condition: background_colorEffectsEnabled.value && background_effect_hueshiftpermreset.value && background_effect_hueshift.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 10,
                    min: 0,
                        order: 2583,
                            text: ui_background_effect_hueshiftpermresettimeout,
                                type: slider,
                                    value: 0.5
    },
    background_effect_hueshiftstrength: {
        condition: background_colorEffectsEnabled.value && background_effect_hueshift.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 25,
                        order: 2581,
                            text: ui_background_effect_hueshiftstrength,
                                type: slider,
                                    value: 124
    },
    background_effect_rocking: {
        condition: background_enable.value && background_effect.value && !(background_type.value == 1),
            order: 2850,
                text: ui_background_effect_rocking,
                    type: bool,
                        value: false
    },
    background_effect_rockingspeed: {
        condition: background_effect_rocking.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2870,
                            text: ui_background_effect_rockingspeed,
                                type: slider,
                                    value: 100
    },
    background_effect_rockingstrength: {
        condition: background_effect_rocking.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: true,
                max: 200,
                    min: 10,
                        order: 2860,
                            text: ui_background_effect_rockingstrength,
                                type: slider,
                                    value: 10
    },
    background_enable: {
        condition: background_enable.value ? background_enable.text = background_enable.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : background_enable.text = background_enable.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 2000,
                text: <hr><span class='ugcDanger'>Background : Disabled</span><hr>,
                    type: bool,
                        value: true
    },
    background_huerotate: {
        condition: background_colorEffectsEnabled.value && background_enable.value && background_effect.value && !(background_type.value == 1),
            editable: false,
                max: 360,
                    min: 0,
                        order: 2510,
                            text: ui_background_huerotate,
                                type: slider,
                                    value: 0
    },
    background_idlepause: {
        condition: background_enable.value && background_type.value == 4,
            order: 2230,
                text: ui_background_idlepause,
                    type: bool,
                        value: false
    },
    background_image: {
        condition: background_enable.value && background_type.value == 2,
            order: 2020,
                text: ui_background_image,
                    type: file,
                        value: D%3A/Platform/Steam/steamapps/workshop/content/431960/2966652618/files/Anime%20№%20115.png
    },
    background_scaletofit: {
        condition: background_enable.value && !(background_type.value == 1),
            order: 2250,
                text: ui_background_scaletofit,
                    type: bool,
                        value: false
    },
    background_slideshowduration: {
        condition: background_enable.value && background_type.value == 3,
            editable: true,
                max: 60,
                    min: 1,
                        order: 2030,
                            text: ui_background_slideshowduration,
                                type: slider,
                                    value: 10
    },
    background_slideshowfadeduration: {
        condition: background_enable.value && background_type.value == 3,
            editable: true,
                max: 5,
                    min: 0,
                        order: 2040,
                            text: ui_background_slideshowfadeduration,
                                type: slider,
                                    value: 3
    },
    background_slideshowfolder: {
        condition: background_enable.value && background_type.value == 3,
            mode: ondemand,
                order: 2020,
                    text: ui_background_slideshowfolder,
                        type: directory,
                            value: null
    },
    background_title: {
        condition: background_enable.value,
            order: 2001,
                text: ui_background_title,
                    value: null
    },
    background_type: {
        condition: background_enable.value,
            options: [
                {
                    label: ui_background_type_0,
                    value: 1
                },
                {
                    label: ui_background_type_1,
                    value: 2
                },
                {
                    label: ui_background_type_2,
                    value: 3
                },
                {
                    label: ui_background_type_3,
                    value: 4
                }
            ],
                order: 2010,
                    text: ui_background_type,
                        type: combo,
                            value: 2
    },
    background_videofile: {
        condition: background_enable.value && background_type.value == 4,
            fileType: video,
                order: 2200,
                    text: ui_background_videofile,
                        type: file,
                            value: null
    },
    background_videospeed: {
        condition: background_enable.value && background_type.value == 4,
            editable: true,
                max: 200,
                    min: 50,
                        order: 2220,
                            text: ui_background_videospeed,
                                type: slider,
                                    value: 100
    },
    background_videovolume: {
        condition: background_enable.value && background_type.value == 4,
            editable: false,
                max: 100,
                    min: 0,
                        order: 2210,
                            text: ui_background_videovolume,
                                type: slider,
                                    value: 0
    },
    clock_analog_customface: {
        condition: clock_enable.value && clock_type.value == 0 && clock_analog_faces.value == 99,
            order: 5110,
                text: ui_clock_analog_customface,
                    type: textinput,
                        value: http://monkeynastixonline.co.za/fzone/assets/images/clock/clock.png
    },
    clock_analog_faces: {
        condition: clock_enable.value && clock_type.value == 0,
            options: [
                {
                    label: ui_clock_analog_faces_0,
                    value: 2
                },
                {
                    label: ui_clock_analog_faces_1,
                    value: 5
                },
                {
                    label: ui_clock_analog_faces_2,
                    value: 4
                },
                {
                    label: ui_clock_analog_faces_3,
                    value: 1
                },
                {
                    label: ui_clock_analog_faces_4,
                    value: 3
                },
                {
                    label: ui_clock_analog_faces_5,
                    value: 99
                }
            ],
                order: 5100,
                    text: ui_clock_analog_faces,
                        type: combo,
                            value: 5
    },
    clock_analog_offsetx: {
        condition: clock_enable.value && clock_type.value == 0,
            max: 100,
                min: -100,
                    order: 5070,
                        text: ui_clock_analog_offsetx,
                            type: slider,
                                value: 0
    },
    clock_analog_offsety: {
        condition: clock_enable.value && clock_type.value == 0,
            max: 100,
                min: -100,
                    order: 5080,
                        text: ui_clock_analog_offsety,
                            type: slider,
                                value: 0
    },
    clock_analog_scale: {
        condition: clock_enable.value && clock_type.value == 0,
            editable: true,
                max: 200,
                    min: 25,
                        order: 5060,
                            text: ui_clock_analog_scale,
                                type: slider,
                                    value: 100
    },
    clock_color: {
        condition: clock_enable.value,
            order: 5005,
                text: ui_clock_color,
                    type: color,
                        value: 1 1 1
    },
    clock_dateday: {
        condition: clock_enable.value && clock_enabledate.value,
            order: 5240,
                text: ui_clock_dateday,
                    type: bool,
                        value: true
    },
    clock_datelocale: {
        condition: clock_enable.value && clock_enabledate.value,
            order: 5210,
                text: ui_clock_datelocale,
                    type: textinput,
                        value: en-US
    },
    clock_datemonth: {
        condition: clock_enable.value && clock_enabledate.value,
            order: 5230,
                text: ui_clock_datemonth,
                    type: bool,
                        value: true
    },
    clock_dateweekday: {
        condition: clock_enable.value && clock_enabledate.value,
            order: 5250,
                text: ui_clock_dateweekday,
                    type: bool,
                        value: true
    },
    clock_dateyear: {
        condition: clock_enable.value && clock_enabledate.value,
            order: 5220,
                text: ui_clock_dateyear,
                    type: bool,
                        value: false
    },
    clock_digital_enable24h: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            order: 5020,
                text: ui_clock_digital_enable24h,
                    type: bool,
                        value: true
    },
    clock_digital_enableseconds: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            order: 5030,
                text: ui_clock_digital_enableseconds,
                    type: bool,
                        value: true
    },
    clock_digital_enableseparator: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            order: 5040,
                text: ui_clock_digital_enableseparator,
                    type: bool,
                        value: true
    },
    clock_digital_offsetx: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            max: 100,
                min: -100,
                    order: 5070,
                        text: ui_clock_digital_offsetx,
                            type: slider,
                                value: 0
    },
    clock_digital_offsety: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            max: 100,
                min: -100,
                    order: 5080,
                        text: ui_clock_digital_offsety,
                            type: slider,
                                value: 0
    },
    clock_digital_scale: {
        condition: clock_enable.value && (clock_type.value == 1 || clock_type.value == 2),
            editable: true,
                max: 200,
                    min: 25,
                        order: 5050,
                            text: ui_clock_digital_scale,
                                type: slider,
                                    value: 25
    },
    clock_enable: {
        condition: clock_enable.value ? clock_enable.text = clock_enable.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : clock_enable.text = clock_enable.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 5000,
                text: <hr><span class='ugcDanger'>Clock : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    clock_enabledate: {
        condition: clock_enable.value,
            order: 5200,
                text: ui_clock_enabledate,
                    type: bool,
                        value: true
    },
    clock_font: {
        condition: clock_enable.value,
            options: [
                {
                    label: ui_clock_font_0,
                    value: digital
                },
                {
                    label: ui_clock_font_1,
                    value: calibri
                },
                {
                    label: ui_clock_font_2,
                    value: corsiva
                },
                {
                    label: ui_clock_font_3,
                    value: script mt
                },
                {
                    label: ui_clock_font_4,
                    value: segoe ui
                },
                {
                    label: ui_clock_font_5,
                    value: courier
                },
                {
                    label: ui_clock_font_6,
                    value: impact
                }
            ],
                order: 5500,
                    text: ui_clock_font,
                        type: combo,
                            value: impact
    },
    clock_title: {
        condition: clock_enable.value,
            order: 5001,
                text: ui_clock_title,
                    value: null
    },
    clock_type: {
        condition: clock_enable.value,
            options: [
                {
                    label: ui_clock_type_0,
                    value: 1
                },
                {
                    label: ui_clock_type_1,
                    value: 2
                },
                {
                    label: ui_clock_type_2,
                    value: 0
                }
            ],
                order: 5010,
                    text: ui_clock_type,
                        type: combo,
                            value: 2
    },
    confetti_animationspeed: {
        condition: confetti_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 6050,
                            text: ui_confetti_animationspeed,
                                type: slider,
                                    value: 100
    },
    confetti_burstsize: {
        condition: confetti_enable.value,
            editable: true,
                max: 50,
                    min: 5,
                        order: 6040,
                            text: ui_confetti_burstsize,
                                type: slider,
                                    value: 10
    },
    confetti_circle_mode: {
        condition: confetti_enable.value,
            order: 6200,
                text: Circle Mode,
                    type: bool,
                        value: true
    },
    confetti_customcolor: {
        condition: confetti_usecustomcolor.value && confetti_enable.value,
            order: 6070,
                text: ui_confetti_customcolor,
                    type: color,
                        value: 1 1 1
    },
    confetti_direction: {
        condition: confetti_enable.value,
            options: [
                {
                    label: Up-/outwards,
                    value: UP
                },
                {
                    label: Down/in-wards,
                    value: DOWN
                },
                {
                    label: Both,
                    value: BOTH
                }
            ],
                order: 6120,
                    text: Spawn Direction,
                        type: combo,
                            value: UP
    },
    confetti_distance_mutliplier: {
        condition: confetti_enable.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 6040,
                            text: Travel Distance,
                                type: slider,
                                    value: 100
    },
    confetti_enable: {
        condition: confetti_enable.value ? confetti_enable.text = confetti_enable.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : confetti_enable.text = confetti_enable.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 6000,
                text: <hr><span class='ugcDanger'>Confetti : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    confetti_enablewhenidle: {
        condition: confetti_enable.value,
            order: 6080,
                text: ui_confetti_enablewhenidle,
                    type: bool,
                        value: false
    },
    confetti_fade: {
        condition: confetti_enable.value,
            order: 6140,
                text: Use Fade-in/out,
                    type: bool,
                        value: true
    },
    confetti_minsound: {
        condition: confetti_enable.value,
            editable: true,
                max: 150,
                    min: 10,
                        order: 6010,
                            text: ui_confetti_minsound,
                                type: slider,
                                    value: 100
    },
    confetti_movement_ease: {
        condition: confetti_enable.value,
            options: [
                {
                    label: backIn,
                    value: backIn
                },
                {
                    label: backInOut,
                    value: backInOut
                },
                {
                    label: backOut,
                    value: backOut
                },
                {
                    label: bounceIn,
                    value: bounceIn
                },
                {
                    label: bounceInOut,
                    value: bounceInOut
                },
                {
                    label: bounceOut,
                    value: bounceOut
                },
                {
                    label: circIn,
                    value: circIn
                },
                {
                    label: circInOut,
                    value: circInOut
                },
                {
                    label: circOut,
                    value: circOut
                },
                {
                    label: elasticIn,
                    value: elasticIn
                },
                {
                    label: elasticInOut,
                    value: elasticInOut
                },
                {
                    label: elasticOut,
                    value: elasticOut
                },
                {
                    label: linear,
                    value: linear
                }
            ],
                order: 6130,
                    text: Movement Ease,
                        type: combo,
                            value: circOut
    },
    confetti_offsetx: {
        condition: confetti_enable.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 6400,
                            text: ui_confetti_offsetx,
                                type: slider,
                                    value: 0
    },
    confetti_offsety: {
        condition: confetti_enable.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 6410,
                            text: ui_confetti_offsety,
                                type: slider,
                                    value: 0
    },
    confetti_rotate: {
        condition: confetti_enable.value,
            order: 6090,
                text: ui_confetti_rotate,
                    type: bool,
                        value: false
    },
    confetti_rotate_ccw: {
        condition: confetti_enable.value && confetti_rotate.value,
            order: 6095,
                text: Reverse Rotation,
                    type: bool,
                        value: false
    },
    confetti_rotateduration: {
        condition: confetti_enable.value && confetti_rotate.value,
            editable: true,
                max: 20,
                    min: 1,
                        order: 6100,
                            text: ui_confetti_rotateduration,
                                type: slider,
                                    value: 10
    },
    confetti_size: {
        condition: confetti_enable.value,
            editable: true,
                max: 50,
                    min: 1,
                        order: 6020,
                            text: ui_confetti_size,
                                type: slider,
                                    value: 20
    },
    confetti_spawndelay: {
        condition: confetti_enable.value,
            editable: true,
                max: 1000,
                    min: 100,
                        order: 6030,
                            text: ui_confetti_spawndelay,
                                type: slider,
                                    value: 500
    },
    confetti_spawnradius: {
        condition: confetti_enable.value && confetti_circle_mode.value,
            editable: true,
                max: 500,
                    min: 0,
                        order: 6210,
                            text: ui_confetti_spawnradius,
                                type: slider,
                                    value: 0
    },
    confetti_title: {
        condition: confetti_enable.value,
            order: 6001,
                text: ui_confetti_title,
                    value: null
    },
    confetti_usecustomcolor: {
        condition: confetti_enable.value,
            order: 6060,
                text: ui_confetti_usecustomcolor,
                    type: bool,
                        value: false
    },
    confetti_zindex: {
        condition: confetti_enable.value,
            options: [
                {
                    label: Layer 1,
                    value: 0
                },
                {
                    label: Layer 2,
                    value: 1
                },
                {
                    label: Layer 3,
                    value: 2
                },
                {
                    label: Layer 4,
                    value: 3
                }
            ],
                order: 6500,
                    text: Layer,
                        type: combo,
                            value: 0
    },
    foreground_edit: {
        condition: foreground_enable.value,
            order: 11300,
                text: Adjust foreground Colors,
                    type: bool,
                        value: false
    },
    foreground_edit_brightness: {
        condition: foreground_enable.value && foreground_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 11302,
                            text: Brightness,
                                type: slider,
                                    value: 100
    },
    foreground_edit_contrast: {
        condition: foreground_enable.value && foreground_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 11301,
                            text: Contrast,
                                type: slider,
                                    value: 100
    },
    foreground_edit_grayscale: {
        condition: foreground_enable.value && foreground_edit.value,
            max: 100,
                min: 0,
                    order: 11304,
                        text: Grayscale,
                            type: slider,
                                value: 0
    },
    foreground_edit_invert: {
        condition: foreground_enable.value && foreground_edit.value,
            order: 11305,
                text: Invert Colors,
                    type: bool,
                        value: false
    },
    foreground_edit_saturation: {
        condition: foreground_enable.value && foreground_edit.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 11303,
                            text: Saturation,
                                type: slider,
                                    value: 100
    },
    foreground_effect: {
        condition: foreground_enable.value ? foreground_effect.value ? foreground_effect.text = foreground_effect.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : foreground_effect.text = foreground_effect.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger') : false,
            order: 11400,
                text: <hr><span class='ugcDanger'>Foreground Effects : Disabled</span><hr>,
                    type: bool,
                        value: true
    },
    foreground_effect_bassshake: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11417,
                text: Shake on Bass,
                    type: bool,
                        value: false
    },
    foreground_effect_bassshake_invert: {
        condition: foreground_effect_bassshake.value && foreground_effect.value && foreground_enable.value,
            order: 11419,
                text: Invert movement,
                    type: bool,
                        value: false
    },
    foreground_effect_bassshakestrength: {
        condition: foreground_effect_bassshake.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11418,
                            text: Shake strength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_bluronbeat: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11410,
                text: ui_visualizer_effect_bluronbeat,
                    type: bool,
                        value: null
    },
    foreground_effect_bluronbeatstrength: {
        condition: foreground_effect_bluronbeat.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11415,
                            text: ui_visualizer_effect_bluronbeatstrength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_bounceonbeat: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11430,
                text: ui_visualizer_effect_bounceonbeat,
                    type: bool,
                        value: true
    },
    foreground_effect_bounceonbeatstrength: {
        condition: foreground_effect_bounceonbeat.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11435,
                            text: ui_visualizer_effect_bounceonbeatstrength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_hilightonbeat: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11420,
                text: ui_visualizer_effect_hilightonbeat,
                    type: bool,
                        value: true
    },
    foreground_effect_hilightonbeatstrength: {
        condition: foreground_effect_hilightonbeat.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11425,
                            text: ui_visualizer_effect_hilightonbeatstrength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_hue: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11600,
                text: ui_visualizer_effect_hue,
                    type: bool,
                        value: true
    },
    foreground_effect_huerotate: {
        condition: foreground_effect_hue.value && foreground_effect.value && foreground_enable.value,
            max: 360,
                min: 0,
                    order: 11605,
                        text: ui_visualizer_effect_huerotate,
                            type: slider,
                                value: 0
    },
    foreground_effect_huerotation: {
        condition: foreground_effect_hue.value && foreground_effect.value && foreground_enable.value,
            order: 11610,
                text: ui_visualizer_effect_huerotation,
                    type: bool,
                        value: false
    },
    foreground_effect_huerotationspeed: {
        condition: foreground_effect_hue.value && foreground_effect_huerotation.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 30,
                    min: 1,
                        order: 11615,
                            text: ui_visualizer_effect_huerotationspeed,
                                type: slider,
                                    value: 10
    },
    foreground_effect_hueshiftperm: {
        condition: foreground_effect_hue.value && foreground_effect.value && foreground_enable.value,
            order: 11630,
                text: ui_visualizer_effect_hueshiftperm,
                    type: bool,
                        value: false
    },
    foreground_effect_hueshiftpermreset: {
        condition: foreground_effect_hue.value && foreground_effect.value && foreground_enable.value,
            order: 11640,
                text: ui_visualizer_effect_hueshiftpermreset,
                    type: bool,
                        value: false
    },
    foreground_effect_hueshiftpermresetduration: {
        condition: foreground_effect_hueshiftpermreset.value && foreground_effect_hue.value && foreground_effect_hueshiftperm.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 11650,
                            text: ui_visualizer_effect_hueshiftpermresetduration,
                                type: slider,
                                    value: 5
    },
    foreground_effect_hueshiftpermresettimeout: {
        condition: foreground_effect_hueshiftpermreset.value && foreground_effect_hue.value && foreground_effect_hueshiftperm.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 11645,
                            text: ui_visualizer_effect_hueshiftpermresettimeout,
                                type: slider,
                                    value: 1
    },
    foreground_effect_hueshiftpermstrength: {
        condition: foreground_effect_hue.value && foreground_effect_hueshiftperm.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11635,
                            text: ui_visualizer_effect_hueshiftpermstrength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_hueshifttemp: {
        condition: foreground_effect_hue.value && foreground_effect.value && foreground_enable.value,
            order: 11620,
                text: ui_visualizer_effect_hueshifttemp,
                    type: bool,
                        value: false
    },
    foreground_effect_hueshifttempstrength: {
        condition: foreground_effect_hue.value && foreground_effect_hueshifttemp.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11625,
                            text: ui_visualizer_effect_hueshifttempstrength,
                                type: slider,
                                    value: 100
    },
    foreground_effect_title: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11401,
                text: <h4 class='ugcSuccess'>Foreground Effects</h4>,
                    value: null
    },
    foreground_effect_transparency_onbeat: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11460,
                text: Transparency on beat,
                    type: bool,
                        value: true
    },
    foreground_effect_transparency_onbeat_invert: {
        condition: foreground_effect_transparency_onbeat.value && foreground_effect.value && foreground_enable.value,
            order: 11466,
                text: Invert transparency,
                    type: bool,
                        value: false
    },
    foreground_effect_transparency_onbeat_strength: {
        condition: foreground_effect_transparency_onbeat.value && foreground_effect.value && foreground_enable.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 11465,
                            text: Transparency strength,
                                type: slider,
                                    value: 100
    },
    foreground_enable: {
        condition: foreground_enable.value ? foreground_enable.text = foreground_enable.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : foreground_enable.text = foreground_enable.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 11000,
                text: <hr><span class='ugcDanger'>Foreground : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    foreground_glow: {
        condition: foreground_effect.value && foreground_enable.value,
            order: 11402,
                text: ui_visualizer_glow,
                    type: bool,
                        value: true
    },
    foreground_glowcolor: {
        condition: foreground_effect.value && foreground_glow.value && foreground_enable.value,
            order: 11404,
                text: ui_visualizer_glowcolor,
                    type: color,
                        value: 1 1 1
    },
    foreground_glowsize: {
        condition: foreground_effect.value && foreground_glow.value && foreground_enable.value,
            editable: true,
                max: 20,
                    min: 1,
                        order: 11403,
                            text: ui_visualizer_glowsize,
                                type: slider,
                                    value: 10
    },
    foreground_image: {
        condition: foreground_enable.value,
            fileType: image,
                order: 11010,
                    text: Select Image<br><sub>(.png for best effect)</sub>,
                        type: file,
                            value: 
    },
    foreground_image_blendmode: {
        condition: foreground_enable.value,
            options: [
                {
                    label: None,
                    value: normal
                },
                {
                    label: Color,
                    value: color
                },
                {
                    label: Color burn,
                    value: color-burn
                },
                {
                    label: Color dodge,
                    value: color-dodge
                },
                {
                    label: Darken,
                    value: darken
                },
                {
                    label: Difference,
                    value: difference
                },
                {
                    label: Exclusion,
                    value: exclusion
                },
                {
                    label: Hard light,
                    value: hard-light
                },
                {
                    label: Hue,
                    value: hue
                },
                {
                    label: Lighten,
                    value: lighten
                },
                {
                    label: Luminosity,
                    value: luminosity
                },
                {
                    label: Multiply,
                    value: multiply
                },
                {
                    label: Overlay,
                    value: overlay
                },
                {
                    label: Screen,
                    value: screen
                },
                {
                    label: Soft light,
                    value: soft-light
                }
            ],
                order: 11110,
                    text: Blend mode,
                        type: combo,
                            value: normal
    },
    foreground_image_size: {
        condition: foreground_enable.value,
            editable: true,
                max: 500,
                    min: 0,
                        order: 11020,
                            text: Image Size<br><sub>(0 = original)</sub>,
                                type: slider,
                                    value: 200
    },
    foreground_image_zindex: {
        condition: foreground_enable.value,
            options: [
                {
                    label: Layer 1,
                    value: 0
                },
                {
                    label: Layer 2,
                    value: 1
                },
                {
                    label: Layer 3,
                    value: 2
                },
                {
                    label: Layer 4,
                    value: 3
                }
            ],
                order: 11100,
                    text: Layer,
                        type: combo,
                            value: 3
    },
    foreground_offset_x: {
        condition: foreground_enable.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 11200,
                            text: Offset X,
                                type: slider,
                                    value: 0
    },
    foreground_offset_y: {
        condition: foreground_enable.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 11201,
                            text: Offset Y,
                                type: slider,
                                    value: 0
    },
    foreground_title: {
        condition: foreground_enable.value,
            order: 11001,
                text: <h4 class='ugcSuccess'>Foreground Image</h4>,
                    value: null
    },
    grid_amountX: {
        condition: grid_enabled.value,
            editable: true,
                max: 30,
                    min: 10,
                        order: 7020,
                            text: ui_grid_amountX,
                                type: slider,
                                    value: 21
    },
    grid_amountY: {
        condition: grid_enabled.value,
            editable: true,
                max: 30,
                    min: 10,
                        order: 7030,
                            text: ui_grid_amountY,
                                type: slider,
                                    value: 12
    },
    grid_color: {
        condition: grid_enabled.value,
            order: 7010,
                text: ui_grid_color,
                    type: color,
                        value: 1 1 1
    },
    grid_enabled: {
        condition: grid_enabled.value ? grid_enabled.text = grid_enabled.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : grid_enabled.text = grid_enabled.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 7000,
                text: <hr><span class='ugcDanger'>Animated Grid : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    grid_title: {
        condition: grid_enabled.value,
            order: 7001,
                text: ui_grid_title,
                    value: null
    },
    grid_type: {
        condition: grid_enabled.value,
            options: [
                {
                    label: Circle,
                    value: circle
                },
                {
                    label: Square,
                    value: square
                }
            ],
                order: 7050,
                    text: Point Type,
                        type: combo,
                            value: circle
    },
    grid_visibility: {
        condition: grid_enabled.value,
            max: 100,
                min: 0,
                    order: 7100,
                        text: ui_grid_visibility,
                            type: slider,
                                value: 80
    },
    icue_brightnessdecrease: {
        condition: icue_enable.value,
            editable: true,
                max: 50,
                    min: 0,
                        order: 12040,
                            text: Led 'brightness' decrease,
                                type: slider,
                                    value: 50
    },
    icue_color: {
        condition: icue_enable.value,
            order: 12010,
                text: iCUE Led Color,
                    type: color,
                        value: 1 0 0
    },
    icue_enable: {
        condition: icue_enable.value ? icue_enable.text = icue_enable.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : icue_enable.text = icue_enable.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 12000,
                text: <hr><span class='ugcDanger'>iCUE Integration: Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    icue_rotatehue: {
        condition: icue_enable.value,
            order: 12020,
                text: Rotate color,
                    type: bool,
                        value: false
    },
    icue_rotatehueduration: {
        condition: icue_enable.value && icue_rotatehue.value,
            editable: true,
                max: 60,
                    min: 1,
                        order: 12030,
                            text: Hue Rotate Duration (sec),
                                type: slider,
                                    value: 15
    },
    icue_title: {
        condition: icue_enable.value,
            order: 12001,
                text: <h4 class='ugcSuccess'>iCUE</h4>,
                    value: null
    },
    perpective_static: {
        condition: perspective_enabled.value,
            order: 3050,
                text: ui_perpective_static,
                    type: bool,
                        value: false
    },
    perspective_distance: {
        condition: perspective_enabled.value,
            editable: true,
                max: 2000,
                    min: 500,
                        order: 3020,
                            text: ui_perspective_distance,
                                type: slider,
                                    value: 1000
    },
    perspective_enabled: {
        condition: perspective_enabled.value ? perspective_enabled.text = perspective_enabled.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : perspective_enabled.text = perspective_enabled.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 3000,
                text: <hr><span class='ugcDanger'>Perspective : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    perspective_shift_x: {
        condition: perspective_enabled.value && perpective_static.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 3070,
                            text: Shift X,
                                type: slider,
                                    value: 0
    },
    perspective_shift_y: {
        condition: perspective_enabled.value && perpective_static.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 3071,
                            text: Shift Y,
                                type: slider,
                                    value: 0
    },
    perspective_strength: {
        condition: perspective_enabled.value,
            editable: true,
                max: 45,
                    min: 0,
                        order: 3010,
                            text: ui_perspective_strength,
                                type: slider,
                                    value: 25
    },
    perspective_tilt_x: {
        condition: perspective_enabled.value && perpective_static.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 3070,
                            text: ui_perspective_tilt_x,
                                type: slider,
                                    value: 0
    },
    perspective_tilt_y: {
        condition: perspective_enabled.value && perpective_static.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 3060,
                            text: ui_perspective_tilt_y,
                                type: slider,
                                    value: 0
    },
    perspective_title: {
        condition: perspective_enabled.value,
            order: 3001,
                text: ui_perspective_title,
                    value: null
    },
    schemecolor: {
        icon: fa-palette,
            order: -20,
                text: ui_browse_properties_scheme_color,
                    type: color,
                        value: 0 0 0
    },
    version: {
        order: 99999999,
            text: <a href='https://steamcommunity.com/sharedfiles/filedetails/changelog/1081733658'>version : 2021.09.13.1</a><span class='ugcSub'> (click for changelog)</span>,
                value: null
    },
    visual2_gradient: {
        condition: visual_bar2_enabled.value && !visual_bar2_enablecolor.value,
            order: 1151.0001,
                text: ui_visual2_gradient,
                    type: bool,
                        value: false
    },
    visual2_gradient_beginstrip: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            order: 1151.0001,
                text: ui_visual2_gradient_beginstrip,
                    value: null
    },
    visual2_gradient_color_1: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            order: 1151.0003,
                text: ui_visual2_gradient_color_1,
                    type: color,
                        value: 1 1 1
    },
    visual2_gradient_color_10: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 10,
            order: 1151.0021,
                text: ui_visual2_gradient_color_10,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_10_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 10,
            max: 100,
                min: 0,
                    order: 1151.0022,
                        text: ui_visual2_gradient_color_10_position,
                            type: slider,
                                value: 100
    },
    visual2_gradient_color_1_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            max: 100,
                min: 0,
                    order: 1151.0004,
                        text: ui_visual2_gradient_color_1_position,
                            type: slider,
                                value: 0
    },
    visual2_gradient_color_2: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            order: 1151.0005,
                text: ui_visual2_gradient_color_2,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_2_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            max: 100,
                min: 0,
                    order: 1151.0006,
                        text: ui_visual2_gradient_color_2_position,
                            type: slider,
                                value: 20
    },
    visual2_gradient_color_3: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 3,
            order: 1151.0007,
                text: ui_visual2_gradient_color_3,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_3_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 3,
            max: 100,
                min: 0,
                    order: 1151.0008,
                        text: ui_visual2_gradient_color_3_position,
                            type: slider,
                                value: 30
    },
    visual2_gradient_color_4: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 4,
            order: 1151.0009,
                text: ui_visual2_gradient_color_4,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_4_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 4,
            max: 100,
                min: 0,
                    order: 1151.001,
                        text: ui_visual2_gradient_color_4_position,
                            type: slider,
                                value: 40
    },
    visual2_gradient_color_5: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 5,
            order: 1151.0011,
                text: ui_visual2_gradient_color_5,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_5_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 5,
            max: 100,
                min: 0,
                    order: 1151.0012,
                        text: ui_visual2_gradient_color_5_position,
                            type: slider,
                                value: 50
    },
    visual2_gradient_color_6: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 6,
            order: 1151.0013,
                text: ui_visual2_gradient_color_6,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_6_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 6,
            max: 100,
                min: 0,
                    order: 1151.0014,
                        text: ui_visual2_gradient_color_6_position,
                            type: slider,
                                value: 60
    },
    visual2_gradient_color_7: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 7,
            order: 1151.0015,
                text: ui_visual2_gradient_color_7,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_7_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 7,
            max: 100,
                min: 0,
                    order: 1151.0016,
                        text: ui_visual2_gradient_color_7_position,
                            type: slider,
                                value: 70
    },
    visual2_gradient_color_8: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 8,
            order: 1151.0017,
                text: ui_visual2_gradient_color_8,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_8_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 8,
            max: 100,
                min: 0,
                    order: 1151.0018,
                        text: ui_visual2_gradient_color_8_position,
                            type: slider,
                                value: 80
    },
    visual2_gradient_color_9: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 9,
            order: 1151.0019,
                text: ui_visual2_gradient_color_9,
                    type: color,
                        value: 1 0 0
    },
    visual2_gradient_color_9_position: {
        condition: visual_bar2_enabled.value && visual2_gradient.value && visual2_gradient_number.value >= 9,
            max: 100,
                min: 0,
                    order: 1151.002,
                        text: ui_visual2_gradient_color_9_position,
                            type: slider,
                                value: 90
    },
    visual2_gradient_endstrip: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            order: 1151.01,
                text: ui_visual2_gradient_endstrip,
                    value: null
    },
    visual2_gradient_number: {
        condition: visual_bar2_enabled.value && visual2_gradient.value,
            options: [
                {
                    label: ui_visual2_gradient_number_0,
                    value: 2
                },
                {
                    label: ui_visual2_gradient_number_1,
                    value: 3
                },
                {
                    label: ui_visual2_gradient_number_2,
                    value: 4
                },
                {
                    label: ui_visual2_gradient_number_3,
                    value: 5
                },
                {
                    label: ui_visual2_gradient_number_4,
                    value: 6
                },
                {
                    label: ui_visual2_gradient_number_5,
                    value: 7
                },
                {
                    label: ui_visual2_gradient_number_6,
                    value: 8
                },
                {
                    label: ui_visual2_gradient_number_7,
                    value: 9
                },
                {
                    label: ui_visual2_gradient_number_8,
                    value: 10
                }
            ],
                order: 1151.0002,
                    text: ui_visual2_gradient_number,
                        type: combo,
                            value: 2
    },
    visual_bar2_alpha: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 100,
                    min: 10,
                        order: 1155,
                            text: ui_visual_bar2_alpha,
                                type: slider,
                                    value: 100
    },
    visual_bar2_bargap: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 0,
            editable: true,
                max: 50,
                    min: 0,
                        order: 1130,
                            text: ui_visual_bar2_bargap,
                                type: slider,
                                    value: 12
    },
    visual_bar2_barwidth: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 0,
            editable: true,
                max: 30,
                    min: 0,
                        order: 1120,
                            text: ui_visual_bar2_barwidth,
                                type: slider,
                                    value: 5
    },
    visual_bar2_block_mode: {
        condition: visual_bar2_enabled.value,
            order: 1402.11,
                text: Enable Block Mode,
                    type: bool,
                        value: false
    },
    visual_bar2_block_mode_height: {
        condition: visual_bar2_enabled.value && visual_bar2_block_mode.value,
            editable: true,
                max: 100,
                    min: 1,
                        order: 1402.12,
                            text: Block Height,
                                type: slider,
                                    value: 20
    },
    visual_bar2_block_mode_line: {
        condition: visual_bar2_enabled.value,
            order: 1402.1,
                text: _________________________________,
                    value: null
    },
    visual_bar2_block_mode_line_height: {
        condition: visual_bar2_enabled.value && visual_bar2_block_mode.value,
            editable: true,
                max: 10,
                    min: 1,
                        order: 1402.13,
                            text: Line Height,
                                type: slider,
                                    value: 5
    },
    visual_bar2_borderalpha: {
        condition: visual_bar2_enableborder.value && visual_bar2_enabled.value,
            max: 100,
                min: 0,
                    order: 1330,
                        text: ui_visual_bar2_borderalpha,
                            type: slider,
                                value: 100
    },
    visual_bar2_bordercolor: {
        condition: visual_bar2_enableborder.value && visual_bar2_enabled.value,
            order: 1340,
                text: ui_visual_bar2_bordercolor,
                    type: color,
                        value: 0.5 0.5 0.5
    },
    visual_bar2_borderwidth: {
        condition: visual_bar2_enableborder.value && visual_bar2_enabled.value,
            editable: true,
                max: 10,
                    min: 1,
                        order: 1320,
                            text: ui_visual_bar2_borderwidth,
                                type: slider,
                                    value: 4
    },
    visual_bar2_capstype: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 0,
            options: [
                {
                    label: ui_visual_bar2_capstype_0,
                    value: 0
                },
                {
                    label: ui_visual_bar2_capstype_1,
                    value: 1
                },
                {
                    label: ui_visual_bar2_capstype_2,
                    value: 2
                }
            ],
                order: 1350,
                    text: ui_visual_bar2_capstype,
                        type: combo,
                            value: 1
    },
    visual_bar2_channel: {
        condition: visual_bar2_enabled.value,
            options: [
                {
                    label: ui_visual_bar2_channel_0,
                    value: STEREO
                },
                {
                    label: ui_visual_bar2_channel_1,
                    value: LEFT
                },
                {
                    label: ui_visual_bar2_channel_2,
                    value: RIGHT
                }
            ],
                order: 1106,
                    text: ui_visual_bar2_channel,
                        type: combo,
                            value: RIGHT
    },
    visual_bar2_channel_mirror: {
        condition: visual_bar2_enabled.value,
            order: 1108,
                text: ui_visual_bar2_channel_mirror,
                    type: bool,
                        value: false
    },
    visual_bar2_channel_option: {
        condition: visual_bar2_enabled.value,
            options: [
                {
                    label: ui_visual_bar2_channel_option_0,
                    value: 0
                },
                {
                    label: ui_visual_bar2_channel_option_1,
                    value: 1
                },
                {
                    label: ui_visual_bar2_channel_option_2,
                    value: 2
                }
            ],
                order: 1107,
                    text: ui_visual_bar2_channel_option,
                        type: combo,
                            value: 1
    },
    visual_bar2_circle_arc: {
        condition: visual_bar2_circlemode.value === 1 && visual_bar2_enabled.value && visual_bar2_type.value == 0,
            editable: true,
                max: 360,
                    min: 0,
                        order: 1281,
                            text: Arc degrees,
                                type: slider,
                                    value: 360
    },
    visual_bar2_circlemode: {
        condition: visual_bar2_enabled.value,
            options: [
                {
                    label: ui_visual_bar2_circlemode_0,
                    value: 0
                },
                {
                    label: ui_visual_bar2_circlemode_1,
                    value: 1
                }
            ],
                order: 1270,
                    text: ui_visual_bar2_circlemode,
                        type: combo,
                            value: 0
    },
    visual_bar2_circlesize: {
        condition: visual_bar2_circlemode.value === 1 && visual_bar2_enabled.value,
            editable: true,
                max: 500,
                    min: 0,
                        order: 1280,
                            text: ui_visual_bar2_circlesize,
                                type: slider,
                                    value: 500
    },
    visual_bar2_color: {
        condition: visual_bar2_enablecolor.value && visual_bar2_enabled.value,
            order: 1150,
                text: ui_visual_bar2_color,
                    type: color,
                        value: 0.7529411764705882 0.7529411764705882 0.7529411764705882
    },
    visual_bar2_enableborder: {
        condition: visual_bar2_enabled.value,
            order: 1310,
                text: ui_visual_bar2_enableborder,
                    type: bool,
                        value: true
    },
    visual_bar2_enablecolor: {
        condition: visual_bar2_enabled.value,
            order: 1140,
                text: ui_visual_bar2_enablecolor,
                    type: bool,
                        value: true
    },
    visual_bar2_enabled: {
        condition: visual_bar2_enabled.value ? visual_bar2_enabled.text = visual_bar2_enabled.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : visual_bar2_enabled.text = visual_bar2_enabled.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 1100,
                text: <hr><span class='ugcDanger'>Bar Visualizer 2 : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    visual_bar2_enablerotation: {
        condition: visual_bar2_enabled.value,
            order: 1290,
                text: ui_visual_bar2_enablerotation,
                    type: bool,
                        value: false
    },
    visual_bar2_heightlimit: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 1200,
                            text: ui_visual_bar2_heightlimit,
                                type: slider,
                                    value: 0
    },
    visual_bar2_hideinactive: {
        condition: visual_bar2_enabled.value,
            order: 1180,
                text: ui_visual_bar2_hideinactive,
                    type: bool,
                        value: false
    },
    visual_bar2_hideinactivefadeduration: {
        condition: visual_bar2_hideinactive.value && visual_bar2_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 1186,
                            text: ui_visual_bar2_hideinactivefadeduration,
                                type: slider,
                                    value: 2
    },
    visual_bar2_hideinactivetimeout: {
        condition: visual_bar2_hideinactive.value && visual_bar2_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 1185,
                            text: ui_visual_bar2_hideinactivetimeout,
                                type: slider,
                                    value: 1
    },
    visual_bar2_holdindicator: {
        condition: visual_bar2_enabled.value,
            order: 1401.01,
                text: Hold Indicator,
                    type: bool,
                        value: false
    },
    visual_bar2_holdindicator_color: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            order: 1401.1,
                text: Color,
                    type: color,
                        value: 1 0 0
    },
    visual_bar2_holdindicator_height: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            editable: true,
                max: 50,
                    min: 0,
                        order: 1401.3,
                            text: Height,
                                type: slider,
                                    value: 5
    },
    visual_bar2_holdindicator_holdDuration: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            editable: true,
                max: 1000,
                    min: 0,
                        order: 1401.5,
                            text: Hold Duration (ms),
                                type: slider,
                                    value: 5
    },
    visual_bar2_holdindicator_line: {
        condition: visual_bar2_enabled.value,
            order: 1401,
                text: _________________________________,
                    value: null
    },
    visual_bar2_holdindicator_resetDuration: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            editable: true,
                max: 5000,
                    min: 0,
                        order: 1401.6,
                            text: Reset Duration (ms),
                                type: slider,
                                    value: 1000
    },
    visual_bar2_holdindicator_resetSmooth: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            options: [
                {
                    label: CircIn,
                    value: circIn
                },
                {
                    label: CircInOut,
                    value: circInOut
                },
                {
                    label: CircOut,
                    value: circOut
                },
                {
                    label: CubicIn,
                    value: cubicIn
                },
                {
                    label: CubicInOut,
                    value: cubicInOut
                },
                {
                    label: CubicOut,
                    value: cubicOut
                }
            ],
                order: 1401.7,
                    text: Reset Smooth Type,
                        type: combo,
                            value: cubicIn
    },
    visual_bar2_holdindicator_width: {
        condition: visual_bar2_enabled.value && visual_bar2_holdindicator.value,
            editable: true,
                max: 100,
                    min: 0,
                        order: 1401.2,
                            text: Width,
                                type: slider,
                                    value: 10
    },
    visual_bar2_horizontalposition: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 1170,
                            text: ui_visual_bar2_horizontalposition,
                                type: slider,
                                    value: -38
    },
    visual_bar2_horizontalsplit: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 0,
            order: 1220,
                text: ui_visual_bar2_horizontalsplit,
                    type: bool,
                        value: false
    },
    visual_bar2_horizontalsplitalpha: {
        condition: visual_bar2_enabled.value && visual_bar2_horizontalsplit.value,
            editable: false,
                max: 100,
                    min: 0,
                        order: 1230,
                            text: ui_visual_bar2_horizontalsplitalpha,
                                type: slider,
                                    value: 50
    },
    visual_bar2_numberbars: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 128,
                    min: 1,
                        order: 1105,
                            text: ui_visual_bar2_numberbars,
                                type: slider,
                                    value: 52
    },
    visual_bar2_reverserainbow: {
        condition: !visual_bar2_enablecolor.value && visual_bar2_enabled.value,
            order: 1145,
                text: ui_visual_bar2_reverserainbow,
                    type: bool,
                        value: false
    },
    visual_bar2_rotatecolor: {
        condition: !visual_bar2_enablecolor.value && visual_bar2_enabled.value,
            order: 1146,
                text: ui_visual_bar2_rotatecolor,
                    type: bool,
                        value: false
    },
    visual_bar2_rotatecolorl2r: {
        condition: !visual_bar2_enablecolor.value && visual_bar2_rotatecolor.value && visual_bar2_enabled.value,
            order: 1147,
                text: ui_visual_bar2_rotatecolorl2r,
                    type: bool,
                        value: false
    },
    visual_bar2_rotatecolorspeed: {
        condition: visual_bar2_rotatecolor.value && visual_bar2_enabled.value,
            editable: true,
                max: 30,
                    min: 1,
                        order: 1148,
                            text: ui_visual_bar2_rotatecolorspeed,
                                type: slider,
                                    value: 10
    },
    visual_bar2_rotation: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 360,
                    min: 0,
                        order: 1190,
                            text: ui_visual_bar2_rotation,
                                type: slider,
                                    value: 180
    },
    visual_bar2_rotationccw: {
        condition: visual_bar2_enabled.value && visual_bar2_enablerotation.value,
            order: 1295,
                text: ui_visual_bar2_rotationccw,
                    type: bool,
                        value: true
    },
    visual_bar2_rotationspeed: {
        condition: visual_bar2_enabled.value && visual_bar2_enablerotation.value,
            editable: true,
                max: 60,
                    min: 10,
                        order: 1300,
                            text: ui_visual_bar2_rotationspeed,
                                type: slider,
                                    value: 30
    },
    visual_bar2_spline_empty_endpoints: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 1,
            order: 1273,
                text: Add endpoints,
                    type: bool,
                        value: false
    },
    visual_bar2_spline_fill_alpha: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 1,
            max: 100,
                min: 0,
                    order: 1274,
                        text: Alpha,
                            type: slider,
                                value: 100
    },
    visual_bar2_spline_layers: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 1,
            options: [
                {
                    label: 1,
                    value: 1
                },
                {
                    label: 2,
                    value: 2
                },
                {
                    label: 3,
                    value: 3
                },
                {
                    label: 4,
                    value: 4
                },
                {
                    label: 5,
                    value: 5
                }
            ],
                order: 1272,
                    text: # Layers,
                        type: combo,
                            value: 1
    },
    visual_bar2_strength: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 1110,
                            text: ui_visual_bar2_strength,
                                type: slider,
                                    value: 90
    },
    visual_bar2_title: {
        condition: visual_bar2_enabled.value,
            order: 1101,
                text: ui_visual_bar2_title,
                    value: null
    },
    visual_bar2_type: {
        condition: visual_bar2_enabled.value,
            options: [
                {
                    label: Bars,
                    value: 0
                },
                {
                    label: Spline,
                    value: 1
                }
            ],
                order: 1271,
                    text: Draw type,
                        type: combo,
                            value: 0
    },
    visual_bar2_vertical_gradient: {
        condition: visual_bar2_enabled.value && !visual_bar2_enablecolor.value,
            order: 1151,
                text: Vertical Gradient,
                    type: bool,
                        value: false
    },
    visual_bar2_vertical_gradient_length: {
        condition: visual_bar2_enabled.value && visual_bar2_vertical_gradient.value && !visual_bar2_enablecolor.value,
            editable: true,
                max: 1000,
                    min: 0,
                        order: 1151,
                            text: Vertical Gradient Height,
                                type: slider,
                                    value: 200
    },
    visual_bar2_verticalgrowthoffset: {
        condition: visual_bar2_enabled.value && visual_bar2_type.value == 0,
            editable: true,
                max: 200,
                    min: 0,
                        order: 1210,
                            text: ui_visual_bar2_verticalgrowthoffset,
                                type: slider,
                                    value: 0
    },
    visual_bar2_verticalposition: {
        condition: visual_bar2_enabled.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 1160,
                            text: ui_visual_bar2_verticalposition,
                                type: slider,
                                    value: -99.800003
    },
    visual_bar2_zindex: {
        condition: visual_bar2_enabled.value,
            options: [
                {
                    label: Layer 1,
                    value: 0
                },
                {
                    label: Layer 2,
                    value: 1
                },
                {
                    label: Layer 3,
                    value: 2
                },
                {
                    label: Layer 4,
                    value: 3
                }
            ],
                order: 1400,
                    text: Layer,
                        type: combo,
                            value: 2
    },
    visual_bar_alpha: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 100,
                    min: 10,
                        order: 155,
                            text: ui_visual_bar_alpha,
                                type: slider,
                                    value: 100
    },
    visual_bar_bargap: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 0,
            editable: true,
                max: 50,
                    min: 0,
                        order: 130,
                            text: ui_visual_bar_bargap,
                                type: slider,
                                    value: 20
    },
    visual_bar_barwidth: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 0,
            editable: true,
                max: 30,
                    min: 0,
                        order: 120,
                            text: ui_visual_bar_barwidth,
                                type: slider,
                                    value: 5
    },
    visual_bar_block_mode: {
        condition: visual_bar_enabled.value,
            order: 402.11,
                text: Enable Block Mode,
                    type: bool,
                        value: false
    },
    visual_bar_block_mode_height: {
        condition: visual_bar_enabled.value && visual_bar_block_mode.value,
            editable: true,
                max: 100,
                    min: 1,
                        order: 402.12,
                            text: Block Height,
                                type: slider,
                                    value: 20
    },
    visual_bar_block_mode_line: {
        condition: visual_bar_enabled.value,
            order: 402.1,
                text: _________________________________,
                    value: null
    },
    visual_bar_block_mode_line_height: {
        condition: visual_bar_enabled.value && visual_bar_block_mode.value,
            editable: true,
                max: 10,
                    min: 1,
                        order: 402.13,
                            text: Line Height,
                                type: slider,
                                    value: 5
    },
    visual_bar_borderalpha: {
        condition: visual_bar_enableborder.value && visual_bar_enabled.value,
            max: 100,
                min: 0,
                    order: 330,
                        text: ui_visual_bar_borderalpha,
                            type: slider,
                                value: 100
    },
    visual_bar_bordercolor: {
        condition: visual_bar_enableborder.value && visual_bar_enabled.value,
            order: 340,
                text: ui_visual_bar_bordercolor,
                    type: color,
                        value: 0.5 0.5 0.5
    },
    visual_bar_borderwidth: {
        condition: visual_bar_enableborder.value && visual_bar_enabled.value,
            editable: true,
                max: 10,
                    min: 1,
                        order: 320,
                            text: ui_visual_bar_borderwidth,
                                type: slider,
                                    value: 4
    },
    visual_bar_capstype: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 0,
            options: [
                {
                    label: ui_visual_bar_capstype_0,
                    value: 0
                },
                {
                    label: ui_visual_bar_capstype_1,
                    value: 1
                },
                {
                    label: ui_visual_bar_capstype_2,
                    value: 2
                }
            ],
                order: 350,
                    text: ui_visual_bar_capstype,
                        type: combo,
                            value: 1
    },
    visual_bar_channel: {
        condition: visual_bar_enabled.value,
            options: [
                {
                    label: ui_visual_bar_channel_0,
                    value: STEREO
                },
                {
                    label: ui_visual_bar_channel_1,
                    value: LEFT
                },
                {
                    label: ui_visual_bar_channel_2,
                    value: RIGHT
                }
            ],
                order: 106,
                    text: ui_visual_bar_channel,
                        type: combo,
                            value: STEREO
    },
    visual_bar_channel_mirror: {
        condition: visual_bar_enabled.value,
            order: 108,
                text: ui_visual_bar_channel_mirror,
                    type: bool,
                        value: false
    },
    visual_bar_channel_option: {
        condition: visual_bar_enabled.value,
            options: [
                {
                    label: ui_visual_bar_channel_option_0,
                    value: 0
                },
                {
                    label: ui_visual_bar_channel_option_1,
                    value: 1
                },
                {
                    label: ui_visual_bar_channel_option_2,
                    value: 2
                }
            ],
                order: 107,
                    text: ui_visual_bar_channel_option,
                        type: combo,
                            value: 1
    },
    visual_bar_circle_arc: {
        condition: visual_bar_circlemode.value === 1 && visual_bar_enabled.value && visual_bar_type.value == 0,
            editable: true,
                max: 360,
                    min: 0,
                        order: 281,
                            text: Arc degrees,
                                type: slider,
                                    value: 360
    },
    visual_bar_circlemode: {
        condition: visual_bar_enabled.value,
            options: [
                {
                    label: ui_visual_bar_circlemode_0,
                    value: 0
                },
                {
                    label: ui_visual_bar_circlemode_1,
                    value: 1
                }
            ],
                order: 270,
                    text: ui_visual_bar_circlemode,
                        type: combo,
                            value: 0
    },
    visual_bar_circlesize: {
        condition: visual_bar_circlemode.value === 1 && visual_bar_enabled.value,
            editable: true,
                max: 500,
                    min: 0,
                        order: 280,
                            text: ui_visual_bar_circlesize,
                                type: slider,
                                    value: 200
    },
    visual_bar_color: {
        condition: visual_bar_enablecolor.value && visual_bar_enabled.value,
            order: 150,
                text: ui_visual_bar_color,
                    type: color,
                        value: 0.7529411764705882 0.7529411764705882 0.7529411764705882
    },
    visual_bar_enableborder: {
        condition: visual_bar_enabled.value,
            order: 310,
                text: ui_visual_bar_enableborder,
                    type: bool,
                        value: false
    },
    visual_bar_enablecolor: {
        condition: visual_bar_enabled.value,
            order: 140,
                text: ui_visual_bar_enablecolor,
                    type: bool,
                        value: true
    },
    visual_bar_enabled: {
        condition: visual_bar_enabled.value ? visual_bar_enabled.text = visual_bar_enabled.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : visual_bar_enabled.text = visual_bar_enabled.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 100,
                text: <hr><span class='ugcDanger'>Bar Visualizer 1 : Disabled</span><hr>,
                    type: bool,
                        value: true
    },
    visual_bar_enablerotation: {
        condition: visual_bar_enabled.value,
            order: 290,
                text: ui_visual_bar_enablerotation,
                    type: bool,
                        value: false
    },
    visual_bar_heightlimit: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 200,
                    min: 0,
                        order: 200,
                            text: ui_visual_bar_heightlimit,
                                type: slider,
                                    value: 0
    },
    visual_bar_hideinactive: {
        condition: visual_bar_enabled.value,
            order: 180,
                text: ui_visual_bar_hideinactive,
                    type: bool,
                        value: true
    },
    visual_bar_hideinactivefadeduration: {
        condition: visual_bar_hideinactive.value && visual_bar_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 186,
                            text: ui_visual_bar_hideinactivefadeduration,
                                type: slider,
                                    value: 1
    },
    visual_bar_hideinactivetimeout: {
        condition: visual_bar_hideinactive.value && visual_bar_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 185,
                            text: ui_visual_bar_hideinactivetimeout,
                                type: slider,
                                    value: 0
    },
    visual_bar_holdindicator: {
        condition: visual_bar_enabled.value,
            order: 401.01,
                text: Hold Indicator,
                    type: bool,
                        value: false
    },
    visual_bar_holdindicator_color: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            order: 401.1,
                text: Color,
                    type: color,
                        value: 1 0 0
    },
    visual_bar_holdindicator_height: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            editable: true,
                max: 50,
                    min: 0,
                        order: 401.3,
                            text: Height,
                                type: slider,
                                    value: 5
    },
    visual_bar_holdindicator_holdDuration: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            editable: true,
                max: 1000,
                    min: 0,
                        order: 401.5,
                            text: Hold Duration (ms),
                                type: slider,
                                    value: 5
    },
    visual_bar_holdindicator_line: {
        condition: visual_bar_enabled.value,
            order: 401,
                text: _________________________________,
                    value: null
    },
    visual_bar_holdindicator_resetDuration: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            editable: true,
                max: 5000,
                    min: 0,
                        order: 401.6,
                            text: Reset Duration (ms),
                                type: slider,
                                    value: 1000
    },
    visual_bar_holdindicator_resetSmooth: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            options: [
                {
                    label: CircIn,
                    value: circIn
                },
                {
                    label: CircInOut,
                    value: circInOut
                },
                {
                    label: CircOut,
                    value: circOut
                },
                {
                    label: CubicIn,
                    value: cubicIn
                },
                {
                    label: CubicInOut,
                    value: cubicInOut
                },
                {
                    label: CubicOut,
                    value: cubicOut
                }
            ],
                order: 401.7,
                    text: Reset Smooth Type,
                        type: combo,
                            value: cubicIn
    },
    visual_bar_holdindicator_width: {
        condition: visual_bar_enabled.value && visual_bar_holdindicator.value,
            editable: true,
                max: 100,
                    min: 0,
                        order: 401.2,
                            text: Width,
                                type: slider,
                                    value: 10
    },
    visual_bar_horizontalposition: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 170,
                            text: ui_visual_bar_horizontalposition,
                                type: slider,
                                    value: -40
    },
    visual_bar_horizontalsplit: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 0,
            order: 220,
                text: ui_visual_bar_horizontalsplit,
                    type: bool,
                        value: false
    },
    visual_bar_horizontalsplitalpha: {
        condition: visual_bar_enabled.value && visual_bar_horizontalsplit.value,
            editable: false,
                max: 100,
                    min: 0,
                        order: 230,
                            text: ui_visual_bar_horizontalsplitalpha,
                                type: slider,
                                    value: 50
    },
    visual_bar_numberbars: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 128,
                    min: 1,
                        order: 105,
                            text: ui_visual_bar_numberbars,
                                type: slider,
                                    value: 54
    },
    visual_bar_reverserainbow: {
        condition: !visual_bar_enablecolor.value && visual_bar_enabled.value,
            order: 145,
                text: ui_visual_bar_reverserainbow,
                    type: bool,
                        value: false
    },
    visual_bar_rotatecolor: {
        condition: !visual_bar_enablecolor.value && visual_bar_enabled.value,
            order: 146,
                text: ui_visual_bar_rotatecolor,
                    type: bool,
                        value: false
    },
    visual_bar_rotatecolorl2r: {
        condition: !visual_bar_enablecolor.value && visual_bar_rotatecolor.value && visual_bar_enabled.value,
            order: 147,
                text: ui_visual_bar_rotatecolorl2r,
                    type: bool,
                        value: false
    },
    visual_bar_rotatecolorspeed: {
        condition: !visual_bar_enablecolor.value && visual_bar_rotatecolor.value && visual_bar_enabled.value,
            editable: true,
                max: 30,
                    min: 1,
                        order: 148,
                            text: ui_visual_bar_rotatecolorspeed,
                                type: slider,
                                    value: 10
    },
    visual_bar_rotation: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 360,
                    min: 0,
                        order: 190,
                            text: ui_visual_bar_rotation,
                                type: slider,
                                    value: 0
    },
    visual_bar_rotationccw: {
        condition: visual_bar_enabled.value && visual_bar_enablerotation.value,
            order: 295,
                text: ui_visual_bar_rotationccw,
                    type: bool,
                        value: false
    },
    visual_bar_rotationspeed: {
        condition: visual_bar_enabled.value && visual_bar_enablerotation.value,
            editable: true,
                max: 60,
                    min: 10,
                        order: 300,
                            text: ui_visual_bar_rotationspeed,
                                type: slider,
                                    value: 30
    },
    visual_bar_spline_empty_endpoints: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 1,
            order: 273,
                text: Add endpoints,
                    type: bool,
                        value: false
    },
    visual_bar_spline_fill_alpha: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 1,
            max: 100,
                min: 0,
                    order: 274,
                        text: Alpha,
                            type: slider,
                                value: 50
    },
    visual_bar_spline_layers: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 1,
            options: [
                {
                    label: 1,
                    value: 1
                },
                {
                    label: 2,
                    value: 2
                },
                {
                    label: 3,
                    value: 3
                },
                {
                    label: 4,
                    value: 4
                },
                {
                    label: 5,
                    value: 5
                }
            ],
                order: 272,
                    text: # Layers,
                        type: combo,
                            value: 1
    },
    visual_bar_strength: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 110,
                            text: ui_visual_bar_strength,
                                type: slider,
                                    value: 100
    },
    visual_bar_title: {
        condition: visual_bar_enabled.value,
            order: 101,
                text: ui_visual_bar_title,
                    value: null
    },
    visual_bar_type: {
        condition: visual_bar_enabled.value,
            options: [
                {
                    label: Bars,
                    value: 0
                },
                {
                    label: Spline,
                    value: 1
                }
            ],
                order: 271,
                    text: Draw type,
                        type: combo,
                            value: 1
    },
    visual_bar_vertical_gradient: {
        condition: visual_bar_enabled.value && !visual_bar_enablecolor.value,
            order: 151.00001,
                text: Vertical Gradient,
                    type: bool,
                        value: false
    },
    visual_bar_vertical_gradient_length: {
        condition: visual_bar_enabled.value && visual_bar_vertical_gradient.value && !visual_bar_enablecolor.value,
            editable: true,
                max: 1000,
                    min: 0,
                        order: 151.00001,
                            text: Vertical Gradient Height,
                                type: slider,
                                    value: 200
    },
    visual_bar_verticalgrowthoffset: {
        condition: visual_bar_enabled.value && visual_bar_type.value == 0,
            editable: true,
                max: 200,
                    min: 0,
                        order: 210,
                            text: ui_visual_bar_verticalgrowthoffset,
                                type: slider,
                                    value: 0
    },
    visual_bar_verticalposition: {
        condition: visual_bar_enabled.value,
            editable: true,
                max: 100,
                    min: -100,
                        order: 160,
                            text: ui_visual_bar_verticalposition,
                                type: slider,
                                    value: 95
    },
    visual_bar_zindex: {
        condition: visual_bar_enabled.value,
            options: [
                {
                    label: Layer 1,
                    value: 0
                },
                {
                    label: Layer 2,
                    value: 1
                },
                {
                    label: Layer 3,
                    value: 2
                },
                {
                    label: Layer 4,
                    value: 3
                }
            ],
                order: 400,
                    text: Layer,
                        type: combo,
                            value: 1
    },
    visual_gradient: {
        condition: visual_bar_enabled.value && !visual_bar_enablecolor.value,
            order: 151.0001,
                text: ui_visual_gradient,
                    type: bool,
                        value: false
    },
    visual_gradient_beginstrip: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            order: 151.0001,
                text: ui_visual_gradient_beginstrip,
                    value: null
    },
    visual_gradient_color_1: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            order: 151.0003,
                text: ui_visual_gradient_color_1,
                    type: color,
                        value: 1 1 1
    },
    visual_gradient_color_10: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 10,
            order: 151.0021,
                text: ui_visual_gradient_color_10,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_10_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 10,
            max: 100,
                min: 0,
                    order: 151.0022,
                        text: ui_visual_gradient_color_10_position,
                            type: slider,
                                value: 100
    },
    visual_gradient_color_1_position: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            max: 100,
                min: 0,
                    order: 151.0004,
                        text: ui_visual_gradient_color_1_position,
                            type: slider,
                                value: 0
    },
    visual_gradient_color_2: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            order: 151.0005,
                text: ui_visual_gradient_color_2,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_2_position: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            max: 100,
                min: 0,
                    order: 151.0006,
                        text: ui_visual_gradient_color_2_position,
                            type: slider,
                                value: 20
    },
    visual_gradient_color_3: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 3,
            order: 151.0007,
                text: ui_visual_gradient_color_3,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_3_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 3,
            max: 100,
                min: 0,
                    order: 151.0008,
                        text: ui_visual_gradient_color_3_position,
                            type: slider,
                                value: 30
    },
    visual_gradient_color_4: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 4,
            order: 151.0009,
                text: ui_visual_gradient_color_4,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_4_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 4,
            max: 100,
                min: 0,
                    order: 151.001,
                        text: ui_visual_gradient_color_4_position,
                            type: slider,
                                value: 40
    },
    visual_gradient_color_5: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 5,
            order: 151.0011,
                text: ui_visual_gradient_color_5,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_5_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 5,
            max: 100,
                min: 0,
                    order: 151.0012,
                        text: ui_visual_gradient_color_5_position,
                            type: slider,
                                value: 50
    },
    visual_gradient_color_6: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 6,
            order: 151.0013,
                text: ui_visual_gradient_color_6,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_6_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 6,
            max: 100,
                min: 0,
                    order: 151.0014,
                        text: ui_visual_gradient_color_6_position,
                            type: slider,
                                value: 60
    },
    visual_gradient_color_7: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 7,
            order: 151.0015,
                text: ui_visual_gradient_color_7,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_7_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 7,
            max: 100,
                min: 0,
                    order: 151.0016,
                        text: ui_visual_gradient_color_7_position,
                            type: slider,
                                value: 70
    },
    visual_gradient_color_8: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 8,
            order: 151.0017,
                text: ui_visual_gradient_color_8,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_8_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 8,
            max: 100,
                min: 0,
                    order: 151.0018,
                        text: ui_visual_gradient_color_8_position,
                            type: slider,
                                value: 80
    },
    visual_gradient_color_9: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 9,
            order: 151.0019,
                text: ui_visual_gradient_color_9,
                    type: color,
                        value: 1 0 0
    },
    visual_gradient_color_9_position: {
        condition: visual_bar_enabled.value && visual_gradient.value && visual_gradient_number.value >= 9,
            max: 100,
                min: 0,
                    order: 151.002,
                        text: ui_visual_gradient_color_9_position,
                            type: slider,
                                value: 90
    },
    visual_gradient_endstrip: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            order: 151.01,
                text: ui_visual_gradient_endstrip,
                    value: null
    },
    visual_gradient_number: {
        condition: visual_bar_enabled.value && visual_gradient.value,
            options: [
                {
                    label: ui_visual_gradient_number_0,
                    value: 2
                },
                {
                    label: ui_visual_gradient_number_1,
                    value: 3
                },
                {
                    label: ui_visual_gradient_number_2,
                    value: 4
                },
                {
                    label: ui_visual_gradient_number_3,
                    value: 5
                },
                {
                    label: ui_visual_gradient_number_4,
                    value: 6
                },
                {
                    label: ui_visual_gradient_number_5,
                    value: 7
                },
                {
                    label: ui_visual_gradient_number_6,
                    value: 8
                },
                {
                    label: ui_visual_gradient_number_7,
                    value: 9
                },
                {
                    label: ui_visual_gradient_number_8,
                    value: 10
                }
            ],
                order: 151.0002,
                    text: ui_visual_gradient_number,
                        type: combo,
                            value: 2
    },
    visualizer_effect: {
        condition: visualizer_enabled.value ? visualizer_effect.value ? visualizer_effect.text = visualizer_effect.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : visualizer_effect.text = visualizer_effect.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger') : false,
            order: 8500,
                text: <hr><span class='ugcDanger'>Visualizer Effects : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    visualizer_effect_bassshake: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8517,
                text: Shake on Bass,
                    type: bool,
                        value: false
    },
    visualizer_effect_bassshake_invert: {
        condition: visualizer_effect_bassshake.value && visualizer_effect.value && visualizer_enabled.value,
            order: 8519,
                text: Invert movement,
                    type: bool,
                        value: false
    },
    visualizer_effect_bassshakestrength: {
        condition: visualizer_effect_bassshake.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8518,
                            text: Shake strength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_bluronbeat: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8510,
                text: ui_visualizer_effect_bluronbeat,
                    type: bool,
                        value: null
    },
    visualizer_effect_bluronbeatstrength: {
        condition: visualizer_effect_bluronbeat.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8515,
                            text: ui_visualizer_effect_bluronbeatstrength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_bounceonbeat: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8530,
                text: ui_visualizer_effect_bounceonbeat,
                    type: bool,
                        value: false
    },
    visualizer_effect_bounceonbeatstrength: {
        condition: visualizer_effect_bounceonbeat.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8535,
                            text: ui_visualizer_effect_bounceonbeatstrength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_hilightonbeat: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8520,
                text: ui_visualizer_effect_hilightonbeat,
                    type: bool,
                        value: null
    },
    visualizer_effect_hilightonbeatstrength: {
        condition: visualizer_effect_hilightonbeat.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8525,
                            text: ui_visualizer_effect_hilightonbeatstrength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_hue: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8600,
                text: ui_visualizer_effect_hue,
                    type: bool,
                        value: false
    },
    visualizer_effect_huerotate: {
        condition: visualizer_effect_hue.value && visualizer_effect.value && visualizer_enabled.value,
            max: 360,
                min: 0,
                    order: 8605,
                        text: ui_visualizer_effect_huerotate,
                            type: slider,
                                value: 0
    },
    visualizer_effect_huerotation: {
        condition: visualizer_effect_hue.value && visualizer_effect.value && visualizer_enabled.value,
            order: 8610,
                text: ui_visualizer_effect_huerotation,
                    type: bool,
                        value: false
    },
    visualizer_effect_huerotationspeed: {
        condition: visualizer_effect_hue.value && visualizer_effect_huerotation.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 30,
                    min: 1,
                        order: 8615,
                            text: ui_visualizer_effect_huerotationspeed,
                                type: slider,
                                    value: 10
    },
    visualizer_effect_hueshiftperm: {
        condition: visualizer_effect_hue.value && visualizer_effect.value && visualizer_enabled.value,
            order: 8630,
                text: ui_visualizer_effect_hueshiftperm,
                    type: bool,
                        value: false
    },
    visualizer_effect_hueshiftpermreset: {
        condition: visualizer_effect_hue.value && visualizer_effect.value && visualizer_enabled.value,
            order: 8640,
                text: ui_visualizer_effect_hueshiftpermreset,
                    type: bool,
                        value: false
    },
    visualizer_effect_hueshiftpermresetduration: {
        condition: visualizer_effect_hueshiftpermreset.value && visualizer_effect_hue.value && visualizer_effect_hueshiftperm.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 8650,
                            text: ui_visualizer_effect_hueshiftpermresetduration,
                                type: slider,
                                    value: 5
    },
    visualizer_effect_hueshiftpermresettimeout: {
        condition: visualizer_effect_hueshiftpermreset.value && visualizer_effect_hue.value && visualizer_effect_hueshiftperm.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 10,
                    min: 0,
                        order: 8645,
                            text: ui_visualizer_effect_hueshiftpermresettimeout,
                                type: slider,
                                    value: 1
    },
    visualizer_effect_hueshiftpermstrength: {
        condition: visualizer_effect_hue.value && visualizer_effect_hueshiftperm.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8635,
                            text: ui_visualizer_effect_hueshiftpermstrength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_hueshifttemp: {
        condition: visualizer_effect_hue.value && visualizer_effect.value && visualizer_enabled.value,
            order: 8620,
                text: ui_visualizer_effect_hueshifttemp,
                    type: bool,
                        value: false
    },
    visualizer_effect_hueshifttempstrength: {
        condition: visualizer_effect_hue.value && visualizer_effect_hueshifttemp.value && visualizer_effect.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 25,
                        order: 8625,
                            text: ui_visualizer_effect_hueshifttempstrength,
                                type: slider,
                                    value: 100
    },
    visualizer_effect_title: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8501,
                text: ui_visualizer_effect_title,
                    value: null
    },
    visualizer_enabled: {
        condition: visualizer_enabled.value ? visualizer_enabled.text = visualizer_enabled.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : visualizer_enabled.text = visualizer_enabled.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger'),
            order: 8000,
                text: <hr><span class='ugcDanger'>Visualizer Extra's : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    visualizer_equalizer: {
        condition: visualizer_enabled.value ? visualizer_equalizer.value ? visualizer_equalizer.text = visualizer_equalizer.text.replace('Disabled','Enabled').replace('ugcDanger','ugcSuccess') : visualizer_equalizer.text = visualizer_equalizer.text.replace('Enabled','Disabled').replace('ugcSuccess','ugcDanger') : false,
            order: 8200,
                text: <hr><span class='ugcDanger'>Equalizer : Disabled</span><hr>,
                    type: bool,
                        value: false
    },
    visualizer_equalizer_1: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8240,
                            text: ui_visualizer_equalizer_1,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_2: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8245,
                            text: ui_visualizer_equalizer_2,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_3: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8250,
                            text: ui_visualizer_equalizer_3,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_4: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8255,
                            text: ui_visualizer_equalizer_4,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_5: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8260,
                            text: ui_visualizer_equalizer_5,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_6: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8265,
                            text: ui_visualizer_equalizer_6,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_7: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8270,
                            text: ui_visualizer_equalizer_7,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_8: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8275,
                            text: ui_visualizer_equalizer_8,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_average: {
        condition: visualizer_equalizer_average_enabled.value && visualizer_equalizer.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8226,
                            text: Normalized Audio Height,
                                type: slider,
                                    value: 100
    },
    visualizer_equalizer_average_enabled: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            order: 8225,
                text: Normalize Audio,
                    type: bool,
                        value: false
    },
    visualizer_equalizer_title: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            order: 8201,
                text: ui_visualizer_equalizer_title,
                    value: null
    },
    visualizer_equalizer_use_for_bass: {
        condition: visualizer_equalizer.value && visualizer_enabled.value,
            order: 8220,
                text: Use EQ for effects,
                    type: bool,
                        value: false
    },
    visualizer_fpscounter: {
        condition: visualizer_enabled.value,
            order: 8100,
                text: ui_visualizer_fpscounter,
                    type: bool,
                        value: false
    },
    visualizer_glow: {
        condition: visualizer_effect.value && visualizer_enabled.value,
            order: 8502,
                text: ui_visualizer_glow,
                    type: bool,
                        value: false
    },
    visualizer_glowcolor: {
        condition: visualizer_effect.value && visualizer_glow.value && visualizer_enabled.value,
            order: 8504,
                text: ui_visualizer_glowcolor,
                    type: color,
                        value: 1 1 1
    },
    visualizer_glowsize: {
        condition: visualizer_effect.value && visualizer_glow.value && visualizer_enabled.value,
            editable: true,
                max: 20,
                    min: 1,
                        order: 8503,
                            text: ui_visualizer_glowsize,
                                type: slider,
                                    value: 10
    },
    visualizer_idleanimation: {
        condition: visualizer_idlestate.value && visualizer_enabled.value,
            order: 8045,
                text: ui_visualizer_idleanimation,
                    type: bool,
                        value: false
    },
    visualizer_idleignoreeffects: {
        condition: visualizer_idlestate.value && visualizer_idleanimation.value && visualizer_enabled.value,
            order: 8053,
                text: ui_visualizer_idleignoreeffects,
                    type: bool,
                        value: false
    },
    visualizer_idlemovementspeed: {
        condition: visualizer_idlestate.value && visualizer_idleanimation.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8055,
                            text: ui_visualizer_idlemovementspeed,
                                type: slider,
                                    value: 100
    },
    visualizer_idlestate: {
        condition: visualizer_enabled.value,
            order: 8042,
                text: ui_visualizer_idlestate,
                    type: bool,
                        value: false
    },
    visualizer_idlestrength: {
        condition: visualizer_idlestate.value && visualizer_idleanimation.value && visualizer_enabled.value,
            editable: true,
                max: 200,
                    min: 10,
                        order: 8052,
                            text: ui_visualizer_idlestrength,
                                type: slider,
                                    value: 100
    },
    visualizer_idletimeout: {
        condition: visualizer_idlestate.value && visualizer_enabled.value,
            editable: true,
                max: 20,
                    min: 1,
                        order: 8043,
                            text: ui_visualizer_idletimeout,
                                type: slider,
                                    value: 10
    },
    visualizer_showlog: {
        condition: visualizer_enabled.value,
            order: 8010,
                text: Show log window,
                    type: bool,
                        value: false
    },
    visualizer_smoothtime: {
        condition: visualizer_enabled.value,
            editable: true,
                max: 150,
                    min: 0,
                        order: 8020,
                            text: Audio Smooth Delay<br><small>default: 50ms</small>,
                                type: slider,
                                    value: 50
    },
    visualizer_title: {
        condition: visualizer_enabled.value,
            order: 8001,
                text: ui_visualizer_title,
                    value: null
    },
    wec_brs: {
        condition: wec_e.value,
            icon: fa-sun,
                max: 100,
                    min: 0,
                        order: -10,
                            text: ui_browse_properties_brightness,
                                type: slider,
                                    value: 50
    },
    wec_con: {
        condition: wec_e.value,
            icon: fa-adjust,
                max: 100,
                    min: 0,
                        order: -9,
                            text: ui_browse_properties_contrast,
                                type: slider,
                                    value: 50
    },
    wec_e: {
        order: -11,
            text: ui_browse_properties_show_color_options,
                type: bool,
                    value: false
    },
    wec_hue: {
        condition: wec_e.value,
            icon: fa-palette,
                max: 100,
                    min: 0,
                        order: -7,
                            text: ui_browse_properties_hue_shift,
                                type: slider,
                                    value: 50
    },
    wec_sa: {
        condition: wec_e.value,
            icon: fa-tint,
                max: 100,
                    min: 0,
                        order: -8,
                            text: ui_browse_properties_saturation,
                                type: slider,
                                    value: 50
    }
{
ui_background_color: 背景颜色,
				ui_background_effect: <hr><span class='ugcDanger'>启用效果</span><hr>,
				ui_background_effect_blur: 在节拍上启用模糊,
				ui_background_effect_blurstrength: 模糊力量,
				ui_background_effect_bounce: 在节拍上启用反弹,
				ui_background_effect_bouncestrength: 反弹力量,
				ui_background_effect_glitch: 启用毛刺,
				ui_background_effect_glitchbasslevel: 毛刺低音,
				ui_background_effect_glitcherrors: 毛刺错误,
				ui_background_effect_glitchopacity: 毛刺不透明,
				ui_background_effect_glitchstrength: 毛刺频率,
				ui_background_effect_hilight: 在节拍上启用高亮,
				ui_background_effect_hilightstrength: 高亮强度,
				ui_background_effect_huerotateenabled: 在拍子上启用（温度）色彩旋转,
				ui_background_effect_huerotatestrength: 色彩旋转的强度,
				ui_background_effect_huerotation: 启用颜色旋转,
				ui_background_effect_huerotationduration: 色移持续时间,
				ui_background_effect_hueshift: 启用低音色彩转换,
				ui_background_effect_hueshiftpermreset: 无声时重置烫发移位,
				ui_background_effect_hueshiftpermresetduration: 重置“淡入”持续时间（秒）,
				ui_background_effect_hueshiftpermresettimeout: 重置超时（秒）,
				ui_background_effect_hueshiftstrength: 低音色彩偏移强度,
				ui_background_effect_rocking: 启用摇摆（摇摆）,
				ui_background_effect_rockingspeed: 摇摆速度,
				ui_background_effect_rockingstrength: 摇摆力量,
				ui_background_enable: <hr><span class='ugcDanger'>启用背景</span><hr>,
				ui_background_huerotate: 色移,
				ui_background_idlepause: 可视化器空闲时暂停视频,
				ui_background_image: 背景图,
				ui_background_scaletofit: 缩放以适应（而不是覆盖）,
				ui_visual_bar_alpha.value: 显示图片的时间（秒）,
				ui_background_slideshowfadeduration: 淡入时间（秒）,
				ui_background_slideshowfolder: 图像文件夹,
				ui_background_title: <h4 class='ugcSuccess'>背景</ h4> <hr>,
				ui_background_type: 背景类型,
				ui_background_type_0: 颜色（无）,
				ui_background_type_1: 图片,
				ui_background_type_2: 幻灯片,
				ui_background_type_3: 视频,
				ui_background_videofile: 视频文件<br> <sub>仅支持.webm </ sub>,
				ui_background_videospeed: 播放速度（％）<br> <sub>低于50％且高于400％声音不起作用</ sub>,
				ui_background_videovolume: 音量（％）,
				ui_clock_analog_customface: 图片网址,
				ui_clock_analog_faces: 钟面,
				ui_clock_analog_faces_0: 正常1,
				ui_clock_analog_faces_1: 正常2,
				ui_clock_analog_faces_2: 正常3,
				ui_clock_analog_faces_3: 罗马风格,
				ui_clock_analog_faces_4: 运动手表,
				ui_clock_analog_faces_5: 自定义图像,
				ui_clock_analog_offsetx: 时钟X偏移量（％）,
				ui_clock_analog_offsety: 时钟Y偏移（％）,
				ui_clock_analog_scale: 时钟比例（％）,
				ui_clock_color: 时钟颜色,
				ui_clock_dateday: 显示天数,
				ui_clock_datelocale: 设置语言环境<br>（例如：NL-NL）,
				ui_clock_datemonth: 显示月份,
				ui_clock_dateweekday: 显示工作日,
				ui_clock_dateyear: 显示年份,
				ui_clock_digital_enable24h: 使用24小时制,
				ui_clock_digital_enableseconds: 显示秒,
				ui_clock_digital_enableseparator: 显示分隔符（s）,
				ui_clock_digital_offsetx: 时钟X偏移量（％）,
				ui_clock_digital_offsety: 时钟Y偏移（％）,
				ui_clock_digital_scale: 时钟比例（％）,
				ui_clock_enable: <hr><span class='ugcDanger'>启用时钟</span><hr>,
				ui_clock_enabledate: 显示日期,
				ui_clock_font: 文本字体,
				ui_clock_font_0: 数字,
				ui_clock_font_1: 宋体,
				ui_clock_font_2: Corsiva,
				ui_clock_font_3: 脚本,
				ui_clock_font_4: 濑越,
				ui_clock_font_5: 信使,
				ui_clock_font_6: 碰撞,
				ui_clock_title: <h4 class='ugcSuccess'>时钟</ h4> <hr>,
				ui_clock_type: 时钟类型,
				ui_clock_type_0: 数字（动画）,
				ui_clock_type_1: 数字（字体）,
				ui_clock_type_2: 类似物,
				ui_confetti_animationspeed: 动画速度,
				ui_confetti_burstsize: 爆裂大小,
				ui_confetti_customcolor: 五彩纸屑的颜色,
				ui_confetti_enable: <hr><span class='ugcDanger'>启用五彩纸屑爆发</span><hr>,
				ui_confetti_enablewhenidle: 视觉空闲时启用,
				ui_confetti_minsound: 最小声音级别,
				ui_confetti_offsetx: 水平偏移<br> <sub> 0 = center </ sub>,
				ui_confetti_offsety: 垂直偏移<br> <sub> 0 =中间</ sub>,
				ui_confetti_rotate: 启用旋转,
				ui_confetti_rotateduration: 旋转持续时间（秒）,
				ui_confetti_size: 五彩纸屑大小,
				ui_confetti_spawndelay: 生成延迟（ms）,
				ui_confetti_spawnradius: 生成半径,
				ui_confetti_title: <h4 class='ugcSuccess'>五彩纸屑</ h4> <hr>,
				ui_confetti_usecustomcolor: 使用自定义颜色,
				ui_grid_amountX: X轴上的'点',
				ui_grid_amountY: Y轴上的'点',
				ui_grid_color: 网格颜色,
				ui_grid_enabled: <hr><span class='ugcDanger'>启用动画网格</span><hr>,
				ui_grid_title: <h4 class='ugcSuccess'>动画网格</ h4> <hr>,
				ui_grid_visibility: 可见度（％）,
				ui_perpective_static: 设置静态透视图（忽略光标）,
				ui_perspective_distance: 透视距离（像素）,
				ui_perspective_enabled: <hr><span class='ugcDanger'>启用透视</span><hr>,
				ui_perspective_strength: 透视强度,
				ui_perspective_tilt_x: 倾斜X,
				ui_perspective_tilt_y: 倾斜Y,
				ui_perspective_title: <h4 class='ugcSuccess'>透视</ h4> <hr>,
				ui_visual2_gradient: 启用自定义渐变,
				ui_visual2_gradient_beginstrip: _________________________________,
				ui_visual2_gradient_color_1: 颜色1,
				ui_visual2_gradient_color_10: 颜色10,
				ui_visual2_gradient_color_10_position: 颜色10位置,
				ui_visual2_gradient_color_1_position: 颜色1位置,
				ui_visual2_gradient_color_2: 颜色2,
				ui_visual2_gradient_color_2_position: 颜色2位置,
				ui_visual2_gradient_color_3: 颜色3,
				ui_visual2_gradient_color_3_position: 颜色3位置,
				ui_visual2_gradient_color_4: 颜色4,
				ui_visual2_gradient_color_4_position: 颜色4位置,
				ui_visual2_gradient_color_5: 颜色5,
				ui_visual2_gradient_color_5_position: 颜色5位置,
				ui_visual2_gradient_color_6: 颜色6,
				ui_visual2_gradient_color_6_position: 颜色6位置,
				ui_visual2_gradient_color_7: 颜色7,
				ui_visual2_gradient_color_7_position: 颜色7位置,
				ui_visual2_gradient_color_8: 颜色8,
				ui_visual2_gradient_color_8_position: 颜色8位置,
				ui_visual2_gradient_color_9: 颜色9,
				ui_visual2_gradient_color_9_position: 颜色9位置,
				ui_visual2_gradient_endstrip: _________________________________,
				ui_visual2_gradient_number: # of colors,
				ui_visual2_gradient_number_0: 2种颜色,
				ui_visual2_gradient_number_1: 3种颜色,
				ui_visual2_gradient_number_2: 4种颜色,
				ui_visual2_gradient_number_3: 5种颜色,
				ui_visual2_gradient_number_4: 6种颜色,
				ui_visual2_gradient_number_5: 7种颜色,
				ui_visual2_gradient_number_6: 8种颜色,
				ui_visual2_gradient_number_7: 9种颜色,
				ui_visual2_gradient_number_8: 10种颜色,
				ui_visual_bar2_alpha: 视觉的不透明,
				ui_visual_bar2_bargap: 栅之间的间隙大小,
				ui_visual_bar2_barwidth: 栅宽度,
				ui_visual_bar2_borderalpha: 边界alpha,
				ui_visual_bar2_bordercolor: 边框颜色,
				ui_visual_bar2_borderwidth: 边框宽度,
				ui_visual_bar2_capstype: 线帽类型,
				ui_visual_bar2_capstype_0: 没有,
				ui_visual_bar2_capstype_1: 回合,
				ui_visual_bar2_capstype_2: 广场,
				ui_visual_bar2_channel: 声道,
				ui_visual_bar2_channel_0: 双声道,
				ui_visual_bar2_channel_1: 左,
				ui_visual_bar2_channel_2: 右,
				ui_visual_bar2_channel_mirror: 镜像声道数据,
				ui_visual_bar2_channel_option: 声道渲染,
				ui_visual_bar2_channel_option_0: 普通,
				ui_visual_bar2_channel_option_1: 映射,
				ui_visual_bar2_channel_option_2: 重复,
				ui_visual_bar2_circlemode: 可视模式,
				ui_visual_bar2_circlemode_0: 正常,
				ui_visual_bar2_circlemode_1: 圈,
				ui_visual_bar2_circlesize: 圆圈大小,
				ui_visual_bar2_color: 视觉颜色,
				ui_visual_bar2_enableborder: 启用边框,
				ui_visual_bar2_enablecolor: 使用自定义颜色,
				ui_visual_bar2_enabled: <hr><span class='ugcDanger'> Bar Visualizer 2已启用</span><hr>,
				ui_visual_bar2_enablerotation: 启用旋转,
				ui_visual_bar2_heightlimit: 身高限制<br> <sub> 0 =禁用</ sub>,
				ui_visual_bar2_hideinactive: 当没有声音时隐藏,
				ui_visual_bar2_hideinactivefadeduration: 无效淡入持续时间（秒）,
				ui_visual_bar2_hideinactivetimeout: 无效等待时间（秒）,
				ui_visual_bar2_horizontalposition: 水平偏移（％）,
				ui_visual_bar2_horizontalsplit: 启用拆分,
				ui_visual_bar2_horizontalsplitalpha: 阿尔法超越分裂,
				ui_visual_bar2_numberbars: 栅的数量,
				ui_visual_bar2_reverserainbow: 反转彩虹的颜色,
				ui_visual_bar2_rotatecolor: 旋转彩虹的颜色,
				ui_visual_bar2_rotatecolorl2r: 反转旋转颜色,
				ui_visual_bar2_rotatecolorspeed: 彩色旋转速度,
				ui_visual_bar2_rotation: 旋转（度）,
				ui_visual_bar2_rotationccw: 逆时针旋转,
				ui_visual_bar2_rotationspeed: 旋转时间（秒）,
				ui_visual_bar2_strength: 视觉强度多变,
				ui_visual_bar2_title: <h4 class='ugcSuccess'> Bar Visualizer 2 </ h4> <hr>,
				ui_visual_bar2_verticalgrowthoffset: 可视化栏的增长抵消,
				ui_visual_bar2_verticalposition: 垂直偏移（％）,
				ui_visual_bar_alpha: 视觉的不透明,
				ui_: 小节之间的间隙大小,
				ui_visual_bar_barwidth: 栅宽度,
				ui_visual_bar_borderalpha: 边界alpha,
				ui_visual_bar_bordercolor: 边框颜色,
				ui_visual_bar_borderwidth: 边框宽度,
				ui_visual_bar_capstype: 线帽类型,
				ui_visual_bar_capstype_0: 没有,
				ui_visual_bar_capstype_1: 回合,
				ui_visual_bar_capstype_2: 广场,
				ui_visual_bar_channel: 声道,
				ui_visual_bar_channel_0: 双声道,
				ui_visual_bar_channel_1: 左,
				ui_visual_bar_channel_2: 右,
				ui_visual_bar_channel_mirror: 反转通道数据,
				ui_visual_bar_channel_option: 通道渲染,
				ui_visual_bar_channel_option_0: 普通,
				ui_visual_bar_channel_option_1: 映射,
				ui_visual_bar_channel_option_2: 重复,
				ui_visual_bar_circlemode: 可视模式,
				ui_visual_bar_circlemode_0: 正常,
				ui_visual_bar_circlemode_1: 圈,
				ui_visual_bar_circlesize: 圆圈大小,
				ui_visual_bar_color: 视觉颜色,
				ui_visual_bar_enableborder: 启用边框,
				ui_visual_bar_enablecolor: 使用自定义颜色,
				ui_visual_bar_enabled: <hr><span class='ugcDanger'> Bar Visualizer 1已启用</span><hr>,
				ui_visual_bar_enablerotation: 启用旋转,
				ui_visual_bar_heightlimit: 身高限制<br> <sub> 0 =禁用</ sub>,
				ui_visual_bar_hideinactive: 当没有声音时隐藏,
				ui_visual_bar_hideinactivefadeduration: 无效淡入持续时间（秒）,
				ui_visual_bar_hideinactivetimeout: 无效等待时间（秒）,
				ui_visual_bar_horizontalposition: 水平偏移（％）,
				ui_visual_bar_horizontalsplit: 启用拆分,
				ui_visual_bar_horizontalsplitalpha: 水平拆分alpha,
				ui_visual_bar_numberbars: 栅的数量,
				ui_visual_bar_reverserainbow: 反向彩虹的颜色,
				ui_visual_bar_rotatecolor: 旋转彩虹的颜色,
				ui_visual_bar_rotatecolorl2r: 反向旋转颜色,
				ui_visual_bar_rotatecolorspeed: 彩色旋转速度,
				ui_visual_bar_rotation: 旋转（度）,
				ui_visual_bar_rotationccw: 逆时针旋转,
				ui_visual_bar_rotationspeed: 旋转时间（秒）,
				ui_visual_bar_strength: 视觉强度多变,
				ui_visual_bar_title: <h4 class='ugcSuccess'> Bar Visualizer 1 </ h4> <hr>,
				ui_visual_bar_verticalgrowthoffset: 可视化栏的增长抵消,
				ui_visual_bar_verticalposition: 垂直偏移（％）,
				ui_visual_gradient: 启用自定义渐变,
				ui_visual_gradient_beginstrip: _________________________________,
				ui_visual_gradient_color_1: 颜色1,
				ui_visual_gradient_color_10: 颜色10,
				ui_visual_gradient_color_10_position: 颜色10位置,
				ui_visual_gradient_color_1_position: 颜色1位置,
				ui_visual_gradient_color_2: 颜色2,
				ui_visual_gradient_color_2_position: 颜色2位置,
				ui_visual_gradient_color_3: 颜色3,
				ui_visual_gradient_color_3_position: 颜色3位置,
				ui_visual_gradient_color_4: 颜色4,
				ui_visual_gradient_color_4_position: 颜色4位置,
				ui_visual_gradient_color_5: 颜色5,
				ui_visual_gradient_color_5_position: 颜色5位置,
				ui_visual_gradient_color_6: 颜色6,
				ui_visual_gradient_color_6_position: 颜色6位置,
				ui_visual_gradient_color_7: 颜色7,
				ui_visual_gradient_color_7_position: 颜色7位置,
				ui_visual_gradient_color_8: 颜色8,
				ui_visual_gradient_color_8_position: 颜色8位置,
				ui_visual_gradient_color_9: 颜色9,
				ui_visual_gradient_color_9_position: 颜色9位置,
				ui_visual_gradient_endstrip: _________________________________,
				ui_visual_gradient_number: # of colors,
				ui_visual_gradient_number_0: 2种颜色,
				ui_visual_gradient_number_1: 3种颜色,
				ui_visual_gradient_number_2: 4种颜色,
				ui_visual_gradient_number_3: 5种颜色,
				ui_visual_gradient_number_4: 6种颜色,
				ui_visual_gradient_number_5: 7种颜色,
				ui_visual_gradient_number_6: 8种颜色,
				ui_visual_gradient_number_7: 9种颜色,
				ui_visual_gradient_number_8: 10种颜色,
				ui_visualizer_effect: <hr><span class='ugcDanger'>启用效果</span><hr>,
				ui_visualizer_effect_bluronbeat: 在节拍模糊,
				ui_visualizer_effect_bluronbeatstrength: 模糊力量,
				ui_visualizer_effect_bounceonbeat: 在节拍上启用反弹,
				ui_visualizer_effect_bounceonbeatstrength: 反弹力量,
				ui_visualizer_effect_hilightonbeat: Hilight在节拍,
				ui_visualizer_effect_hilightonbeatstrength: 希尔力量,
				ui_visualizer_effect_hue: 颜色效果,
				ui_visualizer_effect_huerotate: 色调偏移,
				ui_visualizer_effect_huerotation: 启用色相旋转,
				ui_visualizer_effect_huerotationspeed: 色调旋转,
				ui_visualizer_effect_hueshiftperm: 色调转换节拍烫发,
				ui_visualizer_effect_hueshiftpermreset: 无声时重置烫发移位,
				ui_visualizer_effect_hueshiftpermresetduration: 重置“淡入”持续时间（秒）,
				ui_visualizer_effect_hueshiftpermresettimeout: 重置超时（秒）,
				ui_visualizer_effect_hueshiftpermstrength: 色调移位强度,
				ui_visualizer_effect_hueshifttemp: 色温在节拍温度上移动,
				ui_visualizer_effect_hueshifttempstrength: 色调移位强度,
				ui_visualizer_effect_title: <h4 class='ugcSuccess'>展示台效果</ h4>,
				ui_visualizer_enabled: <hr><span class='ugcDanger'>启用Extra的</span><hr>,
				ui_visualizer_equalizer: <hr><span class='ugcDanger'>启用均衡器</span><hr>,
				ui_visualizer_equalizer_1: 〜200Hz范围,
				ui_visualizer_equalizer_2: 〜400hz,
				ui_visualizer_equalizer_3: 〜750hz,
				ui_visualizer_equalizer_4: 〜1.5khz,
				ui_visualizer_equalizer_5: 〜3khz,
				ui_visualizer_equalizer_6: 〜6kHz的,
				ui_visualizer_equalizer_7: 〜9khz,
				ui_visualizer_equalizer_8: 〜12kHz的,
				ui_visualizer_equalizer_title: <H4 class='ugcSuccess'>均衡器</ H4>,
				ui_visualizer_fpscounter: 启用FPS计数器<br> <sub>仅在可视化器处于活动状态时才可用</ sub>,
				ui_visualizer_glow: 启用发光,
				ui_visualizer_glowcolor: 发光颜色,
				ui_visualizer_glowsize: 发光大小（像素）,
				ui_visualizer_idleanimation: 启用空闲动画,
				ui_visualizer_idleignoreeffects: 空闲状态忽略效果（例如模糊，反弹...）,
				ui_visualizer_idlemovementspeed: 波浪运动速度,
				ui_visualizer_idlestate: 启用空闲状态,
				ui_visualizer_idlestrength: 空闲动画强度,
				ui_visualizer_idletimeout: 空闲超时（秒）,
				ui_visualizer_title: <h4 class='ugcSuccess'> Visualizer Extra </ h4> <hr>
            }

{
    //启动项
    properties.visual_bar_enabled.value = true;
    properties.visual_bar2_enabled.value = false;
    properties.background_enable.value = true;
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
    properties.background__effect_glitch.value = true;
    properties.background_effect_glitchbasslevel.value = 15;
    properties.background_effect_glitcherrors.value = 15;
    properties.background_effect_glitchopacity.value = 10;
    properties.background_effect_glitchstrength.value = 10;
}