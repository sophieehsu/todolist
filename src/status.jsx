var React=require("react");
var Reflux=require("reflux");
var Store=require("./store.js");

var Status=React.createClass({
	mixins:[Reflux.listenTo(Store,"onStore")]
	,getInitialState:function(){
		return {listcount:0}
	}
	,onStore:function(data) {
		var count=data.filter(function(item){
			return !item.done;
		}).length;
		this.setState({listcount:count});
	}
	,render:function(){
	return <div>待辦事項:{this.state.listcount} 項</div>
	}	
});
module.exports=Status;