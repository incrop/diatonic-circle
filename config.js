define(function() {

    return {
        keys: parseKeys('wbwbwwbwbwbw'),
        containerSize: 640,
        outerRadius: 300
    };

    function parseKeys(keyStr) {
        var mapping = { w: 'white', b: 'black' };
        var keyObj = keyStr.split('').map(function(letter, idx) {
            return {
                color: mapping[letter],
                index: idx
            };
        });
        keyObj.shift = function(key, delta) {
            var rawIdx = (typeof key === 'number' ? key : key.index) + delta,
                idx = rawIdx >= 0
                    ? rawIdx % this.length
                    : this.length - (-rawIdx % this.length);
            return this[idx];
        };
        keyObj.leftFrom = function(key) {
            return this.shift(key, -1);
        };
        keyObj.rightFrom = function(key) {
            return this.shift(key, 1);
        };
        return keyObj;
    }
});