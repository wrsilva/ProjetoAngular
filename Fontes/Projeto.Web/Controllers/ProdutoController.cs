using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace projeto.web.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Produto> Produtos()
        {
            var listaProdutos = new List<Produto>();
            listaProdutos.Add(new Produto() { Preco = "15.000,00", Titulo = "Gol", UrlFoto = "https://precoscarros.com.br/wp-content/uploads/2017/09/Novo-Gol-2019-06.jpg" });
            listaProdutos.Add(new Produto() { Preco = "32.000,25", Titulo = "Punto", UrlFoto = "https://lb.assets.fiat.com/vl-picker-service/assets/00/punto-s8-wccf/images/thumbnail/equipment/EASY.png" });
            listaProdutos.Add(new Produto() { Preco = "28.000,00", Titulo = "Peugeot", UrlFoto = "http://www.peugeotpigalle.com.br/assets/images/carros/308/308.png" });
            listaProdutos.Add(new Produto() { Preco = "70.000,00", Titulo = "Golf", UrlFoto = "http://carroonline.terra.com.br//static/images/uploads/golf-tsi-txt-350_620x350.jpg" });
            listaProdutos.Add(new Produto() { Preco = "12.000,00", Titulo = "Renault Sandero", UrlFoto = "https://http2.mlstatic.com/renault-sandero-10-authentique-16v-flex-4p-manual-D_NQ_NP_780549-MLB25802836279_072017-F.jpg" });

            return listaProdutos;
        }
        public class Produto
        {
            public Guid Guid { get { return new Guid(); } }
            public string UrlFoto { get; set; }
            public string Titulo { get; set; }
            public string Preco { get; set; }
        }
    }
}