import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.css']
})
export class Tab2Page {

    public list: Array<any> = new Array();
    public msg: string = '';
    private id: string = 'id';
    constructor(public http: HttpClient) { }

    ngOnInit() {
        console.log("채팅");
        this.list.push({name:"이봉용", content:"내용", date: new Date().getTime(), isMe:true});
        this.list.push({name:"다른사람", content:"내용", date: new Date().getTime(), isMe:false});
        
        this.connect();
    }

    ngOnDestroy(): void {
        console.log("의앙/?")
        this.socket.end();
    }

    private socket: any;
    private stompClient: any;
    private connect(): void {
        console.log(SockJS);
        this.socket = new SockJS('http://localhost:8080/chat-websocket',null, {headers: {'Access-Control-Allow-Origin': '*'} });
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            this.stompClient.subscribe(`/topic/greetings`, (greeting) => {
                console.log(greeting);
            });
        });
    }

    public send() {
        this.stompClient.send(`/chat/send`, {}, this.msg);
    }
}
declare var SockJS: any;
declare var Stomp: any;