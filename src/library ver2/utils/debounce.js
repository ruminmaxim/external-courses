function debounce(callback, delay) {
    var timer;
    return function debounced() {
        var args = arguments;
        var that = this;
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(that, args), delay);
    };
} 