<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Web\Cookie;
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <? $APPLICATION->ShowHead(); ?>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
    <meta property="og:image"
        content="https://investments.bodryi-den.ru/bitrix/templates/investments/img/ogimage.png" />
    <meta property="og:url" content="https://franchise.bodryi-den.ru" />
    <meta property="og:title" content="Франшиза Бодрый День" />
    <meta property="og:description" content="Открой свою кофейню по франшизе, зарабатывай от 100000₽ в месяц!" />
    <meta name="theme-color" content="#0077ff" />
    <title>
        <? $APPLICATION->ShowTitle(); ?>
    </title>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
    (function(m, e, t, r, i, k, a) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) {
                return;
            }
        }
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(
            k, a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(95060645, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/95060645" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Yandex.Maps -->
    <script type="text/javascript"
        src="https://api-maps.yandex.ru/3.0/?apikey=c6e7159c-1efe-4612-8ca8-9eb9574ae925&lang=ru_RU"></script>
    <!-- /Yandex.Maps -->

    <!-- Varioqub experiments -->
    <script type="text/javascript">
    (function(e, x, pe, r, i, me, nt) {
        e[i] = e[i] || function() {
                (e[i].a = e[i].a || []).push(arguments)
            },
            me = x.createElement(pe), me.async = 1, me.src = r, nt = x.getElementsByTagName(pe)[0], nt.parentNode
            .insertBefore(me, nt)
    })
    (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
    ymab('metrika.95060645', 'init' /*, {clientFeatures}, {callback}*/ );
    </script>
    <!-- /Varioqub experiments -->


    <!-- <link rel="preload" as="image" href="<?= SITE_DIR ?>assets/theme/img/logo@2x.webp" /> -->
    <link rel="icon" href="<?= SITE_DIR ?>assets/theme/img/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
    <? Asset::getInstance()->addCss(SITE_DIR . 'assets/vendor/css/vendor.css'); ?>
    <? Asset::getInstance()->addCss(SITE_DIR . 'assets/theme/css/main.css?ver=1.14'); ?>
    <? $APPLICATION->SetTitle("Франшиза Бодрый день"); ?>
</head>

<body>
    <!-- #WORKAREA# -->