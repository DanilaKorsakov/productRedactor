<template>
    <div class="preloader">
        <svg class="preloader__icon"
             height="72" id="svg1025" version="1.1" viewBox="0 0 19.05 19.050001" width="72" xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1022"/><g id="layer1" style="opacity:1"><g id="g16882" style="stroke-width:0.77592" transform="matrix(1.2440243,0.33338772,-0.33374099,1.2457344,3.4607104,-4.3314734)"><path d="M 13.65852,9.77923 12.58576,10.36604 11.95051,9.32219" id="path1927-6" style="font-variation-settings:normal;fill:none;fill-opacity:1;stroke:#808080;stroke-width:0.387959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;stop-color:#000000"/><path d="m 3.66722,5.19043 a 5.4027041,5.3954444 0 0 1 6.35675,-0.69959 5.4027041,5.3954444 0 0 1 2.57161,5.84787" id="path15024" style="font-variation-settings:normal;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#808080;stroke-width:0.387959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;stop-color:#000000"/><path d="M 10.97801,13.13644 A 5.4027041,5.3954444 0 0 1 4.62126,13.83602 5.4027041,5.3954444 0 0 1 2.04956,7.98852" id="path15020" style="font-variation-settings:normal;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#808080;stroke-width:0.387959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;stop-color:#000000"/><path d="M 1.00297,8.53039 2.07573,7.94358 2.71098,8.98743" id="path15417" style="font-variation-settings:normal;fill:none;fill-opacity:1;stroke:#808080;stroke-width:0.387959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;stop-color:#000000"/></g></g>
        </svg>
    </div>
</template>

<script>
    export default {

        setup : function () {

        }

    }
</script>

<style scoped lang="scss">

@import "assets/mixins/index";

@media only screen and (min-width: 320px) {
    .preloader{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__icon{
            margin-top: rem(10);
            width: rem(120);
            height: rem(120);
            animation: spin 1s linear 0.5s infinite;
        }
        
        @keyframes spin {
            100% {
                transform:rotate(360deg);
            }
        }
    }
}

@media only screen and (min-width: 600px) {
    .preloader{
        width: 50%;

        &__icon{
            margin-top: 0;
        }
    }
}

@media only screen and (min-width: 1024px) {
    .preloader{
        width: 80%;
        &__icon{
            width: rem(150);
            height: rem(150);
        }
    }

}
</style>