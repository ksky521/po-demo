{%extends file="../layout/default.tpl"%}

{%block name="head"%}
    <title>抽奖测试</title>
    {%require name="static/sass/test.scss"%}
{%/block%}
{%block name="body"%}
<h1>hello, <span>world</span></h1>
<div id="demo">
😄
</div>

<table style="width: 300px;height: 300px">
    <tr>
        <td id="j-0">羊年行大运</td>
        <td id="j-1">iPhone6</td>
        <td id="j-2">羊年行大运</td>
    </tr>
    <tr>
        <td id="j-7">iPad Air</td>
        <td><button id="j-start">开始</button></td>
        <td id="j-3">Mac Pro</td>
    </tr>
    <tr>
        <td id="j-6">羊年行大运</td>
        <td id="j-5">小度Wifi</td>
        <td id="j-4">羊年行大运</td>
    </tr>
</table>

    {%script type="text/javascript"%}
    require.async(['static/js/test','mods/header'], function(test, header){
      var html = header();
      document.getElementById('j-start').addEventListener('click', function(){
        test();
      });
      var div = document.createElement('div');
      div.innerHTML = html;
      document.getElementById('demo').appendChild(div);
    });
  {%/script%}
    {%widget name="widget/footer/footer.tpl" title="我是title"%}
{%/block%}
