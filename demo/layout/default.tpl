<!DOCTYPE html>
{%if $smarty.get.rendermode eq 'tag'%}
    {%html rendermode="tag" framework="common:js/mod.js"%}
{%else%}
    {%html rendermode="combo" framework="common:js/mod"%}
{%/if%}
{%head%}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    {%block name="head"%}{%/block%}
{%/head%}
{%body ontouchstart=""%}
    {%block name="body"%}{%/block%}
{%/body%}

{%/html%}
