(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(37)},2:function(e){e.exports=[{id:1,name:"Double Dragon",imageUrl:"https://cdn.vox-cdn.com/thumbor/kPUyKkEDxs3jeMlvJ3U_bWifrkc=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672255/double_dragon_2.png",count:0},{id:2,name:"Metroid",imageUrl:"https://cdn.vox-cdn.com/thumbor/t3wz132vqt0dLk-5dOpWigMTx7g=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672247/metroid.png",count:0},{id:3,name:"Zelda",imageUrl:"https://cdn.vox-cdn.com/thumbor/rJ1h8cFUwZhf9XmBA9pheM5_KpE=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11688937/zelda.png",count:0},{id:4,name:"Castlevania",imageUrl:"https://cdn.vox-cdn.com/thumbor/smgHtkurb68sQiL9b5MzVZPQMCA=/0x0:1024x896/1720x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11688933/castlevania_3.png",count:0},{id:5,name:"Super Mario Bros",imageUrl:"https://cdn.vox-cdn.com/thumbor/n91s-RSbUagfV1ENdQKj114FLw8=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672289/super_mario_bros_2.png",count:0},{id:6,name:"Double Dribble",imageUrl:"https://cdn.vox-cdn.com/thumbor/o-sXOxQO-6aNLQVO9Hw_UIu4-ZQ=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672261/double_dribble.png",count:0},{id:7,name:"Final Fantasy",imageUrl:"https://cdn.vox-cdn.com/thumbor/70FTwyjipYYlCx_dYtgyDoc3hMo=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672263/final_fantasy.png",count:0},{id:8,name:"Ninja Gaiden 2",imageUrl:"https://cdn.vox-cdn.com/thumbor/K6u4tppuHhK-cTRS1VTWMSSn6Jo=/0x0:1024x896/920x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672265/ninja_gaiden_2.png",count:0},{id:9,name:"Baloon Fight",imageUrl:"https://cdn.vox-cdn.com/thumbor/r2HWumG57rSrHWdCijS6aLZe4WQ=/0x0:1024x896/1720x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672235/balloon_fight.png",count:0},{id:10,name:"Blaster Master",imageUrl:"https://cdn.vox-cdn.com/thumbor/ZvX-nGcjXcg4vVht3waZ4-Kq840=/0x0:1024x896/1720x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672257/blaster_master.png",count:0},{id:11,name:"Contra",imageUrl:"https://cdn.vox-cdn.com/thumbor/kqqYVEk0VU6kKc9TTxDo8dAk3yU=/0x0:1024x896/1720x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11672287/contra.png",count:0},{id:12,name:"Life Force",imageUrl:"https://cdn.vox-cdn.com/thumbor/NAJlopsK2bgaU8nD-ch3ikbVX98=/0x0:1024x896/1720x0/filters:focal(0x0:1024x896):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11688917/life_force.png",count:0}]},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(4),r=a.n(n),s=(a(23),a(12)),i=a(13),l=a(16),m=a(14),d=a(17),u=(a(24),function(e){return o.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{width:"325px",height:"250px",alt:e.name,src:e.imageUrl})))}),x=(a(25),function(e){return o.a.createElement("div",{className:"wrapper container"},e.children)}),f=(a(26),function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},e.children),o.a.createElement("div",{className:"scores"},"Score: ",e.score," HighScore: ",e.highscore))}),p=a(2),h=a(39);a(27);function g(e){var t,a,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),a=e[c],e[c]=e[t],e[t]=a;return e}var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,o=new Array(c),n=0;n<c;n++)o[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={cards:p,score:0,highscore:0,gameOver:!1},a.endGame=function(){a.state.score>a.state.highscore&&a.setState({highscore:a.state.score}),a.setState({gameOver:!0}),a.state.cards.forEach(function(e){e.count=0}),a.setState({score:0})},a.clickCount=function(e){a.state.cards.find(function(t,c){if(t.id===e){if(0===p[c].count)return p[c].count=p[c].count+1,a.setState({score:a.state.score+1}),a.setState.cards=g(p),!0;a.endGame()}})},a.ResetGame=function(){a.setState({gameOver:!1}),a.setState.cards=g(p)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(x,null,o.a.createElement(f,{score:this.state.score,highscore:this.state.highscore},"Clickster"),o.a.createElement(h.a,{isOpen:this.state.gameOver,className:"alert",color:"danger"},"Game Over ",o.a.createElement("button",{className:"btn btn-primary",onClick:this.ResetGame},"Retry")),this.state.cards.map(function(t){return o.a.createElement(u,{clickCount:e.clickCount,id:t.id,key:t.id,imageUrl:t.imageUrl,name:t.name})}))}}]),t}(c.Component);r.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bbcd6769.chunk.js.map