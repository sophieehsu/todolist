var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var acts=require("./actions");

var Listview = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:[]};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,toggleDone:function(e){
		var index = e.target.dataset.idx;
		acts.toggle(index);
	}
	,renderItem:function(item,idx) {
		return <div>
			<li data-idx={idx} onClick={this.toggleDone}
			className={item.done?"done":""}>{item.context}</li>
		</div>
	}
	,render: function() {
		return <div>
			<ol>
			{this.state.data.map(this.renderItem)}
			</ol>
		</div>;
	}
});
module.exports=Listview