export interface RenderActorSheet5eData {
  owner: boolean;
  limited: boolean;
  options: Options;
  editable: boolean;
  cssClass: string;
  isCharacter: boolean;
  isNPC: boolean;
  isVehicle: boolean;
  config: Config;
  actor: Actor;
  data: Data;
  items: any[];
  labels: Labels;
  filters: Filters;
  movement: Movement2;
  senses: Permissions;
  inventory: Inventory[];
  spellbook: any[];
  preparedSpells: number;
  features: Feature[];
  effects: Effects;
  warnings: any[];
  resources: Primary[];
  disableExperience: boolean;
  classLabels: string;
  multiclassLabels: string;
  weightUnit: string;
}

interface Effects {
  temporary: Temporary;
  passive: Temporary;
  inactive: Temporary;
  suppressed: Suppressed;
}

interface Suppressed {
  type: string;
  label: string;
  effects: any[];
  info: string[];
  hidden: boolean;
}

interface Temporary {
  type: string;
  label: string;
  effects: any[];
}

interface Feature {
  label: string;
  items: any[];
  hasActions: boolean;
  dataset: Dataset2;
  isClass?: boolean;
}

interface Dataset2 {
  type: string;
  'activation.type'?: string;
}

interface Inventory {
  label: string;
  items: any[];
  dataset: Dataset;
}

interface Dataset {
  type: string;
}

interface Movement2 {
  primary: string;
  special: string;
}

interface Filters {
  inventory: Permissions;
  spellbook: Permissions;
  features: Permissions;
  effects: Permissions;
}

interface Labels {
  currencies: Currencies2;
  proficiency: string;
}

interface Currencies2 {
  pp: string;
  gp: string;
  ep: string;
  sp: string;
  cp: string;
}

interface Actor {
  _id: string;
  name: string;
  type: string;
  img: string;
  data: Data;
  token: Token;
  items: any[];
  effects: any[];
  folder: string;
  sort: number;
  permission: Permission;
  flags: Permissions;
}

interface Permission {
  default: number;
  av0mHSNIjtVdC2Q6: number;
}

interface Token {
  name: string;
  displayName: number;
  actorLink: boolean;
  width: number;
  height: number;
  scale: number;
  mirrorX: boolean;
  mirrorY: boolean;
  lockRotation: boolean;
  rotation: number;
  alpha: number;
  vision: boolean;
  dimSight: number;
  brightSight: number;
  sightAngle: number;
  light: Light;
  disposition: number;
  displayBars: number;
  bar1: Bar1;
  bar2: Bar2;
  flags: Permissions;
  randomImg: boolean;
  img: string;
  actorId: string;
}

interface Bar2 {
  attribute?: any;
}

interface Bar1 {
  attribute: string;
}

interface Light {
  alpha: number;
  angle: number;
  bright: number;
  coloration: number;
  dim: number;
  gradual: boolean;
  luminosity: number;
  saturation: number;
  contrast: number;
  shadows: number;
  animation: Animation;
  darkness: Darkness;
}

interface Darkness {
  min: number;
  max: number;
}

interface Animation {
  speed: number;
  intensity: number;
  reverse: boolean;
}

interface Data {
  abilities: Abilities3;
  attributes: Attributes3;
  details: Details3;
  traits: Traits;
  currency: Currency;
  skills: Skills3;
  spells: Spells;
  bonuses: Bonuses3;
  resources: Resources;
  prof: CheckProf;
  classes: Permissions;
}

interface Resources {
  primary: Primary;
  secondary: Primary;
  tertiary: Primary;
}

interface Primary {
  sr: number;
  lr: number;
  name: string;
  placeholder: string;
}

interface Bonuses3 {
  mwak: Mwak;
  rwak: Mwak;
  msak: Mwak;
  rsak: Mwak;
  abilities: Abilities4;
  spell: Spell;
}

interface Spell {
  dc: string;
}

interface Abilities4 {
  check: string;
  save: string;
  skill: string;
}

interface Mwak {
  attack: string;
  damage: string;
}

interface Spells {
  spell1: Spell1;
  spell2: Spell1;
  spell3: Spell1;
  spell4: Spell1;
  spell5: Spell1;
  spell6: Spell1;
  spell7: Spell1;
  spell8: Spell1;
  spell9: Spell1;
  pact: Pact;
}

interface Pact {
  value: number;
  override?: any;
  max: number;
  level: number;
}

interface Spell1 {
  value: number;
  override?: any;
  max: number;
}

interface Skills3 {
  acr: Acr;
  ani: Acr;
  arc: Acr;
  ath: Acr;
  dec: Acr;
  his: Acr;
  ins: Acr;
  itm: Acr;
  inv: Acr;
  med: Acr;
  nat: Acr;
  prc: Acr;
  prf: Acr;
  per: Acr;
  rel: Acr;
  slt: Acr;
  ste: Acr;
  sur: Acr;
}

interface Acr {
  value: number;
  ability: string;
  bonuses: Bonuses2;
  bonus: number;
  mod: number;
  prof: CheckProf;
  proficient: number;
  total: number;
  passive: number;
  icon: string;
  hover: string;
  label: string;
  baseValue: number;
}

interface Bonuses2 {
  check: string;
  passive: string;
}

interface Currency {
  pp: number;
  gp: number;
  ep: number;
  sp: number;
  cp: number;
}

interface Traits {
  size: string;
  di: Di;
  dr: Di;
  dv: Di;
  ci: Di;
  languages: Di;
  weaponProf: Di;
  armorProf: Di;
  toolProf: Di;
}

interface Di {
  value: any[];
  custom: string;
  selected: Permissions;
  cssClass: string;
}

interface Details3 {
  biography: Biography;
  alignment: string;
  race: string;
  background: string;
  originalClass: string;
  xp: Xp;
  appearance: string;
  trait: string;
  ideal: string;
  bond: string;
  flaw: string;
  level: number;
}

interface Xp {
  value: number;
  min: number;
  max: number;
  pct?: any;
}

interface Biography {
  value: string;
  public: string;
}

interface Attributes3 {
  ac: Ac3;
  hp: Hp;
  init: Init;
  movement: Movement;
  senses: Senses2;
  spellcasting: string;
  death: Death;
  exhaustion: number;
  inspiration: number;
  hd: number;
  prof: number;
  encumbrance: Encumbrance2;
  spelldc: number;
}

interface Encumbrance2 {
  value: number;
  max: number;
  pct: number;
  encumbered: boolean;
}

interface Death {
  success: number;
  failure: number;
}

interface Senses2 {
  darkvision: number;
  blindsight: number;
  tremorsense: number;
  truesight: number;
  units: string;
  special: string;
}

interface Movement {
  burrow: number;
  climb: number;
  fly: number;
  swim: number;
  walk: number;
  units: string;
  hover: boolean;
}

interface Init {
  value: number;
  bonus: number;
  mod: number;
  prof: CheckProf;
  total: number;
}

interface Hp {
  value: number;
  min: number;
  max: number;
}

interface Ac3 {
  flat?: any;
  calc: string;
  formula: string;
  base: number;
  cover: number;
  bonus: number;
  shield: number;
  warnings: any[];
  dex: number;
  value: number;
}

interface Abilities3 {
  str: Str;
  dex: Str;
  con: Str;
  int: Str;
  wis: Str;
  cha: Str;
}

interface Str {
  value: number;
  proficient: number;
  bonuses: Bonuses;
  mod: number;
  checkProf: CheckProf;
  saveBonus: number;
  saveProf: CheckProf;
  checkBonus: number;
  save: number;
  dc: number;
  icon: string;
  hover: string;
  label: string;
  baseProf: number;
}

interface CheckProf {
  _baseProficiency: number;
  multiplier: number;
  rounding: string;
}

interface Bonuses {
  check: string;
  save: string;
}

interface Config {
  ASCII: string;
  abilities: Abilities;
  abilityAbbreviations: Abilities;
  alignments: Alignments;
  attunementTypes: AttunementTypes;
  attunements: Attunements;
  weaponProficiencies: WeaponProficiencies;
  weaponProficienciesMap: WeaponProficienciesMap;
  weaponIds: WeaponIds;
  toolTypes: ToolTypes;
  toolProficiencies: ToolProficiencies;
  toolIds: ToolIds;
  timePeriods: TimePeriods;
  abilityActivationTypes: AbilityActivationTypes;
  abilityConsumptionTypes: AbilityConsumptionTypes;
  actorSizes: ActorSizes;
  tokenSizes: TokenSizes;
  tokenHPColors: TokenHPColors;
  creatureTypes: CreatureTypes;
  itemActionTypes: ItemActionTypes;
  itemCapacityTypes: ItemCapacityTypes;
  itemRarity: ItemRarity;
  limitedUsePeriods: LimitedUsePeriods;
  armorTypes: ArmorTypes;
  miscEquipmentTypes: MiscEquipmentTypes;
  equipmentTypes: EquipmentTypes;
  vehicleTypes: VehicleTypes;
  armorProficiencies: ArmorProficiencies;
  armorProficienciesMap: ArmorProficienciesMap;
  armorIds: ArmorIds;
  shieldIds: ShieldIds;
  armorClasses: ArmorClasses;
  consumableTypes: ConsumableTypes;
  currencies: Currencies;
  damageTypes: DamageTypes;
  damageResistanceTypes: DamageResistanceTypes;
  movementTypes: MovementTypes;
  movementUnits: MovementUnits;
  distanceUnits: DistanceUnits;
  encumbrance: Encumbrance;
  targetTypes: TargetTypes;
  areaTargetTypes: AreaTargetTypes;
  healingTypes: HealingTypes;
  hitDieTypes: string[];
  senses: Senses;
  skills: Skills;
  spellPreparationModes: SpellPreparationModes;
  spellUpcastModes: string[];
  spellProgression: SpellProgression;
  spellScalingModes: SpellScalingModes;
  weaponTypes: WeaponTypes;
  weaponProperties: WeaponProperties;
  spellComponents: SpellComponents;
  spellSchools: SpellSchools;
  spellLevels: SpellLevels;
  spellScrollIds: SpellLevels;
  sourcePacks: SourcePacks;
  SPELL_SLOT_TABLE: number[][];
  polymorphSettings: PolymorphSettings;
  proficiencyLevels: ProficiencyLevels;
  cover: Cover;
  trackableAttributes: TrackableAttributes;
  consumableResources: ConsumableResources;
  conditionTypes: ConditionTypes;
  languages: Languages;
  CHARACTER_EXP_LEVELS: number[];
  CR_EXP_LEVELS: number[];
  classFeatures: ClassFeatures;
  characterFlags: CharacterFlags;
  allowedActorFlags: string[];
}

interface CharacterFlags {
  diamondSoul: DiamondSoul;
  elvenAccuracy: DiamondSoul;
  halflingLucky: DiamondSoul;
  initiativeAdv: DiamondSoul;
  initiativeAlert: DiamondSoul;
  jackOfAllTrades: DiamondSoul;
  observantFeat: ObservantFeat;
  powerfulBuild: DiamondSoul;
  reliableTalent: DiamondSoul;
  remarkableAthlete: RemarkableAthlete;
  weaponCriticalThreshold: WeaponCriticalThreshold;
  spellCriticalThreshold: WeaponCriticalThreshold;
  meleeCriticalDamageDice: WeaponCriticalThreshold;
}

interface WeaponCriticalThreshold {
  name: string;
  hint: string;
  section: string;
  placeholder: number;
}

interface RemarkableAthlete {
  name: string;
  hint: string;
  abilities: string[];
  section: string;
}

interface ObservantFeat {
  name: string;
  hint: string;
  skills: string[];
  section: string;
}

interface DiamondSoul {
  name: string;
  hint: string;
  section: string;
}

interface ClassFeatures {
  barbarian: Barbarian;
  bard: Bard;
  cleric: Cleric;
  druid: Druid;
  fighter: Fighter;
  monk: Monk;
  paladin: Paladin;
  ranger: Ranger;
  rogue: Rogue;
  sorcerer: Sorcerer;
  warlock: Warlock;
  wizard: Wizard;
}

interface Wizard {
  subclasses: Subclasses12;
  features: Features8;
}

interface Subclasses12 {
  'school-of-abjuration': Collegeofglamour;
  'school-of-bladesinging': Collegeofglamour;
  'school-of-chronurgy-magic': Collegeofglamour;
  'school-of-conjuration': Collegeofglamour;
  'school-of-divination': Collegeofglamour;
  'school-of-enchantment': Collegeofglamour;
  'school-of-evocation': Schoolofevocation;
  'school-of-graviturgy-magic': Collegeofglamour;
  'school-of-illusion': Collegeofglamour;
  'school-of-necromancy': Collegeofglamour;
  'school-of-transmutation': Collegeofglamour;
  'school-of-war-magic': Collegeofglamour;
}

interface Schoolofevocation {
  label: string;
  source: string;
  features: Features23;
}

interface Features23 {
  '2': string[];
  '6': string[];
  '10': string[];
  '14': string[];
}

interface Warlock {
  subclasses: Subclasses11;
  features: Features22;
}

interface Features22 {
  '1': string[];
  '2': string[];
  '3': string[];
  '11': string[];
  '13': string[];
  '15': string[];
  '17': string[];
  '20': string[];
}

interface Subclasses11 {
  'the-archfey': Collegeofglamour;
  'the-celestial': Collegeofglamour;
  'the-fiend': Thefiend;
  'the-hexblade': Collegeofglamour;
  'the-oldone': Collegeofglamour;
  'the-undying': Collegeofglamour;
}

interface Thefiend {
  label: string;
  source: string;
  features: Features21;
}

interface Features21 {
  '1': string[];
  '6': string[];
  '10': string[];
  '14': string[];
}

interface Sorcerer {
  subclasses: Subclasses10;
  features: Features20;
}

interface Features20 {
  '1': string[];
  '2': string[];
  '3': string[];
  '20': string[];
}

interface Subclasses10 {
  'draconic-bloodline': Draconicbloodline;
  'divine-soul': Collegeofglamour;
  pyromancer: Collegeofglamour;
  runechild: Collegeofglamour;
  'shadow-magic': Collegeofglamour;
  'storm-sorcery': Collegeofglamour;
  'wild-magic': Collegeofglamour;
}

interface Draconicbloodline {
  label: string;
  source: string;
  features: Features19;
}

interface Features19 {
  '1': string[];
  '6': string[];
  '14': string[];
  '18': string[];
}

interface Rogue {
  subclasses: Subclasses9;
  features: Features18;
}

interface Features18 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '7': string[];
  '11': string[];
  '14': string[];
  '15': string[];
  '18': string[];
  '20': string[];
}

interface Subclasses9 {
  'arcane-trickster': Collegeofglamour;
  assassin: Collegeofglamour;
  inquisitive: Collegeofglamour;
  mastermind: Collegeofglamour;
  scout: Collegeofglamour;
  swashbuckler: Collegeofglamour;
  thief: Thief;
}

interface Thief {
  label: string;
  source: string;
  features: Features17;
}

interface Features17 {
  '3': string[];
  '9': string[];
  '13': string[];
  '17': string[];
}

interface Ranger {
  subclasses: Subclasses8;
  features: Features16;
}

interface Features16 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '8': string[];
  '10': string[];
  '14': string[];
  '18': string[];
  '20': string[];
}

interface Subclasses8 {
  'beast-master': Collegeofglamour;
  'gloom-stalker': Collegeofglamour;
  'horizon-walker': Collegeofglamour;
  hunter: Hunter;
  'monster-slayer': Collegeofglamour;
}

interface Hunter {
  label: string;
  source: string;
  features: Features15;
}

interface Features15 {
  '3': string[];
  '7': string[];
  '11': string[];
  '15': string[];
}

interface Paladin {
  subclasses: Subclasses7;
  features: Features14;
}

interface Features14 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '6': string[];
  '10': string[];
  '11': string[];
  '14': string[];
}

interface Subclasses7 {
  'oath-of-the-ancients': Collegeofglamour;
  'oath-of-conquest': Collegeofglamour;
  'oath-of-the-crown': Collegeofglamour;
  'oath-of-devotion': Oathofdevotion;
  oathbreaker: Collegeofglamour;
  'oath-of-redemption': Collegeofglamour;
  'oath-of-vengeance': Collegeofglamour;
}

interface Oathofdevotion {
  label: string;
  source: string;
  features: Features13;
}

interface Features13 {
  '3': string[];
  '5': string[];
  '9': string[];
  '13': string[];
  '17': string[];
}

interface Monk {
  subclasses: Subclasses6;
  features: Features12;
}

interface Features12 {
  '1': string[];
  '2': string[];
  '3': string[];
  '4': string[];
  '5': string[];
  '6': string[];
  '7': string[];
  '10': string[];
  '13': string[];
  '14': string[];
  '15': string[];
  '18': string[];
  '20': string[];
}

interface Subclasses6 {
  'way-of-the-cobalt-soul': Collegeofglamour;
  'way-of-the-drunken-master': Collegeofglamour;
  'way-of-the-elements': Collegeofglamour;
  'way-of-the-kensei': Collegeofglamour;
  'way-of-the-long-death': Collegeofglamour;
  'way-of-the-open-hand': Wayoftheopenhand;
  'way-of-the-shadow': Collegeofglamour;
  'way-of-the-sun-soul': Collegeofglamour;
}

interface Wayoftheopenhand {
  label: string;
  source: string;
  features: Features11;
}

interface Features11 {
  '3': string[];
  '6': string[];
  '11': string[];
  '17': string[];
}

interface Fighter {
  subclasses: Subclasses5;
  features: Features10;
}

interface Features10 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '9': string[];
}

interface Subclasses5 {
  'arcane-archer': Collegeofglamour;
  banneret: Collegeofglamour;
  'battle-master': Collegeofglamour;
  cavalier: Collegeofglamour;
  champion: Champion;
  'echo-knight': Collegeofglamour;
  'eldritch-knight': Collegeofglamour;
  samurai: Collegeofglamour;
}

interface Champion {
  label: string;
  source: string;
  features: Features9;
}

interface Features9 {
  '3': string[];
  '7': string[];
  '10': string[];
  '15': string[];
  '18': string[];
}

interface Druid {
  subclasses: Subclasses4;
  features: Features8;
}

interface Features8 {
  '1': string[];
  '2': string[];
  '18': string[];
  '20': string[];
}

interface Subclasses4 {
  'circle-of-dreams': Collegeofglamour;
  'circle-of-the-land': Circleoftheland;
  'circle-of-the-moon': Collegeofglamour;
  'circle-of-the-shepherd': Collegeofglamour;
  'circle-of-spores': Collegeofglamour;
}

interface Circleoftheland {
  label: string;
  source: string;
  features: Features7;
}

interface Features7 {
  '2': string[];
  '3': string[];
  '6': string[];
  '10': string[];
  '14': string[];
}

interface Cleric {
  subclasses: Subclasses3;
  features: Features6;
}

interface Features6 {
  '1': string[];
  '2': string[];
  '5': string[];
  '10': string[];
}

interface Subclasses3 {
  'ambition-domain': Collegeofglamour;
  'arcana-domain': Collegeofglamour;
  'blood-domain': Collegeofglamour;
  'death-domain': Collegeofglamour;
  'forge-domain': Collegeofglamour;
  'grave-domain': Collegeofglamour;
  'knowledge-domain': Collegeofglamour;
  'life-domain': Lifedomain;
  'light-domain': Collegeofglamour;
  'nature-domain': Collegeofglamour;
  'order-domain': Collegeofglamour;
  'solidarity-domain': Collegeofglamour;
  'strength-domain': Collegeofglamour;
  'tempest-domain': Collegeofglamour;
  'trickery-domain': Collegeofglamour;
  'war-domain': Collegeofglamour;
  'zeal-domain': Collegeofglamour;
}

interface Lifedomain {
  label: string;
  source: string;
  features: Features5;
}

interface Features5 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '6': string[];
  '7': string[];
  '8': string[];
  '9': string[];
  '17': string[];
}

interface Bard {
  subclasses: Subclasses2;
  features: Features4;
}

interface Features4 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '6': string[];
  '10': string[];
  '20': string[];
}

interface Subclasses2 {
  'college-of-glamour': Collegeofglamour;
  'college-of-lore': Collegeoflore;
  'college-of-swords': Collegeofglamour;
  'college-of-valor': Collegeofglamour;
  'college-of-whispers': Collegeofglamour;
}

interface Collegeoflore {
  label: string;
  source: string;
  features: Features3;
}

interface Features3 {
  '3': string[];
  '6': string[];
  '14': string[];
}

interface Collegeofglamour {
  label: string;
  source: string;
  features: Permissions;
}

interface Barbarian {
  subclasses: Subclasses;
  features: Features2;
}

interface Features2 {
  '1': string[];
  '2': string[];
  '3': string[];
  '5': string[];
  '7': string[];
  '9': string[];
  '11': string[];
  '15': string[];
  '18': string[];
  '20': string[];
}

interface Subclasses {
  'path-of-the-ancestral-guardian': Pathoftheancestralguardian;
  'path-of-the-battlerager': Pathoftheancestralguardian;
  'path-of-the-berserker': Pathoftheberserker;
  'path-of-the-juggernaut': Pathoftheancestralguardian;
  'path-of-the-storm-herald': Pathoftheancestralguardian;
  'path-of-the-totem-warrior': Pathoftheancestralguardian;
  'path-of-the-zealot': Pathoftheancestralguardian;
}

interface Pathoftheberserker {
  label: string;
  source: string;
  features: Features;
}

interface Features {
  '3': string[];
  '6': string[];
  '10': string[];
  '14': string[];
}

interface Pathoftheancestralguardian {
  label: string;
  source: string;
}

interface Languages {
  aarakocra: string;
  abyssal: string;
  aquan: string;
  auran: string;
  celestial: string;
  common: string;
  deep: string;
  draconic: string;
  druidic: string;
  dwarvish: string;
  elvish: string;
  giant: string;
  gith: string;
  gnoll: string;
  gnomish: string;
  goblin: string;
  halfling: string;
  ignan: string;
  infernal: string;
  orc: string;
  primordial: string;
  sylvan: string;
  terran: string;
  cant: string;
  undercommon: string;
}

interface ConditionTypes {
  blinded: string;
  charmed: string;
  deafened: string;
  diseased: string;
  exhaustion: string;
  frightened: string;
  grappled: string;
  incapacitated: string;
  invisible: string;
  paralyzed: string;
  petrified: string;
  poisoned: string;
  prone: string;
  restrained: string;
  stunned: string;
  unconscious: string;
}

interface ConsumableResources {
  item: Item;
  currency: boolean;
  details: Details2;
  abilities: Abilities2;
  attributes: Attributes2;
}

interface Attributes2 {
  senses: boolean;
  movement: boolean;
  ac: Ac2;
}

interface Ac2 {
  flat: boolean;
}

interface Details2 {
  xp: Ac;
}

interface Item {
  quantity: boolean;
  weight: boolean;
  duration: Ac;
  armor: Ac;
  target: boolean;
  range: boolean;
  save: Save;
}

interface Save {
  dc: boolean;
}

interface TrackableAttributes {
  attributes: Attributes;
  details: Details;
  skills: Skills2;
  abilities: Abilities2;
}

interface Abilities2 {
  '*': Ac;
}

interface Skills2 {
  '*': _;
}

interface _ {
  passive: boolean;
}

interface Details {
  cr: boolean;
  spellLevel: boolean;
  xp: Ac;
}

interface Attributes {
  ac: Ac;
  init: Ac;
  movement: boolean;
  senses: boolean;
  spelldc: boolean;
  spellLevel: boolean;
}

interface Ac {
  value: boolean;
}

interface Cover {
  '0': string;
  '1': string;
  '0.5': string;
  '0.75': string;
}

interface ProficiencyLevels {
  '0': string;
  '1': string;
  '2': string;
  '0.5': string;
}

interface PolymorphSettings {
  keepBio: string;
  keepItems: string;
  keepFeats: string;
  keepMental: string;
  keepPhysical: string;
  keepClass: string;
  keepSaves: string;
  keepSkills: string;
  keepSpells: string;
  keepVision: string;
  mergeSaves: string;
  mergeSkills: string;
}

interface SourcePacks {
  ITEMS: string;
}

interface SpellLevels {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
}

interface SpellSchools {
  abj: string;
  con: string;
  div: string;
  enc: string;
  evo: string;
  ill: string;
  nec: string;
  trs: string;
}

interface SpellComponents {
  V: string;
  S: string;
  M: string;
}

interface WeaponProperties {
  ada: string;
  amm: string;
  fin: string;
  fir: string;
  foc: string;
  hvy: string;
  lgt: string;
  lod: string;
  mgc: string;
  rch: string;
  rel: string;
  ret: string;
  sil: string;
  spc: string;
  thr: string;
  two: string;
  ver: string;
}

interface WeaponTypes {
  simpleM: string;
  simpleR: string;
  martialM: string;
  martialR: string;
  natural: string;
  improv: string;
  siege: string;
}

interface SpellScalingModes {
  cantrip: string;
  none: string;
  level: string;
}

interface SpellProgression {
  none: string;
  full: string;
  half: string;
  third: string;
  pact: string;
  artificer: string;
}

interface SpellPreparationModes {
  prepared: string;
  pact: string;
  always: string;
  atwill: string;
  innate: string;
}

interface Skills {
  acr: string;
  ani: string;
  arc: string;
  ath: string;
  dec: string;
  his: string;
  ins: string;
  itm: string;
  inv: string;
  med: string;
  nat: string;
  prc: string;
  prf: string;
  per: string;
  rel: string;
  slt: string;
  ste: string;
  sur: string;
}

interface Senses {
  blindsight: string;
  darkvision: string;
  tremorsense: string;
  truesight: string;
}

interface HealingTypes {
  healing: string;
  temphp: string;
}

interface AreaTargetTypes {
  cone: string;
  cube: string;
  cylinder: string;
  line: string;
  radius: string;
  sphere: string;
  square: string;
  wall: string;
}

interface TargetTypes {
  ally: string;
  cone: string;
  creature: string;
  cube: string;
  cylinder: string;
  enemy: string;
  line: string;
  none: string;
  object: string;
  radius: string;
  self: string;
  space: string;
  sphere: string;
  square: string;
  wall: string;
}

interface Encumbrance {
  currencyPerWeight: CurrencyPerWeight;
  strMultiplier: CurrencyPerWeight;
  vehicleWeightMultiplier: CurrencyPerWeight;
}

interface CurrencyPerWeight {
  imperial: number;
  metric: number;
}

interface DistanceUnits {
  none: string;
  self: string;
  touch: string;
  spec: string;
  any: string;
  ft: string;
  mi: string;
  m: string;
  km: string;
}

interface MovementUnits {
  ft: string;
  mi: string;
  m: string;
  km: string;
}

interface MovementTypes {
  burrow: string;
  climb: string;
  fly: string;
  swim: string;
  walk: string;
}

interface DamageResistanceTypes {
  acid: string;
  bludgeoning: string;
  cold: string;
  fire: string;
  force: string;
  lightning: string;
  necrotic: string;
  physical: string;
  piercing: string;
  poison: string;
  psychic: string;
  radiant: string;
  slashing: string;
  thunder: string;
}

interface DamageTypes {
  acid: string;
  bludgeoning: string;
  cold: string;
  fire: string;
  force: string;
  lightning: string;
  necrotic: string;
  piercing: string;
  poison: string;
  psychic: string;
  radiant: string;
  slashing: string;
  thunder: string;
}

interface Currencies {
  pp: Pp;
  gp: Gp;
  ep: Gp;
  sp: Gp;
  cp: Gp;
}

interface Gp {
  label: string;
  abbreviation: string;
  conversion: Conversion;
}

interface Conversion {
  into: string;
  each: number;
}

interface Pp {
  label: string;
  abbreviation: string;
}

interface ConsumableTypes {
  ammo: string;
  food: string;
  poison: string;
  potion: string;
  rod: string;
  scroll: string;
  trinket: string;
  wand: string;
}

interface ArmorClasses {
  flat: Flat;
  natural: Flat;
  default: Flat;
  mage: Flat;
  draconic: Flat;
  unarmoredMonk: Flat;
  unarmoredBarb: Flat;
  custom: Custom;
}

interface Custom {
  label: string;
}

interface Flat {
  label: string;
  formula: string;
}

interface ShieldIds {
  shield: string;
}

interface ArmorIds {
  breastplate: string;
  chainmail: string;
  chainshirt: string;
  halfplate: string;
  hide: string;
  leather: string;
  padded: string;
  plate: string;
  ringmail: string;
  scalemail: string;
  splint: string;
  studded: string;
}

interface ArmorProficienciesMap {
  natural: boolean;
  clothing: boolean;
  light: string;
  medium: string;
  heavy: string;
  shield: string;
}

interface ArmorProficiencies {
  lgt: string;
  med: string;
  hvy: string;
  shl: string;
}

interface VehicleTypes {
  air: string;
  land: string;
  water: string;
}

interface EquipmentTypes {
  clothing: string;
  heavy: string;
  light: string;
  medium: string;
  natural: string;
  shield: string;
  trinket: string;
  vehicle: string;
}

interface MiscEquipmentTypes {
  clothing: string;
  trinket: string;
  vehicle: string;
}

interface ArmorTypes {
  light: string;
  medium: string;
  heavy: string;
  natural: string;
  shield: string;
}

interface LimitedUsePeriods {
  sr: string;
  lr: string;
  day: string;
  charges: string;
}

interface ItemRarity {
  common: string;
  uncommon: string;
  rare: string;
  veryRare: string;
  legendary: string;
  artifact: string;
}

interface ItemCapacityTypes {
  items: string;
  weight: string;
}

interface ItemActionTypes {
  mwak: string;
  rwak: string;
  msak: string;
  rsak: string;
  save: string;
  heal: string;
  abil: string;
  util: string;
  other: string;
}

interface CreatureTypes {
  aberration: string;
  beast: string;
  celestial: string;
  construct: string;
  dragon: string;
  elemental: string;
  fey: string;
  fiend: string;
  giant: string;
  humanoid: string;
  monstrosity: string;
  ooze: string;
  plant: string;
  undead: string;
}

interface TokenHPColors {
  damage: number;
  healing: number;
  temp: number;
  tempmax: number;
  negmax: number;
}

interface TokenSizes {
  tiny: number;
  sm: number;
  med: number;
  lg: number;
  huge: number;
  grg: number;
}

interface ActorSizes {
  grg: string;
  huge: string;
  lg: string;
  med: string;
  sm: string;
  tiny: string;
}

interface AbilityConsumptionTypes {
  ammo: string;
  attribute: string;
  charges: string;
  material: string;
}

interface AbilityActivationTypes {
  action: string;
  bonus: string;
  crew: string;
  day: string;
  hour: string;
  lair: string;
  legendary: string;
  minute: string;
  none: string;
  reaction: string;
  special: string;
}

interface TimePeriods {
  inst: string;
  turn: string;
  round: string;
  minute: string;
  hour: string;
  day: string;
  month: string;
  year: string;
  perm: string;
  spec: string;
}

interface ToolIds {
  alchemist: string;
  bagpipes: string;
  brewer: string;
  calligrapher: string;
  card: string;
  carpenter: string;
  cartographer: string;
  chess: string;
  cobbler: string;
  cook: string;
  dice: string;
  disg: string;
  drum: string;
  dulcimer: string;
  flute: string;
  forg: string;
  glassblower: string;
  herb: string;
  horn: string;
  jeweler: string;
  leatherworker: string;
  lute: string;
  lyre: string;
  mason: string;
  navg: string;
  painter: string;
  panflute: string;
  pois: string;
  potter: string;
  shawm: string;
  smith: string;
  thief: string;
  tinker: string;
  viol: string;
  weaver: string;
  woodcarver: string;
}

interface ToolProficiencies {
  art: string;
  game: string;
  music: string;
  vehicle: string;
}

interface ToolTypes {
  art: string;
  game: string;
  music: string;
}

interface WeaponIds {
  battleaxe: string;
  blowgun: string;
  club: string;
  dagger: string;
  dart: string;
  flail: string;
  glaive: string;
  greataxe: string;
  greatclub: string;
  greatsword: string;
  halberd: string;
  handaxe: string;
  handcrossbow: string;
  heavycrossbow: string;
  javelin: string;
  lance: string;
  lightcrossbow: string;
  lighthammer: string;
  longbow: string;
  longsword: string;
  mace: string;
  maul: string;
  morningstar: string;
  net: string;
  pike: string;
  quarterstaff: string;
  rapier: string;
  scimitar: string;
  shortsword: string;
  sickle: string;
  spear: string;
  shortbow: string;
  sling: string;
  trident: string;
  warpick: string;
  warhammer: string;
  whip: string;
}

interface WeaponProficienciesMap {
  natural: boolean;
  simpleM: string;
  simpleR: string;
  martialM: string;
  martialR: string;
}

interface WeaponProficiencies {
  sim: string;
  mar: string;
}

interface Attunements {
  '0': string;
  '1': string;
  '2': string;
}

interface AttunementTypes {
  NONE: number;
  REQUIRED: number;
  ATTUNED: number;
}

interface Alignments {
  lg: string;
  ng: string;
  cg: string;
  ln: string;
  tn: string;
  cn: string;
  le: string;
  ne: string;
  ce: string;
}

interface Abilities {
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
}

interface Options {
  baseApplication: string;
  width: number;
  height: number;
  top?: any;
  left?: any;
  scale?: any;
  popOut: boolean;
  minimizable: boolean;
  resizable: boolean;
  id: string;
  classes: string[];
  dragDrop: DragDrop[];
  tabs: Tab[];
  filters: any[];
  title: string;
  template: string;
  scrollY: string[];
  closeOnSubmit: boolean;
  editable: boolean;
  sheetConfig: boolean;
  submitOnChange: boolean;
  submitOnClose: boolean;
  viewPermission: number;
  token?: any;
}

interface Tab {
  navSelector: string;
  contentSelector: string;
  initial: string;
}

interface DragDrop {
  dragSelector: string;
  dropSelector?: any;
  permissions: Permissions;
  callbacks: Permissions;
}

interface Permissions {
}