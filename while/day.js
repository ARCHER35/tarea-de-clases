var day = 4;
function encDia(day) {
    if (day == 1) {
        return "Lunes";
    }
    else {
        if (day == 2) {
            return "Martes";
        }
        else {
            if (day == 3){
                return "Miercoles";
            }
            else {
                if (day == 4) {
                    return "Jueves"
                }
                else {
                    if (day == 5) {
                        return "Viernes";
                    }
                    else {
                        if (day == 6) {
                            return "Sabado";
                        }
                        else {
                            if (day ==7) {
                                return "Domingo"
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(encDia(day));