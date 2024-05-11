function Validator(options) {
    var selectorRules = {}
    function Validate(inputElement, rule) {
        var errMess;
        var errElement = inputElement.parentElement.querySelector(options.errSelector)
        var rules = selectorRules[rule.selector]
        for(var i = 0; i < rules.length; ++i ) {
            errMess = rules[i](inputElement.value)
            if(errMess) break
        }
        if(errMess) {
            errElement.innerText = errMess
            inputElement.parentElement.classList.add('invalid')
        } else {
            errElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errMess
    }
    var formElement = document.querySelector(options.form)
    if(formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault()
            var formValid = true
            options.rules.forEach(function (rule) {
                var inputElement =formElement.querySelector(rule.selector)
                var isValid =Validate(inputElement, rule)
                if(!isValid) {
                    formValid = false
                }
            })
            
            if(formValid) {
                if(typeof options.onSubmit === 'function') {
                    var formEnableInput = formElement.querySelectorAll(`[name]`)
                    var formValue = Array.from(formEnableInput).reduce(function (values, input) {
                    
                     return (values[input.name] = input.value) && values
                    }, {})
                    options.onSubmit(formValue)
                }
            }
            
        }

        //envent
        options.rules.forEach(function (rule)  {
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]

            }
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement) {
                inputElement.onblur = () => {
                    Validate(inputElement, rule)
                }
                inputElement.oninput = () => {
                    var errElement = inputElement.parentElement.querySelector(options.errSelector)
                    errElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        });

    }
}

Validator.isRequire = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'vui long nhap truong nay '
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(value) ? undefined : 'Sai cu phap email'
        }
    }
}
Validator.minLen = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự.`;
        }
    }
}
Validator.isComfirmed = function(selector, getComfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getComfirmValue() ? undefined : message || 'gia tri nhap vao khong chinh xac'
        }
    }
}