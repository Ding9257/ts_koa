import {compact, concat} from 'lodash'

export function toArray(...args) {
    return compact(concat([], ...args));
}