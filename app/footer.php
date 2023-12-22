<!-- #WORKAREA# -->
<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Page\Asset;
use Bitrix\Main\Web\Cookie;
?>
<footer class="footer">
    <div class="container">
        <div class="footer__text">между нами кофе</div>
        <div class="footer__social-buttons">
            <a href="https://wa.me/79237750024?text=Доброго%20дня!%20Заинтересовала%20Ваша%20франшиза!"
                class="footer__social-button" target="_blank"
                onclick="ym(95060645,'reachGoal','click-messenger'); return true;">
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="87" viewBox="0 0 85 87" fill="none">
                    <path
                        d="M72.6084 12.6424C68.6878 8.62021 64.0217 5.43143 58.881 3.26119C53.7403 1.09095 48.2276 -0.0175009 42.6628 0.000208908C19.3373 0.000208908 0.352364 19.3359 0.352364 43.1086C0.352364 50.7048 2.30638 58.1324 6.00621 64.6574L0 87L22.4392 81.0025C28.6427 84.444 35.5933 86.2498 42.6574 86.2551H42.6735C65.9989 86.2551 84.9999 66.9194 84.9999 43.1467C85.014 37.481 83.9258 31.8687 81.798 26.6338C79.6702 21.399 76.5451 16.6454 72.6031 12.6478L72.6084 12.6424ZM42.6735 78.9797C36.3691 78.9808 30.1805 77.2549 24.7563 73.9827L23.4696 73.1997L10.1545 76.7503L13.7102 63.5318L12.8773 62.1724C9.3417 56.4673 7.47329 49.8551 7.49041 43.1086C7.50172 33.6044 11.2149 24.4929 17.815 17.7739C24.4151 11.0549 33.363 7.27732 42.6948 7.27013C52.0858 7.27013 60.9323 11.0111 67.5685 17.7699C70.8434 21.0932 73.4392 25.0446 75.206 29.3956C76.9727 33.7466 77.8754 38.4111 77.8618 43.1195C77.8458 62.8956 62.0642 78.9797 42.6735 78.9797ZM61.9627 52.1348C60.911 51.5911 55.7056 48.992 54.7393 48.6331C53.7729 48.2742 53.0682 48.0893 52.3528 49.1768C51.6534 50.248 49.6193 52.6786 49 53.4072C48.3807 54.1195 47.7667 54.2228 46.715 53.6791C45.6632 53.1353 42.241 51.9989 38.2048 48.3286C35.0656 45.4739 32.9354 41.9395 32.3161 40.8684C31.6968 39.7972 32.2467 39.2045 32.7859 38.6771C33.2717 38.1986 33.8376 37.421 34.3715 36.7902C34.9054 36.1595 35.0709 35.7191 35.4233 34.9904C35.7757 34.2781 35.6048 33.6474 35.3379 33.1036C35.0709 32.5599 32.9514 27.2583 32.0865 25.0997C31.2376 22.9899 30.3514 23.2835 29.7 23.2455C29.0807 23.2128 28.3813 23.2128 27.682 23.2128C26.9826 23.2128 25.8294 23.4847 24.863 24.5559C23.8967 25.6271 21.1579 28.2425 21.1579 33.5441C21.1579 38.7996 24.8778 43.8735 25.4624 44.671C25.4675 44.6779 25.4724 44.6846 25.477 44.6909C26.0109 45.4032 32.9354 56.2945 43.5437 60.9544C46.0636 62.0582 48.0337 62.7216 49.5659 63.2327C52.1019 64.0484 54.4029 63.9287 56.2235 63.6569C58.2576 63.3524 62.4806 61.0577 63.3668 58.5402C64.2531 56.0226 64.2531 53.8694 63.9861 53.4235C63.7352 52.945 63.0358 52.6786 61.9681 52.1294L61.9627 52.1348Z"
                        fill="white" />
                    <path class="bg" fill-rule="evenodd" clip-rule="evenodd"
                        d="M42.6735 78.9797C36.3691 78.9808 30.1805 77.2549 24.7563 73.9827L23.4696 73.1997L10.1545 76.7503L13.7102 63.5318L12.8773 62.1724C9.3417 56.4673 7.47329 49.8551 7.49041 43.1086C7.50172 33.6044 11.2149 24.4929 17.815 17.7739C24.4151 11.0549 33.363 7.27732 42.6948 7.27013C52.0858 7.27013 60.9323 11.0111 67.5685 17.7699C70.8434 21.0932 73.4392 25.0446 75.206 29.3956C76.9727 33.7466 77.8754 38.4111 77.8618 43.1195C77.8458 62.8956 62.0642 78.9797 42.6735 78.9797ZM54.7393 48.6331C55.7056 48.992 60.911 51.5911 61.9627 52.1348L61.9681 52.1294C63.0358 52.6786 63.7352 52.945 63.9861 53.4235C64.2531 53.8694 64.2531 56.0226 63.3668 58.5402C62.4806 61.0577 58.2576 63.3524 56.2235 63.6569C54.4029 63.9287 52.1019 64.0484 49.5659 63.2327C48.0337 62.7216 46.0636 62.0582 43.5437 60.9544C32.9354 56.2945 26.0109 45.4032 25.477 44.6909L25.4624 44.671C24.8778 43.8735 21.1579 38.7996 21.1579 33.5441C21.1579 28.2425 23.8967 25.6271 24.863 24.5559C25.8294 23.4847 26.9826 23.2128 27.682 23.2128C28.3813 23.2128 29.0807 23.2128 29.7 23.2455C30.3514 23.2835 31.2376 22.9899 32.0865 25.0997C32.9514 27.2583 35.0709 32.5599 35.3379 33.1036C35.6048 33.6474 35.7757 34.2781 35.4233 34.9904C35.0709 35.7191 34.9054 36.1595 34.3715 36.7902C33.8376 37.421 33.2717 38.1986 32.7859 38.6771C32.2467 39.2045 31.6968 39.7972 32.3161 40.8684C32.9354 41.9395 35.0656 45.4739 38.2048 48.3286C42.241 51.9989 45.6632 53.1353 46.715 53.6791C47.7667 54.2228 48.3807 54.1195 49 53.4072C49.6193 52.6786 51.6534 50.248 52.3528 49.1768C53.0682 48.0893 53.7729 48.2742 54.7393 48.6331Z"
                        fill="transparent" />
                </svg>
            </a>
            <span class="footer__social-text">напиши нам</span>
            <a href="https://t.me/bodryidenfranch?text=Доброго%20дня!%20Заинтересовала%20Ваша%20франшиза!"
                class="footer__social-button" target="_blank"
                onclick="ym(95060645,'reachGoal','click-messenger'); return true;">
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                    <path
                        d="M43.5 0C19.488 0 0 19.488 0 43.5C0 67.512 19.488 87 43.5 87C67.512 87 87 67.512 87 43.5C87 19.488 67.512 0 43.5 0ZM63.684 29.58C63.0315 36.453 60.204 53.157 58.7685 60.8565C58.1595 64.119 56.9415 65.2065 55.8105 65.337C53.2875 65.5545 51.3735 63.684 48.9375 62.0745C45.1095 59.5515 42.9345 57.9855 39.237 55.5495C34.9305 52.722 37.7145 51.156 40.194 48.633C40.8465 47.9805 51.9825 37.845 52.2 36.9315C52.2302 36.7931 52.2262 36.6495 52.1883 36.513C52.1504 36.3766 52.0797 36.2515 51.9825 36.1485C51.7215 35.931 51.3735 36.018 51.069 36.0615C50.6775 36.1485 44.5875 40.194 32.712 48.198C30.972 49.3725 29.406 49.9815 28.014 49.938C26.448 49.8945 23.49 49.068 21.2715 48.3285C18.531 47.4585 16.3995 46.98 16.5735 45.4575C16.6605 44.6745 17.748 43.8915 19.7925 43.065C32.4945 37.5405 40.9335 33.8865 45.153 32.1465C57.246 27.1005 59.7255 26.2305 61.3785 26.2305C61.7265 26.2305 62.553 26.3175 63.075 26.7525C63.51 27.1005 63.6405 27.579 63.684 27.927C63.6405 28.188 63.7275 28.971 63.684 29.58Z"
                        fill="white" />
                    <path class="bg"
                        d="M63.684 29.58C63.0315 36.453 60.204 53.157 58.7685 60.8565C58.1595 64.119 56.9415 65.2065 55.8105 65.337C53.2875 65.5545 51.3735 63.684 48.9375 62.0745C45.1095 59.5515 42.9345 57.9855 39.237 55.5495C34.9305 52.722 37.7145 51.156 40.194 48.633C40.8465 47.9805 51.9825 37.845 52.2 36.9315C52.2302 36.7931 52.2262 36.6495 52.1883 36.513C52.1504 36.3766 52.0797 36.2515 51.9825 36.1485C51.7215 35.931 51.3735 36.018 51.069 36.0615C50.6775 36.1485 44.5875 40.194 32.712 48.198C30.972 49.3725 29.406 49.9815 28.014 49.938C26.448 49.8945 23.49 49.068 21.2715 48.3285C18.531 47.4585 16.3995 46.98 16.5735 45.4575C16.6605 44.6745 17.748 43.8915 19.7925 43.065C32.4945 37.5405 40.9335 33.8865 45.153 32.1465C57.246 27.1005 59.7255 26.2305 61.3785 26.2305C61.7265 26.2305 62.553 26.3175 63.075 26.7525C63.51 27.1005 63.6405 27.579 63.684 27.927C63.6405 28.188 63.7275 28.971 63.684 29.58Z"
                        fill="transparent" />
                </svg>
            </a>
        </div>
        <a href="#offer" class="footer__link">
            <img src="<?= SITE_DIR ?>assets/theme/img/logo-cnp.svg" alt="click nice pic" />
            2023
        </a>
    </div>
</footer>

<? Asset::getInstance()->addJs(SITE_DIR . 'assets/vendor/js/vendor.js'); ?>
<? Asset::getInstance()->addJs(SITE_DIR . 'assets/theme/js/main.js?ver=1.15'); ?>
</body>


</html>