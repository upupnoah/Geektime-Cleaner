// ==UserScript==
// @name         Geektime-Cleaner
// @namespace    geektime.removeads
// @version      1.5
// @description  Remove specific elements on Geektime website
// @license      MIT
// @author       upupnoah
// @match        https://time.geekbang.org/*
// @homepage     https://github.com/upupnoah/Geektime-Cleaner
// @grant        none
// ==/UserScript==

// MIT License
/*
MIT License

Copyright (c) [year] [copyright holders]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function() {
    'use strict';

    // Remove specific elements
    function removeElements() {
        var aiButton = document.querySelector('.AiButton_aiButton_1pFq4');
        var leads = document.querySelector('div[data-v-2f5f09d4].leads');
        var aiChat = document.querySelector('div[data-v-72acb7bf].draggable');

        if (aiButton) {
            aiButton.remove();
        }

        if (leads) {
            leads.remove();
        }

        if (aiChat) {
            aiChat.remove();
        }
    }

    // Run the script
    removeElements();

    // Observe DOM changes and remove elements dynamically
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                removeElements();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();