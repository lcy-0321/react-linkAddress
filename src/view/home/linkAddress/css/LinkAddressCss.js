import styled from 'styled-components';

export const CityPickerCss = styled.div`
    .city-picker-input {
        opacity: 0 !important;
        top: -9999px;
        left: -9999px;
        position: absolute;
    }

    .city-picker-span {
        width:300px !important;
        margin-left: 40%;
        position: relative;
        display: block;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        color: #ccc;
        cursor: pointer;
    }

    .city-picker-span > .placeholder {
        color: #aaa;
    }

    .city-picker-span > .arrow {
        position: absolute;
        top: 50%;
        right: 8px;
        width: 10px;
        margin-top: -3px;
        height: 5px;
        background: url(../images/drop-arrow.png) -10px -25px no-repeat;
    }

    .city-picker-span.focus,
    .city-picker-span.open {
        border-bottom-color: #46A4FF;
    }

    .city-picker-span.open > .arrow {
        background-position: -10px -10px;
    }

    .city-picker-span > .title > span {
        color: #333;
        padding: 5px;
        border-radius: 3px;
    }

    .city-picker-span > .title > span:hover {
        background-color: #f1f8ff;
    }

    .city-picker-dropdown {
        position: absolute;
        width: 415px !important;
        left: 40% !important;
        top: 90% !important;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        z-index: 999999;
        display: none;
        min-width: 330px;
        margin-bottom: 20px;
    }

    .city-select-wrap {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    }

    .city-select-tab {
        border-bottom: 1px solid #ccc;
        background: #f0f0f0;
        font-size: 13px;
    }

    .city-select-tab > a {
        display: inline-block;
        padding: 8px 22px;
        border-left: 1px solid #ccc;
        border-bottom: 1px solid transparent;
        color: #4D4D4D;
        text-align: center;
        outline: 0;
        text-decoration: none;
        cursor: pointer;
        font-size: 14px;
        margin-bottom: -1px;
    }

    .city-select-tab > a.active {
        background: #fff;
        border-bottom: 1px solid #fff;
        color: #46A4FF;
    }

    .city-select-tab > a:first-child {
        border-left: none;
    }

    .city-select-tab > a:last-child.active {
        border-right: 1px solid #ccc;
    }

    .city-select-content {
        width: 100%;
        min-height: 10px;
        background-color: #fff;
        padding: 10px 15px;
        box-sizing: border-box;
    }

    .city-select {
        font-size: 13px;
    }

    .city-select dl {
        line-height: 2;
        clear: both;
        padding: 3px 0;
        margin: 0;
    }

    .city-select dt {
        position: absolute;
        width: 2.5em;
        font-weight:bolder;
        text-align: right;
        line-height: 2;
        color: #096dd9;
    }

    .city-select dd {
        margin-left: 0;
        line-height: 2;
        text-align: left;
    }

    .city-select.province dd {
        margin-left: 3em;
    }

    .city-select a {
        display: inline-block;
        padding: 0 10px;
        outline: 0;
        text-decoration: none;
        white-space: nowrap;
        margin-right: 2px;
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }

    .city-select a:hover,
    .city-select a:focus {
        background-color: #f1f8ff;
        border-radius: 2px;
        color: #46A4FF;
    }

    .city-select a.active {
        background-color: #46A4FF;
        color: #fff;
        border-radius: 2px;
    }
    /* Basic style
    * -------------------------------------------------------------------------- */

    /* Header */

    .docs-header {
        margin-bottom: 0;
    }

    .navbar-toggle:hover,
    .navbar-toggle:focus {
        border-color: #337ab7;
    }

    .navbar-toggle .icon-bar {
        background-color: #337ab7;
    }

    /* Jumbotron */

    .docs-jumbotron {
        background-color: #3f51b5;
        color: #fff;
    }

    .docs-jumbotron .version {
        font-size: 14px;
        color: #fff;
        filter: alpha(opacity=50);
        opacity: 0.5;
    }

    .docs-carbonads-container {
        position: relative;
    }

    .docs-carbonads {
        max-width: 350px;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        overflow: hidden;
    }

    .carbon-wrap {
        overflow: hidden;
    }

    .carbon-img {
        clear: left;
        float: left;
        display: block;
    }

    .carbon-text,
    .carbon-poweredby {
        display: block;
        margin-left: 140px;
    }

    .carbon-text,
    .carbon-text:hover,
    .carbon-text:focus {
        color: #fff;
        text-decoration: none;
    }

    .carbon-poweredby,
    .carbon-poweredby:hover,
    .carbon-poweredby:focus {
        color: #ddd;
        text-decoration: none;
    }

    @media (min-width: 992px) {
        .docs-carbonads {
            position: absolute;
            right: 0;
            bottom: 5px;
        }
    }

    /* Content */

    .dropzone {
        padding: 150px 15px;
        border: 1px dashed #eee;
        background-color: #fcfcfc;
        text-align: center;
    }

    .dropzone > input {
        display: inline-block;
        vertical-align: top;
    }

    .logs {
        height: 320px;
        padding: 10px 15px;
        border: 1px solid #eee;
        background-color: #fcfcfc;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .logs > p {
        margin-bottom: 5px;
        color: #666;
    }

    /* Footer */

    .docs-footer {
        overflow: hidden;
        margin-bottom: 300px;
    }

    .hearts {
        position: relative;
        display: block;
        width: 100%;
        height: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #ddd;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
    }

    .hearts:hover {
        color: #ff4136;
    }

    .hearts:before {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        display: block;
        height: 0;
        border-top: 1px solid #eee;
        content: " ";
    }

    .hearts:after {
        position: relative;
        z-index: 1;
        padding-left: 8px;
        padding-right: 8px;
        background-color: #fff;
        content: "♥";
    }

    input {
        min-width: 360px;
    }

    .dropup {
        display: inline-block;
    }
    .prettyprint {
        margin-bottom: 0;
        padding: 15px !important;
        border: 1px solid #ddd !important;
    }
    .fpEglg .city-select dt{
        color: #096dd9;
        font-weight: bolder;
    }
    .fpEglg .city-select a{
        min-width: 60px;
    }
    .dt{

    }
`;
