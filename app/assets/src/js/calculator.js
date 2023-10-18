// калькулятор
$(document).ready(function () {
    if (document.getElementById("calculator") !== null) {
        function Calculator() {
            this.conversion = {
                tc: 1,
                bc: 5,
                street: 1,
            }; //конверсия в покупателей
            this.primeCost = {
                leasing: 0.45, //себестоимость при арендованном оборудовании
                buyed: 0.33, //себестоимость при купленном оборудовании
            }; //себестоимость
            this.passability = 2014; // проходимость
            this.averageBill = 250; // средний чек
            this.taxes = 0; // налоги
            this.taxesrate = 0.06; // ставка налога
            this.rent = 45000; // аренда
            this.salary = 50000;
            this.internet = 200;
            this.electricity = 1500;
            this.days = 31;
            this.equipment = "buyed"; //Оборудование
            this.place = "tc";
            this.maxProfit = 1000000;
            this.raw = 0; //себестоимость сырья за месяц
            this.pureProfit = 0; //чистая прибыль
            this.total = 0;
            this.conver = 1; // конверсия
            this.cost = 0; //процент рентабельности
            this.amountBill = 0; //количество чеков в день

            this.calculate = function () {
                this.amountBill = Math.round(
                    (this.passability * this.conver) / 100
                );
                var profit = this.amountBill * this.averageBill * this.days; //общая выручка за месяц
                this.raw = Math.round(
                    this.primeCost[this.equipment] *
                        this.amountBill *
                        this.averageBill *
                        this.days
                ); //себестоимость сырья за месяц
                this.taxes = Math.round(
                    this.amountBill *
                        this.averageBill *
                        this.days *
                        this.taxesrate
                ); //налог по усн 6 проц
                var costs =
                    this.rent +
                    this.raw +
                    this.taxes +
                    this.internet +
                    this.electricity +
                    this.salary; //затраты
                this.cost = Math.round(
                    100 -
                        ((this.rent +
                            1200 +
                            this.taxes +
                            this.internet +
                            this.electricity +
                            this.salary) /
                            profit) *
                            100 -
                        this.primeCost[this.equipment] * 100
                ); //процент рентабельности
                var pureProfit = profit - costs;
                this.total = profit;
                this.pureProfit = pureProfit;

                return pureProfit;
            };
        }

        var updateView = function (calculator) {
            var profit = Math.round(calculator.calculate());
            var strokeParams = "0 829";

            $("#raw").html(calculator.raw);
            $("#rent").html(calculator.rent);
            $("#taxes").html(calculator.taxes);
            $("#cost").html(calculator.cost + "%");
            $("#total").html(calculator.total);
            $("#conver").html(calculator.conver + "%");

            $(".calculator-profit__number").html(profit + " руб");
            var percentage = profit / calculator.maxProfit;
            var circle = document.querySelector(".calculator-profit__glow");
            var circleLength = circle.getTotalLength();
            if (percentage > 0) {
                var angle = -90;
                $(".calculator-profit__glow").css({
                    transform: "rotate(" + angle + "deg)",
                    stroke: "#00ff0b",
                });
                $(".calculator-profit__glow").css(
                    "stroke-dasharray",
                    circleLength * percentage + " " + circleLength
                );
            } else {
                var angle = -90 + percentage * 360;
                $(".calculator-profit__glow").css({
                    transform: "rotate(" + angle + "deg)",
                    stroke: "red",
                });
                $(".calculator-profit__glow").css(
                    "stroke-dasharray",
                    -circleLength * percentage + " " + circleLength
                );
            }
        };

        var calculator = new Calculator();

        var sliderPassability = document.getElementById("slider-passability");
        noUiSlider.create(sliderPassability, {
            start: [6000],
            tooltips: wNumb({ decimals: 0 }),
            connect: "lower",
            range: {
                min: 500,
                max: 10000,
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        var sliderPrice = document.getElementById("slider-price");

        noUiSlider.create(sliderPrice, {
            start: [51500],
            tooltips: wNumb({ decimals: 0 }),
            connect: "lower",
            range: {
                min: 5000,
                max: 150000,
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        var sliderConversion = document.getElementById("slider-conversion");

        noUiSlider.create(sliderConversion, {
            start: [1],
            tooltips: true,
            connect: "lower",
            range: {
                min: 1,
                max: 10,
            },
            // format: wNumb({
            //     decimals: 0,
            // }),
        });

        updateView(calculator);

        sliderPassability.noUiSlider.on("update", function () {
            calculator.passability = eval(sliderPassability.noUiSlider.get());
            updateView(calculator);
        });
        sliderPrice.noUiSlider.on("update", function () {
            calculator.rent = eval(sliderPrice.noUiSlider.get());
            updateView(calculator);
        });
        sliderConversion.noUiSlider.on("update", function () {
            calculator.conver = eval(sliderConversion.noUiSlider.get());
            updateView(calculator);
        });

        $("input[type=radio][name=calculator-places]").change(function () {
            calculator.place = this.value;
            if (this.value == "tc") {
                calculator.passability = 6000;
                calculator.rent = 51500;
                sliderPassability.noUiSlider.set(6000);
                sliderPrice.noUiSlider.set(51500);
                sliderConversion.noUiSlider.set(1);
                calculator.conver = 1;
                $(".text-places").text(
                    "Средними значениями для торгового центра являются проходимость 6000 человек в день при аренде 51500 рублей."
                );
            }
            if (this.value == "bc") {
                calculator.passability = 1000;
                calculator.rent = 14500;
                calculator.conver = 5;
                sliderPassability.noUiSlider.set(1000);
                sliderPrice.noUiSlider.set(14500);
                sliderConversion.noUiSlider.set(5);
                $(".text-places").text(
                    "Средними значениями для бизнес центра являются проходимость 1000 человек в день при аренде 14500 рублей."
                );
            }
            if (this.value == "street") {
                calculator.passability = 5000;
                calculator.rent = 23000;
                calculator.conver = 1;
                sliderPassability.noUiSlider.set(5000);
                sliderPrice.noUiSlider.set(23000);
                sliderConversion.noUiSlider.set(1);
                $(".text-places").text(
                    "Средними значениями для улицы являются проходимость 5000 человек в день при аренде 23000 рублей."
                );
            }

            updateView(calculator);
        });
    }

    // крутим вертим
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
    } else {
        $("#calculator").on("mousemove", (e) => {
            const x = -(e.pageX - $(window).width() / 2);
            const y = -(
                e.pageY -
                $("#calculator").offset().top -
                $(window).height() / 2
            );

            $(".calculator-profit")
                .css(
                    "transform",
                    // 'translate(' + x * 0.005 + 'px, ' + y * 0.005 + 'px) perspective(500px)'
                    "perspective(500px) rotateY(" +
                        -x * 0.015 +
                        "deg) rotateX(" +
                        y * 0.03 +
                        "deg) translate(" +
                        -x * 0.015 +
                        "px, " +
                        -y * 0.03 +
                        "px)"
                )
                .css(
                    "box-shadow",
                    "#0077ff " + x * 0.005 + "px " + y * 0.01 + "px 10px"
                );
            // $('.calculator-profit__number').css(
            //   'transform',
            //   'translate(' + (-x) * 0.007 + 'px, ' + (-y) * 0.014 + 'px)'
            // );
            // $('.calculator-profit__label').css(
            //   'transform',
            //   'translate(' + (-x) * 0.007 + 'px, ' + (-y) * 0.014 + 'px)'
            // );
        });
    }
});
