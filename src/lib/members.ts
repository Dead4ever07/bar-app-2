export interface Member {
  name: string;
  role: string;
  photo: string;
}

const memberFiles = [
  "alexandre-martins.jpeg",
  "barbara-silva.jpeg",
  "beatriz-carvalho.jpg",
  "beatriz-santos.jpeg",
  "bruna.jpeg",
  "gonçalo-santos.jpg",
  "inês-fonseca.jpeg",
  "inês-vilaça.jpg",
  "isa-fonseca.jpeg",
  "joana-novais.jpg",
  "luís-santos.jpg",
  "margarida-novais.jpg",
  "nelson-campos.jpeg",
  "tiago-martins.jpeg"
];


const formatName = (filename: string) => {
  const nameWithoutExtension = filename.replace(/\.(png|jpe?g|svg)$/, "");
  return nameWithoutExtension
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};


const members: Member[] = memberFiles.map((file) => ({
  name: formatName(file),
  role: "", 
  photo: `/home/team/${file}`,
}));

export default members;
