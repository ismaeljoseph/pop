var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const Schema = new mongoose.Schema({
    REF: String,
    TOUT: String,
    ACTU: String,
    ADRS: String,
    AFFE: String,
    AIRE: String,
    APPL: String,
    APRO: String,
    ARCHEO: String,
    AUTP: String,
    AUTR: String,
    CADA: String,
    CANT: String,
    COLL: String,
    COM: String,
    COOR: String,
    COORM: String,
    COPY: String,
    COUV: String,
    DATE: String,
    DBOR: String,
    DOMN: String,
    DENO: [String],
    DENQ: String,
    DEPL: String,
    DESC: String,
    DIMS: String,
    DMAJ: String,
    DMIS: String,
    DOSS: String,
    DPRO: String,
    DPT: String,
    EDIF: String,
    ELEV: String,
    ENER: String,
    ESCA: String,
    ETAG: String,
    ETAT: String,
    ETUD: String,
    GENR: String,
    HIST: String,
    HYDR: String,
    IMPL: String,
    INSEE: String,
    INTE: String,
    JATT: String,
    JDAT: String,
    LBASE2: String,
    LIEU: String,
    LOCA: String,
    MFICH: String,
    MOSA: String,
    MHPP: String,
    MICR: String,
    MURS: String,
    NBOR: String,
    NOMS: String,
    OBS: String,
    PAFF: String,
    PART: String,
    PARN: String,
    PDEN: String,
    PERS: String,
    PLAN: String,
    PLOC: String,
    PPRO: String,
    PREP: String,
    PROT: String,
    PSTA: String,
    REFE: String,
    REFO: String,
    REFP: String,
    REG: String,
    REMA: String,
    REMP: String,
    RENV: String,
    REPR: String,
    RFPA: String,
    SCLD: String,
    SCLE: String,
    SCLX: String,
    SITE: String,
    STAT: [String],
    TECH: [String],
    TICO: String,
    TOIT: String,
    TYPO: String,
    VERT: String,
    REFIM: String,
    IMG: String,
    VIDEO: String,
    DOSURL: String,
    DOSURLP: String,
    DOSADRS: String,
    LIENS: String,
    IMAGE: String,
    VISI: String,
    VOCA: String,
    VOUT: String,
    WEB: String,
    ZONE: String,
    THEM: String,
    ACMH: String,
    ACURL: String,
    WADRS: String,
    WCOM: String,
    WRENV: String,
    REFM: String,
    CONTACT: String,
    IDAGR: String,
    LMDP: String,
    PINT: String,
    DLAB: String,
    APPL: String,
}, { collection: 'merimee' })

Schema.index({ TICO: 'text', PPRO: 'text', AUTP: 'text' })
Schema.plugin(mongoosePaginate);

const object = mongoose.model("merimee", Schema)

module.exports = object;