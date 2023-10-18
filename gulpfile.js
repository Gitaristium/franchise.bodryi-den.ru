// подключаем модули
const { src, dest, watch, parallel, series } = require("gulp");
const browserSync = require("browser-sync").create();
const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const changed = require("gulp-changed");

const PATH = {
    base_dir: "app/",
    pages: ["app/**/*.html", "app/**/*.php"],
    images: ["app/assets/img/"],
    styles_vendor: {
        src: [
            "node_modules/reset-css/reset.css",
            "node_modules/nouislider/dist/nouislider.min.css",
            "node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css",
            "node_modules/@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css",
            "app/assets/src/vendor/**/*.scss",
            "app/assets/src/vendor/**/*.css",
        ],
        dist: "app/assets/vendor/css",
    },
    styles_theme: {
        src: ["app/assets/src/scss/**/*.scss"],
        dist: "app/assets/theme/css",
    },

    scripts_vendor: {
        src: [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/nouislider/dist/nouislider.min.js",
            "node_modules/wnumb/wNumb.min.js",
            "node_modules/@splidejs/splide/dist/js/splide.min.js",
            "node_modules/@splidejs/splide-extension-video/dist/js/splide-extension-video.min.js",
            "app/assets/src/vendor/**/*.js",
        ],
        dist: "app/assets/vendor/js",
    },
    scripts_theme: {
        src: ["app/assets/src/js/**/*.js"],
        dist: "app/assets/theme/js",
    },
};

// обработка страниц
const pages = () => {
    return src(PATH.pages).pipe(browserSync.stream());
};

// обработка изображений
const images = () => {
    return src(PATH.images).pipe(browserSync.stream());
};

// обработка стилей
function styles_vendor() {
    return src(PATH.styles_vendor.src)
        .pipe(changed(PATH.styles_vendor.dist))
        .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
        .pipe(concat("vendor.css"))
        .pipe(
            autoprefixer({
                overrideBrowserlist: ["last 10 version"],
                grid: true,
            })
        )
        .pipe(dest(PATH.styles_vendor.dist))
        .pipe(browserSync.stream());
}

// обработка стилей
function styles_theme() {
    return src(PATH.styles_theme.src)
        .pipe(changed(PATH.styles_theme.dist))
        .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
        .pipe(concat("main.css"))
        .pipe(
            autoprefixer({
                overrideBrowserlist: ["last 10 version"],
                grid: true,
            })
        )
        .pipe(dest(PATH.styles_theme.dist))
        .pipe(browserSync.stream());
}

// обработка скриптов
function scripts_vendor() {
    return src(PATH.scripts_vendor.src)
        .pipe(changed(PATH.scripts_vendor.dist))
        .pipe(concat("vendor.js"))
        .pipe(dest(PATH.scripts_vendor.dist))
        .pipe(browserSync.stream());
}

// обработка скриптов
function scripts_theme() {
    return src(PATH.scripts_theme.src)
        .pipe(changed(PATH.scripts_theme.dist))
        .pipe(concat("main.js"))
        .pipe(dest(PATH.scripts_theme.dist))
        .pipe(browserSync.stream());
}

// обновление страницы
function browsersync() {
    browserSync.init({
        server: {
            baseDir: PATH.base_dir,
        },
    });
}

// слежение за изменениями
function watching() {
    watch(PATH.pages, pages);
    watch(PATH.images, images);
    watch(PATH.styles_vendor.src, styles_vendor);
    watch(PATH.styles_theme.src, styles_theme);
    watch(PATH.scripts_vendor.src, scripts_vendor);
    watch(PATH.scripts_theme.src, scripts_theme);
}

// список функций для терминала
exports.default = parallel(
    styles_vendor,
    styles_theme,
    scripts_vendor,
    scripts_theme,
    watching,
    browsersync
);
