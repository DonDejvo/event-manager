void (function() {
    try {
        if ([window._$, window.DOMWrapper].findIndex(e => typeof e !== 'undefined') !== -1) {
            throw new SyntaxError('Some of the variables "_w" and "DOMWrapper" are already occupied, the plugin can\'t load.');
        } else {
            window._$ = function(e) { return __w(e); };
        }


        window.DOMWrapper = {
            define(a) {
                this.f.push(a);
                return this;
            },
            f: [],
            i: 0,
            *[Symbol.iterator] () {
                let {f, i} = this;
                while (i < f.length)
                    yield f[i++];
            }
        }

        let __id = -1;

            
        function __w(e) {
            o = {}, d = e.dataset.evmId;

            for (i of DOMWrapper) {
                Object.defineProperty(o, i.name, {
                    value: i,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            Object.defineProperties(o, {
                "c": {
                    value: C.has(d) ? C.get(d) : (() => {
                        e.dataset.evmId = ++__id;
                        return new c(e.dataset.evmId);
                    })(),
                    enumerable: true
                },
                "events": {
                    get: function() {
                        m = {};
                        for (const[k, v] of Object.entries(this.c._)) {
                            m[k] = v;
                        }
                        return m;
                    },
                    enumerable: true,
                    configurable: true
                }
            });
            

            return Object.assign({element: e}, o);
        }


        function aE(h, t, f) {
            if (window.addEventListener) {
                h.addEventListener(t, f);
            } else if (window.attachEvent) {
                h.attachEvent('on' + t, f);
            } else {
                h['on' + t] = f;
            }
        }

        function rE(h, t, f) {
            if (window.removeEventListener) {
                h.removeEventListener(t, f);
            } else if (window.detachEvent) {
                h.detachEvent('on' + t, f);
            } else {
                h['on' + t] = null;
            }
        }


        class c {
            constructor(e) {
                this._ = {};
                C.set(e, this);
            }
            a(t, f) {
                typeof this._[t] === 'undefined' ? this._[t] = [] : null;
                this._[t].push(f);
            }
            r(t, f) {
                typeof this._[t] === 'undefined' ? this._[t] = [] : null;
                this._[t].splice(this._[t].indexOf(f), 1);
                this._[t].length == 0 ? delete this._[t] : null;
            }
        }
        
        const C = new Map();


        function on(e = null, f = null) {
            h = this.element;
            Array.isArray(e) ? null : e = [e], Array.isArray(f) ? null : f = [f];
            
            f.forEach(F => {
                e.forEach(t => {
                    aE(h, t, F);
                    this.c.a(t, F);
                });
            });
            
            return _$(h);
        }

        function off(e = null, f = null) {
            h = this.element;

            if (e === null) {
                Array.isArray(f) ? null : f = [f]

                f.forEach(F => {
                    for (const[k] of Object.entries(this.c._)) {
                        rE(h, k, F);
                        this.c.r(k, F);
                    }
                });
            } if (f === null) {
                Array.isArray(e) ? null : e = [e];

                e.forEach(t => {
                    for (const[, v] of Object.entries(this.c._)) {
                        v.forEach(n => {
                            rE(h, t, n);
                            this.c.r(t, n);
                        });
                    }
                });
            } else {
                Array.isArray(e) ? null : e = [e], Array.isArray(f) ? null : f = [f];

                f.forEach(F => {
                    e.forEach(t => {
                        rE(h, t, F);
                        this.c.r(t, F);
                    });
                });
            }

            return _$(h);
        }


        DOMWrapper.define(on).define(off);
    } catch (err) {
        console.log('Something went wrong:' + err);
    }
}).call(this);