import { Component, OnInit } from '@angular/core';
import { Feed2jsonService } from '../../services/feed2json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // textoHtmlMostrar: string = "&lt;p style=&quot;text-align: justify;&quot;&gt;&lt;strong&gt;&quot;De no atenderse las medidas sanitarias y de seguir a la alza los contagios de Covid-19, el sem&aacute;foro amarillo puede convertirse en naranja o en rojo, si queremos avanzar al sem&aacute;foro verde, tenemos que poner un mayor esfuerzo, estamos a prueba todos&quot;,&lt;/strong&gt; enfatiz&oacute; el secretario de Salud.&lt;/p&gt;";
  // txt2: string = `<p style="text-align: justify;"><strong>"De no atenderse las medidas sanitarias y de seguir a la alza los contagios de Covid-19, el semáforo amarillo puede convertirse en naranja o en rojo, si queremos avanzar al semáforo verde, tenemos que poner un mayor esfuerzo, estamos a prueba todos",</strong> enfatizó el secretario de Salud</p>`;
  items:string[] = [];
  txtToHtml: Document;
  constructor( private _feed2json: Feed2jsonService ) { 
   }
  
  ngOnInit(): void {
    this._feed2json.getRss().subscribe(
        (resp:any[]) =>{
          resp.forEach( item =>{
            this.items.push(item);            
          })
          console.log( this.items );
        }
      );
  }

}
