parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var n,t,e=document.querySelectorAll("[id^=hearth-banner_]"),o=document.getElementById("hearth-script");if(o&&(n=o.dataset.orgid||"",t=o.dataset.partner||""),n&&t){for(var a=0,r=e;a<r.length;a++){var i=r[a];if(i){var l=i.id.replace("hearth-banner_","").split(/_(.+)/),s=l[0],p=l[1],d="https://api.gethearth.com",c=s.split("x"),h=c[0],m='<a href="'+(y=d+"/partners/"+t+"?"+("utm_campaign="+n+"&utm_content="+p+"&utm_medium=contractor-website&utm_source=contractor&utm_term="+s))+'"target="_blank"><img src="'+(d+"/contractor_images/"+t+"/banner.jpg?color="+p+"&size_id="+s)+'"alt="'+("hearth financing "+s)+'"style="'+("height:"+c[1]+"px;width:"+h+"px")+'"/></a>';i.innerHTML=m}}for(var g=0,u=document.querySelectorAll("[id^=hearth-widget_]");g<u.length;g++){var x=u[g];if(x){var y;m='\n        <head>\n          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">\n          <style>'+"        body {\n          margin: 0;\n          font-family: 'Montserrat', sans-serif;\n          -webkit-font-smoothing: antialiased;\n        }\n        a {\n          text-decoration: none;\n          color: white;\n        }\n        h2, h3, h4 {\n          margin: 0;\n        }\n        h2 {\n          font-size: 20px;\n          line-height: 24px;\n          color: #000000;\n          font-weight: bold;\n        }\n        h3 {\n          font-size: 28px;\n          line-height: 40px;\n        }\n        h4 {\n          font-size: 12px;\n          line-height: 20px;\n          font-weight: 600;\n        }\n        p {\n          font-size: 12px;\n          line-height: 16px;\n        }\n        select::-ms-expand {\n          display: none;\n        }\n        select {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          text-indent: 1px;\n          text-overflow: '';\n        }\n        .hrth-container {\n          background-color: #FAFAFA;\n          width: 318px;\n          height: 769px;\n          border: 1px solid #E5E5E5;\n          overflow: hidden;\n          position: relative;\n        }\n        .hrth-header {\n          padding: 24px 24px 22px;\n          text-align: center;\n        }\n        .hrth-hr {\n          width: 136px;\n          height: 0px;\n          border: 1px solid #000000;\n          margin: 0 auto;\n        }\n        .hrth-body {\n          padding: 24px;\n          position: relative;\n        }\n        label {\n          font-size: 12px;\n          line-height: 16px;\n          margin-bottom: 4px;\n          display: block;1200000\n        }\n        input, select {\n          display: block;\n          background: #FAFAFA;\n          border: 1px solid #C4C4C4;\n          border-radius: 4px;\n          margin-bottom: 16px;\n          font-weight: 600;\n          font-size: 12px;\n          line-height: 24px;\n          padding: 5px 12px;\n          width: 100%;\n          font-family: Montserrat;\n        }\n        .error {\n          color: #000000;\n          position: absolute;\n          margin-top: -15px;\n        }\n        .hrth-result {\n          text-align: center;\n          display: block;\n          margin: 36px 0;\n          font-size: 12px;\n          line-height: 16px;\n          color: #64022E;\n        }\n        .per-month {\n          font-size: 12px;\n          line-height: 16px;\n          font-weight: normal;\n          margin: 0 6px;\n        }\n        small {\n          font-size: 8px;\n          line-height: 14px;\n          color: #000000;\n        }\n        table {\n          width: 100%;\n          border-spacing: 0;\n          margin: 20px 0;\n          background: #FAFAFA;\n          border-radius: 4px;\n          font-size: 12px;\n          line-height: 16px;\n          padding: 12px;\n        }\n        table tr td {\n          padding-bottom: 8px;\n        }\n        table tr:last-child td {\n          border-top: 1px solid #000000;\n          padding-top: 12px;\n          padding-bottom: 0;\n        }\n        .cta-container {\n          text-align: center;\n          margin-top: 16px;\n        }\n        .cta {\n          background: #000000;\n          border-radius: 4px;\n          font-weight: 500;\n          font-size: 16px;\n          line-height: 24px;\n          text-align: center;\n          padding: 10px 0px;\n          display: inline-block;\n          width: 100%;\n        }\n        .cta svg {\n          margin-left: 10px;\n        }\n        .hrth-footer {\n          background: white;\n          padding: 16px 22px;\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        }\n        .hrth-footer img {\n          height: 20px;\n          margin-top: 12px;\n        }\n      "+'</style>\n        </head>\n        <body>\n          <div class="hrth-container">\n            <div class="hrth-header">\n              <h2>FINANCING CALCULATOR</h2>\n            </div>\n            <div class="hrth-hr"></div>\n            <div class="hrth-body">\n              <div class="hrth-inputs">\n                <label for="hrth-amount">Project cost</label>\n                <input type="text" id="amount" placeholder="$12,000" onkeyup="recalculate()"/>\n                <small class="error" id="error" style="display:none">Please choose an amount between $1,000 and $100,000.</small>\n                <label for="hrth-credit">Your credit score</label>\n                <select name="hrth-credit" id="credit" onchange="recalculate()">\n                  <option value="0.10489999999999999">Excellent (741 - 850)</option>\n                  <option value="0.19370000000000001">Good (681 - 740)</option>\n                  <option value="0.2359">Average (661 - 680)</option>\n                  <option value="0.25819999999999999">Poor (500 - 660)</option>\n                </select>\n              </div>\n              <a class="hrth-result" href="'+(y=(d="https://api.gethearth.com")+"/partners/"+t+"?"+("utm_campaign="+n+"&utm_content=calculator&utm_medium=widget-calculator&utm_source=contractor&utm_term=widget"))+'" target="_blank">\n                Estimated\n                <h3 id="monthly">$257.87<span class="per-month">/ mo.</span></h3>\n              </a>\n              <table>\n                <tr>\n                  <td>Principal</td>\n                  <td style="text-align:right" id="principal">$12,000.00</td>\n                </tr>\n                <tr>\n                  <td>Interest</td>\n                  <td style="text-align:right" id="interest">$3,472.04</td>\n                </tr>\n                <tr>\n                  <td style="font-weight:600">Total Loan Cost Estimate</td>\n                  <td style="text-align:right;font-weight:600" id="total">$15,472.04</td>\n                </tr>\n              </table>\n              <h4>Get your personalized rates.</h4>\n              <p>This takes two minutes and does not affect your credit score.</p>\n              <div class="cta-container">\n                <a class="cta" href="'+y+'" target="_blank">\n                  GET FINANCING OPTIONS\n                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M6.00033 0.666687L5.06033 1.60669L8.78033 5.33335H0.666992V6.66669H8.78033L5.06033 10.3934L6.00033 11.3334L11.3337 6.00002L6.00033 0.666687Z" fill="white"/>\n                  </svg>\n                </a>\n              </div>\n            </div>\n            <div class="hrth-footer">\n              <small>\n                The estimated monthly payment is provided for information purposes\n                only. It is based on the user\'s selected loan amount and the credit\n                score range; and calculated using a 5 year loan term with 60 monthly\n                payments and an APR of\n                <span id="terms-apr">10.49</span>%.\n                The estimate does not account for missed payments, the use of deferment\n                or forbearance.\n              </small>\n              <br />\n              <a href="https://www.gethearth.com" target="_blank">\n                <img src="https://hearth.imgix.net/logos/hearth-2018.svg" />\n              </a>\n            </div>\n          </div>\n          <img src="'+d+"/pixel.png?organization_id="+n+'&type=widget-calculator" />\n          <script src="https://unpkg.com/imask"><\/script>\n          <script>\n            const recalculate = function () {\n              const formatter = new Intl.NumberFormat(\'en-US\', {\n                style: \'currency\',\n                currency: \'USD\',\n              });\n\n              const e = document.getElementById("credit");\n              const apr = e.options[e.selectedIndex].value;\n\n              const principal = document.getElementById("amount").value.replace(/[^0-9.]/g,\'\') || 12000;\n              const loanTerm = 60;\n\n              const monthlyApr = apr / 12;\n\n              const monthlyPow = ((1 + monthlyApr) ** loanTerm);\n              const monthlyPayment = monthlyPow === 1 ? (principal / loanTerm) :\n                (principal * monthlyApr * monthlyPow) / (monthlyPow - 1);\n\n              const total = loanTerm * monthlyPayment;\n              const interest = total - principal;\n\n              document.getElementById("monthly").innerHTML = formatter.format(monthlyPayment) + "<span class=\'per-month\'>/ mo.</span>";\n              document.getElementById("terms-apr").innerHTML = (apr*100).toFixed(2);\n              document.getElementById("principal").innerHTML = formatter.format(principal);\n              document.getElementById("interest").innerHTML = formatter.format(interest);\n              document.getElementById("total").innerHTML = formatter.format(total);\n            }\n\n            var currencyMask = IMask(\n              document.getElementById(\'amount\'),\n              {\n                mask: \'$num\',\n                blocks: {\n                  num: {\n                    // nested masks are available!\n                    mask: Number,\n                    thousandsSeparator: \',\',\n                    max: 100000,\n                  }\n                }\n              });\n\n            document.getElementById(\'amount\').addEventListener("change", function () {\n              const e = document.getElementById("amount");\n              const error = document.getElementById("error");\n              const value = e.value.replace(/[^0-9.]/g,\'\');\n              if (e && (value < 1000 || value > 100000)) {\n                error.style.display = "block";\n              } else {\n                error.style.display = "none";\n              }\n            });\n          <\/script>\n        </body>\n      ';x.frameBorder=0,x.frameSpacing=0,x.width=320,x.height=771,x.scrolling="no",x.contentDocument.write(m),x.contentDocument.close()}}}});
},{}]},{},["QCba"], null)

