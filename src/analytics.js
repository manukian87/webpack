import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0
    let Destroyed = false
    const listener = () => counter++
    $(document).on('click', listener)
    return {
        destroy() {
            $(document).off('click', listener)
            Destroyed = true
        },
        getClicks() {
            if (Destroyed) {
                return 'analytics is destroy'
            }
            return counter
        }
    }
}
window.analytics = createAnalytics()