import { Component } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.css']
})
export class Tab2Page {

    public list: Array<any> = new Array();
    constructor() { }

    ngOnInit() {
        console.log("채팅");
        this.list.push({name:"이봉용", content:"내용", date: new Date().getTime(), isMe:true});
        this.list.push({name:"다른사람", content:"내용", date: new Date().getTime(), isMe:false});

        this.connect();
    }

    private stompClient: any;
    private connect(): void {
        console.log(SockJS);
        var socket = new SockJS('http://localhost:8080/chat-websocket', 'test');
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, function (frame) {
            alert("연결됬다!!!!");
            console.log('Connected: ' + frame);
            this.stompClient.subscribe('/topic/greetings', function (greeting) {
                console.log(greeting);
            });
        });
    }
}
declare var SockJS: any;
declare var Stomp: any;