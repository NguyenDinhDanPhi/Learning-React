function Validator(options) {
    function Validate(inputElement, rule) {
        var errMess = rule.test(inputElement.value)
        var errElement = inputElement.parentElement.querySelector(options.errSelector)
        if(errMess) {
            errElement.innerText = errMess
            inputElement.parentElement.classList.add('invalid')
        } else {
            errElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    var formElement = document.querySelector(options.form)
    if(formElement) {
        options.rules.forEach(function (rule)  {
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