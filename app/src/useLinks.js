function useLinks() {
  const links = [
    {
      title: "CHI SIAMO",
      link: [
        "Informazioni su LEGO Group",
        "Sala stampa LEGO®",
        "Dichiarazione sulla trasparenza della catena di fornitura",
        "Certificazioni dei prodotti LEGO",
        "Carriere LEGO",
        "Segnalazioni sulla conformità LEGO",
      ],
    },
    {
      title: "SUPPORTO",
      link: [
        "Contattaci",
        "Istruzioni",
        "Parti mancanti",
        "Spedizione e resi",
        "Modalità di pagamento",
        "Termini e condizioni",
        "Richiamo prodotti",
      ],
    },
    {
      title: "ATTRAZIONI",
      link: ["LEGO® House", "LEGOLAND® Parks", "LEGOLAND Discovery Center"],
    },
    {
      title: "ALTRE INFORMAZIONI",
      link: [
        "LEGO® LIFE",
        "LEGO Education",
        "LEGO Ideas",
        "LEGO Foundation",
        "Programma di affiliazione",
      ],
    },
  ];

  return links.map((item) => {
    return { title: item.title, link: item.link };
  });
}

export default useLinks;
