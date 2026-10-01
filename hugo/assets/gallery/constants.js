// Numbers shared across the gallery's modules, or tuned together. Metres
// unless the name says otherwise.

export const CENTIMETRE = 0.01;
export const LOBBY_ID = "lobby";

// People and movement.
export const EYE_HEIGHT = 1.6;
export const BODY_RADIUS = 0.3;
export const WALK_SPEED = 1.4; // metres per second, keyboard walking
export const TURN_SPEED = 1.6; // radians per second, keyboard turning
export const DRAG_SENSITIVITY = 0.0042; // radians per CSS pixel
export const MAX_PITCH = 0.6;
export const TAP_MAX_MOVE_PX = 8;
export const TAP_MAX_MS = 450;
export const GLIDE_BASE_SECONDS = 0.35;
export const GLIDE_SECONDS_PER_METRE = 0.18;
export const GLIDE_MAX_SECONDS = 2.0;
export const FOCUS_MARGIN = 1.18; // the close view frames painting and label with air, clear of the header
export const MIN_HORIZONTAL_FOV_DEGREES = 70;
export const MAX_VERTICAL_FOV_DEGREES = 90;
export const DEFAULT_VERTICAL_FOV_DEGREES = 55;
export const MAX_ZOOM = 4; // pinch or wheel magnification, like stepping in without moving
export const WHEEL_ZOOM_RATE = 0.0015;

// Architecture.
export const WALL_THICKNESS = 0.3;
export const DOOR_WIDTH = 2.4;
export const DOOR_HEIGHT = 3.0;
export const LOBBY_WIDTH = 10;
export const LOBBY_LENGTH = 9;
export const LOBBY_CEILING = 6;
export const SPAWN_DISTANCE_TO_DOOR = 3; // arrive close to the first doorway, looking through it
export const ROOM_MIN_WIDTH = 5.5;
export const ROOM_MAX_WIDTH = 12;
export const ROOM_ASPECT = 1.45; // length over width
export const ROOM_MAX_LENGTH = 18;
export const ROOM_STEP = 0.5;
export const CEILING_TO_WIDTH = 0.42;
export const MIN_CEILING = 3.6;
export const CEILING_TO_TALLEST_WORK = 2.2;
export const MAX_PARTITIONS = 2;
export const PARTITION_PASSAGE = 2.5; // clear floor between a partition end and the wall
export const PARTITION_HEIGHT = 3.4;
export const LAYLIGHT_FRACTION = 0.6; // share of the ceiling that is frosted glass

// Hanging.
export const HANG_CENTER = 1.45;
export const MIN_BOTTOM_EDGE = 0.6;
export const GAP_TO_WIDTH = 0.75;
export const MIN_GAP = 0.6;
export const MAX_GAP = 1.5;
export const MAX_SPREAD = 2.2; // widest air between works before a wall's group is centred instead
export const CORNER_MARGIN = 0.6;
export const DOOR_CLEARANCE = 1.2;
export const MIN_SEGMENT = 0.5;
export const HANG_SLACK = 1.1; // rooms offer 10% more wall than the hang needs
export const SET_MAX_SIDE_CM = 41; // small works of one size and year hang together as a set
export const SET_GAP = 0.15;
export const PANEL_GAP = 0.05; // between the frames of a diptych's canvases

// Labels: a paper card to the right of each work, always there; its text fades
// in as the visitor comes close enough to read it.
export const LABEL_OFFSET = 0.15;
export const LABEL_WIDTH = 0.16;
export const LABEL_TAIL = LABEL_OFFSET + LABEL_WIDTH; // how far a work's label reaches past its right edge
export const LABEL_HEIGHT = 0.1;
export const LABEL_DEPTH = 0.003;
export const LABEL_CENTER = 1.35;
export const LABEL_STACK_GAP = 0.02; // a set's labels stack beside it
export const LABEL_TEXT_START = 5; // text begins to appear
export const LABEL_TEXT_FULL = 3; // text fully legible
export const LABEL_TEXT_DROP = 8; // text texture freed

// Frames and canvases, in centimetres as a framer measures them.
export const CANVAS_DEPTH_CM = 2;
export const LARGE_CANVAS_DEPTH_CM = 3.5;
export const LARGE_SIDE_CM = 100;
export const TRAY_GAP_CM = 0.8;
export const TRAY_PROUD_CM = 1.3; // rail depth beyond the canvas
export const TRAY_BACK_CM = 1;
export const CASSETTA_FACE_SHARE = 0.06;
export const CASSETTA_MIN_FACE_CM = 4.5;
export const CASSETTA_MAX_FACE_CM = 9;
export const CASSETTA_DEPTH_CM = 5.5;
export const LARGE_CASSETTA_DEPTH_CM = 7;
export const CASSETTA_REBATE_CM = 0.5;

// Textures and rendering.
export const MEDIUM_TIER_MIN_PX = 200; // projected height that earns the 1024 px texture
export const MEDIUM_TIER_DROP_PX = 150; // hysteresis, so a boundary never thrashes
export const MAX_MEDIUM_TEXTURES = 8;
export const MAX_CONCURRENT_FETCHES = 2;
export const MAX_PIXEL_RATIO = 2;
export const MAX_TOUCH_PIXEL_RATIO = 1.5;
export const MAX_ANISOTROPY = 8;
export const LOD_INTERVAL_MS = 200;
