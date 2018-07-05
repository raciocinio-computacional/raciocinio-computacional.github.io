export class Locais {

    private i = 1;
    private g = 2;
    private f = 3;
    private c = 4;
    private o = 5;
    private gc = 6;
    private ga = 7;

    public s = {
        i: "Psicoterapia individual",
        g: "Psicoterapia de Grupo",
        f: "Psicoterapia Familiar",
        c: "Psicoterapia Conjugal",
        o: "Orientação Profissional",
        gc: "Grupo para crianças",
        ga: "Grupo para adolescentes"
    }

    public estabelecimentos = [
        {
            nome: "Instituto de Saúde da Faculdade Unijorge",
            end: "Av. Luís Viana Filho, 6775, Paralela",
            tel: "3206-8015",
            valor: "Gratuito",
            servs: [this.s.i, this.s.g]
        },
        {
            nome: "Faculdade da Cidade do Salvador (FACS)",
            end: "Av. Estados Unidos, 37, 3° andar, Comércio",
            tel: "3254-6916/6943",
            valor: "Gratuito",
            servs: [this.s.i, this.s.g, this.s.gc,]
        },
    ]
}