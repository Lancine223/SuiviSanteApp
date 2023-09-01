export class Mesure {
        public id: number;
        public NomComplet: string;
        public couleur: string;
        public date: Date;
        public poids: number;
        public taille: number;
        public pressionArterielle: string;
        public pouls: number;
        public colImc: string;
        public tsystolique: number;
        public tdiastolique: number;
        public couleurP: string;
        public imc: number;
    constructor(
        id: number,
        NomComplet: string,
        couleur: string,
        date: Date,
        poids: number,
        colImc: string,
        taille: number,
        pressionArterielle: string,
        pouls: number,
        tsystolique: number,
        tdiastolique: number,
        couleurP: string,
        imc:number
      ) { 
        this.id = id;
        this.NomComplet = NomComplet;
        this.couleur = couleur;
        this.date = date;
        this.poids = poids;
        this.taille = taille;
        this.pressionArterielle = pressionArterielle;
        this.pouls = pouls;
        this.couleurP=couleurP;
        this.colImc=colImc;
        this.tsystolique= tsystolique; 
        this.tdiastolique= tdiastolique;
        this.imc = imc
       }
    
}
