module.exports = function () {
    return {
        categories: ['Wszystkie produkty', 'Miód', 'Pyłek pszczeli', 'Świece i wosk', 'Propolis', 'Zestawy'],
        products: [
            {id: 1, name: 'Miód lipowy - 0.9l', category: 'Miód', price: 43.00, description: 'Jasny miód o charakterystycznym smaku kwiatów lipy. Idealny na przeziebienie i choroby dróg oddechowych.', amount: 5},
            {id: 2, name: 'Miód rzepakowy - 0.9l', category: 'Miód', price: 35.00, description: 'Kremowobiały miód, pozyskiwany wczesną wiosną z kwitnących obficie pól rzepaku.', amount: 10},
            {id: 3, name: 'Miód wielokwiatowy - 0.9l', category: 'Miód', price: 40.00, description: 'Wiosenny, delikatny miód, będący mieszanką nektaru wielu roślin.', amount: 20},
            {id: 4, name: 'Pyłek pszczeli - 0.3 kg', category: 'Pyłek pszczeli', price: 15.00, description: 'Pyłek zbierany z różnego rodzaju kwiatów o bogatym składzie. Cenne źródło aminokwasów, minerałów i witamin.', amount: 0},
            {id: 5, name: 'Propolis - 0.3 kg', category: 'Propolis', price: 30.00, description: 'Najczystszy produkt będący mieszanką żywic zbieranych przez pszczoły. Posiada właściwości bakteriobójcze i odkażające.', amount : 8},
            {id: 6, name: 'Świeca prosta', category: 'Świece i wosk', price: 8.00, description: 'Świeca stołowa o niezwykłym aromacie pszczelego wosku.', amount: 20},
            {id: 7, name: 'Pierzga - 0.3 kg', category: 'Pyłek pszczeli', price: 30.00, description: 'Pierzga to mieszanina pyłu pszczelego i miodu. Bogata w białko, minerały i witaminy.', amount: 5},
            {id: 8, name: 'Miód lipowy - 0.5l', category: 'Miód', price: 21.50, description: 'Jasny miód o charakterystycznym smaku kwiatów lipy. Idealny na przeziebienie i choroby dróg oddechowych.', amount: 0},
            {id: 9, name: 'Miód rzepakowy - 0.5l', category: 'Miód', price: 17.50, description: 'Kremowobiały miód, pozyskiwany wczesną wiosną z kwitnących obficie pól rzepaku.', amount: 6},
            {id: 10, name: 'Miód wielokwiatowy - 0.5l', category: 'Miód', price: 20.00, description: 'Wiosenny, delikatny miód, będący mieszanką nektaru wielu roślin.', amount: 20},
            {id: 11, name: 'Pyłek pszczeli - 0.5kg', category: 'Pyłek pszczeli', price: 25.00, description: 'Pyłek zbierany z różnego rodzaju kwiatów o bogatym składzie. Cenne źródło aminokwasów, minerałów i witamin.', amount: 2},
            {id: 12, name: 'Pierzga - 0.1 kg ', category: 'Pyłek pszczeli', price: 10.00, description: 'Pierzga to mieszanina pyłu pszczelego i miodu. Bogata w białko, minerały i witaminy.', amount: 0},
            {id: 13, name: 'Propolis - 0.1 kg', category: 'Propolis', price: 10.00, description: 'Najczystszy produkt będący mieszanką żywic zbieranych przez pszczoły. Posiada właściwości bakteriobójcze i odkażające.', amount: 9},
            {id: 14, name: 'Maść propolisowa - 25 ml', category: 'Propolis', price: 15.00, description: 'Maść tworzona na bazie propolisu. Posiada właściwości gojące, i odkażające.', amount: 10},
            {id: 15, name: 'Świeca kręcona', category: 'Świece i wosk', price: 10.00, description: 'Dekoracyjna, aromatyczna świeca.', amount: 16},
            {id: 16, name: 'Świeca duża', category: 'Świece i wosk', price: 15.00, description: 'Duża świeca stołowa, z aromatycznego wosku pszczelego.', amount: 0},
            {id: 17, name: 'Świeca podgrzewacz - 10 szt.', category: 'Świece i wosk', price: 10.00, description: 'Zestaw 10 podgrzewaczy z wosku pszczelego.', amount: 9},
            {id: 18, name: 'Wosk pszczeli - 0.3 kg', category: 'Świece i wosk', price: 15.00, description: 'Czysty, jasny wosk pozyskiwany z bieżącego sezonu. Idealny jako baza do kosmetyków.', amount: 9},
            {id: 19, name: 'Wosk pszczeli - 0.5 kg', category: 'Świece i wosk', price: 25.00, description: 'Czysty, jasny wosk pozyskiwany z bieżącego sezonu. Idealny jako baza do kosmetyków.', amount: 6},
            {id: 20, name: 'Świeca kwiat', category: 'Świece i wosk', price: 15.00, description: 'Artystyczna, nastrojowa świeca z wosku pszczelego.', amount: 8},
            {id: 21, name: 'Zestaw upominkowy', category: 'Zestawy', price: 45.00, description: 'Zestaw składający się z wybranego gatunku miodu 0,5l, i dwóch świec kwiatów. Zapakowane w dekoracyjne pudełko.', amount: 0},
            {id: 22, name: 'Zestaw upominkowy dla zdrowia', category: 'Zestawy', price: 50.00, description: 'Podaruj bliskim zdrowie. W zestawie wybrany miód 0,5l, propolis 0,3kg, maść propolisowa 0,25ml, pyłek pszczeli 0,3kg.', amount: 8},
            {id: 23, name: 'Zestaw - 3 rodzaje miodu', category: 'Zestawy', price: 40.00, description: '3 wybrane rodzaje miodu o pojemności 0,5l.', amount: 20},
            {id: 24, name: 'Świeca fantazyjna', category: 'Świece i wosk', price: 8.00, description: 'Fantazyjna świeca z wosku pszczelego na zimowe wieczory.', amount: 8},
            {id: 25, name: 'Miód gryczany - 0.9l', category: 'Miód', price: 40.00, description: 'Ciemny miód o bardzo charakterystycznym smaku.', amount: 24},
            {id: 26, name: 'Miód gryczany - 0.5l', category: 'Miód', price: 20.00, description: 'Ciemny miód o bardzo charakterystycznym smaku.', amount: 9},
            {id: 27, name: 'Miód - spadź liściasta - 0.5l', category: 'Miód', price: 22.00, description: 'Miód pozyskiwany ze spadzi drzew liściastych.', amount: 5},
            {id: 28, name: 'Miód - spadź liściasta - 0.9l', category: 'Miód', price: 44.00, description: 'Miód pozyskiwany ze spadzi drzew liściastych.', amount: 10},
            {id: 29, name: 'Miód - spadź iglasta - 0.5l', category: 'Miód', price: 25.00, description: 'Miód pozyskiwany ze spadzi drzew iglastych, o ciemnozielonym zabarwieniu. Wyjatkowo polecany na choroby górnych dróg oddechowych.', amount: 12},
            {id: 30, name: 'Miód - spadź iglasta - 0.9l', category: 'Miód', price: 50.00, description: 'Miód pozyskiwany ze spadzi drzew iglastych, o ciemnozielonym zabarwieniu. Wyjatkowo polecany na choroby górnych dróg oddechowych.', amount: 4},
            {id: 31, name: 'Maść propolisowa - 50ml', category: 'Propolis', price: 30.00, description: 'Maść tworzona na bazie propolisu. Posiada właściwości gojące, i odkażające.', amount: 23},
            

        ]
    }
}