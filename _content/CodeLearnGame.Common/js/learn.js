let clickOutsideListeners = [];

function registerClickOutside(dotNetHelper, itemId) {
    const element = document.getElementById("modal-" + itemId);
    const listener = function (event) {
        if (!element.contains(event.target)) {
            dotNetHelper.invokeMethodAsync('CloseElement', itemId);
        }
    };
    const item = clickOutsideListeners.find(x => x.id === itemId);
    if (!item) {
        document.addEventListener('click', listener);
        clickOutsideListeners.push({id: itemId, listener: listener});
    }
}

function unregisterClickOutside(itemId) {
    const item = clickOutsideListeners.find(x => x.id === itemId);
    if (item) {
        document.removeEventListener('click', item.listener);
        const index = clickOutsideListeners.findIndex(x => x.id === itemId);
        clickOutsideListeners.splice(index, 1);
    }
}