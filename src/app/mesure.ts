export class Mesure {
        public id: number;
        public NomComplet: string;
        public date: Date;
        public poids: number;
        public taille: number;
        public pressionArterielle: string;
        public pouls: number;
        public imc: number;
    constructor(
        id: number,
        NomComplet: string,
        date: Date,
        poids: number,
        taille: number,
        pressionArterielle: string,
        pouls: number,
        imc:number
      ) { 
        this.id = id;
        this.NomComplet = NomComplet;
        this.date = date;
        this.poids = poids;
        this.taille = taille;
        this.pressionArterielle = pressionArterielle;
        this.pouls = pouls;
        this.imc = imc
       }
    
}
