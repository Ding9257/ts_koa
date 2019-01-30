export default class util {
    static isEmpty(param: any) {
        if (param == undefined) {
            return true;
        }
        if (param == null) {
            return true;
        }
        if (param === "") {
            return true;
        }
        if (param instanceof Object) {
            for (var x in param) {
                return false;
            }
            return true;
        }
        if (param instanceof Array) {
            if (param.length == 0) {
                return true;
            }
            return false;
        }
        return false;
    }
}