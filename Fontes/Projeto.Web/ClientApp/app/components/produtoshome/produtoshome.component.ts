import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'produtos-home',
    templateUrl: './produtoshome.component.html',
})
export class ProdutosHome {

    public produtos: produto[] | undefined;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {

        http.get(baseUrl + 'api/Produto/Produtos').subscribe(result => {
            console.log(result.json());
            this.produtos = result.json() as produto[];
        }, error => console.error(error));
    }

    toggle(produto: produto) {
        console.log(produto);
    }

}

interface produto {
    guid: string;
    urlFoto: string;
    titulo: number;
    preco: number;
    summary: string;
}
