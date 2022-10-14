import { Observable,  } from 'rxjs'

export const getNumbers = new Observable(suscriber => {
    suscriber.next(2)
    setTimeout(() => {
        suscriber.next(4)
    },3000)
    setTimeout(() => {
        suscriber.next(4)
        suscriber.complete()
    },2000)
})