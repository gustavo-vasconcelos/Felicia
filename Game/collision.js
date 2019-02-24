// check if two non-rotated rects collide
function collision_aabb_aabb (rect1, rect2) {
    // ripped from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    if (rect1.x < rect2.x + rect2.w &&
       rect1.x + rect1.w > rect2.x &&
       rect1.y < rect2.y + rect2.h &&
       rect1.y + rect1.h > rect2.y) {
        return true;
    }
    return false;
}
