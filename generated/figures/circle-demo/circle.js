var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// ../c2/dist/core/math/c2-vec2.js
var C2Vec2 = class _C2Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  static set(out, x, y) {
    out.x = x;
    out.y = y;
    return out;
  }
  static setPolar(out, theta, r = 1, unit = "rad") {
    if (unit === "deg")
      theta *= Math.PI / 180;
    out.x = r * Math.cos(theta);
    out.y = r * Math.sin(theta);
    return out;
  }
  static add(out, x1, y1, x2, y2) {
    out.x = x1 + x2;
    out.y = y1 + y2;
    return out;
  }
  static addV(out, v1, v2) {
    out.x = v1.x + v2.x;
    out.y = v1.y + v2.y;
    return out;
  }
  static sub(out, x1, y1, x2, y2) {
    out.x = x1 - x2;
    out.y = y1 - y2;
    return out;
  }
  static subV(out, v1, v2) {
    out.x = v1.x - v2.x;
    out.y = v1.y - v2.y;
    return out;
  }
  static mul(out, x1, y1, x2, y2) {
    out.x = x1 * x2;
    out.y = y1 * y2;
    return out;
  }
  static mulV(out, v1, v2) {
    out.x = v1.x * v2.x;
    out.y = v1.y * v2.y;
    return out;
  }
  static scale(out, x, y, s) {
    out.x = x * s;
    out.y = y * s;
    return out;
  }
  static scaleV(out, v, s) {
    out.x = v.x * s;
    out.y = v.y * s;
    return out;
  }
  static lerp(out, x0, y0, x1, y1, t) {
    const s = 1 - t;
    out.x = s * x0 + t * x1;
    out.y = s * y0 + t * y1;
    return out;
  }
  static lerpV(out, v0, v1, t) {
    return _C2Vec2.lerp(out, v0.x, v0.y, v1.x, v1.y, t);
  }
  static equals(x1, y1, x2, y2, epsilon = 1e-4) {
    return Math.abs(x1 - x2) < epsilon && Math.abs(y1 - y2) < epsilon;
  }
  static equalsV(v1, v2, epsilon = 1e-4) {
    return Math.abs(v1.x - v2.x) <= epsilon && Math.abs(v1.y - v2.y) <= epsilon;
  }
  static isZeroV(v, epsilon = 1e-4) {
    return Math.abs(v.x) < epsilon && Math.abs(v.y) < epsilon;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setV(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  setPolar(theta, r = 1, unit = "rad") {
    if (unit === "deg")
      theta *= Math.PI / 180;
    return this.set(r * Math.cos(theta), r * Math.sin(theta));
  }
  lerp(x, y, t) {
    const s = 1 - t;
    return this.set(s * this.x + t * x, s * this.y + t * y);
  }
  lerpV(v, t) {
    return this.lerp(v.x, v.y, t);
  }
  shiftX(dx) {
    this.x += dx;
    return this;
  }
  shiftY(dy) {
    this.y += dy;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new _C2Vec2(this.x, this.y);
  }
  copy(v) {
    return this.setV(v);
  }
  add(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }
  addV(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  sub(x, y) {
    this.x -= x;
    this.y -= y;
    return this;
  }
  subV(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  mul(x, y) {
    this.x *= x;
    this.y *= y;
    return this;
  }
  mulV(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  div(x, y) {
    this.x /= x;
    this.y /= y;
    return this;
  }
  divV(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  min(x, y) {
    this.x = Math.min(this.x, x);
    this.y = Math.min(this.y, y);
    return this;
  }
  minV(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  minScalar(s) {
    this.x = Math.min(this.x, s);
    this.y = Math.min(this.y, s);
    return this;
  }
  max(x, y) {
    this.x = Math.max(this.x, x);
    this.y = Math.max(this.y, y);
    return this;
  }
  maxV(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  maxScalar(s) {
    this.x = Math.max(this.x, s);
    this.y = Math.max(this.y, s);
    return this;
  }
  clamp(minX, minY, maxX, maxY) {
    this.x = Math.max(minX, Math.min(maxX, this.x));
    this.y = Math.max(minY, Math.min(maxY, this.y));
    return this;
  }
  clampV(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(min, max) {
    this.x = Math.max(min, Math.min(max, this.x));
    this.y = Math.max(min, Math.min(max, this.y));
    return this;
  }
  snap(stepX, stepY) {
    if (stepX > 0)
      this.x = Math.round(this.x / stepX) * stepX;
    if (stepY > 0)
      this.y = Math.round(this.y / stepY) * stepY;
    return this;
  }
  snapV(steps) {
    if (steps.x > 0)
      this.x = Math.round(this.x / steps.x) * steps.x;
    if (steps.y > 0)
      this.y = Math.round(this.y / steps.y) * steps.y;
    return this;
  }
  snapScalar(step) {
    if (step <= 0)
      return this;
    this.x = Math.round(this.x / step) * step;
    this.y = Math.round(this.y / step) * step;
    return this;
  }
  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  apply2x2(matrix) {
    const me = matrix.elements;
    const x = this.x;
    const y = this.y;
    this.x = me[0] * x + me[2] * y;
    this.y = me[1] * x + me[3] * y;
    return this;
  }
  apply2x3(matrix) {
    const me = matrix.elements;
    const x = this.x, y = this.y;
    this.x = me[0] * x + me[2] * y + me[4];
    this.y = me[1] * x + me[3] * y + me[5];
    return this;
  }
  apply2x3Offset(matrix) {
    const me = matrix.elements;
    const x = this.x;
    const y = this.y;
    this.x = me[0] * x + me[2] * y;
    this.y = me[1] * x + me[3] * y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  det(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  distanceSq(v) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    return dx * dx + dy * dy;
  }
  distance(v) {
    return Math.sqrt(this.distanceSq(v));
  }
  normalize() {
    const len = this.length();
    if (len === 0)
      return this;
    return this.scale(1 / len);
  }
  setLength(length) {
    return this.scale(length / this.length());
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  angle() {
    return Math.atan2(-this.y, this.x);
  }
  angleTo(v) {
    const s = this.det(v);
    const c = this.dot(v);
    return Math.atan2(s, c);
  }
  perp(flip = false) {
    const x = this.x;
    if (flip) {
      this.x = this.y;
      this.y = -x;
    } else {
      this.x = -this.y;
      this.y = x;
    }
    return this;
  }
  rotate(angle, unit = "rad") {
    if (unit === "deg")
      angle *= Math.PI / 180;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const x = this.x, y = this.y;
    this.x = c * x - s * y;
    this.y = s * x + c * y;
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};

// ../c2/dist/core/math/c2-camera.js
var C2Camera = class {
  constructor(scene) {
    this.position = new C2Vec2();
    this.extents = new C2Vec2();
    this.scaleFactor = 1;
    this.rotation = 0;
    this.scene = scene;
    const aspectRatio = scene.getViewportAspectRatio();
    this.position.set(0, 0);
    this.extents = new C2Vec2(8, 8 / aspectRatio);
    this.update();
  }
  getRotationRad() {
    return this.rotation;
  }
  getRotationDeg() {
    return this.rotation * 180 / Math.PI;
  }
  getLower() {
    const result = new C2Vec2();
    this.getLowerInto(result);
    return result;
  }
  getLowerInto(dst) {
    dst.copy(this.extents).scale(-this.scaleFactor).addV(this.position);
    return this;
  }
  getUpper() {
    const result = new C2Vec2();
    this.getUpperInto(result);
    return result;
  }
  getUpperInto(dst) {
    dst.copy(this.extents).scale(+this.scaleFactor).addV(this.position);
    return this;
  }
  setPosition(x, y) {
    this.position.set(x, y);
    return this;
  }
  setExtents(x, y) {
    this.extents.set(x, y);
    return this;
  }
  setZoom(zoom) {
    this.scaleFactor = 1 / zoom;
    return this;
  }
  setRotationRad(angleRad) {
    this.rotation = angleRad;
    return this;
  }
  setRotationDeg(angleDeg) {
    this.rotation = angleDeg * Math.PI / 180;
    return this;
  }
  update() {
    const viewportX = this.scene.getViewportWidth();
    const viewportY = this.scene.getViewportHeight();
    const cx = viewportX / 2;
    const cy = viewportY / 2;
    const cos = Math.cos(-this.rotation);
    const sin = Math.sin(-this.rotation);
    const px = this.position.x;
    const py = this.position.y;
    const sx = +(2 * (this.extents.x * this.scaleFactor)) / viewportX;
    const sy = -(2 * (this.extents.y * this.scaleFactor)) / viewportY;
    const viewSpace = this.scene.getViewSpace();
    viewSpace.setSpaceToParent(+sx * cos, +sy * sin, -cx * cos * sx - cy * sin * sy + px, -sx * sin, +sy * cos, +cx * sin * sx - cy * cos * sy + py);
  }
};

// ../c2/dist/core/math/c2-mat2x3.js
var C2Mat2x3 = class _C2Mat2x3 {
  constructor(a00 = 0, a01 = 0, a02 = 0, a10 = 0, a11 = 0, a12 = 0) {
    this.elements = new Float32Array(6);
    this.set(a00, a01, a02, a10, a11, a12);
  }
  static setIdentity(out) {
    out.elements[0] = 1;
    out.elements[1] = 0;
    out.elements[2] = 0;
    out.elements[3] = 1;
    out.elements[4] = 0;
    out.elements[5] = 0;
    return out;
  }
  static lerp(out, matrix0, matrix1, t) {
    return out.copy(matrix0).lerp(matrix1, t);
  }
  static equals(m1, m2, epsilon = 1e-4) {
    const a = m1.elements;
    const b = m2.elements;
    return Math.abs(a[0] - b[0]) <= epsilon && Math.abs(a[1] - b[1]) <= epsilon && Math.abs(a[2] - b[2]) <= epsilon && Math.abs(a[3] - b[3]) <= epsilon && Math.abs(a[4] - b[4]) <= epsilon && Math.abs(a[5] - b[5]) <= epsilon;
  }
  static det(matrix) {
    const e = matrix.elements;
    return e[0] * e[3] - e[2] * e[1];
  }
  set(a00 = 0, a01 = 0, a02 = 0, a10 = 0, a11 = 0, a12 = 0) {
    this.elements[0] = a00;
    this.elements[2] = a01;
    this.elements[4] = a02;
    this.elements[1] = a10;
    this.elements[3] = a11;
    this.elements[5] = a12;
    return this;
  }
  lerp(matrix, t) {
    const s = 1 - t;
    const te = this.elements;
    const me = matrix.elements;
    te[0] = s * te[0] + t * me[0];
    te[1] = s * te[1] + t * me[1];
    te[2] = s * te[2] + t * me[2];
    te[3] = s * te[3] + t * me[3];
    te[4] = s * te[4] + t * me[4];
    te[5] = s * te[5] + t * me[5];
    return this;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 6; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  isIdentity(epsilon = 1e-4) {
    const te = this.elements;
    if (Math.abs(te[0] - 1) <= epsilon && Math.abs(te[1]) <= epsilon && Math.abs(te[2]) <= epsilon && Math.abs(te[3] - 1) <= epsilon && Math.abs(te[4]) <= epsilon && Math.abs(te[5]) <= epsilon) {
      return true;
    }
    return false;
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a00 = ae[0];
    const a10 = ae[1];
    const a01 = ae[2];
    const a11 = ae[3];
    const a02 = ae[4];
    const a12 = ae[5];
    const b00 = be[0];
    const b10 = be[1];
    const b01 = be[2];
    const b11 = be[3];
    const b02 = be[4];
    const b12 = be[5];
    te[0] = a00 * b00 + a01 * b10;
    te[1] = a10 * b00 + a11 * b10;
    te[2] = a00 * b01 + a01 * b11;
    te[3] = a10 * b01 + a11 * b11;
    te[4] = a00 * b02 + a01 * b12 + a02;
    te[5] = a10 * b02 + a11 * b12 + a12;
    return this;
  }
  composeAfterCoefficients(a00, a01, a02, a10, a11, a12) {
    const te = this.elements;
    const b00 = te[0];
    const b10 = te[1];
    const b01 = te[2];
    const b11 = te[3];
    const b02 = te[4];
    const b12 = te[5];
    te[0] = a00 * b00 + a01 * b10;
    te[1] = a10 * b00 + a11 * b10;
    te[2] = a00 * b01 + a01 * b11;
    te[3] = a10 * b01 + a11 * b11;
    te[4] = a00 * b02 + a01 * b12 + a02;
    te[5] = a10 * b02 + a11 * b12 + a12;
    return this;
  }
  composeAfter(m) {
    return this.multiplyMatrices(this, m);
  }
  composeBefore(m) {
    return this.multiplyMatrices(m, this);
  }
  invert() {
    const te = this.elements;
    const a00 = te[0];
    const a10 = te[1];
    const a01 = te[2];
    const a11 = te[3];
    const a02 = te[4];
    const a12 = te[5];
    const det = a00 * a11 - a01 * a10;
    if (det === 0) {
      console.warn("C2Mat2x3: .invert() can not invert matrix, determinant is 0");
      return this.makeIdentity();
    }
    const invDet = 1 / det;
    this.set(a11 * invDet, -a01 * invDet, (a01 * a12 - a11 * a02) * invDet, -a10 * invDet, a00 * invDet, (a10 * a02 - a00 * a12) * invDet);
    return this;
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    return this;
  }
  clone() {
    return new _C2Mat2x3().copy(this);
  }
  det() {
    const te = this.elements;
    return te[0] * te[3] - te[2] * te[1];
  }
  makeIdentity() {
    return this.set(1, 0, 0, 0, 1, 0);
  }
  makeTranslation(x, y) {
    return this.set(1, 0, x, 0, 1, y);
  }
  makeTranslationV(v) {
    return this.makeTranslation(v.x, v.y);
  }
  makeScale(scaleX, scaleY) {
    return this.set(scaleX, 0, 0, 0, scaleY, 0);
  }
  makeScaleV(v) {
    return this.makeScale(v.x, v.y);
  }
  makeScaleFrom(scaleX, scaleY, centerX, centerY) {
    return this.set(scaleX, 0, -scaleX * centerX + centerX, 0, scaleY, -scaleY * centerY + centerY);
  }
  makeScaleFromV(scaleX, scaleY, center) {
    return this.makeScaleFrom(scaleX, scaleY, center.x, center.y);
  }
  makeRotation(angle, unit) {
    if (unit === "deg")
      angle *= Math.PI / 180;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return this.set(c, -s, 0, +s, c, 0);
  }
  makeRotationFrom(angle, unit, centerX, centerY) {
    if (unit === "deg")
      angle *= Math.PI / 180;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return this.set(c, -s, -centerX * c + centerY * s + centerX, +s, c, -centerY * c - centerX * s + centerY);
  }
  makeRotationFromV(angle, unit, center) {
    return this.makeRotationFrom(angle, unit, center.x, center.y);
  }
  translate(x, y) {
    const te = this.elements;
    te[4] += x;
    te[5] += y;
    return this;
  }
  translateV(v) {
    return this.translate(v.x, v.y);
  }
  scale(scaleX, scaleY) {
    const te = this.elements;
    te[0] *= scaleX;
    te[1] *= scaleY;
    te[2] *= scaleX;
    te[3] *= scaleY;
    te[4] *= scaleX;
    te[5] *= scaleY;
    return this;
  }
  scaleV(v) {
    return this.scale(v.x, v.y);
  }
  scaleFrom(scaleX, scaleY, centerX, centerY) {
    return this.composeAfterCoefficients(scaleX, 0, -scaleX * centerX + centerX, 0, scaleY, -scaleY * centerY + centerY);
  }
  scaleFromV(scaleX, scaleY, center) {
    return this.scaleFrom(scaleX, scaleY, center.x, center.y);
  }
  rotate(angle, unit = "rad") {
    if (unit === "deg")
      angle *= Math.PI / 180;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return this.composeAfterCoefficients(c, -s, 0, +s, c, 0);
  }
  rotateFrom(angle, unit, centerX, centerY) {
    if (unit === "deg")
      angle *= Math.PI / 180;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return this.composeAfterCoefficients(c, -s, -centerX * c + centerY * s + centerX, +s, c, -centerY * c - centerX * s + centerY);
  }
  rotateFromV(angle, unit, center) {
    return this.rotateFrom(angle, unit, center.x, center.y);
  }
};

// ../c2/dist/core/math/c2-space.js
var C2Space = class {
  constructor(parent = null) {
    this.spaceToParent = new C2Mat2x3(1, 0, 0, 0, 1, 0);
    this.parentToSpace = new C2Mat2x3(1, 0, 0, 0, 1, 0);
    this.spaceToWorld = new C2Mat2x3(1, 0, 0, 0, 1, 0);
    this.worldToSpace = new C2Mat2x3(1, 0, 0, 0, 1, 0);
    this.extentsScaleToParent = new C2Vec2(1, 1);
    this.extentsScaleToWorld = new C2Vec2(1, 1);
    this.lengthScaleToParent = 1;
    this.lengthScaleToWorld = 1;
    this.isDirect = true;
    this.parent = parent;
  }
  update() {
    const e0x = this.spaceToParent.elements[0];
    const e0y = this.spaceToParent.elements[1];
    const e1x = this.spaceToParent.elements[2];
    const e1y = this.spaceToParent.elements[3];
    this.lengthScaleToParent = Math.sqrt(Math.abs(C2Mat2x3.det(this.spaceToParent)));
    this.extentsScaleToParent.set(Math.sqrt(e0x * e0x + e0y * e0y), Math.sqrt(e1x * e1x + e1y * e1y));
    this.parentToSpace.copy(this.spaceToParent).invert();
    if (this.parent) {
      this.parent.update();
      this.spaceToWorld.multiplyMatrices(this.parent.spaceToWorld, this.spaceToParent);
      this.worldToSpace.multiplyMatrices(this.parentToSpace, this.parent.worldToSpace);
      this.lengthScaleToWorld = this.lengthScaleToParent * this.parent.lengthScaleToWorld;
      this.extentsScaleToWorld.copy(this.extentsScaleToParent).mulV(this.parent.extentsScaleToWorld);
    } else {
      this.spaceToWorld.copy(this.spaceToParent);
      this.worldToSpace.copy(this.parentToSpace);
      this.lengthScaleToWorld = this.lengthScaleToParent;
      this.extentsScaleToWorld.copy(this.extentsScaleToParent);
    }
    this.isDirect = this.spaceToWorld.det() > 0;
  }
  isDirectSpace() {
    return this.isDirect;
  }
  getSpaceToParentInto(dst) {
    dst.copy(this.spaceToParent);
    return this;
  }
  getParentToSpaceInto(dst) {
    dst.copy(this.parentToSpace);
    return this;
  }
  getSpaceToWorldInto(dst) {
    dst.copy(this.spaceToWorld);
    return this;
  }
  getWorldToSpaceInto(dst) {
    dst.copy(this.worldToSpace);
    return this;
  }
  getSpaceToWorld() {
    return this.spaceToWorld;
  }
  getWorldToSpace() {
    return this.worldToSpace;
  }
  getThisToSpaceInto(dst, space) {
    dst.copy(this.spaceToWorld);
    dst.multiplyMatrices(space.getWorldToSpace(), dst);
    return this;
  }
  getSpaceToThisInto(dst, space) {
    dst.copy(this.worldToSpace);
    dst.multiplyMatrices(dst, space.getSpaceToWorld());
    return this;
  }
  setFromSpace(space, origin, basis0, basis1) {
    const transform = new C2Mat2x3();
    transform.copy(space.getSpaceToWorld());
    if (this.parent) {
      transform.multiplyMatrices(this.parent.getWorldToSpace(), transform);
    }
    const c0 = basis0.clone().apply2x3Offset(transform);
    const c1 = basis1.clone().apply2x3Offset(transform);
    const o = origin.clone().apply2x3(transform);
    this.spaceToParent.set(c0.x, c1.x, o.x, c0.y, c1.y, o.y);
    this.update();
  }
  setSpaceToParent(a00, a01, a02, a10, a11, a12) {
    this.spaceToParent.set(a00, a01, a02, a10, a11, a12);
    this.update();
  }
  setSpaceToParentMat(matrix) {
    this.spaceToParent.copy(matrix);
    this.update();
  }
  convertPointInto(dst, x, y, space) {
    dst = dst.set(x, y);
    if (space === this)
      return this;
    dst.apply2x3(this.spaceToWorld).apply2x3(space.worldToSpace);
    return this;
  }
  convertPointIntoV(dst, point, space) {
    return this.convertPointInto(dst, point.x, point.y, space);
  }
  convertOffsetInto(dst, x, y, space) {
    dst = dst.set(x, y);
    if (space === this)
      return this;
    dst.apply2x3Offset(this.spaceToWorld).apply2x3Offset(space.worldToSpace);
    return this;
  }
  convertOffsetIntoV(dst, point, space) {
    return this.convertOffsetInto(dst, point.x, point.y, space);
  }
  convertLength(length, space) {
    if (space === this)
      return Math.abs(length);
    length *= this.lengthScaleToWorld;
    if (space)
      length /= space.lengthScaleToWorld;
    return Math.abs(length);
  }
  convertExtentsInto(dst, x, y, space) {
    dst = dst.set(x, y);
    if (space === this)
      return this;
    dst.mulV(this.extentsScaleToWorld);
    if (space)
      dst.divV(space.extentsScaleToWorld);
    return this;
  }
  convertExtentsIntoV(dst, point, space) {
    return this.convertExtentsInto(dst, point.x, point.y, space);
  }
};

// ../c2/dist/core/shared/c2-base-type.js
var C2BaseType = class {
  constructor(scene) {
    this.locked = false;
    this.scene = scene;
  }
  lock() {
    this.locked = true;
    return this;
  }
  unlock() {
    this.locked = false;
    return this;
  }
};

// ../c2/dist/core/shared/c2-boolean.js
var C2Boolean = class _C2Boolean extends C2BaseType {
  constructor(scene, value = false, locked = false) {
    super(scene);
    this.kind = "boolean";
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2Boolean(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value)
      return this;
    this.value = other.value;
    return this;
  }
  set(value) {
    if (this.value === value)
      return this;
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  toString() {
    return this.value.toString();
  }
};

// ../c2/dist/core/math/c2-math-utils.js
var C2MathUtils = class _C2MathUtils {
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  static clamp01(value) {
    return _C2MathUtils.clamp(value, 0, 1);
  }
  static lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  static invLerp(x, y, value) {
    if (x !== y) {
      return (value - x) / (y - x);
    } else {
      return 0;
    }
  }
  static remap(origFrom, origTo, targetFrom, targetTo, value) {
    return _C2MathUtils.lerp(targetFrom, targetTo, _C2MathUtils.invLerp(origFrom, origTo, value));
  }
  static mod(x, n) {
    return (x % n + n) % n;
  }
  static damp(x, y, lambda, dt) {
    return _C2MathUtils.lerp(x, y, 1 - Math.exp(-lambda * dt));
  }
  static snap(value, step) {
    if (step <= 0)
      return value;
    return Math.round(value / step) * step;
  }
  static snapToArray(value, array) {
    if (array.length === 0)
      return value;
    return array.reduce((closest, currValue) => Math.abs(currValue - value) < Math.abs(closest - value) ? currValue : closest);
  }
};

// ../c2/dist/core/shared/c2-color.js
var C2Color = class _C2Color extends C2BaseType {
  constructor(scene, r = 0, g = 0, b = 0, locked = false) {
    super(scene);
    this.kind = "color";
    this.components = new Float32Array(8);
    const linearR = _C2Color.sRGB255ToLinear(r);
    const linearG = _C2Color.sRGB255ToLinear(g);
    const linearB = _C2Color.sRGB255ToLinear(b);
    const linearA = 1;
    for (let i = 0; i < 2; i++) {
      this.components[4 * i + 0] = linearR;
      this.components[4 * i + 1] = linearG;
      this.components[4 * i + 2] = linearB;
      this.components[4 * i + 3] = linearA;
    }
    this.locked = locked;
  }
  static sRGBToLinear(c) {
    if (c <= 0.04045) {
      c = c * 0.0773993808;
    } else {
      c = Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
    }
    return C2MathUtils.clamp01(c);
  }
  static linearToSRGB(c) {
    if (c <= 31308e-7) {
      c = c * 12.92;
    } else {
      c = 1.055 * Math.pow(c, 0.41666) - 0.055;
    }
    return C2MathUtils.clamp01(c);
  }
  static sRGB255ToLinear(c) {
    return _C2Color.sRGBToLinear(c / 255);
  }
  static linearToSRGB255(c) {
    return Math.round(_C2Color.linearToSRGB(c) * 255);
  }
  clone() {
    const color = new _C2Color(this.scene);
    color.components.set(this.components);
    color.locked = this.locked;
    return color;
  }
  copyIfUnlocked(color) {
    if (this.locked)
      return this;
    return this.copy(color);
  }
  copy(color) {
    this.components.set(color.components);
    return this;
  }
  lerp(state0, state1, t) {
    for (let i = 0; i < 8; i++) {
      this.components[i] = C2MathUtils.lerp(state0.components[i], state1.components[i], t);
    }
    return this;
  }
  static lerp(color0, color1, t) {
    return new _C2Color(color1.scene).lerp(color0, color1, t);
  }
  set(linearR, linearG, linearB, linearA, modeIndex = 0) {
    this.components[4 * modeIndex + 0] = linearR;
    this.components[4 * modeIndex + 1] = linearG;
    this.components[4 * modeIndex + 2] = linearB;
    this.components[4 * modeIndex + 3] = linearA;
    return this;
  }
  setFromHex(hex, modeIndex = 0) {
    let linearR = 0;
    let linearG = 0;
    let linearB = 0;
    let linearA = 1;
    if (/^#([0-9A-Fa-f]{6})$/.test(hex)) {
      const num = parseInt(hex.substring(1), 16);
      linearR = _C2Color.sRGB255ToLinear(num >> 16 & 255);
      linearG = _C2Color.sRGB255ToLinear(num >> 8 & 255);
      linearB = _C2Color.sRGB255ToLinear(num & 255);
    } else if (/^#([0-9A-Fa-f]{8})$/.test(hex)) {
      const num = parseInt(hex.substring(1), 16);
      linearR = _C2Color.sRGB255ToLinear(num >> 24 & 255);
      linearG = _C2Color.sRGB255ToLinear(num >> 16 & 255);
      linearB = _C2Color.sRGB255ToLinear(num >> 8 & 255);
      linearA = _C2Color.sRGB255ToLinear(num & 255);
    } else {
      throw new Error(`Invalid hex color: ${hex}`);
    }
    return this.set(linearR, linearG, linearB, linearA, modeIndex);
  }
  static fromHex(scene, hex, modeIndex = 0) {
    return new _C2Color(scene).setFromHex(hex, modeIndex);
  }
  setThemes(lightTheme, darkTheme, name, scale) {
    this.setFromHex(lightTheme.color(name, scale), 0);
    this.setFromHex(darkTheme.color(name, scale), 1);
    return this;
  }
  setFromTheme(colorTheme2, name, scale, modeIndex = 0) {
    return this.setFromHex(colorTheme2.color(name, scale), modeIndex);
  }
  static fromTheme(scene, colorTheme2, name, scale, modeIndex = 0) {
    return new _C2Color(scene).setFromTheme(colorTheme2, name, scale, modeIndex);
  }
  setWhite(intensity = 1, opacity = 1, modeIndex = 0) {
    return this.set(intensity, intensity, intensity, opacity, modeIndex);
  }
  setBlack(intensity = 1, opacity = 1, modeIndex = 0) {
    intensity = 1 - intensity;
    return this.set(intensity, intensity, intensity, opacity, modeIndex);
  }
  get(modeIndex = 0) {
    const c = (x) => _C2Color.linearToSRGB255(x);
    return {
      r: c(this.components[4 * modeIndex + 0]),
      g: c(this.components[4 * modeIndex + 1]),
      b: c(this.components[4 * modeIndex + 2]),
      a: c(this.components[4 * modeIndex + 3])
    };
  }
  getR(modeIndex = 0) {
    return _C2Color.linearToSRGB255(this.components[4 * modeIndex + 0]);
  }
  getG(modeIndex = 0) {
    return _C2Color.linearToSRGB255(this.components[4 * modeIndex + 1]);
  }
  getB(modeIndex = 0) {
    return _C2Color.linearToSRGB255(this.components[4 * modeIndex + 2]);
  }
  getA(modeIndex = 0) {
    return _C2Color.linearToSRGB255(this.components[4 * modeIndex + 3]);
  }
};

// ../c2/dist/core/shared/c2-enum.js
var C2Enum = class _C2Enum extends C2BaseType {
  constructor(scene, value, locked = false) {
    super(scene);
    this.kind = "enum";
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2Enum(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value)
      return this;
    this.value = other.value;
    return this;
  }
  set(value) {
    if (this.value === value)
      return this;
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
};

// ../c2/dist/core/shared/c2-length.js
var C2Length = class _C2Length extends C2BaseType {
  constructor(scene, value, space, locked = false) {
    super(scene);
    this.kind = "length";
    this.value = value;
    this.space = space;
    this.locked = locked;
  }
  clone() {
    return new _C2Length(this.scene, this.value, this.space, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value && this.space === other.space)
      return this;
    this.value = other.value;
    this.space = other.space;
    return this;
  }
  lerp(state0, state1, t) {
    const space = state1.space;
    const value0 = state0.get(space);
    const value1 = state1.get(space);
    this.set(C2MathUtils.lerp(value0, value1, t), space);
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Length(state1.scene, 0, state1.space).lerp(state0, state1, t);
  }
  set(value, space) {
    if (this.value === value && this.space === space)
      return this;
    this.value = value;
    if (space)
      this.space = space;
    return this;
  }
  setValueFromSpace(value, space) {
    if (this.value === value && this.space === space)
      return this;
    this.value = space.convertLength(value, this.space);
    return this;
  }
  get(space) {
    return this.space.convertLength(this.value, space);
  }
  changeSpace(space) {
    if (this.space === space)
      return this;
    this.value = this.space.convertLength(this.value, space);
    this.space = space;
    return this;
  }
};

// ../c2/dist/core/shared/c2-number.js
var C2Number = class _C2Number extends C2BaseType {
  constructor(scene, value, locked = false) {
    super(scene);
    this.kind = "number";
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2Number(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value)
      return this;
    this.value = other.value;
    return this;
  }
  lerp(state0, state1, t) {
    const value0 = state0.get();
    const value1 = state1.get();
    this.set(C2MathUtils.lerp(value0, value1, t));
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Number(state0.scene, 0).lerp(state0, state1, t);
  }
  set(value) {
    if (this.value === value)
      return this;
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  toFixed(precision = 2) {
    return this.value.toFixed(precision);
  }
};

// ../c2/dist/core/shared/c2-string.js
var C2String = class _C2String extends C2BaseType {
  constructor(scene, value = "", locked = false) {
    super(scene);
    this.kind = "string";
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2String(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value)
      return this;
    this.value = other.value;
    return this;
  }
  set(value) {
    if (this.value === value)
      return this;
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  toString() {
    return this.value;
  }
};

// ../c2/dist/core/shared/c2-layer.js
var C2Layer = class _C2Layer extends C2BaseType {
  constructor(scene, value, locked = false) {
    super(scene);
    this.kind = "layer";
    this.orderInLayer = 0;
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2Layer(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    this.value = other.value;
    this.orderInLayer = other.orderInLayer;
    return this;
  }
  lerp(state0, state1, t) {
    const value0 = state0.get();
    const value1 = state1.get();
    this.set(C2MathUtils.lerp(value0, value1, t));
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Layer(state1.scene, 0).lerp(state0, state1, t);
  }
  set(value) {
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  static compare(layerA, layerB) {
    if (layerA.value !== layerB.value) {
      return layerA.value - layerB.value;
    }
    return layerA.orderInLayer - layerB.orderInLayer;
  }
};

// ../c2/dist/core/element/base/c2-element-data.js
var C2UpdateData = class {
  constructor(scene) {
    this.layer = new C2Layer(scene, 0);
    this.isManaged = new C2Boolean(scene, false);
  }
  copy(other) {
    this.layer.copy(other.layer);
    this.isManaged.copy(other.isManaged);
  }
  copyIfUnlocked(other) {
    this.layer.copyIfUnlocked(other.layer);
    this.isManaged.copyIfUnlocked(other.isManaged);
  }
};
var C2RenderData = class {
  constructor(scene) {
    this.layer = new C2Layer(scene, 0);
    this.isEnabled = new C2Boolean(scene, true);
  }
  copy(other) {
    this.layer.copy(other.layer);
    this.isEnabled.copy(other.isEnabled);
  }
  copyIfUnlocked(other) {
    this.layer.copyIfUnlocked(other.layer);
    this.isEnabled.copyIfUnlocked(other.isEnabled);
  }
};
var C2ElementData = class {
  constructor(scene) {
    this.scene = scene;
    this.isEnabled = new C2Boolean(scene, true);
    this.update = new C2UpdateData(scene);
  }
  copy(other) {
    this.isEnabled.copy(other.isEnabled);
    this.update.copy(other.update);
  }
  copyIfUnlocked(other) {
    this.isEnabled.copyIfUnlocked(other.isEnabled);
    this.update.copyIfUnlocked(other.update);
  }
};
var C2GraphicsData = class extends C2ElementData {
  constructor(scene) {
    super(scene);
    this.render = new C2RenderData(scene);
  }
  copy(other) {
    super.copy(other);
    this.render.copy(other.render);
  }
  copyIfUnlocked(other) {
    super.copyIfUnlocked(other);
    this.render.copyIfUnlocked(other.render);
  }
};
var C2StrokeData = class {
  constructor(scene) {
    this.scene = scene;
    this.isEnabled = new C2Boolean(scene, true);
    this.color = new C2Color(scene, 0, 0, 0);
    this.width = new C2Length(scene, 5, scene.getViewSpace());
    this.opacity = new C2Number(scene, 1);
    this.lineCap = new C2Enum(scene, "round");
    this.lineJoin = new C2Enum(scene, "miter");
  }
  copy(other) {
    this.isEnabled.copy(other.isEnabled);
    this.color.copy(other.color);
    this.width.copy(other.width);
    this.opacity.copy(other.opacity);
    this.lineCap.copy(other.lineCap);
    this.lineJoin.copy(other.lineJoin);
  }
  copyIfUnlocked(other) {
    this.isEnabled.copyIfUnlocked(other.isEnabled);
    this.color.copyIfUnlocked(other.color);
    this.width.copyIfUnlocked(other.width);
    this.opacity.copyIfUnlocked(other.opacity);
    this.lineCap.copyIfUnlocked(other.lineCap);
    this.lineJoin.copyIfUnlocked(other.lineJoin);
  }
  applyToContext(ctx) {
    const color = this.color;
    const alpha = this.opacity.get() * color.getA() / 255;
    const themeModeIndex = this.scene.getThemeModeIndex();
    ctx.strokeStyle = `rgba(${color.getR(themeModeIndex)}, ${color.getG(themeModeIndex)}, ${color.getB(themeModeIndex)}, ${alpha})`;
    ctx.lineWidth = this.width.get(this.scene.getViewSpace());
    ctx.lineCap = this.lineCap.get();
    ctx.lineJoin = this.lineJoin.get();
  }
};
var C2FillData = class {
  constructor(scene) {
    this.scene = scene;
    this.isEnabled = new C2Boolean(scene, true);
    this.color = new C2Color(scene, 255, 255, 255);
    this.opacity = new C2Number(scene, 1);
  }
  copy(other) {
    this.color.copy(other.color);
    this.opacity.copy(other.opacity);
  }
  copyIfUnlocked(other) {
    this.color.copyIfUnlocked(other.color);
    this.opacity.copyIfUnlocked(other.opacity);
  }
  applyToContext(ctx) {
    const color = this.color;
    const alpha = this.opacity.get() * color.getA() / 255;
    const themeModeIndex = this.scene.getThemeModeIndex();
    ctx.fillStyle = `rgba(${color.getR(themeModeIndex)}, ${color.getG(themeModeIndex)}, ${color.getB(themeModeIndex)}, ${alpha})`;
  }
};
var C2FontData = class {
  constructor(scene) {
    this.scene = scene;
    this.size = new C2Length(scene, 16, scene.getViewSpace());
    this.weight = new C2Number(scene, 400);
    this.family = new C2String(scene, "sans-serif");
    this.style = new C2Enum(scene, "normal");
  }
  copy(other) {
    this.size.copy(other.size);
    this.weight.copy(other.weight);
    this.family.copy(other.family);
    this.style.copy(other.style);
  }
  copyIfUnlocked(other) {
    this.size.copyIfUnlocked(other.size);
    this.weight.copyIfUnlocked(other.weight);
    this.family.copyIfUnlocked(other.family);
    this.style.copyIfUnlocked(other.style);
  }
  applyToContext(ctx) {
    const viewSpace = this.scene.getViewSpace();
    const style = this.style.get();
    const weight = this.weight.get();
    const size = this.size.get(viewSpace);
    const family = this.family.get();
    ctx.font = `${style} ${weight} ${size}px ${family}`;
  }
};

// ../c2/dist/core/element/base/c2-element.js
var C2Element = class {
  constructor(scene, data) {
    this.data = data;
    this.scene = scene;
    this.id = scene.getNextElementId();
    scene.attachElement(this);
  }
};
var C2GraphicsElement = class extends C2Element {
  constructor(scene, data) {
    super(scene, data);
  }
};

// ../c2/dist/core/math/c2-pool.js
var C2FastPool = class {
  constructor(create) {
    this.create = create;
    this.availableElements = [];
  }
  get() {
    const element = this.availableElements.pop();
    return element ? element : this.create();
  }
  release(element) {
    this.availableElements.push(element);
  }
  getCapacity() {
    return this.availableElements.length;
  }
};
var C2DebugPool = class {
  constructor(create) {
    this.create = create;
    this.availableElements = [];
    this.borrowedElements = /* @__PURE__ */ new Set();
  }
  get() {
    const element = this.availableElements.pop();
    const value = element ? element : this.create();
    this.borrowedElements.add(value);
    return value;
  }
  release(element) {
    if (!this.borrowedElements.has(element)) {
      throw new Error("Invalid pool release: element is not currently borrowed");
    }
    this.borrowedElements.delete(element);
    this.availableElements.push(element);
  }
  getBorrowedCount() {
    return this.borrowedElements.size;
  }
  getCapacity() {
    return this.availableElements.length;
  }
  assertNoLeaks(message) {
    const borrowedCount = this.borrowedElements.size;
    if (borrowedCount === 0)
      return;
    const details = message ? ` (${message})` : "";
    throw new Error(`Pool leak detected${details}: ${borrowedCount} borrowed element(s) were not released`);
  }
};
var C2Vec2Pool = class extends C2FastPool {
  constructor() {
    super(() => new C2Vec2());
  }
};
var C2DebugVec2Pool = class extends C2DebugPool {
  constructor() {
    super(() => new C2Vec2());
  }
};

// ../c2/dist/core/animation/c2-timer.js
var C2Timer = class {
  constructor() {
    this.currentTime = 0;
    this.delta = 0;
    this.unscaledDelta = 0;
    this.scale = 1;
    this.maxDelta = 200;
    this.elapsed = 0;
    this.unscaledElapsed = 0;
  }
  start(timestamp) {
    this.currentTime = timestamp;
    this.delta = 0;
    return this;
  }
  update(timestamp) {
    const delta = timestamp - this.currentTime;
    this.unscaledDelta = Math.min(delta, this.maxDelta);
    this.delta = this.unscaledDelta * this.scale;
    this.currentTime = timestamp;
    this.unscaledElapsed += this.unscaledDelta;
    this.elapsed += this.delta;
    return this;
  }
  setMaximumDeltaTime(maxDelta) {
    this.maxDelta = maxDelta;
    return this;
  }
  setTimeScale(scale) {
    this.scale = scale;
    return this;
  }
  getTimeScale() {
    return this.scale;
  }
  getDelta() {
    return this.delta;
  }
  getUnscaledDelta() {
    return this.unscaledDelta;
  }
  getElapsed() {
    return this.elapsed;
  }
  getUnscaledElapsed() {
    return this.unscaledElapsed;
  }
};

// ../c2/dist/core/animation/c2-animation-manager.js
var C2AnimationManager = class _C2AnimationManager {
  constructor() {
    this.activeAnimations = /* @__PURE__ */ new Set();
    this.sceneToUpdate = /* @__PURE__ */ new Set();
    this.isAwake = false;
    this.onFirstFrame = (timestamp) => {
      this.timer.start(timestamp);
    };
    this.onUpdate = (timestamp) => {
      this.timer.update(timestamp);
      const delta = this.timer.getDelta();
      for (const anim of this.activeAnimations) {
        anim.update(delta);
      }
      for (const scene of this.sceneToUpdate) {
        scene.update();
        scene.render();
      }
      this.sceneToUpdate.clear();
      if (this.activeAnimations.size > 0) {
        requestAnimationFrame(this.onUpdate);
        this.isAwake = true;
      } else {
        this.isAwake = false;
      }
    };
    this.timer = new C2Timer();
  }
  static getInstance() {
    if (!_C2AnimationManager._instance) {
      const animManager = new _C2AnimationManager();
      requestAnimationFrame(animManager.onFirstFrame);
      requestAnimationFrame(animManager.onUpdate);
      _C2AnimationManager._instance = animManager;
    }
    return _C2AnimationManager._instance;
  }
  static addAnimation(animation) {
    const instance = _C2AnimationManager.getInstance();
    instance.activeAnimations.add(animation);
    instance.wakeUp();
  }
  static removeAnimation(animation) {
    const instance = _C2AnimationManager.getInstance();
    instance.activeAnimations.delete(animation);
  }
  static requestUpdate(scene) {
    const instance = _C2AnimationManager.getInstance();
    instance.sceneToUpdate.add(scene);
    instance.wakeUp();
  }
  addAnimation(animation) {
    this.activeAnimations.add(animation);
    this.wakeUp();
    return this;
  }
  removeAnimation(animation) {
    this.activeAnimations.delete(animation);
    return this;
  }
  wakeUp() {
    if (this.isAwake)
      return;
    this.isAwake = true;
    requestAnimationFrame(this.onUpdate);
  }
};
C2AnimationManager._instance = null;

// ../c2/dist/core/scene/c2-base-scene.js
var C2BaseScene = class {
  constructor(canvas, context, options = {}) {
    this.worldSpace = new C2Space();
    this.viewSpace = new C2Space();
    this.viewportSize = new C2Vec2(640, 360);
    this.spaces = [];
    this.vecPool = [];
    this.usedVecs = /* @__PURE__ */ new Set();
    this.matPool = [];
    this.elements = [];
    this.renderCommands = [];
    this.tracePoolAllocations = false;
    this.nextElementId = 0;
    this.nextUpdateId = 0;
    this.themeModeIndex = 0;
    this.canvas = canvas;
    this.ctx = context;
    this.camera = new C2Camera(this);
    this.spaces.push(this.worldSpace, this.viewSpace);
    if (options.vecPoolMode === "debug") {
      const debugPool = new C2DebugVec2Pool();
      this.Vec2Pool = debugPool;
      this.debugVec2Pool = debugPool;
    } else {
      this.Vec2Pool = new C2Vec2Pool();
      this.debugVec2Pool = null;
    }
    if (options.themeMode) {
      this.themeModeIndex = options.themeMode === "light" ? 0 : 1;
    }
    const vecPoolCapacity = 32;
    for (let i = 0; i < vecPoolCapacity; i++) {
      this.vecPool.push(new C2Vec2());
    }
  }
  attachElement(element) {
    this.elements.push(element);
    if (element instanceof C2GraphicsElement) {
      this.renderCommands.push(element);
    }
  }
  detachElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
    if (element instanceof C2GraphicsElement) {
      const renderIndex = this.renderCommands.indexOf(element);
      if (renderIndex !== -1) {
        this.renderCommands.splice(renderIndex, 1);
      }
    }
  }
  getCanvas() {
    return this.canvas;
  }
  getContext() {
    return this.ctx;
  }
  getVecPool() {
    return this.Vec2Pool;
  }
  getThemeMode() {
    return this.themeModeIndex === 0 ? "light" : "dark";
  }
  getThemeModeIndex() {
    return this.themeModeIndex;
  }
  acquireVec2() {
    let vec = this.vecPool.pop();
    vec = vec ? vec : new C2Vec2();
    return vec;
  }
  releaseVec2(vec) {
    this.vecPool.push(vec);
  }
  getVecPoolSize() {
    return this.vecPool.length;
  }
  getUsedVecCount() {
    return this.usedVecs.size;
  }
  acquireMat2x3() {
    let mat = this.matPool.pop();
    mat = mat ? mat : new C2Mat2x3();
    return mat;
  }
  releaseMat2x3(mat) {
    this.matPool.push(mat);
  }
  getMatPoolSize() {
    return this.matPool.length;
  }
  getViewportSizeInto(dst) {
    dst.set(this.viewportSize.x, this.viewportSize.y);
    return this;
  }
  getViewportSize() {
    return this.viewportSize.clone();
  }
  getViewportWidth() {
    return this.viewportSize.x;
  }
  getViewportHeight() {
    return this.viewportSize.y;
  }
  getViewportAspectRatio() {
    return this.viewportSize.x / this.viewportSize.y;
  }
  getNextElementId() {
    return this.nextElementId++;
  }
  getNextUpdateId() {
    return this.nextUpdateId++;
  }
  getCamera() {
    return this.camera;
  }
  getWorldSpace() {
    return this.worldSpace;
  }
  getViewSpace() {
    return this.viewSpace;
  }
  setViewportSize(width, height) {
    this.viewportSize.set(width, height);
    this.camera.update();
  }
  setViewportSizeV(size) {
    return this.setViewportSize(size.x, size.y);
  }
  setThemeMode(mode2) {
    this.themeModeIndex = mode2 === "light" ? 0 : 1;
    C2AnimationManager.requestUpdate(this);
  }
  createSpace(parent = this.worldSpace) {
    const space = new C2Space(parent);
    this.spaces.push(space);
    return space;
  }
  detachSpace(space) {
    const index = this.spaces.indexOf(space);
    if (index !== -1) {
      this.spaces.splice(index, 1);
    }
  }
  update() {
    this.camera.update();
    for (const space of this.spaces) {
      space.update();
    }
    this.elements.sort((a, b) => {
      const value = C2Layer.compare(a.data.update.layer, b.data.update.layer);
      if (value !== 0)
        return value;
      return a.id - b.id;
    });
    for (const element of this.elements) {
      if (element.data.isEnabled.get() && !element.data.update.isManaged.get()) {
        element.update();
      }
    }
    if (this.debugVec2Pool) {
      this.debugVec2Pool.assertNoLeaks("update()");
    }
  }
  render() {
    this.renderCommands.sort((a, b) => {
      const value = C2Layer.compare(a.data.render.layer, b.data.render.layer);
      if (value !== 0)
        return value;
      return a.id - b.id;
    });
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    for (const element of this.renderCommands) {
      if (element.data.isEnabled.get() && element.data.render.isEnabled.get()) {
        element.render(this.ctx, this.viewSpace);
      }
    }
    if (this.debugVec2Pool) {
      this.debugVec2Pool.assertNoLeaks("render()");
    }
  }
  convertClientPointInto(dst, x, y) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const canvasX = (x - rect.left) * scaleX;
    const canvasY = (y - rect.top) * scaleY;
    dst.setValueFromSpace(canvasX, canvasY, this.getViewSpace());
  }
};

// ../c2/dist/core/shared/c2-point.js
var C2Point = class _C2Point extends C2BaseType {
  constructor(scene, x, y, space, locked = false) {
    super(scene);
    this.kind = "position";
    this.value = new C2Vec2(x, y);
    this.space = space;
    this.locked = locked;
  }
  clone() {
    return new _C2Point(this.scene, this.value.x, this.value.y, this.space, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (C2Vec2.equalsV(this.value, other.value) && this.space === other.space)
      return this;
    this.value.copy(other.value);
    this.space = other.space;
    return this;
  }
  lerp(state0, state1, t) {
    const space = state1.space;
    const vecPool = this.scene.getVecPool();
    const value0 = vecPool.get();
    const value1 = vecPool.get();
    state0.getInto(value0, space);
    state1.getInto(value1, space);
    C2Vec2.lerpV(this.value, value0, value1, t);
    this.space = space;
    vecPool.release(value0);
    vecPool.release(value1);
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Point(state1.scene, 0, 0, state1.space).lerp(state0, state1, t);
  }
  set(x = 0, y = 0, space) {
    if (this.value.x === x && this.value.y === y && this.space === space)
      return this;
    this.value.set(x, y);
    if (space)
      this.space = space;
    return this;
  }
  setV(point, space) {
    if (C2Vec2.equalsV(this.value, point) && this.space === space)
      return this;
    this.value.copy(point);
    if (space)
      this.space = space;
    return this;
  }
  setValueFromSpace(x, y, space) {
    if (C2Vec2.equals(this.value.x, this.value.y, x, y) && this.space === space)
      return this;
    space.convertPointInto(this.value, x, y, this.space);
    return this;
  }
  setValueFromSpaceV(point, space) {
    return this.setValueFromSpace(point.x, point.y, space);
  }
  getInto(dst, space) {
    this.space.convertPointIntoV(dst, this.value, space);
    return this;
  }
  changeSpace(space) {
    if (this.space === space)
      return this;
    this.space.convertPointIntoV(this.value, this.value, space);
    this.space = space;
    return this;
  }
};

// ../c2/dist/core/shared/c2-extents.js
var C2Extents = class _C2Extents extends C2BaseType {
  constructor(scene, x, y, space, locked = false) {
    super(scene);
    this.kind = "extents";
    this.value = new C2Vec2(x, y);
    this.space = space;
    this.locked = locked;
  }
  clone() {
    return new _C2Extents(this.scene, this.value.x, this.value.y, this.space, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (C2Vec2.equalsV(this.value, other.value) && this.space === other.space)
      return this;
    this.value.copy(other.value);
    this.space = other.space;
    return this;
  }
  lerp(state0, state1, t) {
    const space = state1.space;
    const vecPool = this.scene.getVecPool();
    const value0 = vecPool.get();
    const value1 = vecPool.get();
    state0.getInto(value0, space);
    state1.getInto(value1, space);
    C2Vec2.lerpV(this.value, value0, value1, t);
    this.space = space;
    vecPool.release(value0);
    vecPool.release(value1);
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Extents(state1.scene, 0, 0, state1.space).lerp(state0, state1, t);
  }
  set(x, y, space) {
    if (this.value.x === x && this.value.y === y && this.space === space)
      return this;
    this.value.set(x, y);
    if (space)
      this.space = space;
    return this;
  }
  setV(extents, space) {
    if (C2Vec2.equalsV(this.value, extents) && this.space === space)
      return this;
    this.value.copy(extents);
    if (space)
      this.space = space;
    return this;
  }
  setValueFromSpace(x, y, space) {
    if (C2Vec2.equals(this.value.x, this.value.y, x, y) && this.space === space)
      return this;
    space.convertExtentsInto(this.value, x, y, this.space);
    return this;
  }
  setValueFromSpaceV(extents, space) {
    return this.setValueFromSpace(extents.x, extents.y, space);
  }
  getInto(dst, space) {
    this.space.convertExtentsIntoV(dst, this.value, space);
    return this;
  }
  getMaxLengthInto(dst) {
    const maxLength = Math.max(this.value.x, this.value.y);
    dst.setValueFromSpace(maxLength, this.space);
    return this;
  }
  getMinLengthInto(dst) {
    const minLength = Math.min(this.value.x, this.value.y);
    dst.setValueFromSpace(minLength, this.space);
    return this;
  }
  changeSpace(space) {
    if (this.space === space)
      return this;
    this.space.convertExtentsIntoV(this.value, this.value, space);
    this.space = space;
    return this;
  }
};

// ../c2/dist/core/shared/c2-space-ref.js
var C2SpaceRef = class _C2SpaceRef extends C2BaseType {
  constructor(scene, value, locked = false) {
    super(scene);
    this.kind = "space-ref";
    this.value = value;
    this.locked = locked;
  }
  clone() {
    return new _C2SpaceRef(this.scene, this.value, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (this.value === other.value)
      return this;
    this.value = other.value;
    return this;
  }
  set(value) {
    if (this.value === value)
      return this;
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
};

// ../c2/dist/core/element/c2-grid.js
var C2GridData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    this.stroke = new C2StrokeData(scene);
    this.geometry = new C2GridGeometryData(scene);
    this.opacity = new C2Number(scene, 1);
    this.stroke.opacity.set(1);
    this.stroke.width.set(1, scene.getViewSpace());
    this.stroke.lineCap.set("butt");
  }
};
var C2GridGeometryData = class {
  constructor(scene) {
    const worldSpace = scene.getWorldSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.boundA = new C2Point(scene, -8, -4.5, worldSpace);
    this.boundB = new C2Point(scene, 8, 4.5, worldSpace);
    this.steps = new C2Extents(scene, 1, 1, worldSpace);
    this.referencePoint = new C2Point(scene, 0, 0, worldSpace);
  }
};
var C2Grid = class extends C2GraphicsElement {
  constructor(scene) {
    super(scene, new C2GridData(scene));
  }
  update() {
  }
  render(ctx, viewSpace) {
    const data = this.data.geometry;
    const epsilon = 1e-4;
    const space = data.space.get();
    const vecPool = this.scene.getVecPool();
    const pointA = vecPool.get();
    const pointB = vecPool.get();
    data.boundA.getInto(pointA, space);
    data.boundB.getInto(pointB, space);
    const lowerX = Math.min(pointA.x, pointB.x);
    const upperX = Math.max(pointA.x, pointB.x);
    const lowerY = Math.min(pointA.y, pointB.y);
    const upperY = Math.max(pointA.y, pointB.y);
    const steps = vecPool.get();
    const anchor = vecPool.get();
    data.steps.getInto(steps, space);
    data.referencePoint.getInto(anchor, space);
    const stepX = steps.x <= 0 ? steps.x : 1;
    const stepY = steps.y <= 0 ? steps.y : 1;
    const startX = anchor.x - Math.floor((anchor.x - lowerX + epsilon) / stepX) * stepX;
    const startY = anchor.y - Math.floor((anchor.y - lowerY + epsilon) / stepY) * stepY;
    this.data.stroke.applyToContext(ctx);
    ctx.beginPath();
    for (let x = startX; x < upperX + epsilon; x += stepX) {
      space.convertPointInto(pointA, x, lowerY, viewSpace);
      space.convertPointInto(pointB, x, upperY, viewSpace);
      pointA.round();
      pointB.round();
      ctx.moveTo(pointA.x, pointA.y);
      ctx.lineTo(pointB.x, pointB.y);
    }
    for (let y = startY; y < upperY + epsilon; y += stepY) {
      space.convertPointInto(pointA, lowerX, y, viewSpace);
      space.convertPointInto(pointB, upperX, y, viewSpace);
      pointA.round();
      pointB.round();
      ctx.moveTo(pointA.x, pointA.y);
      ctx.lineTo(pointB.x, pointB.y);
    }
    ctx.stroke();
    vecPool.release(steps);
    vecPool.release(anchor);
    vecPool.release(pointA);
    vecPool.release(pointB);
  }
};

// ../c2/dist/core/element/c2-path-circle.js
var C2PathCircleData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const worldSpace = scene.getWorldSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.position = new C2Point(scene, 0, 0, worldSpace);
    this.radius = new C2Length(scene, 1, worldSpace);
    this.stroke.isEnabled.set(true);
    this.fill.isEnabled.set(true);
  }
};
var C2PathCircle = class extends C2GraphicsElement {
  constructor(scene) {
    super(scene, new C2PathCircleData(scene));
    this.controlE = new C2Vec2();
    this.controlNE1 = new C2Vec2();
    this.controlNE2 = new C2Vec2();
    this.controlN = new C2Vec2();
    this.controlNW1 = new C2Vec2();
    this.controlNW2 = new C2Vec2();
    this.controlW = new C2Vec2();
    this.controlSW1 = new C2Vec2();
    this.controlSW2 = new C2Vec2();
    this.controlS = new C2Vec2();
    this.controlSE1 = new C2Vec2();
    this.controlSE2 = new C2Vec2();
    this.sdfCenter = new C2Vec2();
    this.sdfExtents = new C2Vec2();
    this.sdfRadius = 0;
  }
  getRadius(space) {
    return this.data.radius.get(space);
  }
  getPositionInto(dst, space) {
    this.data.position.getInto(dst, space);
  }
  getExtentsInto(dst, space) {
    const radius = this.data.radius.get(space);
    dst.set(radius, radius);
  }
  getCenterInto(dst, space) {
    this.data.position.getInto(dst, space);
  }
  getRectPointInto(dst, space, anchorX, anchorY) {
    const radius = this.data.radius.get(space);
    this.data.position.getInto(dst, space);
    dst.add(radius * anchorX, radius * anchorY);
  }
  evaluateSDF(x, y) {
    const dx = Math.abs(x - this.sdfCenter.x);
    const dy = Math.abs(y - this.sdfCenter.y);
    return Math.sqrt(dx * dx + dy * dy) - this.sdfRadius;
  }
  evaluateSDFV(p) {
    return this.evaluateSDF(p.x, p.y);
  }
  updateGeometry() {
    const space = this.data.space.get();
    const vecPool = this.scene.getVecPool();
    const center = vecPool.get();
    this.data.position.getInto(center, space);
    const r = this.data.radius.get(space);
    const cX = center.x;
    const cY = center.y;
    const k = r * 0.552284749831;
    this.controlE.set(cX + r, cY);
    this.controlW.set(cX - r, cY);
    this.controlS.set(cX, cY - r);
    this.controlN.set(cX, cY + r);
    this.controlNE1.copy(this.controlE).add(0, +k);
    this.controlNE2.copy(this.controlN).add(+k, 0);
    this.controlNW1.copy(this.controlN).add(-k, 0);
    this.controlNW2.copy(this.controlW).add(0, +k);
    this.controlSW1.copy(this.controlW).add(0, -k);
    this.controlSW2.copy(this.controlS).add(-k, 0);
    this.controlSE1.copy(this.controlS).add(+k, 0);
    this.controlSE2.copy(this.controlE).add(0, -k);
    vecPool.release(center);
  }
  updateSDF() {
    const space = this.data.space.get();
    this.data.position.getInto(this.sdfCenter, space);
    this.sdfRadius = this.data.radius.get(space);
  }
  update() {
    if (!this.data.isEnabled.get())
      return;
    this.updateSDF();
    this.updateGeometry();
  }
  render(ctx, viewSpace) {
    if (!this.data.isEnabled.get())
      return;
    if (!this.data.render.isEnabled.get())
      return;
    const vecPool = this.scene.getVecPool();
    const p1 = vecPool.get();
    const p2 = vecPool.get();
    const p3 = vecPool.get();
    const space = this.data.space.get();
    ctx.beginPath();
    space.convertPointIntoV(p1, this.controlE, viewSpace);
    p1.round();
    ctx.moveTo(p1.x, p1.y);
    space.convertPointIntoV(p1, this.controlNE1, viewSpace);
    space.convertPointIntoV(p2, this.controlNE2, viewSpace);
    space.convertPointIntoV(p3, this.controlN, viewSpace);
    p1.round();
    p2.round();
    p3.round();
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    space.convertPointIntoV(p1, this.controlNW1, viewSpace);
    space.convertPointIntoV(p2, this.controlNW2, viewSpace);
    space.convertPointIntoV(p3, this.controlW, viewSpace);
    p1.round();
    p2.round();
    p3.round();
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    space.convertPointIntoV(p1, this.controlSW1, viewSpace);
    space.convertPointIntoV(p2, this.controlSW2, viewSpace);
    space.convertPointIntoV(p3, this.controlS, viewSpace);
    p1.round();
    p2.round();
    p3.round();
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    space.convertPointIntoV(p1, this.controlSE1, viewSpace);
    space.convertPointIntoV(p2, this.controlSE2, viewSpace);
    space.convertPointIntoV(p3, this.controlE, viewSpace);
    p1.round();
    p2.round();
    p3.round();
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    ctx.closePath();
    if (this.data.fill.isEnabled.get()) {
      this.data.fill.applyToContext(ctx);
      ctx.fill();
    }
    if (this.data.stroke.isEnabled.get()) {
      this.data.stroke.applyToContext(ctx);
      ctx.stroke();
    }
    vecPool.release(p1);
    vecPool.release(p2);
    vecPool.release(p3);
  }
};

// ../c2/dist/core/shared/c2-anchor.js
var C2Anchor = class _C2Anchor extends C2BaseType {
  constructor(scene, x, y, locked = false) {
    super(scene);
    this.kind = "anchor";
    this.value = new C2Vec2(x, y);
    this.locked = locked;
  }
  clone() {
    return new _C2Anchor(this.scene, this.value.x, this.value.y, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (C2Vec2.equalsV(this.value, other.value))
      return this;
    this.value.copy(other.value);
    return this;
  }
  lerp(state0, state1, t) {
    C2Vec2.lerpV(this.value, state0.value, state1.value, t);
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Anchor(state1.scene, 0, 0).lerp(state0, state1, t);
  }
  set(x = 0, y = 0) {
    if (this.value.x === x && this.value.y === y)
      return this;
    this.value.set(x, y);
    return this;
  }
  setV(offset) {
    if (C2Vec2.equalsV(this.value, offset))
      return this;
    this.value.copy(offset);
    return this;
  }
  getInto(dst) {
    dst.copy(this.value);
    return this;
  }
  getRectPointIntoF(dst, positionX, positionY, extentsX, extentsY, anchorX, anchorY) {
    dst.set(positionX - (this.value.x - anchorX) * extentsX, positionY - (this.value.y - anchorY) * extentsY);
    return this;
  }
  getRectPointIntoV(dst, position, extents, anchor) {
    dst.set(position.x - (this.value.x - anchor.x) * extents.x, position.y - (this.value.y - anchor.y) * extents.y);
    return this;
  }
  getRectPointInto(dst, space, position, extents, anchorX, anchorY) {
    position.getInto(dst, space);
    const posX = dst.x;
    const posY = dst.y;
    extents.getInto(dst, space);
    const extX = dst.x;
    const extY = dst.y;
    dst.set(posX - (this.value.x - anchorX) * extX, posY - (this.value.y - anchorY) * extY);
    return this;
  }
  getCenter(space, position, extents) {
    const center = new C2Vec2();
    this.getCenterInto(center, space, position, extents);
    return center;
  }
  getCenterIntoF(dst, positionX, positionY, extentsX, extentsY) {
    dst.set(positionX - this.value.x * extentsX, positionY - this.value.y * extentsY);
    return this;
  }
  getCenterIntoV(dst, position, extents) {
    dst.set(position.x - this.value.x * extents.x, position.y - this.value.y * extents.y);
    return this;
  }
  getCenterInto(dst, space, position, extents) {
    return this.getRectPointInto(dst, space, position, extents, 0, 0);
  }
  getLower(space, position, extents) {
    const lower = new C2Vec2();
    this.getLowerInto(lower, space, position, extents);
    return lower;
  }
  getLowerInto(dst, space, position, extents) {
    return this.getRectPointInto(dst, space, position, extents, -1, -1);
  }
  getUpper(space, position, extents) {
    const upper = new C2Vec2();
    this.getUpperInto(upper, space, position, extents);
    return upper;
  }
  getUpperInto(dst, space, position, extents) {
    return this.getRectPointInto(dst, space, position, extents, 1, 1);
  }
};

// ../c2/dist/core/element/c2-path-rect.js
var C2PathRectData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const worldSpace = scene.getWorldSpace();
    const viewSpace = scene.getViewSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.position = new C2Point(scene, 0, 0, worldSpace);
    this.extents = new C2Extents(scene, 1, 1, worldSpace);
    this.anchor = new C2Anchor(scene, 0, 0);
    this.cornerRadius = new C2Length(scene, 0, viewSpace);
    this.cornerTension = new C2Number(scene, 0.552284749831);
    this.stroke.isEnabled.set(true);
    this.fill.isEnabled.set(true);
  }
};
var C2PathRect = class extends C2GraphicsElement {
  constructor(scene) {
    super(scene, new C2PathRectData(scene));
    this.cornerNE0 = new C2Vec2();
    this.cornerNE1 = new C2Vec2();
    this.cornerNE2 = new C2Vec2();
    this.cornerNE3 = new C2Vec2();
    this.cornerNW0 = new C2Vec2();
    this.cornerNW1 = new C2Vec2();
    this.cornerNW2 = new C2Vec2();
    this.cornerNW3 = new C2Vec2();
    this.cornerSW0 = new C2Vec2();
    this.cornerSW1 = new C2Vec2();
    this.cornerSW2 = new C2Vec2();
    this.cornerSW3 = new C2Vec2();
    this.cornerSE0 = new C2Vec2();
    this.cornerSE1 = new C2Vec2();
    this.cornerSE2 = new C2Vec2();
    this.cornerSE3 = new C2Vec2();
    this.vecNE = new C2Vec2();
    this.vecNW = new C2Vec2();
    this.vecSE = new C2Vec2();
    this.vecSW = new C2Vec2();
    this.sdfCenter = new C2Vec2();
    this.sdfExtents = new C2Vec2();
    this.sdfRadius = 0;
    this.path = new Path2D();
  }
  getPositionInto(dst, space) {
    this.data.position.getInto(dst, space);
  }
  getPath() {
    return this.path;
  }
  getExtentsInto(dst, space) {
    this.data.extents.getInto(dst, space);
  }
  getCenterInto(dst, space) {
    this.data.anchor.getCenterInto(dst, space, this.data.position, this.data.extents);
  }
  getRectPointInto(dst, space, anchorX, anchorY) {
    this.data.anchor.getRectPointInto(dst, space, this.data.position, this.data.extents, anchorX, anchorY);
  }
  getCornerRadius(space) {
    return this.data.cornerRadius.get(space);
  }
  evaluateSDF(x, y) {
    const dx = Math.abs(x - this.sdfCenter.x) - (this.sdfExtents.x - this.sdfRadius);
    const dy = Math.abs(y - this.sdfCenter.y) - (this.sdfExtents.y - this.sdfRadius);
    const ax = Math.max(dx, 0);
    const ay = Math.max(dy, 0);
    return Math.sqrt(ax * ax + ay * ay) + Math.min(Math.max(dx, dy), 0) - this.sdfRadius;
  }
  evaluateSDFV(p) {
    return this.evaluateSDF(p.x, p.y);
  }
  updateGeometry() {
    const space = this.data.space.get();
    const vecPool = this.scene.getVecPool();
    const center = vecPool.get();
    const extents = vecPool.get();
    this.data.position.getInto(center, space);
    this.data.extents.getInto(extents, space);
    this.data.anchor.getRectPointIntoF(center, center.x, center.y, extents.x, extents.y, 0, 0);
    const cX = center.x;
    const cY = center.y;
    const eX = extents.x;
    const eY = extents.y;
    const r = Math.min(this.data.cornerRadius.get(space), eX, eY);
    const k = r * this.data.cornerTension.get();
    this.vecNE.set(cX + eX, cY + eY);
    this.vecNW.set(cX - eX, cY + eY);
    this.vecSW.set(cX - eX, cY - eY);
    this.vecSE.set(cX + eX, cY - eY);
    this.cornerNE0.copy(this.vecNE).add(0, -r);
    this.cornerNE1.copy(this.vecNE).add(0, -r + k);
    this.cornerNE2.copy(this.vecNE).add(-r + k, 0);
    this.cornerNE3.copy(this.vecNE).add(-r, 0);
    this.cornerNW0.copy(this.vecNW).add(+r, 0);
    this.cornerNW1.copy(this.vecNW).add(+r - k, 0);
    this.cornerNW2.copy(this.vecNW).add(0, -r + k);
    this.cornerNW3.copy(this.vecNW).add(0, -r);
    this.cornerSW0.copy(this.vecSW).add(0, +r);
    this.cornerSW1.copy(this.vecSW).add(0, +r - k);
    this.cornerSW2.copy(this.vecSW).add(+r - k, 0);
    this.cornerSW3.copy(this.vecSW).add(+r, 0);
    this.cornerSE0.copy(this.vecSE).add(-r, 0);
    this.cornerSE1.copy(this.vecSE).add(-r + k, 0);
    this.cornerSE2.copy(this.vecSE).add(0, +r - k);
    this.cornerSE3.copy(this.vecSE).add(0, +r);
    vecPool.release(center);
    vecPool.release(extents);
  }
  updateSDF() {
    const space = this.data.space.get();
    const vecPool = this.scene.getVecPool();
    const position = vecPool.get();
    this.data.position.getInto(position, space);
    this.data.extents.getInto(this.sdfExtents, space);
    this.data.anchor.getCenterIntoV(this.sdfCenter, position, this.sdfExtents);
    this.sdfRadius = Math.min(this.data.cornerRadius.get(space), this.sdfExtents.x, this.sdfExtents.y);
    vecPool.release(position);
  }
  update() {
    if (!this.data.isEnabled.get())
      return;
    this.updateSDF();
    this.updateGeometry();
  }
  render(ctx, viewSpace) {
    if (!this.data.isEnabled.get())
      return;
    if (!this.data.render.isEnabled.get())
      return;
    const vecPool = this.scene.getVecPool();
    const p0 = vecPool.get();
    const p1 = vecPool.get();
    const p2 = vecPool.get();
    const p3 = vecPool.get();
    const space = this.data.space.get();
    ctx.beginPath();
    if (this.data.cornerRadius.value > 0) {
      space.convertPointIntoV(p0, this.cornerNE0, viewSpace);
      space.convertPointIntoV(p1, this.cornerNE1, viewSpace);
      space.convertPointIntoV(p2, this.cornerNE2, viewSpace);
      space.convertPointIntoV(p3, this.cornerNE3, viewSpace);
      p0.round();
      p3.round();
      ctx.moveTo(p0.x, p0.y);
      ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
      space.convertPointIntoV(p0, this.cornerNW0, viewSpace);
      space.convertPointIntoV(p1, this.cornerNW1, viewSpace);
      space.convertPointIntoV(p2, this.cornerNW2, viewSpace);
      space.convertPointIntoV(p3, this.cornerNW3, viewSpace);
      p0.round();
      p3.round();
      ctx.lineTo(p0.x, p0.y);
      ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
      space.convertPointIntoV(p0, this.cornerSW0, viewSpace);
      space.convertPointIntoV(p1, this.cornerSW1, viewSpace);
      space.convertPointIntoV(p2, this.cornerSW2, viewSpace);
      space.convertPointIntoV(p3, this.cornerSW3, viewSpace);
      p0.round();
      p3.round();
      ctx.lineTo(p0.x, p0.y);
      ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
      space.convertPointIntoV(p0, this.cornerSE0, viewSpace);
      space.convertPointIntoV(p1, this.cornerSE1, viewSpace);
      space.convertPointIntoV(p2, this.cornerSE2, viewSpace);
      space.convertPointIntoV(p3, this.cornerSE3, viewSpace);
      p0.round();
      p3.round();
      ctx.lineTo(p0.x, p0.y);
      ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    } else {
      space.convertPointIntoV(p0, this.cornerNE0, viewSpace);
      space.convertPointIntoV(p1, this.cornerNW0, viewSpace);
      space.convertPointIntoV(p2, this.cornerSW0, viewSpace);
      space.convertPointIntoV(p3, this.cornerSE0, viewSpace);
      p0.round();
      p1.round();
      p2.round();
      p3.round();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p3.x, p3.y);
    }
    ctx.closePath();
    if (this.data.fill.isEnabled.get()) {
      this.data.fill.applyToContext(ctx);
      ctx.fill();
    }
    if (this.data.stroke.isEnabled.get()) {
      this.data.stroke.applyToContext(ctx);
      ctx.stroke();
    }
    vecPool.release(p0);
    vecPool.release(p1);
    vecPool.release(p2);
    vecPool.release(p3);
  }
};

// ../c2/dist/core/animation/c2-easing.js
function easeLinear(t) {
  return t;
}
function easeInQuad(t) {
  return t * t;
}
function easeOutQuad(t) {
  const s = 1 - t;
  return 1 - s * s;
}
function easeInOutQuad(t) {
  if (t < 0.5) {
    return 2 * t * t;
  } else {
    const s = 1 - t;
    return 1 - 2 * s * s;
  }
}
function easeInCubic(t) {
  return t * t * t;
}
function easeOutCubic(t) {
  const s = 1 - t;
  return 1 - s * s * s;
}
function easeInOutCubic(t) {
  if (t < 0.5) {
    return 4 * t * t * t;
  } else {
    const s = 1 - t;
    return 1 - 2 * s * s * s;
  }
}
function easeInQuart(t) {
  return t * t * t * t;
}
function easeOutQuart(t) {
  const s = 1 - t;
  return 1 - s * s * s * s;
}
function easeInOutQuart(t) {
  if (t < 0.5) {
    return 8 * t * t * t * t;
  } else {
    const s = 1 - t;
    return 1 - 8 * s * s * s * s;
  }
}
function easeInExpo(t) {
  return t <= 0 ? 0 : Math.pow(2, 10 * t - 10);
}
function easeOutExpo(t) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}
function easeInOutExpo(t) {
  if (t <= 0)
    return 0;
  if (t >= 1)
    return 1;
  if (t < 0.5) {
    return Math.pow(2, 20 * t - 10) / 2;
  } else {
    return (2 - Math.pow(2, -20 * t + 10)) / 2;
  }
}
function easeInSine(t) {
  return 1 - Math.cos(t * (Math.PI / 2));
}
function easeOutSine(t) {
  return Math.sin(t * (Math.PI / 2));
}
function easeInOutSine(t) {
  return 0.5 * (1 - Math.cos(Math.PI * t));
}
function easeSmoothStep(t) {
  return t * t * (3 - 2 * t);
}
function easeSmootherStep(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
var ease = {
  linear: easeLinear,
  in: easeInQuad,
  inSine: easeInSine,
  inQuad: easeInQuad,
  inCubic: easeInCubic,
  inQuart: easeInQuart,
  inExpo: easeInExpo,
  out: easeOutQuad,
  outSine: easeOutSine,
  outQuad: easeOutQuad,
  outCubic: easeOutCubic,
  outQuart: easeOutQuart,
  outExpo: easeOutExpo,
  inOut: easeInOutQuad,
  inOutSine: easeInOutSine,
  inOutQuad: easeInOutQuad,
  inOutCubic: easeInOutCubic,
  inOutQuart: easeInOutQuart,
  inOutExpo: easeInOutExpo,
  smoothStep: easeSmoothStep,
  smootherStep: easeSmootherStep
};

// ../c2/dist/core/shared/c2-offset.js
var C2Offset = class _C2Offset extends C2BaseType {
  constructor(scene, x, y, space, locked = false) {
    super(scene);
    this.kind = "offset";
    this.value = new C2Vec2(x, y);
    this.space = space;
    this.locked = locked;
  }
  clone() {
    return new _C2Offset(this.scene, this.value.x, this.value.y, this.space, this.locked);
  }
  copyIfUnlocked(other) {
    if (this.locked)
      return this;
    return this.copy(other);
  }
  copy(other) {
    if (C2Vec2.equalsV(this.value, other.value) && this.space === other.space)
      return this;
    this.value.copy(other.value);
    this.space = other.space;
    return this;
  }
  lerp(state0, state1, t) {
    const space = state1.space;
    const vecPool = this.scene.getVecPool();
    const value0 = vecPool.get();
    const value1 = vecPool.get();
    state0.getInto(value0, space);
    state1.getInto(value1, space);
    C2Vec2.lerpV(this.value, value0, value1, t);
    this.space = space;
    vecPool.release(value0);
    vecPool.release(value1);
    return this;
  }
  static lerp(state0, state1, t) {
    return new _C2Offset(state1.scene, 0, 0, state1.space).lerp(state0, state1, t);
  }
  set(x = 0, y = 0, space) {
    if (this.value.x === x && this.value.y === y && this.space === space)
      return this;
    this.value.set(x, y);
    if (space)
      this.space = space;
    return this;
  }
  setV(offset, space) {
    if (C2Vec2.equalsV(this.value, offset) && this.space === space)
      return this;
    this.value.copy(offset);
    if (space)
      this.space = space;
    return this;
  }
  setValueFromSpace(x, y, space) {
    if (C2Vec2.equals(this.value.x, this.value.y, x, y) && this.space === space)
      return this;
    space.convertOffsetInto(this.value, x, y, this.space);
    return this;
  }
  setValueFromSpaceV(offset, space) {
    return this.setValueFromSpace(offset.x, offset.y, space);
  }
  getInto(dst, space) {
    this.space.convertOffsetIntoV(dst, this.value, space);
    return this;
  }
  changeSpace(space) {
    if (this.space === space)
      return this;
    this.space.convertOffsetIntoV(this.value, this.value, space);
    this.space = space;
    return this;
  }
};

// ../c2/dist/core/shared/s2-globals.js
var svgNS = "http://www.w3.org/2000/svg";
var C2TipTransform = class {
  constructor(scene) {
    this.strokeWidth = 1;
    this.pathLength = 1;
    this.space = scene.getWorldSpace();
    this.position = new C2Point(scene, 0, 0, this.space);
    this.tangent = new C2Offset(scene, 0, 0, this.space);
  }
};

// ../c2/dist/core/element/c2-arrow-tip.js
var C2ArrowTipData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const viewSpace = scene.getViewSpace();
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.pathPosition = new C2Number(scene, 1);
    this.pathThreshold = new C2Length(scene, 30, viewSpace);
    this.extents = new C2Extents(scene, 5, 5, viewSpace);
    this.pathStrokeFactor = new C2Number(scene, 1.5);
    this.tipInset = new C2Number(scene, 0.25);
    this.isReversed = new C2Boolean(scene, false);
    this.anchor = new C2Number(scene, 0);
    this.stroke.isEnabled.set(false);
    this.fill.isEnabled.set(true);
  }
};
var C2ArrowTip = class extends C2GraphicsElement {
  constructor(scene) {
    super(scene, new C2ArrowTipData(scene));
    this.tipableReference = null;
    this.element = document.createElementNS(svgNS, "path");
    this.transform = new C2Mat2x3();
    this.tipTransform = new C2TipTransform(scene);
  }
  setTipableReference(tipable) {
    this.tipableReference = tipable;
    return this;
  }
  update() {
  }
  render(ctx, viewSpace) {
    if (this.tipableReference === null)
      return;
    if (!this.data.isEnabled.get())
      return;
    const tipSpace = this.tipTransform.space;
    const vecPool = this.scene.getVecPool();
    const extents = vecPool.get();
    this.data.extents.getInto(extents, viewSpace);
    this.tipableReference.getTipTransformAtInto(this.tipTransform, this.data.pathPosition.get());
    const strokeWidth = tipSpace.convertLength(this.tipTransform.strokeWidth, viewSpace);
    extents.x += strokeWidth * this.data.pathStrokeFactor.get();
    extents.y += strokeWidth * this.data.pathStrokeFactor.get();
    const pathLength = tipSpace.convertLength(this.tipTransform.pathLength, viewSpace);
    const pathThreshold = this.data.pathThreshold.get(viewSpace);
    if (pathThreshold > 0 && pathLength < pathThreshold) {
      extents.scale(ease.out(pathLength / pathThreshold));
    }
    const tangent = vecPool.get();
    const position = vecPool.get();
    this.tipTransform.position.getInto(position, viewSpace);
    this.tipTransform.tangent.getInto(tangent, viewSpace);
    const angle = -tangent.angle();
    const xScaleSign = this.data.isReversed.get() ? -1 : 1;
    this.transform.makeIdentity().translate(this.data.anchor.get(), 0).scale(xScaleSign * extents.x, extents.y).rotate(angle, "rad").translateV(position);
    const p0 = vecPool.get();
    const p1 = vecPool.get();
    const p2 = vecPool.get();
    const p3 = vecPool.get();
    const inset = -1 + 2 * this.data.tipInset.get();
    p0.set(inset, 0).apply2x3(this.transform).round();
    p1.set(-1, 1).apply2x3(this.transform).round();
    p2.set(1, 0).apply2x3(this.transform).round();
    p3.set(-1, -1).apply2x3(this.transform).round();
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    if (this.data.stroke.isEnabled.get()) {
      this.data.stroke.applyToContext(ctx);
      ctx.stroke();
    }
    if (this.data.fill.isEnabled.get()) {
      this.data.fill.applyToContext(ctx);
      ctx.fill();
    }
    vecPool.release(extents);
    vecPool.release(tangent);
    vecPool.release(position);
    vecPool.release(p0);
    vecPool.release(p1);
    vecPool.release(p2);
    vecPool.release(p3);
  }
};

// ../c2/dist/core/element/node/c2-base-edge.js
var C2EdgeData = class extends C2GraphicsData {
  constructor(scene) {
    const viewSpace = scene.getViewSpace();
    super(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.pathFrom = new C2Number(scene, 0);
    this.pathTo = new C2Number(scene, 1);
    this.startDistance = new C2Length(scene, 0, viewSpace);
    this.endDistance = new C2Length(scene, 0, viewSpace);
    this.pathThreshold = new C2Length(scene, 2, viewSpace);
    this.stroke.isEnabled.set(true);
    this.stroke.width.set(4, viewSpace);
  }
};
var C2BaseEdge = class extends C2GraphicsElement {
  //protected labels: C2EdgeLabel[] = [];
  constructor(scene, data, start, end) {
    super(scene, data);
    this.arrowTips = [];
    this.start = start;
    this.end = end;
    this.data.update.layer.set(Math.max(start.data.update.layer.get(), end.data.update.layer.get()) + 1);
  }
  createArrowTip() {
    const arrowTip = new C2ArrowTip(this.scene);
    this.arrowTips.push(arrowTip);
    arrowTip.data.pathPosition.set(1);
    arrowTip.data.update.layer.set(this.data.update.layer.get() + 1);
    arrowTip.setTipableReference(this);
    return arrowTip;
  }
  getTip(index) {
    return this.arrowTips[index];
  }
  getTipCount() {
    return this.arrowTips.length;
  }
  detachTip(index) {
    if (index >= 0 && index < this.arrowTips.length) {
      this.arrowTips.splice(index, 1);
    }
    return this;
  }
  detachTipElement(arrowTip) {
    const index = this.arrowTips.indexOf(arrowTip);
    if (index >= 0) {
      this.arrowTips.splice(index, 1);
    }
    return this;
  }
  detachTipElements() {
    this.arrowTips.length = 0;
    return this;
  }
  // attachLabel(label: C2EdgeLabel): this {
  //     label.setParent(this);
  //     label.setEdgeReference(this);
  //     label.markDirty();
  //     this.labels.push(label);
  //     this.markDirty();
  //     return this;
  // }
  // detachLabel(label: C2EdgeLabel): this {
  //     label.setParent(null);
  //     const index = this.labels.indexOf(label);
  //     if (index === -1) return this;
  //     this.labels.splice(index, 1);
  //     label.markDirty();
  //     this.markDirty();
  //     return this;
  // }
  getStart() {
    return this.start;
  }
  getEnd() {
    return this.end;
  }
  updateArrowTips() {
    const updateLayer = this.data.update.layer.get();
    const renderLayer = this.data.render.layer.get();
    const updateEnabled = this.data.isEnabled.get();
    const renderEnabled = this.data.render.isEnabled.get();
    for (const arrowTip of this.arrowTips) {
      arrowTip.data.fill.color.copyIfUnlocked(this.data.stroke.color);
      arrowTip.data.fill.opacity.copyIfUnlocked(this.data.stroke.opacity);
      arrowTip.data.update.layer.set(updateLayer + 1);
      arrowTip.data.render.layer.set(renderLayer + 1);
      arrowTip.data.isEnabled.set(updateEnabled);
      arrowTip.data.render.isEnabled.set(renderEnabled);
      arrowTip.update();
    }
  }
};

// ../c2/dist/core/math/curve/c2-sdf.js
var C2CircleSDF = class {
  constructor() {
    this.center = new C2Vec2(0, 0);
    this.radius = 0;
  }
  evaluateSDF(x, y) {
    const dx = x - this.center.x;
    const dy = y - this.center.y;
    return Math.sqrt(dx * dx + dy * dy) - this.radius;
  }
  evaluateSDFV(p) {
    return this.evaluateSDF(p.x, p.y);
  }
  setRadius(radius) {
    this.radius = radius;
  }
  setCenter(center) {
    this.center.copy(center);
  }
  getRadius() {
    return this.radius;
  }
  getCenterInto(dst) {
    dst.copy(this.center);
  }
};
var C2SDFUtils = class {
  static evaluateSDF(sdf, curve, curveTransform, t, tmp) {
    curve.getPointInto(tmp, t);
    tmp.apply2x3(curveTransform);
    return sdf.evaluateSDFV(tmp);
  }
  static findPointAtDistance(sdf, curve, curveTransform, distance, tMin, tMax, tmp, tolerance = 0.01, maxIterations = 30) {
    let valueMin = this.evaluateSDF(sdf, curve, curveTransform, tMin, tmp) - distance;
    let valueMax = this.evaluateSDF(sdf, curve, curveTransform, tMax, tmp) - distance;
    if (valueMin * valueMax > 0) {
      return -1;
    }
    for (let i = 0; i < maxIterations; i++) {
      const tMid = (tMin + tMax) / 2;
      const valueMid = this.evaluateSDF(sdf, curve, curveTransform, tMid, tmp) - distance;
      if (Math.abs(valueMid) < tolerance) {
        return tMid;
      }
      if (valueMin * valueMid < 0) {
        tMax = tMid;
        valueMax = valueMid;
      } else {
        tMin = tMid;
        valueMin = valueMid;
      }
    }
    return (tMin + tMax) / 2;
  }
};

// ../c2/dist/core/math/curve/length-mapper/c2-sampler-length-mapper.js
var C2SamplerLengthMapper = class {
  constructor(sampleCount = 8) {
    this.length = 0;
    this.sampleCount = sampleCount;
    this.arcLengths = new Float32Array(this.sampleCount);
    this.sampleInputValues = new Float32Array(this.sampleCount);
  }
  getLength() {
    return this.length;
  }
  getTFromLength(targetLength) {
    if (targetLength <= 0)
      return 0;
    if (targetLength >= this.length)
      return 1;
    const maxIndex = this.arcLengths.length - 1;
    let low = 0;
    let high = maxIndex;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      const midLength = this.arcLengths[mid];
      if (midLength < targetLength) {
        low = mid + 1;
      } else if (midLength > targetLength) {
        high = mid - 1;
      } else {
        low = mid;
        break;
      }
    }
    if (this.arcLengths[low] > targetLength) {
      low--;
    }
    low = C2MathUtils.clamp(low, 0, maxIndex - 1);
    return C2MathUtils.remap(this.arcLengths[low], this.arcLengths[low + 1], this.sampleInputValues[low], this.sampleInputValues[low + 1], targetLength);
  }
  getTFromU(u) {
    return this.getTFromLength(u * this.length);
  }
  getUFromT(t) {
    const maxIndex = this.arcLengths.length - 1;
    let low = 0;
    let high = maxIndex;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      const midT = this.sampleInputValues[mid];
      if (midT < t) {
        low = mid + 1;
      } else if (midT > t) {
        high = mid - 1;
      } else {
        low = mid;
        break;
      }
    }
    if (this.sampleInputValues[low] > t) {
      low--;
    }
    low = C2MathUtils.clamp(low, 0, maxIndex - 1);
    return C2MathUtils.remap(this.sampleInputValues[low], this.sampleInputValues[low + 1], this.arcLengths[low], this.arcLengths[low + 1], t) / this.length;
  }
};

// ../c2/dist/core/math/curve/length-mapper/c2-bezier-length-mapper.js
var C2BezierLengthMapper = class extends C2SamplerLengthMapper {
  constructor(curve, vecPool, sampleCount = 8) {
    super(sampleCount);
    this.curve = curve;
    this.vecPool = vecPool;
    this.update();
  }
  update() {
    const prevPoint = this.vecPool.get();
    const currPoint = this.vecPool.get();
    this.curve.getPointInto(prevPoint, 0);
    this.arcLengths[0] = 0;
    this.sampleInputValues[0] = 0;
    let currLength = 0;
    for (let i = 1; i < this.sampleCount; i++) {
      const t = i / (this.sampleCount - 1);
      this.sampleInputValues[i] = t;
      this.curve.getPointInto(currPoint, t);
      currLength += prevPoint.distance(currPoint);
      this.arcLengths[i] = currLength;
      prevPoint.copy(currPoint);
    }
    this.length = currLength;
    this.vecPool.release(prevPoint);
    this.vecPool.release(currPoint);
  }
};

// ../c2/dist/core/math/curve/c2-cubic-curve.js
var C2CubicCurve = class {
  constructor(x0 = 0, y0 = 0, x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  setControlPoints(x0, y0, x1, y1, x2, y2, x3, y3) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    return this;
  }
  setControlPointsV(p0, p1, p2, p3) {
    this.x0 = p0.x;
    this.y0 = p0.y;
    this.x1 = p1.x;
    this.y1 = p1.y;
    this.x2 = p2.x;
    this.y2 = p2.y;
    this.x3 = p3.x;
    this.y3 = p3.y;
    return this;
  }
  setStart(x, y) {
    this.x0 = x;
    this.y0 = y;
    return this;
  }
  setStartV(p) {
    this.x0 = p.x;
    this.y0 = p.y;
    return this;
  }
  setControl1(x, y) {
    this.x1 = x;
    this.y1 = y;
    return this;
  }
  setControl1V(p) {
    this.x1 = p.x;
    this.y1 = p.y;
    return this;
  }
  setControl2(x, y) {
    this.x2 = x;
    this.y2 = y;
    return this;
  }
  setControl2V(p) {
    this.x2 = p.x;
    this.y2 = p.y;
    return this;
  }
  setEnd(x, y) {
    this.x3 = x;
    this.y3 = y;
    return this;
  }
  setEndV(p) {
    this.x3 = p.x;
    this.y3 = p.y;
    return this;
  }
  copy(src) {
    this.x0 = src.x0;
    this.y0 = src.y0;
    this.x1 = src.x1;
    this.y1 = src.y1;
    this.x2 = src.x2;
    this.y2 = src.y2;
    this.x3 = src.x3;
    this.y3 = src.y3;
    return this;
  }
  getControlPointsInto(dst0, dst1, dst2, dst3) {
    dst0.set(this.x0, this.y0);
    dst1.set(this.x1, this.y1);
    dst2.set(this.x2, this.y2);
    dst3.set(this.x3, this.y3);
    return this;
  }
  getStartInto(dst) {
    dst.set(this.x0, this.y0);
    return this;
  }
  getEndInto(dst) {
    dst.set(this.x3, this.y3);
    return this;
  }
  getControl1Into(dst) {
    dst.set(this.x1, this.y1);
    return this;
  }
  getControl2Into(dst) {
    dst.set(this.x2, this.y2);
    return this;
  }
  getStartTangentInto(dst) {
    dst.set(this.x1 - this.x0, this.y1 - this.y0);
    return this;
  }
  getEndTangentInto(dst) {
    dst.set(this.x3 - this.x2, this.y3 - this.y2);
    return this;
  }
  getPointInto(dst, t) {
    const s = 1 - t;
    const c0 = s * s * s;
    const c1 = s * s * t * 3;
    const c2 = s * t * t * 3;
    const c3 = t * t * t;
    dst.set(c0 * this.x0 + c1 * this.x1 + c2 * this.x2 + c3 * this.x3, c0 * this.y0 + c1 * this.y1 + c2 * this.y2 + c3 * this.y3);
    return this;
  }
  getTangentInto(dst, t) {
    const s = 1 - t;
    const c0 = s * s;
    const c1 = s * t * 2;
    const c2 = t * t;
    dst.set(c0 * (this.x1 - this.x0) + c1 * (this.x2 - this.x1) + c2 * (this.x3 - this.x2), c0 * (this.y1 - this.y0) + c1 * (this.y2 - this.y1) + c2 * (this.y3 - this.y2));
    return this;
  }
  subdivideLowerInto(dst, t) {
    const x01 = this.x0 + (this.x1 - this.x0) * t;
    const y01 = this.y0 + (this.y1 - this.y0) * t;
    const x12 = this.x1 + (this.x2 - this.x1) * t;
    const y12 = this.y1 + (this.y2 - this.y1) * t;
    const x23 = this.x2 + (this.x3 - this.x2) * t;
    const y23 = this.y2 + (this.y3 - this.y2) * t;
    const x012 = x01 + (x12 - x01) * t;
    const y012 = y01 + (y12 - y01) * t;
    const x123 = x12 + (x23 - x12) * t;
    const y123 = y12 + (y23 - y12) * t;
    const x0123 = x012 + (x123 - x012) * t;
    const y0123 = y012 + (y123 - y012) * t;
    dst.x0 = this.x0;
    dst.y0 = this.y0;
    dst.x1 = x01;
    dst.y1 = y01;
    dst.x2 = x012;
    dst.y2 = y012;
    dst.x3 = x0123;
    dst.y3 = y0123;
    return this;
  }
  subdivideUpperInto(dst, t) {
    const x01 = this.x0 + (this.x1 - this.x0) * t;
    const y01 = this.y0 + (this.y1 - this.y0) * t;
    const x12 = this.x1 + (this.x2 - this.x1) * t;
    const y12 = this.y1 + (this.y2 - this.y1) * t;
    const x23 = this.x2 + (this.x3 - this.x2) * t;
    const y23 = this.y2 + (this.y3 - this.y2) * t;
    const x012 = x01 + (x12 - x01) * t;
    const y012 = y01 + (y12 - y01) * t;
    const x123 = x12 + (x23 - x12) * t;
    const y123 = y12 + (y23 - y12) * t;
    const x0123 = x012 + (x123 - x012) * t;
    const y0123 = y012 + (y123 - y012) * t;
    dst.x0 = x0123;
    dst.y0 = y0123;
    dst.x1 = x123;
    dst.y1 = y123;
    dst.x2 = x23;
    dst.y2 = y23;
    dst.x3 = this.x3;
    dst.y3 = this.y3;
    return this;
  }
  subdivideAtInto(dstLower, dstUpper, t) {
    const x01 = this.x0 + (this.x1 - this.x0) * t;
    const y01 = this.y0 + (this.y1 - this.y0) * t;
    const x12 = this.x1 + (this.x2 - this.x1) * t;
    const y12 = this.y1 + (this.y2 - this.y1) * t;
    const x23 = this.x2 + (this.x3 - this.x2) * t;
    const y23 = this.y2 + (this.y3 - this.y2) * t;
    const x012 = x01 + (x12 - x01) * t;
    const y012 = y01 + (y12 - y01) * t;
    const x123 = x12 + (x23 - x12) * t;
    const y123 = y12 + (y23 - y12) * t;
    const x0123 = x012 + (x123 - x012) * t;
    const y0123 = y012 + (y123 - y012) * t;
    if (dstLower) {
      dstLower.x0 = this.x0;
      dstLower.y0 = this.y0;
      dstLower.x1 = x01;
      dstLower.y1 = y01;
      dstLower.x2 = x012;
      dstLower.y2 = y012;
      dstLower.x3 = x0123;
      dstLower.y3 = y0123;
    }
    if (dstUpper) {
      dstUpper.x0 = x0123;
      dstUpper.y0 = y0123;
      dstUpper.x1 = x123;
      dstUpper.y1 = y123;
      dstUpper.x2 = x23;
      dstUpper.y2 = y23;
      dstUpper.x3 = this.x3;
      dstUpper.y3 = this.y3;
    }
    return this;
  }
  subdivideInto(dst, t0, t1) {
    this.subdivideLowerInto(dst, t1);
    dst.subdivideUpperInto(dst, t0 / t1);
    return this;
  }
  getBezierPointInto(dst, index) {
    switch (index) {
      case 0:
        dst.set(this.x0, this.y0);
        break;
      case 1:
        dst.set(this.x1, this.y1);
        break;
      case 2:
        dst.set(this.x2, this.y2);
        break;
      default:
      case 3:
        dst.set(this.x3, this.y3);
        break;
    }
    return this;
  }
  getBoundingBoxInto(dstMin, dstMax) {
    dstMin.set(Math.min(this.x0, this.x1, this.x2, this.x3), Math.min(this.y0, this.y1, this.y2, this.y3));
    dstMax.set(Math.max(this.x0, this.x1, this.x2, this.x3), Math.max(this.y0, this.y1, this.y2, this.y3));
    return this;
  }
  controlPointsFlatness() {
    const dx = this.x3 - this.x0;
    const dy = this.y3 - this.y0;
    const denom = Math.max(Math.hypot(dx, dy), 1e-12);
    const d1 = Math.abs(dx * (this.y0 - this.y1) - (this.x0 - this.x1) * dy) / denom;
    const d2 = Math.abs(dx * (this.y0 - this.y2) - (this.x0 - this.x2) * dy) / denom;
    return Math.max(d1, d2);
  }
};

// ../c2/dist/core/element/node/c2-cubic-edge.js
var C2CubicEdgeData = class extends C2EdgeData {
  constructor(scene) {
    super(scene);
    this.startAngle = new C2Number(scene, -Infinity);
    this.endAngle = new C2Number(scene, -Infinity);
    this.startTension = new C2Number(scene, 0.3);
    this.endTension = new C2Number(scene, 0.3);
    this.bendAngle = new C2Number(scene, 0);
  }
};
var C2CubicEdge = class extends C2BaseEdge {
  constructor(scene, start, end) {
    super(scene, new C2CubicEdgeData(scene), start, end);
    this.curve = new C2CubicCurve();
    this.lengthMapper = new C2BezierLengthMapper(this.curve, scene.getVecPool());
  }
  getTipTransformAtInto(dst, t) {
    const space = this.scene.getWorldSpace();
    t = this.lengthMapper.getTFromU(t);
    dst.space = space;
    dst.pathLength = this.lengthMapper.getLength();
    dst.strokeWidth = this.data.stroke.width.get(space);
    this.curve.getPointInto(dst.position.value, t);
    this.curve.getTangentInto(dst.tangent.value, t);
    dst.position.space = space;
    dst.tangent.space = space;
  }
  updateCurve() {
    const space = this.scene.getWorldSpace();
    const vecPool = this.scene.getVecPool();
    const p0 = vecPool.get();
    const p1 = vecPool.get();
    const p2 = vecPool.get();
    const p3 = vecPool.get();
    const tmp = vecPool.get();
    this.start.getCenterInto(p0, space);
    this.end.getCenterInto(p3, space);
    const distance = p0.distance(p3);
    if (distance <= 1e-6) {
      p1.set(0, 0);
      p2.set(0, 0);
    } else {
      p1.copy(p3).subV(p0);
      p1.scale(1 / distance);
      p2.copy(p1).negate();
    }
    if (this.data.startAngle.get() !== -Infinity) {
      p1.setPolar(this.data.startAngle.get(), 1, "deg");
    }
    if (this.data.endAngle.get() !== -Infinity) {
      p2.setPolar(this.data.endAngle.get(), 1, "deg");
    }
    const bendAngle = this.data.bendAngle.get() !== -Infinity ? this.data.bendAngle.get() : 0;
    p1.rotate(-bendAngle, "deg");
    p2.rotate(+bendAngle, "deg");
    p1.scale(this.data.startTension.get() * distance).addV(p0);
    p2.scale(this.data.endTension.get() * distance).addV(p3);
    this.curve.setControlPointsV(p0, p1, p2, p3);
    const sdf0 = this.start;
    const sdf1 = this.end;
    const space0 = this.start.data.space.get();
    const space1 = this.end.data.space.get();
    const d0 = this.data.startDistance.get(space0);
    const d1 = this.data.endDistance.get(space1);
    const mat = this.scene.acquireMat2x3();
    space.getThisToSpaceInto(mat, space0);
    let t0 = C2SDFUtils.findPointAtDistance(sdf0, this.curve, mat, d0, 0, 1, tmp);
    space.getThisToSpaceInto(mat, space1);
    let t1 = C2SDFUtils.findPointAtDistance(sdf1, this.curve, mat, d1, 0, 1, tmp);
    const deltaT = t1 - t0;
    t0 += this.data.pathFrom.get() * deltaT;
    t1 -= (1 - this.data.pathTo.get()) * deltaT;
    this.curve.subdivideInto(this.curve, t0, t1);
    this.lengthMapper.update();
    vecPool.release(p0);
    vecPool.release(p1);
    vecPool.release(p2);
    vecPool.release(p3);
    vecPool.release(tmp);
    this.scene.releaseMat2x3(mat);
  }
  update() {
    if (!this.data.isEnabled.get())
      return;
    this.updateCurve();
    this.updateArrowTips();
  }
  render(ctx, viewSpace) {
    if (!this.data.isEnabled.get())
      return;
    if (!this.data.render.isEnabled.get())
      return;
    if (!this.data.stroke.isEnabled.get())
      return;
    const space = this.scene.getWorldSpace();
    const pathThreshold = this.data.pathThreshold.get(viewSpace);
    const length = space.convertLength(this.lengthMapper.getLength(), viewSpace);
    if (pathThreshold > 0 && length < pathThreshold) {
      return;
    }
    const vecPool = this.scene.getVecPool();
    const p0 = vecPool.get();
    const p1 = vecPool.get();
    const p2 = vecPool.get();
    const p3 = vecPool.get();
    this.curve.getControlPointsInto(p0, p1, p2, p3);
    space.convertPointIntoV(p0, p0, viewSpace);
    space.convertPointIntoV(p1, p1, viewSpace);
    space.convertPointIntoV(p2, p2, viewSpace);
    space.convertPointIntoV(p3, p3, viewSpace);
    p0.round();
    p1.round();
    p2.round();
    p3.round();
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    this.data.stroke.applyToContext(ctx);
    ctx.stroke();
    vecPool.release(p0);
    vecPool.release(p1);
    vecPool.release(p2);
    vecPool.release(p3);
  }
};

// ../c2/dist/core/element/node/c2-node-data.js
var C2NodeData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const worldSpace = scene.getWorldSpace();
    const viewSpace = scene.getViewSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.position = new C2Point(scene, 0, 0, worldSpace);
    this.anchor = new C2Anchor(scene, 0, 0);
    this.minExtents = new C2Extents(scene, 0, 0, viewSpace);
    this.background = new C2NodeBackgroundData(scene);
    this.text = new C2NodeTextData(scene);
    this.padding = new C2Extents(scene, 10, 5, viewSpace);
  }
};
var C2NodeBackgroundData = class {
  constructor(scene) {
    const viewSpace = scene.getViewSpace();
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.cornerRadius = new C2Length(scene, 5, viewSpace);
    this.shape = new C2Enum(scene, "rectangle");
    this.stroke.opacity.set(1);
    this.fill.opacity.set(1);
  }
};
var C2NodeTextData = class {
  constructor(scene) {
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.font = new C2FontData(scene);
    this.horizontalAlign = new C2Number(scene, 0);
    this.verticalAlign = new C2Number(scene, 0);
    this.stroke.isEnabled.set(false);
  }
};

// ../c2/dist/core/element/text/c2-base-text.js
var C2TextData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.font = new C2FontData(scene);
    this.opacity = new C2Number(scene, 1);
    this.position = new C2Point(scene, 0, 0, scene.getWorldSpace());
    this.offset = new C2Offset(scene, 0, 0, scene.getViewSpace());
    this.textAnchor = new C2Number(scene, 0);
    this.stroke.isEnabled.set(false);
  }
};
var C2BaseText = class extends C2GraphicsElement {
  constructor(scene, data) {
    super(scene, data);
    this.ascent = 0;
    this.descent = 0;
    this.width = 0;
    this.extents = new C2Extents(scene, 0, 0, scene.getViewSpace());
    this.center = new C2Point(scene, 0, 0, scene.getViewSpace());
  }
  getPositionInto(dst, space) {
    this.data.position.getInto(dst, space);
    return this;
  }
  getExtentsInto(dst, space) {
    this.extents.getInto(dst, space);
    return this;
  }
  getCenterInto(dst, space) {
    this.center.getInto(dst, space);
    return this;
  }
  getWidth(space) {
    return this.scene.getViewSpace().convertLength(this.width, space);
  }
  getWidthPx() {
    return this.width;
  }
  getFontAscent(space) {
    return this.scene.getViewSpace().convertLength(this.ascent, space);
  }
  getFontAscentPx() {
    return this.ascent;
  }
  getFontDescent(space) {
    return this.scene.getViewSpace().convertLength(this.descent, space);
  }
  getFontDescentPx() {
    return this.descent;
  }
  getFontHeight(space) {
    return this.scene.getViewSpace().convertLength(this.ascent + this.descent, space);
  }
  getFontHeightPx() {
    return this.ascent + this.descent;
  }
};

// ../c2/dist/core/element/text/c2-plain-text.js
var C2BasePlainText = class extends C2BaseText {
  constructor(scene, data) {
    super(scene, data);
    this.content = "";
    this.metrics = null;
  }
  setContent(content) {
    this.content = content;
    return this;
  }
  getContent() {
    return this.content;
  }
  update() {
    const viewSpace = this.scene.getViewSpace();
    const ctx = this.scene.getContext();
    const vecPool = this.scene.getVecPool();
    this.data.font.applyToContext(ctx);
    this.metrics = ctx.measureText(this.content);
    this.ascent = this.metrics.fontBoundingBoxAscent;
    this.descent = this.metrics.fontBoundingBoxDescent;
    this.width = this.metrics.width;
    this.extents.set(this.metrics.width / 2, (this.metrics.fontBoundingBoxAscent + this.metrics.fontBoundingBoxDescent) / 2, viewSpace);
    const center = vecPool.get();
    this.getPositionInto(center, viewSpace);
    center.y += -0.5 * (this.ascent - this.descent);
    center.x += -0.5 * this.data.textAnchor.get() * this.width;
    this.center.setV(center, viewSpace);
    vecPool.release(center);
  }
  render(ctx, viewSpace) {
    if (!this.data.isEnabled.get())
      return;
    if (!this.content)
      return;
    this.data.font.applyToContext(ctx);
    ctx.textAlign = "center";
    const vecPool = this.scene.getVecPool();
    const position = vecPool.get();
    const offset = vecPool.get();
    const extents = vecPool.get();
    this.data.position.getInto(position, viewSpace);
    this.data.offset.getInto(offset, viewSpace);
    this.extents.getInto(extents, viewSpace);
    position.addV(offset);
    position.x -= this.data.textAnchor.get() * extents.x;
    if (this.data.stroke.isEnabled.get()) {
      this.data.stroke.applyToContext(ctx);
      ctx.strokeText(this.content, position.x, position.y);
    }
    if (this.data.fill.isEnabled.get()) {
      this.data.fill.applyToContext(ctx);
      ctx.fillText(this.content, position.x, position.y);
    }
    vecPool.release(position);
    vecPool.release(offset);
    vecPool.release(extents);
  }
};
var C2PlainText = class extends C2BasePlainText {
  constructor(scene) {
    super(scene, new C2TextData(scene));
  }
};

// ../c2/dist/core/element/node/c2-base-node.js
var C2BaseNode = class extends C2Element {
  //protected edges: C2BaseEdge[] = [];
  constructor(scene) {
    super(scene, new C2NodeData(scene));
    this.defaultSDF = new C2CircleSDF();
    this.background = null;
    this.prevShape = "none";
    this.extents = new C2Extents(scene, 0, 0, scene.getViewSpace());
    this.center = new C2Point(scene, 0, 0, scene.getWorldSpace());
    this.data.update.layer.orderInLayer = 0;
    this.data.render.layer.orderInLayer = 0;
  }
  getPositionInto(dst, space) {
    this.center.getInto(dst, space);
  }
  getExtentsInto(dst, space) {
    this.extents.getInto(dst, space);
  }
  getCenterInto(dst, space) {
    this.center.getInto(dst, space);
  }
  getRectPointInto(dst, space, anchorX, anchorY) {
    this.data.anchor.getRectPointInto(dst, space, this.data.position, this.extents, anchorX, anchorY);
  }
  getMinExtentsInto(dst, space) {
    this.data.minExtents.getInto(dst, space);
    return this;
  }
  // attachEdge(edge: C2BaseEdge): this {
  //     this.edges.push(edge);
  //     edge.markDirty();
  //     return this;
  // }
  // detachEdge(edge: C2BaseEdge): this {
  //     const index = this.edges.indexOf(edge);
  //     if (index === -1) return this;
  //     this.edges.splice(index, 1);
  //     edge.markDirty();
  //     return this;
  // }
  evaluateSDF(x, y) {
    if (this.background !== null) {
      return this.background.evaluateSDF(x, y);
    } else {
      return this.defaultSDF.evaluateSDF(x, y);
    }
  }
  evaluateSDFV(p) {
    return this.evaluateSDF(p.x, p.y);
  }
  getBackground() {
    return this.background;
  }
  updateBackground() {
    if (this.prevShape !== this.data.background.shape.value) {
      this.prevShape = this.data.background.shape.value;
      if (this.background !== null)
        this.scene.detachElement(this.background);
      switch (this.data.background.shape.value) {
        case "rectangle":
          this.background = new C2PathRect(this.scene);
          break;
        case "circle":
          this.background = new C2PathCircle(this.scene);
          break;
        case "none":
          this.background = null;
          return;
      }
    }
    if (this.background === null)
      return;
    const backData = this.background.data;
    const thisData = this.data;
    backData.space.set(thisData.space.get());
    backData.position.copy(this.center);
    backData.stroke.copyIfUnlocked(thisData.background.stroke);
    backData.fill.copyIfUnlocked(thisData.background.fill);
    backData.opacity.copyIfUnlocked(thisData.background.opacity);
    const updateLayer = thisData.update.layer;
    backData.update.layer.set(updateLayer.get());
    backData.update.layer.orderInLayer = 2;
    const renderLayer = thisData.render.layer;
    backData.render.layer.set(renderLayer.get());
    backData.render.layer.orderInLayer = 0;
    if (this.background instanceof C2PathRect) {
      this.background.data.extents.copy(this.extents);
      this.background.data.anchor.set(0, 0);
      this.background.data.cornerRadius.copyIfUnlocked(thisData.background.cornerRadius);
    } else if (this.background instanceof C2PathCircle) {
      this.extents.getMaxLengthInto(this.background.data.radius);
    }
    this.background.update();
  }
};

// ../c2/dist/core/element/node/c2-plain-node.js
var C2PlainNodeState = class {
  constructor(scene) {
    this.text = new C2PlainText(scene);
    this.offset = new C2Offset(scene, 0, 0, scene.getViewSpace());
    this.opacity = new C2Number(scene, 1);
  }
};
var C2PlainNode = class extends C2BaseNode {
  constructor(scene) {
    super(scene);
    this.states = {};
    this.stateIndex = -1;
    this.currKey = "";
  }
  getStateCount() {
    return Object.keys(this.states).length;
  }
  getState(key) {
    return this.states[key].text;
  }
  getStateKey() {
    return this.currKey;
  }
  addState(value) {
    if (this.states[value]) {
      return this.states[value].text;
    }
    const content = new C2PlainNodeState(this.scene);
    content.text.setContent(value);
    const textData = content.text.data;
    textData.isEnabled.set(true);
    textData.update.layer.set(this.data.update.layer.get());
    textData.update.layer.orderInLayer = 0;
    textData.render.layer.value = this.data.render.layer.value;
    textData.render.layer.orderInLayer = 1;
    textData.position.copyIfUnlocked(this.center);
    textData.font.copyIfUnlocked(this.data.text.font);
    textData.fill.color.copyIfUnlocked(this.data.text.fill.color);
    textData.fill.opacity.copyIfUnlocked(this.data.text.fill.opacity);
    this.states[value] = content;
    this.currKey = value;
    return content.text;
  }
  // animateChangeState(
  //     key: string,
  //     animator: C2StepAnimator,
  //     options: { timeLabel?: string; timeOffset?: number; duration?: number; positionOffset?: C2Offset } = {},
  // ): void {
  //     const timeLabel = animator.ensureLabel(options.timeLabel);
  //     const timeOffset = options.timeOffset ?? 0;
  //     const duration = options.duration ?? 500;
  //     if (this.currKey === key) {
  //         return;
  //     }
  //     let delay = 0;
  //     if (this.states[this.currKey]) {
  //         this.animateFadeOut(this.currKey, animator, new C2Vec2(10, 0), timeLabel, duration, timeOffset);
  //         delay = 0.5 * duration;
  //     }
  //     if (this.states[key] === undefined) {
  //         this.addState(key);
  //     }
  //     this.animateFadeIn(key, animator, new C2Vec2(-10, 0), timeLabel, duration, timeOffset + delay);
  //     this.currKey = key;
  // }
  // protected animateFadeIn(
  //     key: string,
  //     animator: C2StepAnimator,
  //     shift: C2Vec2,
  //     label: string,
  //     duration: number,
  //     timeOffset: number,
  // ): void {
  //     const content = this.states[key];
  //     content.opacity.set(0.0);
  //     const opacityAnim = C2LerpAnimFactory.create(this.scene, content.opacity)
  //         .setCycleDuration(duration)
  //         .setEasing(ease.out);
  //     content.opacity.set(1.0);
  //     opacityAnim.commitFinalState();
  //     animator.enableElement(content.text, true, label, timeOffset);
  //     animator.addAnimation(opacityAnim, label, timeOffset);
  //     if (C2Vec2.isZeroV(shift) === false) {
  //         content.offset.setV(shift, this.scene.getViewSpace());
  //         const shiftAnim = C2LerpAnimFactory.create(this.scene, content.offset)
  //             .setCycleDuration(duration)
  //             .setEasing(ease.inOut);
  //         content.offset.set(0, 0, this.scene.getViewSpace());
  //         shiftAnim.commitFinalState();
  //         animator.addAnimation(shiftAnim, label, timeOffset);
  //     }
  // }
  // protected animateFadeOut(
  //     key: string,
  //     animator: C2StepAnimator,
  //     shift: C2Vec2,
  //     label: string,
  //     duration: number,
  //     timeOffset: number,
  // ): void {
  //     const content = this.states[key];
  //     content.opacity.set(1.0);
  //     const opacityAnim = C2LerpAnimFactory.create(this.scene, content.opacity)
  //         .setCycleDuration(duration)
  //         .setEasing(ease.out);
  //     content.opacity.set(0.0);
  //     opacityAnim.commitFinalState();
  //     animator.addAnimation(opacityAnim, label, timeOffset);
  //     if (C2Vec2.isZeroV(shift) === false) {
  //         content.offset.set(0, 0, this.scene.getViewSpace());
  //         const shiftAnim = C2LerpAnimFactory.create(this.scene, content.offset)
  //             .setCycleDuration(duration)
  //             .setEasing(ease.inOut);
  //         content.offset.setV(shift, this.scene.getViewSpace());
  //         shiftAnim.commitFinalState();
  //         animator.addAnimation(shiftAnim, label, timeOffset);
  //     }
  //     animator.enableElement(content.text, false, label, timeOffset + duration);
  // }
  update() {
    if (!this.data.isEnabled.get())
      return;
    const vecPool = this.scene.getVecPool();
    const space = this.data.space.get();
    const viewSpace = this.scene.getViewSpace();
    for (const content of Object.values(this.states)) {
      const opacity = content.opacity.get() * this.data.text.opacity.get();
      content.text.data.opacity.set(opacity);
      content.text.data.font.copyIfUnlocked(this.data.text.font);
      content.text.data.fill.copyIfUnlocked(this.data.text.fill);
      content.text.data.stroke.copyIfUnlocked(this.data.text.stroke);
      content.text.update();
    }
    this.extents.space = space;
    const nodeExtents = vecPool.get();
    const textExtents = vecPool.get();
    const nodePadding = vecPool.get();
    const contentExtents = vecPool.get();
    let ascent = 0;
    let descent = 0;
    let textWidth = 0;
    for (const content of Object.values(this.states)) {
      ascent = Math.max(ascent, content.text.getFontAscentPx());
      descent = Math.max(descent, content.text.getFontDescentPx());
      textWidth = Math.max(textWidth, content.text.getWidthPx());
    }
    ascent = viewSpace.convertLength(ascent, space);
    descent = viewSpace.convertLength(descent, space);
    textWidth = viewSpace.convertLength(textWidth, space);
    textExtents.x = 0.5 * textWidth;
    textExtents.y = 0.5 * (ascent + descent);
    this.data.padding.getInto(nodePadding, space);
    this.data.minExtents.getInto(nodeExtents, space);
    nodeExtents.max(textExtents.x + nodePadding.x, textExtents.y + nodePadding.y);
    this.extents.setV(nodeExtents, space);
    contentExtents.copy(nodeExtents).subV(nodePadding);
    this.center.space = space;
    const nodeCenter = vecPool.get();
    this.data.position.getInto(nodeCenter, space);
    this.data.anchor.getCenterIntoV(nodeCenter, nodeCenter, nodeExtents);
    this.defaultSDF.setCenter(nodeCenter);
    this.defaultSDF.setRadius(Math.max(nodeExtents.x, nodeExtents.y));
    this.center.setV(nodeCenter, space);
    const sign = space.isDirectSpace() ? 1 : -1;
    const vAlign = sign * this.data.text.verticalAlign.get();
    const hAlign = this.data.text.horizontalAlign.get();
    const textPosition = vecPool.get();
    const textOffset = vecPool.get();
    textPosition.set(nodeCenter.x + hAlign * (contentExtents.x - textExtents.x), nodeCenter.y + vAlign * (contentExtents.y - textExtents.y) - sign * (ascent - descent) / 2);
    const renderLayer = this.data.render.layer;
    const updateLayer = this.data.update.layer;
    for (const content of Object.values(this.states)) {
      content.offset.getInto(textOffset, space);
      const textData = content.text.data;
      textData.textAnchor.set(0);
      textData.position.set(textPosition.x + textOffset.x, textPosition.y + textOffset.y, space);
      textData.update.layer.set(updateLayer.get());
      textData.update.layer.orderInLayer = 0;
      textData.render.layer.set(renderLayer.get());
      textData.render.layer.orderInLayer = 1;
    }
    vecPool.release(textExtents);
    vecPool.release(nodePadding);
    vecPool.release(contentExtents);
    vecPool.release(textPosition);
    vecPool.release(textOffset);
    vecPool.release(nodeCenter);
    vecPool.release(nodeExtents);
    this.updateBackground();
  }
  render(ctx, viewSpace) {
    void ctx;
    void viewSpace;
  }
};

// ../c2/dist/core/element/text/c2-rich-text.js
var C2Span = class extends C2PlainText {
  constructor(scene) {
    super(scene);
    this.category = "";
  }
  getCategory() {
    return this.category;
  }
  setCategory(category) {
    this.category = category;
  }
};
var C2BaseRichText = class extends C2BaseText {
  constructor(scene, data) {
    super(scene, data);
    this.spans = [];
  }
  addSpan(content, category) {
    const span = new C2Span(this.scene);
    span.data.update.isManaged.set(true);
    span.setContent(content);
    span.setCategory(category ?? "");
    this.spans.push(span);
    return span;
  }
  getSpans() {
    return this.spans;
  }
  getSpanCount() {
    return this.spans.length;
  }
  getSpan(index) {
    return this.spans[index];
  }
  findSpan(options) {
    return this.spans.find((span) => {
      return (options.content ? span.getContent() === options.content : true) && (options.category ? span.getCategory() === options.category : true);
    });
  }
  update() {
    if (!this.data.isEnabled.get()) {
      for (const span of this.spans) {
        span.data.isEnabled.set(false);
      }
      return;
    }
    this.width = 0;
    this.ascent = 0;
    this.descent = 0;
    const renderLayer = this.data.render.layer;
    const updateEnabled = this.data.isEnabled.get();
    const renderEnabled = this.data.render.isEnabled.get();
    for (const span of this.spans) {
      span.data.font.copyIfUnlocked(this.data.font);
      span.data.fill.copyIfUnlocked(this.data.fill);
      span.data.stroke.copyIfUnlocked(this.data.stroke);
      span.data.update.isManaged.set(true);
      span.data.render.layer.copyIfUnlocked(renderLayer);
      span.data.isEnabled.set(updateEnabled);
      span.data.render.isEnabled.set(renderEnabled);
      span.data.textAnchor.set(-1);
      span.update();
      this.width += span.getWidthPx();
      this.ascent = Math.max(this.ascent, span.getFontAscentPx());
      this.descent = Math.max(this.descent, span.getFontDescentPx());
    }
    const viewSpace = this.scene.getViewSpace();
    this.extents.set(this.width / 2, (this.ascent + this.descent) / 2, viewSpace);
    const vecPool = this.scene.getVecPool();
    const position = vecPool.get();
    this.data.position.getInto(position, viewSpace);
    position.x -= 0.5 * (1 + this.data.textAnchor.get()) * this.width;
    for (const span of this.spans) {
      span.data.position.setV(position, viewSpace);
      position.x += span.getWidthPx();
      span.update();
    }
    const center = vecPool.get();
    this.getPositionInto(center, viewSpace);
    center.y += -0.5 * (this.ascent - this.descent);
    center.x += -0.5 * this.data.textAnchor.get() * this.width;
    this.center.setV(center, viewSpace);
    vecPool.release(center);
    vecPool.release(position);
  }
  render(ctx, viewSpace) {
    void ctx;
    void viewSpace;
  }
};
var C2RichText = class extends C2BaseRichText {
  constructor(scene) {
    super(scene, new C2TextData(scene));
  }
};

// ../c2/dist/core/element/text/c2-text-group.js
var C2TextLineData = class extends C2TextData {
  constructor(scene) {
    super(scene);
    this.skip = new C2Length(scene, 0, scene.getViewSpace());
    this.horizontalAlign = new C2Number(scene, -1);
  }
};
var C2TextLine = class extends C2BaseRichText {
  constructor(scene) {
    super(scene, new C2TextLineData(scene));
  }
};
var C2TextGroupData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const worldSpace = scene.getWorldSpace();
    const viewSpace = scene.getViewSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.font = new C2FontData(scene);
    this.opacity = new C2Number(scene, 1);
    this.position = new C2Point(scene, 0, 0, worldSpace);
    this.skip = new C2Length(scene, 0, viewSpace);
    this.horizontalAlign = new C2Number(scene, -1);
    this.verticalAlign = new C2Number(scene, -1);
    this.minExtents = new C2Extents(scene, 0, 0, worldSpace);
    this.anchor = new C2Anchor(scene, 0, 0);
    this.stroke.isEnabled.set(false);
  }
};
var C2TextGroup = class extends C2Element {
  constructor(scene) {
    super(scene, new C2TextGroupData(scene));
    this.textLines = [];
    this.center = new C2Point(scene, 0, 0, scene.getWorldSpace());
    this.extents = new C2Extents(scene, 0, 0, scene.getViewSpace());
    this.textExtents = new C2Extents(scene, 0, 0, scene.getViewSpace());
  }
  addLine(options) {
    const textLine = new C2TextLine(this.scene);
    if (options?.align !== void 0) {
      textLine.data.horizontalAlign.set(options.align);
      textLine.data.horizontalAlign.lock();
    }
    if (options?.skip !== void 0) {
      textLine.data.skip.set(options.skip);
      textLine.data.skip.lock();
    }
    textLine.data.update.isManaged.set(true);
    this.textLines.push(textLine);
    return textLine;
  }
  getLineCount() {
    return this.textLines.length;
  }
  getLine(index) {
    return this.textLines[index];
  }
  getPositionInto(dst, space) {
    this.data.position.getInto(dst, space);
  }
  getExtentsInto(dst, space) {
    this.extents.getInto(dst, space);
  }
  getTextExtentsInto(dst, space) {
    this.textExtents.getInto(dst, space);
  }
  getCenterInto(dst, space) {
    this.data.anchor.getCenterInto(dst, space, this.data.position, this.extents);
  }
  getRectPointInto(dst, space, anchorX, anchorY) {
    this.data.anchor.getRectPointInto(dst, space, this.data.position, this.extents, anchorX, anchorY);
  }
  update() {
    const space = this.data.space.get();
    const viewSpace = this.scene.getViewSpace();
    const vecPool = this.scene.getVecPool();
    const renderLayer = this.data.render.layer;
    const updateEnabled = this.data.isEnabled.get();
    const renderEnabled = this.data.render.isEnabled.get();
    for (const line of this.textLines) {
      line.data.font.copyIfUnlocked(this.data.font);
      line.data.fill.copyIfUnlocked(this.data.fill);
      line.data.stroke.copyIfUnlocked(this.data.stroke);
      line.data.horizontalAlign.copyIfUnlocked(this.data.horizontalAlign);
      line.data.skip.copyIfUnlocked(this.data.skip);
      line.data.render.layer.copyIfUnlocked(renderLayer);
      line.data.isEnabled.set(updateEnabled);
      line.data.render.isEnabled.set(renderEnabled);
      line.data.update.isManaged.set(true);
      line.update();
    }
    const textExtents = vecPool.get();
    textExtents.set(0, 0);
    for (const line of this.textLines) {
      textExtents.x = Math.max(textExtents.x, line.getWidthPx());
      textExtents.y += line.getFontAscentPx() + line.getFontDescentPx() + line.data.skip.get(viewSpace);
    }
    textExtents.scale(0.5);
    viewSpace.convertExtentsIntoV(textExtents, textExtents, space);
    this.textExtents.setV(textExtents, space);
    const groupExtents = vecPool.get();
    this.data.minExtents.getInto(groupExtents, space);
    groupExtents.maxV(textExtents);
    this.extents.setV(groupExtents, space);
    this.center.space = space;
    const groupCenter = vecPool.get();
    this.data.position.getInto(groupCenter, space);
    this.data.anchor.getCenterIntoV(groupCenter, groupCenter, groupExtents);
    this.center.setV(groupCenter, space);
    const vAlign = -this.data.verticalAlign.get();
    let lineY = groupCenter.y + vAlign * (textExtents.y - groupExtents.y) + textExtents.y;
    for (const line of this.textLines) {
      lineY -= viewSpace.convertLength(line.getFontAscentPx(), space);
      const hAlign = line.data.horizontalAlign.get();
      const lineX = groupCenter.x + hAlign * groupExtents.x;
      line.data.textAnchor.set(+hAlign);
      line.data.position.set(lineX, lineY, space);
      line.update();
      lineY -= viewSpace.convertLength(line.getFontDescentPx(), space) + line.data.skip.get(space);
    }
    vecPool.release(textExtents);
    vecPool.release(groupExtents);
    vecPool.release(groupCenter);
  }
};

// ../c2/dist/core/shared/c2-color-theme.js
var C2ColorTheme = class {
  constructor(palette2) {
    this.palette = palette2;
  }
  color(name, scale) {
    const color = this.palette[name]?.[scale];
    if (!color) {
      throw new Error(`Color not found: ${name} / ${scale}`);
    }
    return color;
  }
  opacity(name, scale) {
    const hex = this.color(name, scale);
    if (hex.length === 9) {
      const alphaHex = hex.substring(7, 9);
      return parseInt(alphaHex, 16) / 255;
    }
    return 1;
  }
};

// ../c2/dist/utils/radix-colors-dark.js
var slateDark = {
  1: "#111113",
  2: "#18191b",
  3: "#212225",
  4: "#272a2d",
  5: "#2e3135",
  6: "#363a3f",
  7: "#43484e",
  8: "#5a6169",
  9: "#696e77",
  10: "#777b84",
  11: "#b0b4ba",
  12: "#edeef0"
};
var rubyDark = {
  1: "#191113",
  2: "#1e1517",
  3: "#3a141e",
  4: "#4e1325",
  5: "#5e1a2e",
  6: "#6f2539",
  7: "#883447",
  8: "#b3445a",
  9: "#e54666",
  10: "#ec5a72",
  11: "#ff949d",
  12: "#fed2e1"
};
var cyanDark = {
  1: "#0b161a",
  2: "#101b20",
  3: "#082c36",
  4: "#003848",
  5: "#004558",
  6: "#045468",
  7: "#12677e",
  8: "#11809c",
  9: "#00a2c7",
  10: "#23afd0",
  11: "#4ccce6",
  12: "#b6ecf7"
};

// ../c2/dist/utils/radix-colors-light.js
var slate = {
  1: "#fcfcfd",
  2: "#f9f9fb",
  3: "#f0f0f3",
  4: "#e8e8ec",
  5: "#e0e1e6",
  6: "#d9d9e0",
  7: "#cdced6",
  8: "#b9bbc6",
  9: "#8b8d98",
  10: "#80838d",
  11: "#60646c",
  12: "#1c2024"
};
var ruby = {
  1: "#fffcfd",
  2: "#fff7f8",
  3: "#feeaed",
  4: "#ffdce1",
  5: "#ffced6",
  6: "#f8bfc8",
  7: "#efacb8",
  8: "#e592a3",
  9: "#e54666",
  10: "#dc3b5d",
  11: "#ca244d",
  12: "#64172b"
};
var cyan = {
  1: "#fafdfe",
  2: "#f2fafb",
  3: "#def7f9",
  4: "#caf1f6",
  5: "#b5e9f0",
  6: "#9ddde7",
  7: "#7dcedc",
  8: "#3db9cf",
  9: "#00a2c7",
  10: "#0797b9",
  11: "#107d98",
  12: "#0d3c48"
};

// figures/circle-demo/circle.ts
var mode = 0;
var palette;
if (mode === 0) {
  palette = {
    back: slateDark,
    primary: cyanDark,
    secondary: rubyDark
  };
} else {
  palette = {
    back: slate,
    primary: cyan,
    secondary: ruby
  };
}
var colorTheme = new C2ColorTheme(palette);
var CanvasFigure = class extends C2BaseScene {
  constructor(canvas, context) {
    super(canvas, context);
    __publicField(this, "var", 0);
    __publicField(this, "text");
    __publicField(this, "richText");
    __publicField(this, "textCpt");
    __publicField(this, "textGroup");
    __publicField(this, "textGroupBack");
    __publicField(this, "groupAnchor", new C2Vec2(0, 0));
    __publicField(this, "groupAlign", new C2Vec2(0, 0));
    this.camera.setExtents(8, 4.5);
    const worldSpace = this.getWorldSpace();
    const viewSpace = this.getViewSpace();
    this.update();
    const grid = new C2Grid(this);
    grid.data.geometry.boundA.set(-8, -4.5, worldSpace);
    grid.data.geometry.boundB.set(8, 4.5, worldSpace);
    grid.data.geometry.steps.set(1, 1, worldSpace);
    grid.data.stroke.width.set(2, this.getViewSpace());
    grid.data.stroke.color.setFromTheme(colorTheme, "back", 4);
    const text = new C2PlainText(this);
    this.text = text;
    text.setContent("Hello, Canvas!");
    text.data.font.family.set("monospace");
    text.data.font.size.set(0.5, this.getWorldSpace());
    text.data.textAnchor.set(-1);
    text.data.render.layer.set(1);
    const richText = new C2RichText(this);
    this.richText = richText;
    richText.data.font.family.set("monospace");
    richText.data.font.size.set(0.5, this.getWorldSpace());
    richText.data.render.layer.set(1);
    richText.data.stroke.width.set(0.1, this.getWorldSpace());
    richText.data.position.set(0, -1, worldSpace);
    richText.data.textAnchor.set(-1);
    richText.addSpan("Coucou");
    let span = richText.addSpan(" les ");
    span.data.fill.color.setFromTheme(colorTheme, "primary", 5).lock();
    span = richText.addSpan("0");
    span.data.fill.color.setFromTheme(colorTheme, "primary", 12).lock();
    span.data.font.family.set("monospace").lock();
    span.data.font.weight.set(700).lock();
    this.textCpt = span;
    span = richText.addSpan(" amis");
    span.data.fill.color.setFromTheme(colorTheme, "primary", 7).lock();
    const rect = new C2PathRect(this);
    rect.data.position.set(0, 0, worldSpace);
    rect.data.extents.set(2, 1, worldSpace);
    rect.data.fill.color.setFromTheme(colorTheme, "primary", 5);
    rect.data.cornerRadius.set(0.5, worldSpace);
    rect.data.stroke.width.set(2, this.getViewSpace());
    const circle = new C2PathCircle(this);
    circle.data.position.set(1, 2, worldSpace);
    circle.data.radius.set(1, worldSpace);
    circle.data.fill.color.setFromTheme(colorTheme, "primary", 7);
    circle.data.stroke.width.set(2, this.getViewSpace());
    const nodes = [];
    for (let i = 0; i < 2; i++) {
      const node = new C2PlainNode(this);
      node.data.text.font.family.set("monospace");
      node.data.text.font.size.set(0.5, worldSpace);
      node.data.text.fill.color.setFromTheme(colorTheme, "primary", 9);
      node.data.text.stroke.color.setFromTheme(colorTheme, "primary", 11);
      node.data.background.fill.color.setFromTheme(colorTheme, "primary", 5);
      node.data.background.stroke.color.setFromTheme(colorTheme, "primary", 7);
      node.data.background.stroke.width.set(5, this.getViewSpace());
      node.data.background.cornerRadius.set(10, viewSpace);
      node.data.background.shape.set("rectangle");
      node.data.minExtents.set(2, 1, worldSpace);
      node.data.text.horizontalAlign.set(-1);
      node.data.text.verticalAlign.set(1);
      nodes.push(node);
    }
    nodes[0].data.position.set(3, -2, worldSpace);
    nodes[0].data.padding.set(10, 5, viewSpace);
    nodes[0].addState("Node state 1p");
    nodes[1].data.position.set(-4, -1, worldSpace);
    nodes[1].data.padding.set(10, 5, viewSpace);
    nodes[1].addState("Node 2");
    const edge = new C2CubicEdge(this, nodes[0], nodes[1]);
    edge.data.endDistance.set(20, viewSpace);
    edge.data.stroke.width.set(5, this.getViewSpace());
    edge.data.stroke.color.setFromTheme(colorTheme, "primary", 9);
    edge.data.bendAngle.set(-45);
    edge.createArrowTip();
    const textGroup = new C2TextGroup(this);
    textGroup.data.space.set(worldSpace);
    textGroup.data.position.set(0, 2, worldSpace);
    textGroup.data.anchor.set(0, 0);
    textGroup.data.font.family.set("monospace");
    textGroup.data.font.size.set(24, viewSpace);
    textGroup.data.fill.color.setFromTheme(colorTheme, "primary", 9);
    textGroup.data.horizontalAlign.set(0);
    textGroup.data.verticalAlign.set(0);
    textGroup.data.minExtents.set(4, 2, worldSpace);
    const line1 = textGroup.addLine();
    line1.addSpan("Une premi\xE8re ligne");
    const line2 = textGroup.addLine();
    line2.data.horizontalAlign.set(0).lock();
    line2.data.skip.set(20, viewSpace).lock();
    line2.addSpan("Une deuxi\xE8me ligne !");
    const line3 = textGroup.addLine();
    line3.addSpan("Une troisi\xE8me ligne qui est vraiment tr\xE8s longue !");
    this.textGroup = textGroup;
    const backRect = new C2PathRect(this);
    backRect.data.space.set(worldSpace);
    backRect.data.position.copy(textGroup.data.position);
    backRect.data.anchor.copy(textGroup.data.anchor);
    backRect.data.render.layer.set(-1);
    backRect.data.fill.color.setFromTheme(colorTheme, "primary", 5);
    this.textGroupBack = backRect;
    this.update();
    this.render();
  }
  update() {
    this.var += 1;
    if (this.textCpt) {
      this.textCpt.setContent(this.var.toFixed(0));
    }
    if (this.textGroup && this.textGroupBack) {
      const textExtents = this.acquireVec2();
      this.textGroup.getExtentsInto(textExtents, this.getWorldSpace());
      this.textGroupBack.data.extents.setV(textExtents, this.getWorldSpace());
      this.releaseVec2(textExtents);
      this.textGroup.data.anchor.setV(this.groupAnchor);
      this.textGroup.data.horizontalAlign.set(this.groupAlign.x);
      this.textGroup.data.verticalAlign.set(this.groupAlign.y);
      this.textGroupBack.data.anchor.setV(this.groupAnchor);
    }
    super.update();
  }
  setGroupAnchor(x, y) {
    this.groupAnchor.set(x, y);
    this.update();
    this.render();
  }
  setGroupAlign(h, v) {
    this.groupAlign.set(h, v);
    this.update();
    this.render();
  }
};
function drawCircle(canvas) {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }
  const scene = new CanvasFigure(canvas, context);
}
function mount(root) {
  const canvas = root.querySelector("#circle-demo-canvas");
  if (!canvas) {
    return;
  }
  drawCircle(canvas);
}
export {
  mount
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvbWF0aC9jMi12ZWMyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvYzItY2FtZXJhLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvYzItbWF0MngzLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvYzItc3BhY2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWJhc2UtdHlwZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItYm9vbGVhbi50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2MyLW1hdGgtdXRpbHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWNvbG9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1lbnVtLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1sZW5ndGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLW51bWJlci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItc3RyaW5nLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1sYXllci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L2Jhc2UvYzItZWxlbWVudC1kYXRhLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvYmFzZS9jMi1lbGVtZW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvYzItcG9vbC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9hbmltYXRpb24vYzItdGltZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvYW5pbWF0aW9uL2MyLWFuaW1hdGlvbi1tYW5hZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NjZW5lL2MyLWJhc2Utc2NlbmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLXBvaW50LnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1leHRlbnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1zcGFjZS1yZWYudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC9jMi1ncmlkLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvYzItcGF0aC1jaXJjbGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWFuY2hvci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L2MyLXBhdGgtcmVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9hbmltYXRpb24vYzItZWFzaW5nLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1vZmZzZXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL3MyLWdsb2JhbHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC9jMi1hcnJvdy10aXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC9ub2RlL2MyLWJhc2UtZWRnZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2N1cnZlL2MyLXNkZi50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2N1cnZlL2xlbmd0aC1tYXBwZXIvYzItc2FtcGxlci1sZW5ndGgtbWFwcGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvY3VydmUvbGVuZ3RoLW1hcHBlci9jMi1iZXppZXItbGVuZ3RoLW1hcHBlci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2N1cnZlL2MyLWN1YmljLWN1cnZlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvbm9kZS9jMi1jdWJpYy1lZGdlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvbm9kZS9jMi1ub2RlLWRhdGEudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC90ZXh0L2MyLWJhc2UtdGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L3RleHQvYzItcGxhaW4tdGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L25vZGUvYzItYmFzZS1ub2RlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvbm9kZS9jMi1wbGFpbi1ub2RlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvdGV4dC9jMi1yaWNoLXRleHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC90ZXh0L2MyLXRleHQtZ3JvdXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWNvbG9yLXRoZW1lLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy91dGlscy9yYWRpeC1jb2xvcnMtZGFyay50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvdXRpbHMvcmFkaXgtY29sb3JzLWxpZ2h0LnRzIiwgIi4uLy4uLy4uLy4uL2ZpZ3VyZXMvY2lyY2xlLWRlbW8vY2lyY2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IEMyTWF0MiB9IGZyb20gJy4vYzItbWF0Mic7XHJcbmltcG9ydCB0eXBlIHsgQzJNYXQyeDMgfSBmcm9tICcuL2MyLW1hdDJ4Myc7XHJcbmltcG9ydCB0eXBlIHsgQzJBbmdsZVVuaXQgfSBmcm9tICcuL2MyLW1hdGgtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyVmVjMiB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChvdXQ6IEMyVmVjMiwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0geDtcclxuICAgICAgICBvdXQueSA9IHk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0UG9sYXIob3V0OiBDMlZlYzIsIHRoZXRhOiBudW1iZXIsIHI6IG51bWJlciA9IDEuMCwgdW5pdDogQzJBbmdsZVVuaXQgPSAncmFkJyk6IEMyVmVjMiB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09ICdkZWcnKSB0aGV0YSAqPSBNYXRoLlBJIC8gMTgwLjA7XHJcbiAgICAgICAgb3V0LnggPSByICogTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgIG91dC55ID0gciAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGQob3V0OiBDMlZlYzIsIHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0geDEgKyB4MjtcclxuICAgICAgICBvdXQueSA9IHkxICsgeTI7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVihvdXQ6IEMyVmVjMiwgdjE6IEMyVmVjMiwgdjI6IEMyVmVjMik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB2MS54ICsgdjIueDtcclxuICAgICAgICBvdXQueSA9IHYxLnkgKyB2Mi55O1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1YihvdXQ6IEMyVmVjMiwgeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB4MSAtIHgyO1xyXG4gICAgICAgIG91dC55ID0geTEgLSB5MjtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWJWKG91dDogQzJWZWMyLCB2MTogQzJWZWMyLCB2MjogQzJWZWMyKTogQzJWZWMyIHtcclxuICAgICAgICBvdXQueCA9IHYxLnggLSB2Mi54O1xyXG4gICAgICAgIG91dC55ID0gdjEueSAtIHYyLnk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsKG91dDogQzJWZWMyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKTogQzJWZWMyIHtcclxuICAgICAgICBvdXQueCA9IHgxICogeDI7XHJcbiAgICAgICAgb3V0LnkgPSB5MSAqIHkyO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG11bFYob3V0OiBDMlZlYzIsIHYxOiBDMlZlYzIsIHYyOiBDMlZlYzIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0gdjEueCAqIHYyLng7XHJcbiAgICAgICAgb3V0LnkgPSB2MS55ICogdjIueTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY2FsZShvdXQ6IEMyVmVjMiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHM6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB4ICogcztcclxuICAgICAgICBvdXQueSA9IHkgKiBzO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlVihvdXQ6IEMyVmVjMiwgdjogQzJWZWMyLCBzOiBudW1iZXIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0gdi54ICogcztcclxuICAgICAgICBvdXQueSA9IHYueSAqIHM7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChvdXQ6IEMyVmVjMiwgeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDE6IG51bWJlciwgeTE6IG51bWJlciwgdDogbnVtYmVyKTogQzJWZWMyIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgb3V0LnggPSBzICogeDAgKyB0ICogeDE7XHJcbiAgICAgICAgb3V0LnkgPSBzICogeTAgKyB0ICogeTE7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycFYob3V0OiBDMlZlYzIsIHYwOiBDMlZlYzIsIHYxOiBDMlZlYzIsIHQ6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIEMyVmVjMi5sZXJwKG91dCwgdjAueCwgdjAueSwgdjEueCwgdjEueSwgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVxdWFscyh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCBlcHNpbG9uOiBudW1iZXIgPSAxZS00KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgxIC0geDIpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyh5MSAtIHkyKSA8IGVwc2lsb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVxdWFsc1YodjE6IEMyVmVjMiwgdjI6IEMyVmVjMiwgZXBzaWxvbjogbnVtYmVyID0gMWUtNCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh2MS54IC0gdjIueCkgPD0gZXBzaWxvbiAmJiBNYXRoLmFicyh2MS55IC0gdjIueSkgPD0gZXBzaWxvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNaZXJvVih2OiBDMlZlYzIsIGVwc2lsb246IG51bWJlciA9IDFlLTQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModi54KSA8IGVwc2lsb24gJiYgTWF0aC5hYnModi55KSA8IGVwc2lsb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRYKHg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WSh5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54O1xyXG4gICAgICAgIHRoaXMueSA9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb2xhcih0aGV0YTogbnVtYmVyLCByOiBudW1iZXIgPSAxLjAsIHVuaXQ6IEMyQW5nbGVVbml0ID0gJ3JhZCcpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIHRoZXRhICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQociAqIE1hdGguY29zKHRoZXRhKSwgciAqIE1hdGguc2luKHRoZXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycCh4OiBudW1iZXIsIHk6IG51bWJlciwgdDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgcyA9IDEgLSB0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChzICogdGhpcy54ICsgdCAqIHgsIHMgKiB0aGlzLnkgKyB0ICogeSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycFYodjogQzJWZWMyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXJwKHYueCwgdi55LCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzaGlmdFgoZHg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSBkeDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzaGlmdFkoZHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueSArPSBkeTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb21wb25lbnQoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyVmVjMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMlZlYzIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Vih2KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKz0geDtcclxuICAgICAgICB0aGlzLnkgKz0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRWKHY6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ICs9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY2FsYXIoczogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHM7XHJcbiAgICAgICAgdGhpcy55ICs9IHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHg7XHJcbiAgICAgICAgdGhpcy55IC09IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViU2NhbGFyKHM6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSBzO1xyXG4gICAgICAgIHRoaXMueSAtPSBzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG11bCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAqPSB4O1xyXG4gICAgICAgIHRoaXMueSAqPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG11bFYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICo9IHYueDtcclxuICAgICAgICB0aGlzLnkgKj0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdih4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAvPSB4O1xyXG4gICAgICAgIHRoaXMueSAvPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdlYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC89IHYueDtcclxuICAgICAgICB0aGlzLnkgLz0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHM6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAqPSBzO1xyXG4gICAgICAgIHRoaXMueSAqPSBzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5lZ2F0ZSgpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWluKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy54LCB4KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1pbih0aGlzLnksIHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1pblYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy54LCB2LngpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgdi55KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtaW5TY2FsYXIoczogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy54LCBzKTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1pbih0aGlzLnksIHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1heCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgeCk7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgodGhpcy55LCB5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYXhWKHY6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgdi54KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHYueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2NhbGFyKHM6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgcyk7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgodGhpcy55LCBzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcChtaW5YOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtYXhZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbihtYXhYLCB0aGlzLngpKTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChtaW5ZLCBNYXRoLm1pbihtYXhZLCB0aGlzLnkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcFYobWluOiBDMlZlYzIsIG1heDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB0aGlzLngpKTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHRoaXMueSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYW1wU2NhbGFyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB0aGlzLngpKTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdGhpcy55KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcChzdGVwWDogbnVtYmVyLCBzdGVwWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHN0ZXBYID4gMCkgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLnggLyBzdGVwWCkgKiBzdGVwWDtcclxuICAgICAgICBpZiAoc3RlcFkgPiAwKSB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSAvIHN0ZXBZKSAqIHN0ZXBZO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNuYXBWKHN0ZXBzOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBpZiAoc3RlcHMueCA+IDApIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54IC8gc3RlcHMueCkgKiBzdGVwcy54O1xyXG4gICAgICAgIGlmIChzdGVwcy55ID4gMCkgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkgLyBzdGVwcy55KSAqIHN0ZXBzLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcFNjYWxhcihzdGVwOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAoc3RlcCA8PSAwKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCAvIHN0ZXApICogc3RlcDtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSAvIHN0ZXApICogc3RlcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhYnMoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy54KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdW5kKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHkyeDIobWF0cml4OiBDMk1hdDIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBtZSA9IG1hdHJpeC5lbGVtZW50cztcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnk7XHJcbiAgICAgICAgdGhpcy54ID0gbWVbMF0gKiB4ICsgbWVbMl0gKiB5O1xyXG4gICAgICAgIHRoaXMueSA9IG1lWzFdICogeCArIG1lWzNdICogeTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhcHBseTJ4MyhtYXRyaXg6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbWUgPSBtYXRyaXguZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLnggPSBtZVswXSAqIHggKyBtZVsyXSAqIHkgKyBtZVs0XTtcclxuICAgICAgICB0aGlzLnkgPSBtZVsxXSAqIHggKyBtZVszXSAqIHkgKyBtZVs1XTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhcHBseTJ4M09mZnNldChtYXRyaXg6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbWUgPSBtYXRyaXguZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueDtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy55O1xyXG4gICAgICAgIHRoaXMueCA9IG1lWzBdICogeCArIG1lWzJdICogeTtcclxuICAgICAgICB0aGlzLnkgPSBtZVsxXSAqIHggKyBtZVszXSAqIHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZG90KHY6IEMyVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcclxuICAgIH1cclxuXHJcbiAgICBkZXQodjogQzJWZWMyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdi55IC0gdGhpcy55ICogdi54O1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aFNxKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VTcSh2OiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gdi54IC0gdGhpcy54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gdi55IC0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZSh2OiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxKHYpKTtcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuID09PSAwKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSgxIC8gbGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMZW5ndGgobGVuZ3RoOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZShsZW5ndGggLyB0aGlzLmxlbmd0aCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tQXJyYXkoYXJyYXk6IG51bWJlcltdLCBvZmZzZXQ6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBhcnJheVtvZmZzZXRdO1xyXG4gICAgICAgIHRoaXMueSA9IGFycmF5W29mZnNldCArIDFdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvQXJyYXkoYXJyYXk6IG51bWJlcltdID0gW10sIG9mZnNldDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcclxuICAgICAgICBhcnJheVtvZmZzZXRdID0gdGhpcy54O1xyXG4gICAgICAgIGFycmF5W29mZnNldCArIDFdID0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBhbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKC10aGlzLnksIHRoaXMueCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVUbyh2OiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmRldCh2KTtcclxuICAgICAgICBjb25zdCBjID0gdGhpcy5kb3Qodik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocywgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGVycChmbGlwOiBib29sZWFuID0gZmFsc2UpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54O1xyXG4gICAgICAgIGlmIChmbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueTtcclxuICAgICAgICAgICAgdGhpcy55ID0gLXg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gLXRoaXMueTtcclxuICAgICAgICAgICAgdGhpcy55ID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIsIHVuaXQ6IEMyQW5nbGVVbml0ID0gJ3JhZCcpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIGFuZ2xlICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLnggPSBjICogeCAtIHMgKiB5O1xyXG4gICAgICAgIHRoaXMueSA9IHMgKiB4ICsgYyAqIHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHlpZWxkIHRoaXMueDtcclxuICAgICAgICB5aWVsZCB0aGlzLnk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lLnRzJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi9jMi12ZWMyLnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkNhbWVyYSB7XHJcbiAgICBwcm90ZWN0ZWQgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXh0ZW50czogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHNjYWxlRmFjdG9yOiBudW1iZXIgPSAxLjA7XHJcbiAgICBwcm90ZWN0ZWQgcm90YXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gc2NlbmUuZ2V0Vmlld3BvcnRBc3BlY3RSYXRpbygpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IG5ldyBDMlZlYzIoOC4wLCA4LjAgLyBhc3BlY3RSYXRpbyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3RhdGlvblJhZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdGF0aW9uRGVnKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdGF0aW9uICogMTgwLjApIC8gTWF0aC5QSTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb3dlcigpOiBDMlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDMlZlYzIoKTtcclxuICAgICAgICB0aGlzLmdldExvd2VySW50byhyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG93ZXJJbnRvKGRzdDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy5leHRlbnRzKS5zY2FsZSgtdGhpcy5zY2FsZUZhY3RvcikuYWRkVih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcHBlcigpOiBDMlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDMlZlYzIoKTtcclxuICAgICAgICB0aGlzLmdldFVwcGVySW50byhyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBwZXJJbnRvKGRzdDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy5leHRlbnRzKS5zY2FsZSgrdGhpcy5zY2FsZUZhY3RvcikuYWRkVih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV4dGVudHMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmV4dGVudHMuc2V0KHgsIHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFpvb20oem9vbTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5zY2FsZUZhY3RvciA9IDEuMCAvIHpvb207XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um90YXRpb25SYWQoYW5nbGVSYWQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSBhbmdsZVJhZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb3RhdGlvbkRlZyhhbmdsZURlZzogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IChhbmdsZURlZyAqIE1hdGguUEkpIC8gMTgwLjA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0WCA9IHRoaXMuc2NlbmUuZ2V0Vmlld3BvcnRXaWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0WSA9IHRoaXMuc2NlbmUuZ2V0Vmlld3BvcnRIZWlnaHQoKTtcclxuICAgICAgICBjb25zdCBjeCA9IHZpZXdwb3J0WCAvIDI7XHJcbiAgICAgICAgY29uc3QgY3kgPSB2aWV3cG9ydFkgLyAyO1xyXG4gICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKC10aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbigtdGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgY29uc3QgcHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY29uc3QgcHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgY29uc3Qgc3ggPSArKDIuMCAqICh0aGlzLmV4dGVudHMueCAqIHRoaXMuc2NhbGVGYWN0b3IpKSAvIHZpZXdwb3J0WDtcclxuICAgICAgICBjb25zdCBzeSA9IC0oMi4wICogKHRoaXMuZXh0ZW50cy55ICogdGhpcy5zY2FsZUZhY3RvcikpIC8gdmlld3BvcnRZO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHZpZXdTcGFjZS5zZXRTcGFjZVRvUGFyZW50KFxyXG4gICAgICAgICAgICArc3ggKiBjb3MsXHJcbiAgICAgICAgICAgICtzeSAqIHNpbixcclxuICAgICAgICAgICAgLWN4ICogY29zICogc3ggLSBjeSAqIHNpbiAqIHN5ICsgcHgsXHJcbiAgICAgICAgICAgIC1zeCAqIHNpbixcclxuICAgICAgICAgICAgK3N5ICogY29zLFxyXG4gICAgICAgICAgICArY3ggKiBzaW4gKiBzeCAtIGN5ICogY29zICogc3kgKyBweSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQW5nbGVVbml0IH0gZnJvbSAnLi9jMi1tYXRoLXV0aWxzJztcclxuaW1wb3J0IHR5cGUgeyBDMlZlYzIgfSBmcm9tICcuL2MyLXZlYzInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyTWF0MngzIHtcclxuICAgIC8vIENvbHVtbi1tYWpvciBvcmRlciBvZiB0aGUgZWxlbWVudHMgKGNvbHVtbnMgY29udGlndW91cykuXHJcbiAgICByZWFkb25seSBlbGVtZW50czogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSg2KTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhMDA6IG51bWJlciA9IDAsIGEwMTogbnVtYmVyID0gMCwgYTAyOiBudW1iZXIgPSAwLCBhMTA6IG51bWJlciA9IDAsIGExMTogbnVtYmVyID0gMCwgYTEyOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoYTAwLCBhMDEsIGEwMiwgYTEwLCBhMTEsIGExMik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldElkZW50aXR5KG91dDogQzJNYXQyeDMpOiBDMk1hdDJ4MyB7XHJcbiAgICAgICAgb3V0LmVsZW1lbnRzWzBdID0gMTtcclxuICAgICAgICBvdXQuZWxlbWVudHNbMV0gPSAwO1xyXG4gICAgICAgIG91dC5lbGVtZW50c1syXSA9IDA7XHJcbiAgICAgICAgb3V0LmVsZW1lbnRzWzNdID0gMTtcclxuICAgICAgICBvdXQuZWxlbWVudHNbNF0gPSAwO1xyXG4gICAgICAgIG91dC5lbGVtZW50c1s1XSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChvdXQ6IEMyTWF0MngzLCBtYXRyaXgwOiBDMk1hdDJ4MywgbWF0cml4MTogQzJNYXQyeDMsIHQ6IG51bWJlcik6IEMyTWF0MngzIHtcclxuICAgICAgICByZXR1cm4gb3V0LmNvcHkobWF0cml4MCkubGVycChtYXRyaXgxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXF1YWxzKG0xOiBDMk1hdDJ4MywgbTI6IEMyTWF0MngzLCBlcHNpbG9uOiBudW1iZXIgPSAxZS00KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYSA9IG0xLmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IGIgPSBtMi5lbGVtZW50cztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzBdIC0gYlswXSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzJdIC0gYlsyXSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzNdIC0gYlszXSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzRdIC0gYls0XSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhhWzVdIC0gYls1XSkgPD0gZXBzaWxvblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRldChtYXRyaXg6IEMyTWF0MngzKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBlID0gbWF0cml4LmVsZW1lbnRzO1xyXG4gICAgICAgIHJldHVybiBlWzBdICogZVszXSAtIGVbMl0gKiBlWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChhMDA6IG51bWJlciA9IDAsIGEwMTogbnVtYmVyID0gMCwgYTAyOiBudW1iZXIgPSAwLCBhMTA6IG51bWJlciA9IDAsIGExMTogbnVtYmVyID0gMCwgYTEyOiBudW1iZXIgPSAwKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1swXSA9IGEwMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzWzJdID0gYTAxO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbNF0gPSBhMDI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1sxXSA9IGExMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzWzNdID0gYTExO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbNV0gPSBhMTI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycChtYXRyaXg6IEMyTWF0MngzLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgY29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IG1lID0gbWF0cml4LmVsZW1lbnRzO1xyXG4gICAgICAgIHRlWzBdID0gcyAqIHRlWzBdICsgdCAqIG1lWzBdO1xyXG4gICAgICAgIHRlWzFdID0gcyAqIHRlWzFdICsgdCAqIG1lWzFdO1xyXG4gICAgICAgIHRlWzJdID0gcyAqIHRlWzJdICsgdCAqIG1lWzJdO1xyXG4gICAgICAgIHRlWzNdID0gcyAqIHRlWzNdICsgdCAqIG1lWzNdO1xyXG4gICAgICAgIHRlWzRdID0gcyAqIHRlWzRdICsgdCAqIG1lWzRdO1xyXG4gICAgICAgIHRlWzVdID0gcyAqIHRlWzVdICsgdCAqIG1lWzVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21BcnJheShhcnJheTogQXJyYXk8bnVtYmVyPiwgb2Zmc2V0ID0gMCk6IHRoaXMge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV0gPSBhcnJheVtpICsgb2Zmc2V0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGl0eShlcHNpbG9uOiBudW1iZXIgPSAxZS00KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgTWF0aC5hYnModGVbMF0gLSAxKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRlWzFdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRlWzJdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRlWzNdIC0gMSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyh0ZVs0XSkgPD0gZXBzaWxvbiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyh0ZVs1XSkgPD0gZXBzaWxvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGx5TWF0cmljZXMoYTogQzJNYXQyeDMsIGI6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgYWUgPSBhLmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IGJlID0gYi5lbGVtZW50cztcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgYTAwID0gYWVbMF07XHJcbiAgICAgICAgY29uc3QgYTEwID0gYWVbMV07XHJcbiAgICAgICAgY29uc3QgYTAxID0gYWVbMl07XHJcbiAgICAgICAgY29uc3QgYTExID0gYWVbM107XHJcbiAgICAgICAgY29uc3QgYTAyID0gYWVbNF07XHJcbiAgICAgICAgY29uc3QgYTEyID0gYWVbNV07XHJcbiAgICAgICAgY29uc3QgYjAwID0gYmVbMF07XHJcbiAgICAgICAgY29uc3QgYjEwID0gYmVbMV07XHJcbiAgICAgICAgY29uc3QgYjAxID0gYmVbMl07XHJcbiAgICAgICAgY29uc3QgYjExID0gYmVbM107XHJcbiAgICAgICAgY29uc3QgYjAyID0gYmVbNF07XHJcbiAgICAgICAgY29uc3QgYjEyID0gYmVbNV07XHJcbiAgICAgICAgdGVbMF0gPSBhMDAgKiBiMDAgKyBhMDEgKiBiMTA7XHJcbiAgICAgICAgdGVbMV0gPSBhMTAgKiBiMDAgKyBhMTEgKiBiMTA7XHJcbiAgICAgICAgdGVbMl0gPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTE7XHJcbiAgICAgICAgdGVbM10gPSBhMTAgKiBiMDEgKyBhMTEgKiBiMTE7XHJcbiAgICAgICAgdGVbNF0gPSBhMDAgKiBiMDIgKyBhMDEgKiBiMTIgKyBhMDI7XHJcbiAgICAgICAgdGVbNV0gPSBhMTAgKiBiMDIgKyBhMTEgKiBiMTIgKyBhMTI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wb3NlQWZ0ZXJDb2VmZmljaWVudHMoXHJcbiAgICAgICAgYTAwOiBudW1iZXIsXHJcbiAgICAgICAgYTAxOiBudW1iZXIsXHJcbiAgICAgICAgYTAyOiBudW1iZXIsXHJcbiAgICAgICAgYTEwOiBudW1iZXIsXHJcbiAgICAgICAgYTExOiBudW1iZXIsXHJcbiAgICAgICAgYTEyOiBudW1iZXIsXHJcbiAgICApOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgYjAwID0gdGVbMF07XHJcbiAgICAgICAgY29uc3QgYjEwID0gdGVbMV07XHJcbiAgICAgICAgY29uc3QgYjAxID0gdGVbMl07XHJcbiAgICAgICAgY29uc3QgYjExID0gdGVbM107XHJcbiAgICAgICAgY29uc3QgYjAyID0gdGVbNF07XHJcbiAgICAgICAgY29uc3QgYjEyID0gdGVbNV07XHJcbiAgICAgICAgdGVbMF0gPSBhMDAgKiBiMDAgKyBhMDEgKiBiMTA7XHJcbiAgICAgICAgdGVbMV0gPSBhMTAgKiBiMDAgKyBhMTEgKiBiMTA7XHJcbiAgICAgICAgdGVbMl0gPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTE7XHJcbiAgICAgICAgdGVbM10gPSBhMTAgKiBiMDEgKyBhMTEgKiBiMTE7XHJcbiAgICAgICAgdGVbNF0gPSBhMDAgKiBiMDIgKyBhMDEgKiBiMTIgKyBhMDI7XHJcbiAgICAgICAgdGVbNV0gPSBhMTAgKiBiMDIgKyBhMTEgKiBiMTIgKyBhMTI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9zZUFmdGVyKG06IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyh0aGlzLCBtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb3NlQmVmb3JlKG06IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyhtLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnQoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IGEwMCA9IHRlWzBdO1xyXG4gICAgICAgIGNvbnN0IGExMCA9IHRlWzFdO1xyXG4gICAgICAgIGNvbnN0IGEwMSA9IHRlWzJdO1xyXG4gICAgICAgIGNvbnN0IGExMSA9IHRlWzNdO1xyXG4gICAgICAgIGNvbnN0IGEwMiA9IHRlWzRdO1xyXG4gICAgICAgIGNvbnN0IGExMiA9IHRlWzVdO1xyXG4gICAgICAgIGNvbnN0IGRldCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuXHJcbiAgICAgICAgaWYgKGRldCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0MyTWF0MngzOiAuaW52ZXJ0KCkgY2FuIG5vdCBpbnZlcnQgbWF0cml4LCBkZXRlcm1pbmFudCBpcyAwJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW52RGV0ID0gMSAvIGRldDtcclxuICAgICAgICB0aGlzLnNldChcclxuICAgICAgICAgICAgYTExICogaW52RGV0LFxyXG4gICAgICAgICAgICAtYTAxICogaW52RGV0LFxyXG4gICAgICAgICAgICAoYTAxICogYTEyIC0gYTExICogYTAyKSAqIGludkRldCxcclxuICAgICAgICAgICAgLWExMCAqIGludkRldCxcclxuICAgICAgICAgICAgYTAwICogaW52RGV0LFxyXG4gICAgICAgICAgICAoYTEwICogYTAyIC0gYTAwICogYTEyKSAqIGludkRldCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkobTogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgbWUgPSBtLmVsZW1lbnRzO1xyXG4gICAgICAgIHRlWzBdID0gbWVbMF07XHJcbiAgICAgICAgdGVbMV0gPSBtZVsxXTtcclxuICAgICAgICB0ZVsyXSA9IG1lWzJdO1xyXG4gICAgICAgIHRlWzNdID0gbWVbM107XHJcbiAgICAgICAgdGVbNF0gPSBtZVs0XTtcclxuICAgICAgICB0ZVs1XSA9IG1lWzVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyTWF0MngzIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyTWF0MngzKCkuY29weSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXQoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgcmV0dXJuIHRlWzBdICogdGVbM10gLSB0ZVsyXSAqIHRlWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJZGVudGl0eSgpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQoMSwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVRyYW5zbGF0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KDEsIDAsIHgsIDAsIDEsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VUcmFuc2xhdGlvblYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVRyYW5zbGF0aW9uKHYueCwgdi55KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2NhbGUoc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHNjYWxlWCwgMCwgMCwgMCwgc2NhbGVZLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2NhbGVWKHY6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VTY2FsZSh2LngsIHYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNjYWxlRnJvbShzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIsIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHNjYWxlWCwgMCwgLXNjYWxlWCAqIGNlbnRlclggKyBjZW50ZXJYLCAwLCBzY2FsZVksIC1zY2FsZVkgKiBjZW50ZXJZICsgY2VudGVyWSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNjYWxlRnJvbVYoc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyLCBjZW50ZXI6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VTY2FsZUZyb20oc2NhbGVYLCBzY2FsZVksIGNlbnRlci54LCBjZW50ZXIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVJvdGF0aW9uKGFuZ2xlOiBudW1iZXIsIHVuaXQ6IEMyQW5nbGVVbml0KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09ICdkZWcnKSBhbmdsZSAqPSBNYXRoLlBJIC8gMTgwLjA7XHJcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKTtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChjLCAtcywgMCwgK3MsIGMsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VSb3RhdGlvbkZyb20oYW5nbGU6IG51bWJlciwgdW5pdDogQzJBbmdsZVVuaXQsIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09ICdkZWcnKSBhbmdsZSAqPSBNYXRoLlBJIC8gMTgwLjA7XHJcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKTtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChjLCAtcywgLWNlbnRlclggKiBjICsgY2VudGVyWSAqIHMgKyBjZW50ZXJYLCArcywgYywgLWNlbnRlclkgKiBjIC0gY2VudGVyWCAqIHMgKyBjZW50ZXJZKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUm90YXRpb25Gcm9tVihhbmdsZTogbnVtYmVyLCB1bml0OiBDMkFuZ2xlVW5pdCwgY2VudGVyOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUm90YXRpb25Gcm9tKGFuZ2xlLCB1bml0LCBjZW50ZXIueCwgY2VudGVyLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICB0ZVs0XSArPSB4O1xyXG4gICAgICAgIHRlWzVdICs9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUodi54LCB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlKHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICB0ZVswXSAqPSBzY2FsZVg7XHJcbiAgICAgICAgdGVbMV0gKj0gc2NhbGVZO1xyXG4gICAgICAgIHRlWzJdICo9IHNjYWxlWDtcclxuICAgICAgICB0ZVszXSAqPSBzY2FsZVk7XHJcbiAgICAgICAgdGVbNF0gKj0gc2NhbGVYO1xyXG4gICAgICAgIHRlWzVdICo9IHNjYWxlWTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZVYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUodi54LCB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlRnJvbShzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIsIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9zZUFmdGVyQ29lZmZpY2llbnRzKFxyXG4gICAgICAgICAgICBzY2FsZVgsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIC1zY2FsZVggKiBjZW50ZXJYICsgY2VudGVyWCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgc2NhbGVZLFxyXG4gICAgICAgICAgICAtc2NhbGVZICogY2VudGVyWSArIGNlbnRlclksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUZyb21WKHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlciwgY2VudGVyOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZUZyb20oc2NhbGVYLCBzY2FsZVksIGNlbnRlci54LCBjZW50ZXIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIsIHVuaXQ6IEMyQW5nbGVVbml0ID0gJ3JhZCcpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIGFuZ2xlICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9zZUFmdGVyQ29lZmZpY2llbnRzKGMsIC1zLCAwLCArcywgYywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlRnJvbShhbmdsZTogbnVtYmVyLCB1bml0OiBDMkFuZ2xlVW5pdCwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIGFuZ2xlICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9zZUFmdGVyQ29lZmZpY2llbnRzKFxyXG4gICAgICAgICAgICBjLFxyXG4gICAgICAgICAgICAtcyxcclxuICAgICAgICAgICAgLWNlbnRlclggKiBjICsgY2VudGVyWSAqIHMgKyBjZW50ZXJYLFxyXG4gICAgICAgICAgICArcyxcclxuICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgLWNlbnRlclkgKiBjIC0gY2VudGVyWCAqIHMgKyBjZW50ZXJZLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlRnJvbVYoYW5nbGU6IG51bWJlciwgdW5pdDogQzJBbmdsZVVuaXQsIGNlbnRlcjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlRnJvbShhbmdsZSwgdW5pdCwgY2VudGVyLngsIGNlbnRlci55KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQzJNYXQyeDMgfSBmcm9tICcuL2MyLW1hdDJ4Myc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4vYzItdmVjMic7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJTcGFjZSB7XHJcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBDMlNwYWNlIHwgbnVsbDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzcGFjZVRvUGFyZW50OiBDMk1hdDJ4MyA9IG5ldyBDMk1hdDJ4MygxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBwYXJlbnRUb1NwYWNlOiBDMk1hdDJ4MyA9IG5ldyBDMk1hdDJ4MygxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzcGFjZVRvV29ybGQ6IEMyTWF0MngzID0gbmV3IEMyTWF0MngzKDEsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHdvcmxkVG9TcGFjZTogQzJNYXQyeDMgPSBuZXcgQzJNYXQyeDMoMSwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXh0ZW50c1NjYWxlVG9QYXJlbnQ6IEMyVmVjMiA9IG5ldyBDMlZlYzIoMS4wLCAxLjApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4dGVudHNTY2FsZVRvV29ybGQ6IEMyVmVjMiA9IG5ldyBDMlZlYzIoMS4wLCAxLjApO1xyXG4gICAgcHJvdGVjdGVkIGxlbmd0aFNjYWxlVG9QYXJlbnQ6IG51bWJlciA9IDEuMDtcclxuICAgIHByb3RlY3RlZCBsZW5ndGhTY2FsZVRvV29ybGQ6IG51bWJlciA9IDEuMDtcclxuICAgIHByb3RlY3RlZCBpc0RpcmVjdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBDMlNwYWNlIHwgbnVsbCA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQXNzdW1lIHNwYWNlVG9QYXJlbnQgaXMgdXBkYXRlZFxyXG4gICAgICAgIGNvbnN0IGUweCA9IHRoaXMuc3BhY2VUb1BhcmVudC5lbGVtZW50c1swXTtcclxuICAgICAgICBjb25zdCBlMHkgPSB0aGlzLnNwYWNlVG9QYXJlbnQuZWxlbWVudHNbMV07XHJcbiAgICAgICAgY29uc3QgZTF4ID0gdGhpcy5zcGFjZVRvUGFyZW50LmVsZW1lbnRzWzJdO1xyXG4gICAgICAgIGNvbnN0IGUxeSA9IHRoaXMuc3BhY2VUb1BhcmVudC5lbGVtZW50c1szXTtcclxuXHJcbiAgICAgICAgdGhpcy5sZW5ndGhTY2FsZVRvUGFyZW50ID0gTWF0aC5zcXJ0KE1hdGguYWJzKEMyTWF0MngzLmRldCh0aGlzLnNwYWNlVG9QYXJlbnQpKSk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzU2NhbGVUb1BhcmVudC5zZXQoTWF0aC5zcXJ0KGUweCAqIGUweCArIGUweSAqIGUweSksIE1hdGguc3FydChlMXggKiBlMXggKyBlMXkgKiBlMXkpKTtcclxuICAgICAgICB0aGlzLnBhcmVudFRvU3BhY2UuY29weSh0aGlzLnNwYWNlVG9QYXJlbnQpLmludmVydCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VUb1dvcmxkLm11bHRpcGx5TWF0cmljZXModGhpcy5wYXJlbnQuc3BhY2VUb1dvcmxkLCB0aGlzLnNwYWNlVG9QYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkVG9TcGFjZS5tdWx0aXBseU1hdHJpY2VzKHRoaXMucGFyZW50VG9TcGFjZSwgdGhpcy5wYXJlbnQud29ybGRUb1NwYWNlKTtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGhTY2FsZVRvV29ybGQgPSB0aGlzLmxlbmd0aFNjYWxlVG9QYXJlbnQgKiB0aGlzLnBhcmVudC5sZW5ndGhTY2FsZVRvV29ybGQ7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW50c1NjYWxlVG9Xb3JsZC5jb3B5KHRoaXMuZXh0ZW50c1NjYWxlVG9QYXJlbnQpLm11bFYodGhpcy5wYXJlbnQuZXh0ZW50c1NjYWxlVG9Xb3JsZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZVRvV29ybGQuY29weSh0aGlzLnNwYWNlVG9QYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkVG9TcGFjZS5jb3B5KHRoaXMucGFyZW50VG9TcGFjZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoU2NhbGVUb1dvcmxkID0gdGhpcy5sZW5ndGhTY2FsZVRvUGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVudHNTY2FsZVRvV29ybGQuY29weSh0aGlzLmV4dGVudHNTY2FsZVRvUGFyZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNEaXJlY3QgPSB0aGlzLnNwYWNlVG9Xb3JsZC5kZXQoKSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEaXJlY3RTcGFjZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RpcmVjdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFjZVRvUGFyZW50SW50byhkc3Q6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy5zcGFjZVRvUGFyZW50KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRUb1NwYWNlSW50byhkc3Q6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy5wYXJlbnRUb1NwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFjZVRvV29ybGRJbnRvKGRzdDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLnNwYWNlVG9Xb3JsZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRUb1NwYWNlSW50byhkc3Q6IEMyTWF0MngzKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy53b3JsZFRvU3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYWNlVG9Xb3JsZCgpOiBDMk1hdDJ4MyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2VUb1dvcmxkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkVG9TcGFjZSgpOiBDMk1hdDJ4MyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRUb1NwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRoaXNUb1NwYWNlSW50byhkc3Q6IEMyTWF0MngzLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMuc3BhY2VUb1dvcmxkKTtcclxuICAgICAgICBkc3QubXVsdGlwbHlNYXRyaWNlcyhzcGFjZS5nZXRXb3JsZFRvU3BhY2UoKSwgZHN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFjZVRvVGhpc0ludG8oZHN0OiBDMk1hdDJ4Mywgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLndvcmxkVG9TcGFjZSk7XHJcbiAgICAgICAgZHN0Lm11bHRpcGx5TWF0cmljZXMoZHN0LCBzcGFjZS5nZXRTcGFjZVRvV29ybGQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJvbVNwYWNlKHNwYWNlOiBDMlNwYWNlLCBvcmlnaW46IEMyVmVjMiwgYmFzaXMwOiBDMlZlYzIsIGJhc2lzMTogQzJWZWMyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IEMyTWF0MngzKCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLmNvcHkoc3BhY2UuZ2V0U3BhY2VUb1dvcmxkKCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0ubXVsdGlwbHlNYXRyaWNlcyh0aGlzLnBhcmVudC5nZXRXb3JsZFRvU3BhY2UoKSwgdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYzAgPSBiYXNpczAuY2xvbmUoKS5hcHBseTJ4M09mZnNldCh0cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IGMxID0gYmFzaXMxLmNsb25lKCkuYXBwbHkyeDNPZmZzZXQodHJhbnNmb3JtKTtcclxuICAgICAgICBjb25zdCBvID0gb3JpZ2luLmNsb25lKCkuYXBwbHkyeDModHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGFjZVRvUGFyZW50LnNldChjMC54LCBjMS54LCBvLngsIGMwLnksIGMxLnksIG8ueSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGFjZVRvUGFyZW50KGEwMDogbnVtYmVyLCBhMDE6IG51bWJlciwgYTAyOiBudW1iZXIsIGExMDogbnVtYmVyLCBhMTE6IG51bWJlciwgYTEyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwYWNlVG9QYXJlbnQuc2V0KGEwMCwgYTAxLCBhMDIsIGExMCwgYTExLCBhMTIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BhY2VUb1BhcmVudE1hdChtYXRyaXg6IEMyTWF0MngzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGFjZVRvUGFyZW50LmNvcHkobWF0cml4KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRQb2ludEludG8oZHN0OiBDMlZlYzIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGRzdCA9IGRzdC5zZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKHNwYWNlID09PSB0aGlzKSByZXR1cm4gdGhpcztcclxuICAgICAgICBkc3QuYXBwbHkyeDModGhpcy5zcGFjZVRvV29ybGQpLmFwcGx5MngzKHNwYWNlLndvcmxkVG9TcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFBvaW50SW50b1YoZHN0OiBDMlZlYzIsIHBvaW50OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFBvaW50SW50byhkc3QsIHBvaW50LngsIHBvaW50LnksIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0T2Zmc2V0SW50byhkc3Q6IEMyVmVjMiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgZHN0ID0gZHN0LnNldCh4LCB5KTtcclxuICAgICAgICBpZiAoc3BhY2UgPT09IHRoaXMpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGRzdC5hcHBseTJ4M09mZnNldCh0aGlzLnNwYWNlVG9Xb3JsZCkuYXBwbHkyeDNPZmZzZXQoc3BhY2Uud29ybGRUb1NwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0T2Zmc2V0SW50b1YoZHN0OiBDMlZlYzIsIHBvaW50OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydE9mZnNldEludG8oZHN0LCBwb2ludC54LCBwb2ludC55LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydExlbmd0aChsZW5ndGg6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChzcGFjZSA9PT0gdGhpcykgcmV0dXJuIE1hdGguYWJzKGxlbmd0aCk7XHJcbiAgICAgICAgbGVuZ3RoICo9IHRoaXMubGVuZ3RoU2NhbGVUb1dvcmxkO1xyXG4gICAgICAgIGlmIChzcGFjZSkgbGVuZ3RoIC89IHNwYWNlLmxlbmd0aFNjYWxlVG9Xb3JsZDtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMobGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGRzdCA9IGRzdC5zZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKHNwYWNlID09PSB0aGlzKSByZXR1cm4gdGhpcztcclxuICAgICAgICBkc3QubXVsVih0aGlzLmV4dGVudHNTY2FsZVRvV29ybGQpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgZHN0LmRpdlYoc3BhY2UuZXh0ZW50c1NjYWxlVG9Xb3JsZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEV4dGVudHNJbnRvVihkc3Q6IEMyVmVjMiwgcG9pbnQ6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RXh0ZW50c0ludG8oZHN0LCBwb2ludC54LCBwb2ludC55LCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJIYXNDbG9uZTxUPiB7XHJcbiAgICBjbG9uZSgpOiBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMySGFzQ29weTxUPiB7XHJcbiAgICBjb3B5KG90aGVyOiBUKTogdGhpcztcclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBUKTogdGhpcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkhhc0xlcnA8VD4ge1xyXG4gICAgbGVycChzdGF0ZTA6IFQsIHN0YXRlMTogVCwgdDogbnVtYmVyKTogdGhpcztcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEMyQmFzZVR5cGUge1xyXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkga2luZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNjZW5lOiBDMkJhc2VTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jaygpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2NrKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHkgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJCb29sZWFuIGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJCb29sZWFuPiwgQzJIYXNDb3B5PEMyQm9vbGVhbj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdib29sZWFuJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBib29sZWFuID0gZmFsc2UsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJCb29sZWFuKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJCb29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWUpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBvdGhlci52YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgdHlwZSBDMkFuZ2xlVW5pdCA9ICdkZWcnIHwgJ3JhZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJNYXRoVXRpbHMge1xyXG4gICAgc3RhdGljIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGFtcDAxKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMk1hdGhVdGlscy5jbGFtcCh2YWx1ZSwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICgxIC0gdCkgKiB4ICsgdCAqIHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGludkxlcnAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh4ICE9PSB5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLSB4KSAvICh5IC0geCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1hcChvcmlnRnJvbTogbnVtYmVyLCBvcmlnVG86IG51bWJlciwgdGFyZ2V0RnJvbTogbnVtYmVyLCB0YXJnZXRUbzogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQzJNYXRoVXRpbHMubGVycCh0YXJnZXRGcm9tLCB0YXJnZXRUbywgQzJNYXRoVXRpbHMuaW52TGVycChvcmlnRnJvbSwgb3JpZ1RvLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb2QoeDogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoKHggJSBuKSArIG4pICUgbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGFtcCh4OiBudW1iZXIsIHk6IG51bWJlciwgbGFtYmRhOiBudW1iZXIsIGR0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMk1hdGhVdGlscy5sZXJwKHgsIHksIDEgLSBNYXRoLmV4cCgtbGFtYmRhICogZHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc25hcCh2YWx1ZTogbnVtYmVyLCBzdGVwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChzdGVwIDw9IDApIHJldHVybiB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc25hcFRvQXJyYXkodmFsdWU6IG51bWJlciwgYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgoY2xvc2VzdCwgY3VyclZhbHVlKSA9PlxyXG4gICAgICAgICAgICBNYXRoLmFicyhjdXJyVmFsdWUgLSB2YWx1ZSkgPCBNYXRoLmFicyhjbG9zZXN0IC0gdmFsdWUpID8gY3VyclZhbHVlIDogY2xvc2VzdCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSwgQzJIYXNMZXJwIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMk1hdGhVdGlscyB9IGZyb20gJy4uL21hdGgvYzItbWF0aC11dGlscyc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkNvbG9yVGhlbWUgfSBmcm9tICcuL2MyLWNvbG9yLXRoZW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkNvbG9yIGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJDb2xvcj4sIEMySGFzQ29weTxDMkNvbG9yPiwgQzJIYXNMZXJwPEMyQ29sb3I+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAnY29sb3InIGFzIGNvbnN0O1xyXG4gICAgcmVhZG9ubHkgY29tcG9uZW50czogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSg4KTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHI6IG51bWJlciA9IDAsIGc6IG51bWJlciA9IDAsIGI6IG51bWJlciA9IDAsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclIgPSBDMkNvbG9yLnNSR0IyNTVUb0xpbmVhcihyKTtcclxuICAgICAgICBjb25zdCBsaW5lYXJHID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoZyk7XHJcbiAgICAgICAgY29uc3QgbGluZWFyQiA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKGIpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVhckEgPSAxLjA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzWzQgKiBpICsgMF0gPSBsaW5lYXJSO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIGkgKyAxXSA9IGxpbmVhckc7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogaSArIDJdID0gbGluZWFyQjtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzWzQgKiBpICsgM10gPSBsaW5lYXJBO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc1JHQlRvTGluZWFyKGM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGMgPD0gMC4wNDA0NSkge1xyXG4gICAgICAgICAgICBjID0gYyAqIDAuMDc3Mzk5MzgwODtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjID0gTWF0aC5wb3coYyAqIDAuOTQ3ODY3Mjk4NiArIDAuMDUyMTMyNzAxNCwgMi40KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEMyTWF0aFV0aWxzLmNsYW1wMDEoYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxpbmVhclRvU1JHQihjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjIDw9IDAuMDAzMTMwOCkge1xyXG4gICAgICAgICAgICBjID0gYyAqIDEyLjkyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGMgPSAxLjA1NSAqIE1hdGgucG93KGMsIDAuNDE2NjYpIC0gMC4wNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDMk1hdGhVdGlscy5jbGFtcDAxKGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzUkdCMjU1VG9MaW5lYXIoYzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQzJDb2xvci5zUkdCVG9MaW5lYXIoYyAvIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxpbmVhclRvU1JHQjI1NShjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKEMyQ29sb3IubGluZWFyVG9TUkdCKGMpICogMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkNvbG9yIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBDMkNvbG9yKHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIGNvbG9yLmNvbXBvbmVudHMuc2V0KHRoaXMuY29tcG9uZW50cyk7XHJcbiAgICAgICAgY29sb3IubG9ja2VkID0gdGhpcy5sb2NrZWQ7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKGNvbG9yOiBDMkNvbG9yKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KGNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KGNvbG9yOiBDMkNvbG9yKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChjb2xvci5jb21wb25lbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJDb2xvciwgc3RhdGUxOiBDMkNvbG9yLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaV0gPSBDMk1hdGhVdGlscy5sZXJwKHN0YXRlMC5jb21wb25lbnRzW2ldLCBzdGF0ZTEuY29tcG9uZW50c1tpXSwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKGNvbG9yMDogQzJDb2xvciwgY29sb3IxOiBDMkNvbG9yLCB0OiBudW1iZXIpOiBDMkNvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyQ29sb3IoY29sb3IxLnNjZW5lKS5sZXJwKGNvbG9yMCwgY29sb3IxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQobGluZWFyUjogbnVtYmVyLCBsaW5lYXJHOiBudW1iZXIsIGxpbmVhckI6IG51bWJlciwgbGluZWFyQTogbnVtYmVyLCBtb2RlSW5kZXg6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDBdID0gbGluZWFyUjtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDFdID0gbGluZWFyRztcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDJdID0gbGluZWFyQjtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDNdID0gbGluZWFyQTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tSGV4KGhleDogc3RyaW5nLCBtb2RlSW5kZXg6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICBsZXQgbGluZWFyUiA9IDA7XHJcbiAgICAgICAgbGV0IGxpbmVhckcgPSAwO1xyXG4gICAgICAgIGxldCBsaW5lYXJCID0gMDtcclxuICAgICAgICBsZXQgbGluZWFyQSA9IDEuMDtcclxuXHJcbiAgICAgICAgaWYgKC9eIyhbMC05QS1GYS1mXXs2fSkkLy50ZXN0KGhleCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygxKSwgMTYpO1xyXG4gICAgICAgICAgICBsaW5lYXJSID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoKG51bSA+PiAxNikgJiAweGZmKTtcclxuICAgICAgICAgICAgbGluZWFyRyA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKChudW0gPj4gOCkgJiAweGZmKTtcclxuICAgICAgICAgICAgbGluZWFyQiA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKG51bSAmIDB4ZmYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL14jKFswLTlBLUZhLWZdezh9KSQvLnRlc3QoaGV4KSkge1xyXG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDEpLCAxNik7XHJcbiAgICAgICAgICAgIGxpbmVhclIgPSBDMkNvbG9yLnNSR0IyNTVUb0xpbmVhcigobnVtID4+IDI0KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBsaW5lYXJHID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoKG51bSA+PiAxNikgJiAweGZmKTtcclxuICAgICAgICAgICAgbGluZWFyQiA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKChudW0gPj4gOCkgJiAweGZmKTtcclxuICAgICAgICAgICAgbGluZWFyQSA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKG51bSAmIDB4ZmYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBoZXggY29sb3I6ICR7aGV4fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQobGluZWFyUiwgbGluZWFyRywgbGluZWFyQiwgbGluZWFyQSwgbW9kZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUhleChzY2VuZTogQzJCYXNlU2NlbmUsIGhleDogc3RyaW5nLCBtb2RlSW5kZXg6IG51bWJlciA9IDApOiBDMkNvbG9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyQ29sb3Ioc2NlbmUpLnNldEZyb21IZXgoaGV4LCBtb2RlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRoZW1lcyhsaWdodFRoZW1lOiBDMkNvbG9yVGhlbWUsIGRhcmtUaGVtZTogQzJDb2xvclRoZW1lLCBuYW1lOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNldEZyb21IZXgobGlnaHRUaGVtZS5jb2xvcihuYW1lLCBzY2FsZSksIDApO1xyXG4gICAgICAgIHRoaXMuc2V0RnJvbUhleChkYXJrVGhlbWUuY29sb3IobmFtZSwgc2NhbGUpLCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tVGhlbWUoY29sb3JUaGVtZTogQzJDb2xvclRoZW1lLCBuYW1lOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIsIG1vZGVJbmRleDogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEZyb21IZXgoY29sb3JUaGVtZS5jb2xvcihuYW1lLCBzY2FsZSksIG1vZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21UaGVtZShcclxuICAgICAgICBzY2VuZTogQzJCYXNlU2NlbmUsXHJcbiAgICAgICAgY29sb3JUaGVtZTogQzJDb2xvclRoZW1lLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBzY2FsZTogbnVtYmVyLFxyXG4gICAgICAgIG1vZGVJbmRleDogbnVtYmVyID0gMCxcclxuICAgICk6IEMyQ29sb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJDb2xvcihzY2VuZSkuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsIG5hbWUsIHNjYWxlLCBtb2RlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdoaXRlKGludGVuc2l0eTogbnVtYmVyID0gMSwgb3BhY2l0eTogbnVtYmVyID0gMSwgbW9kZUluZGV4OiBudW1iZXIgPSAwKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KGludGVuc2l0eSwgaW50ZW5zaXR5LCBpbnRlbnNpdHksIG9wYWNpdHksIG1vZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmxhY2soaW50ZW5zaXR5OiBudW1iZXIgPSAxLCBvcGFjaXR5OiBudW1iZXIgPSAxLCBtb2RlSW5kZXg6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICBpbnRlbnNpdHkgPSAxIC0gaW50ZW5zaXR5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChpbnRlbnNpdHksIGludGVuc2l0eSwgaW50ZW5zaXR5LCBvcGFjaXR5LCBtb2RlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChtb2RlSW5kZXg6IG51bWJlciA9IDApOiB7IHI6IG51bWJlcjsgZzogbnVtYmVyOyBiOiBudW1iZXI7IGE6IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBjID0gKHg6IG51bWJlcikgPT4gQzJDb2xvci5saW5lYXJUb1NSR0IyNTUoeCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogYyh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDBdKSxcclxuICAgICAgICAgICAgZzogYyh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDFdKSxcclxuICAgICAgICAgICAgYjogYyh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDJdKSxcclxuICAgICAgICAgICAgYTogYyh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDNdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFIobW9kZUluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQzJDb2xvci5saW5lYXJUb1NSR0IyNTUodGhpcy5jb21wb25lbnRzWzQgKiBtb2RlSW5kZXggKyAwXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Ryhtb2RlSW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMkNvbG9yLmxpbmVhclRvU1JHQjI1NSh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDFdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCKG1vZGVJbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEMyQ29sb3IubGluZWFyVG9TUkdCMjU1KHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEEobW9kZUluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQzJDb2xvci5saW5lYXJUb1NSR0IyNTUodGhpcy5jb21wb25lbnRzWzQgKiBtb2RlSW5kZXggKyAzXSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHkgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJFbnVtPFQ+IGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJFbnVtPFQ+PiwgQzJIYXNDb3B5PEMyRW51bTxUPj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdlbnVtJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogVDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBULCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJFbnVtPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyRW51bSh0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyRW51bTxUPik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJFbnVtPFQ+KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gb3RoZXIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlOiBUKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSwgQzJIYXNMZXJwIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJNYXRoVXRpbHMgfSBmcm9tICcuLi9tYXRoL2MyLW1hdGgtdXRpbHMnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJMZW5ndGggZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkxlbmd0aD4sIEMySGFzQ29weTxDMkxlbmd0aD4sIEMySGFzTGVycDxDMkxlbmd0aD4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdsZW5ndGgnIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3BhY2U6IEMyU3BhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB2YWx1ZTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkxlbmd0aCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkxlbmd0aCh0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLCB0aGlzLnNwYWNlLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyTGVuZ3RoKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkxlbmd0aCk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSAmJiB0aGlzLnNwYWNlID09PSBvdGhlci5zcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBvdGhlci5zcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJMZW5ndGgsIHN0YXRlMTogQzJMZW5ndGgsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gc3RhdGUxLnNwYWNlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMCA9IHN0YXRlMC5nZXQoc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IHN0YXRlMS5nZXQoc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0KEMyTWF0aFV0aWxzLmxlcnAodmFsdWUwLCB2YWx1ZTEsIHQpLCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoc3RhdGUwOiBDMkxlbmd0aCwgc3RhdGUxOiBDMkxlbmd0aCwgdDogbnVtYmVyKTogQzJMZW5ndGgge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJMZW5ndGgoc3RhdGUxLnNjZW5lLCAwLCBzdGF0ZTEuc3BhY2UpLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogbnVtYmVyLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoc3BhY2UpIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUZyb21TcGFjZSh2YWx1ZTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNwYWNlLmNvbnZlcnRMZW5ndGgodmFsdWUsIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChzcGFjZTogQzJTcGFjZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2UuY29udmVydExlbmd0aCh0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3BhY2Uoc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnNwYWNlLmNvbnZlcnRMZW5ndGgodGhpcy52YWx1ZSwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICAvLyBObyBtYXJrRGlydHkoKSBiZWNhdXNlIHRoZSBwb2ludCB2YWx1ZSBkaWQgbm90IGNoYW5nZVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSwgQzJIYXNMZXJwIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMk1hdGhVdGlscyB9IGZyb20gJy4uL21hdGgvYzItbWF0aC11dGlscyc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMk51bWJlciBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyTnVtYmVyPiwgQzJIYXNDb3B5PEMyTnVtYmVyPiwgQzJIYXNMZXJwPEMyTnVtYmVyPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ251bWJlcicgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBudW1iZXIsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMk51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMk51bWJlcih0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyTnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMk51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMk51bWJlciwgc3RhdGUxOiBDMk51bWJlciwgdDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUwID0gc3RhdGUwLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IHN0YXRlMS5nZXQoKTtcclxuICAgICAgICB0aGlzLnNldChDMk1hdGhVdGlscy5sZXJwKHZhbHVlMCwgdmFsdWUxLCB0KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoc3RhdGUwOiBDMk51bWJlciwgc3RhdGUxOiBDMk51bWJlciwgdDogbnVtYmVyKTogQzJOdW1iZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJOdW1iZXIoc3RhdGUwLnNjZW5lLCAwKS5sZXJwKHN0YXRlMCwgc3RhdGUxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvRml4ZWQocHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHkgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJTdHJpbmcgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMlN0cmluZz4sIEMySGFzQ29weTxDMlN0cmluZz4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdzdHJpbmcnIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB2YWx1ZTogc3RyaW5nID0gJycsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMlN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMlN0cmluZyh0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyU3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMlN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQzJNYXRoVXRpbHMgfSBmcm9tICcuLi9tYXRoL2MyLW1hdGgtdXRpbHMnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUsIHR5cGUgQzJIYXNDbG9uZSwgdHlwZSBDMkhhc0NvcHksIHR5cGUgQzJIYXNMZXJwIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyTGF5ZXIgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkxheWVyPiwgQzJIYXNDb3B5PEMyTGF5ZXI+LCBDMkhhc0xlcnA8QzJMYXllcj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdsYXllcicgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvcmRlckluTGF5ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB2YWx1ZTogbnVtYmVyLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkxheWVyKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJMYXllcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJMYXllcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBvdGhlci52YWx1ZTtcclxuICAgICAgICB0aGlzLm9yZGVySW5MYXllciA9IG90aGVyLm9yZGVySW5MYXllcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJMYXllciwgc3RhdGUxOiBDMkxheWVyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTAgPSBzdGF0ZTAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUxID0gc3RhdGUxLmdldCgpO1xyXG4gICAgICAgIHRoaXMuc2V0KEMyTWF0aFV0aWxzLmxlcnAodmFsdWUwLCB2YWx1ZTEsIHQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChzdGF0ZTA6IEMyTGF5ZXIsIHN0YXRlMTogQzJMYXllciwgdDogbnVtYmVyKTogQzJMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkxheWVyKHN0YXRlMS5zY2VuZSwgMCkubGVycChzdGF0ZTAsIHN0YXRlMSwgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbXBhcmUobGF5ZXJBOiBDMkxheWVyLCBsYXllckI6IEMyTGF5ZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChsYXllckEudmFsdWUgIT09IGxheWVyQi52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJBLnZhbHVlIC0gbGF5ZXJCLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGF5ZXJBLm9yZGVySW5MYXllciAtIGxheWVyQi5vcmRlckluTGF5ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkZvbnRTdHlsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zMi1nbG9iYWxzJztcclxuaW1wb3J0IHsgQzJCb29sZWFuIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWJvb2xlYW4nO1xyXG5pbXBvcnQgeyBDMkNvbG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWNvbG9yJztcclxuaW1wb3J0IHsgQzJFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWVudW0nO1xyXG5pbXBvcnQgeyBDMkxlbmd0aCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1sZW5ndGgnO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMlN0cmluZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1zdHJpbmcnO1xyXG5pbXBvcnQgeyBDMkxheWVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlVwZGF0ZURhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxheWVyOiBDMkxheWVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzTWFuYWdlZDogQzJCb29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgQzJMYXllcihzY2VuZSwgMCk7XHJcbiAgICAgICAgdGhpcy5pc01hbmFnZWQgPSBuZXcgQzJCb29sZWFuKHNjZW5lLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJVcGRhdGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jb3B5KG90aGVyLmxheWVyKTtcclxuICAgICAgICB0aGlzLmlzTWFuYWdlZC5jb3B5KG90aGVyLmlzTWFuYWdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyVXBkYXRlRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGF5ZXIuY29weUlmVW5sb2NrZWQob3RoZXIubGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaXNNYW5hZ2VkLmNvcHlJZlVubG9ja2VkKG90aGVyLmlzTWFuYWdlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlJlbmRlckRhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxheWVyOiBDMkxheWVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzRW5hYmxlZDogQzJCb29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgQzJMYXllcihzY2VuZSwgMCk7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBuZXcgQzJCb29sZWFuKHNjZW5lLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMlJlbmRlckRhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNvcHkob3RoZXIubGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkLmNvcHkob3RoZXIuaXNFbmFibGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJSZW5kZXJEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jb3B5SWZVbmxvY2tlZChvdGhlci5sYXllcik7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQuY29weUlmVW5sb2NrZWQob3RoZXIuaXNFbmFibGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRWxlbWVudERhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzRW5hYmxlZDogQzJCb29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHVwZGF0ZTogQzJVcGRhdGVEYXRhO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNjZW5lOiBDMkJhc2VTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBuZXcgQzJCb29sZWFuKHNjZW5lLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBDMlVwZGF0ZURhdGEoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyRWxlbWVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZC5jb3B5KG90aGVyLmlzRW5hYmxlZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUuY29weShvdGhlci51cGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkVsZW1lbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQuY29weUlmVW5sb2NrZWQob3RoZXIuaXNFbmFibGVkKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZS5jb3B5SWZVbmxvY2tlZChvdGhlci51cGRhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJHcmFwaGljc0RhdGEgZXh0ZW5kcyBDMkVsZW1lbnREYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSByZW5kZXI6IEMyUmVuZGVyRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgQzJSZW5kZXJEYXRhKHNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkdyYXBoaWNzRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmNvcHkob3RoZXIpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmNvcHkob3RoZXIucmVuZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJHcmFwaGljc0RhdGEpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5jb3B5SWZVbmxvY2tlZChvdGhlcik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIuY29weUlmVW5sb2NrZWQob3RoZXIucmVuZGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyU3Ryb2tlRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNFbmFibGVkOiBDMkJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29sb3I6IEMyQ29sb3I7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpbmVDYXA6IEMyRW51bTxDYW52YXNMaW5lQ2FwPjtcclxuICAgIHB1YmxpYyByZWFkb25seSBsaW5lSm9pbjogQzJFbnVtPENhbnZhc0xpbmVKb2luPjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IG5ldyBDMkJvb2xlYW4oc2NlbmUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQzJDb2xvcihzY2VuZSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG5ldyBDMkxlbmd0aChzY2VuZSwgNSwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5saW5lQ2FwID0gbmV3IEMyRW51bTxDYW52YXNMaW5lQ2FwPihzY2VuZSwgJ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5saW5lSm9pbiA9IG5ldyBDMkVudW08Q2FudmFzTGluZUpvaW4+KHNjZW5lLCAnbWl0ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMlN0cm9rZURhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZC5jb3B5KG90aGVyLmlzRW5hYmxlZCk7XHJcbiAgICAgICAgdGhpcy5jb2xvci5jb3B5KG90aGVyLmNvbG9yKTtcclxuICAgICAgICB0aGlzLndpZHRoLmNvcHkob3RoZXIud2lkdGgpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eS5jb3B5KG90aGVyLm9wYWNpdHkpO1xyXG4gICAgICAgIHRoaXMubGluZUNhcC5jb3B5KG90aGVyLmxpbmVDYXApO1xyXG4gICAgICAgIHRoaXMubGluZUpvaW4uY29weShvdGhlci5saW5lSm9pbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyU3Ryb2tlRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkLmNvcHlJZlVubG9ja2VkKG90aGVyLmlzRW5hYmxlZCk7XHJcbiAgICAgICAgdGhpcy5jb2xvci5jb3B5SWZVbmxvY2tlZChvdGhlci5jb2xvcik7XHJcbiAgICAgICAgdGhpcy53aWR0aC5jb3B5SWZVbmxvY2tlZChvdGhlci53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5LmNvcHlJZlVubG9ja2VkKG90aGVyLm9wYWNpdHkpO1xyXG4gICAgICAgIHRoaXMubGluZUNhcC5jb3B5SWZVbmxvY2tlZChvdGhlci5saW5lQ2FwKTtcclxuICAgICAgICB0aGlzLmxpbmVKb2luLmNvcHlJZlVubG9ja2VkKG90aGVyLmxpbmVKb2luKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRvQ29udGV4dChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb25zdCBhbHBoYSA9ICh0aGlzLm9wYWNpdHkuZ2V0KCkgKiBjb2xvci5nZXRBKCkpIC8gMjU1LjA7XHJcbiAgICAgICAgY29uc3QgdGhlbWVNb2RlSW5kZXggPSB0aGlzLnNjZW5lLmdldFRoZW1lTW9kZUluZGV4KCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtjb2xvci5nZXRSKHRoZW1lTW9kZUluZGV4KX0sICR7Y29sb3IuZ2V0Ryh0aGVtZU1vZGVJbmRleCl9LCAke2NvbG9yLmdldEIodGhlbWVNb2RlSW5kZXgpfSwgJHthbHBoYX0pYDtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy53aWR0aC5nZXQodGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSB0aGlzLmxpbmVDYXAuZ2V0KCk7XHJcbiAgICAgICAgY3R4LmxpbmVKb2luID0gdGhpcy5saW5lSm9pbi5nZXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRmlsbERhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzRW5hYmxlZDogQzJCb29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbG9yOiBDMkNvbG9yO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNjZW5lOiBDMkJhc2VTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBuZXcgQzJCb29sZWFuKHNjZW5lLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IEMyQ29sb3Ioc2NlbmUsIDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJGaWxsRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sb3IuY29weShvdGhlci5jb2xvcik7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5LmNvcHkob3RoZXIub3BhY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyRmlsbERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbG9yLmNvcHlJZlVubG9ja2VkKG90aGVyLmNvbG9yKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkuY29weUlmVW5sb2NrZWQob3RoZXIub3BhY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUb0NvbnRleHQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSAodGhpcy5vcGFjaXR5LmdldCgpICogY29sb3IuZ2V0QSgpKSAvIDI1NS4wO1xyXG4gICAgICAgIGNvbnN0IHRoZW1lTW9kZUluZGV4ID0gdGhpcy5zY2VuZS5nZXRUaGVtZU1vZGVJbmRleCgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yLmdldFIodGhlbWVNb2RlSW5kZXgpfSwgJHtjb2xvci5nZXRHKHRoZW1lTW9kZUluZGV4KX0sICR7Y29sb3IuZ2V0Qih0aGVtZU1vZGVJbmRleCl9LCAke2FscGhhfSlgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJGb250RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2VpZ2h0OiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBmYW1pbHk6IEMyU3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0eWxlOiBDMkVudW08QzJGb250U3R5bGU+O1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNjZW5lOiBDMkJhc2VTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAxNiwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCA0MDApO1xyXG4gICAgICAgIHRoaXMuZmFtaWx5ID0gbmV3IEMyU3RyaW5nKHNjZW5lLCAnc2Fucy1zZXJpZicpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBuZXcgQzJFbnVtPEMyRm9udFN0eWxlPihzY2VuZSwgJ25vcm1hbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyRm9udERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNpemUuY29weShvdGhlci5zaXplKTtcclxuICAgICAgICB0aGlzLndlaWdodC5jb3B5KG90aGVyLndlaWdodCk7XHJcbiAgICAgICAgdGhpcy5mYW1pbHkuY29weShvdGhlci5mYW1pbHkpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY29weShvdGhlci5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyRm9udERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNpemUuY29weUlmVW5sb2NrZWQob3RoZXIuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQuY29weUlmVW5sb2NrZWQob3RoZXIud2VpZ2h0KTtcclxuICAgICAgICB0aGlzLmZhbWlseS5jb3B5SWZVbmxvY2tlZChvdGhlci5mYW1pbHkpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuY29weUlmVW5sb2NrZWQob3RoZXIuc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VG9Db250ZXh0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuc3R5bGUuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgd2VpZ2h0ID0gdGhpcy53ZWlnaHQuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZS5nZXQodmlld1NwYWNlKTtcclxuICAgICAgICBjb25zdCBmYW1pbHkgPSB0aGlzLmZhbWlseS5nZXQoKTtcclxuICAgICAgICBjdHguZm9udCA9IGAke3N0eWxlfSAke3dlaWdodH0gJHtzaXplfXB4ICR7ZmFtaWx5fWA7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uLy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyVmVjMiB9IGZyb20gJy4uLy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlRpcGFibGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvczItZ2xvYmFscyc7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NEYXRhLCB0eXBlIEMyRWxlbWVudERhdGEgfSBmcm9tICcuL2MyLWVsZW1lbnQtZGF0YSc7XHJcblxyXG5leHBvcnQgdHlwZSBDMkJhc2VFbGVtZW50ID0gQzJFbGVtZW50PEMyRWxlbWVudERhdGE+O1xyXG5leHBvcnQgdHlwZSBDMkJhc2VHcmFwaGljcyA9IEMyR3JhcGhpY3NFbGVtZW50PEMyR3JhcGhpY3NEYXRhPjtcclxuZXhwb3J0IHR5cGUgQzJCYXNlVGlwYWJsZSA9IEMyRWxlbWVudDxDMkVsZW1lbnREYXRhPiAmIEMyVGlwYWJsZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJIYXNFeHRlbnRzIHtcclxuICAgIGdldEV4dGVudHNJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJIYXNQb3NpdGlvbiB7XHJcbiAgICBnZXRQb3NpdGlvbkludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkhhc0JvdW5kcyBleHRlbmRzIEMySGFzUG9zaXRpb24sIEMySGFzRXh0ZW50cyB7XHJcbiAgICBnZXRDZW50ZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQ7XHJcbiAgICBnZXRSZWN0UG9pbnRJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSwgYW5jaG9yWDogbnVtYmVyLCBhbmNob3JZOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMySGFzUGF0aCB7XHJcbiAgICBnZXRQYXRoKCk6IFBhdGgyRDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEMyRWxlbWVudDxEYXRhIGV4dGVuZHMgQzJFbGVtZW50RGF0YT4ge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGE6IERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBzY2VuZTogQzJCYXNlU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCBkYXRhOiBEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pZCA9IHNjZW5lLmdldE5leHRFbGVtZW50SWQoKTtcclxuICAgICAgICBzY2VuZS5hdHRhY2hFbGVtZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHVwZGF0ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJHcmFwaGljc0VsZW1lbnQ8RGF0YSBleHRlbmRzIEMyR3JhcGhpY3NEYXRhPiBleHRlbmRzIEMyRWxlbWVudDxEYXRhPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIGRhdGE6IERhdGEpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkO1xyXG59XHJcbiIsICJpbXBvcnQgeyBDMk1hdDJ4MyB9IGZyb20gJy4vYzItbWF0MngzJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi9jMi12ZWMyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJQb29sTGlrZTxUPiB7XHJcbiAgICBnZXQoKTogVDtcclxuICAgIHJlbGVhc2UoZWxlbWVudDogVCk6IHZvaWQ7XHJcbiAgICBnZXRDYXBhY2l0eSgpOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJEZWJ1Z1Bvb2xMaWtlPFQ+IGV4dGVuZHMgQzJQb29sTGlrZTxUPiB7XHJcbiAgICBnZXRCb3Jyb3dlZENvdW50KCk6IG51bWJlcjtcclxuICAgIGFzc2VydE5vTGVha3MobWVzc2FnZT86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkZhc3RQb29sPFQ+IGltcGxlbWVudHMgQzJQb29sTGlrZTxUPiB7XHJcbiAgICBwcml2YXRlIGF2YWlsYWJsZUVsZW1lbnRzOiBUW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZTogKCkgPT4gVCkge31cclxuXHJcbiAgICBnZXQoKTogVCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXZhaWxhYmxlRWxlbWVudHMucG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50IDogdGhpcy5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FwYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdmFpbGFibGVFbGVtZW50cy5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkRlYnVnUG9vbDxUPiBpbXBsZW1lbnRzIEMyRGVidWdQb29sTGlrZTxUPiB7XHJcbiAgICBwcml2YXRlIGF2YWlsYWJsZUVsZW1lbnRzOiBUW10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9ycm93ZWRFbGVtZW50czogU2V0PFQ+ID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlOiAoKSA9PiBUKSB7fVxyXG5cclxuICAgIGdldCgpOiBUIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdmFpbGFibGVFbGVtZW50cy5wb3AoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQgPyBlbGVtZW50IDogdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmJvcnJvd2VkRWxlbWVudHMuYWRkKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShlbGVtZW50OiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJvcnJvd2VkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb29sIHJlbGVhc2U6IGVsZW1lbnQgaXMgbm90IGN1cnJlbnRseSBib3Jyb3dlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ib3Jyb3dlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9ycm93ZWRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvcnJvd2VkRWxlbWVudHMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBhc3NlcnROb0xlYWtzKG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBib3Jyb3dlZENvdW50ID0gdGhpcy5ib3Jyb3dlZEVsZW1lbnRzLnNpemU7XHJcbiAgICAgICAgaWYgKGJvcnJvd2VkQ291bnQgPT09IDApIHJldHVybjtcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0gbWVzc2FnZSA/IGAgKCR7bWVzc2FnZX0pYCA6ICcnO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUG9vbCBsZWFrIGRldGVjdGVkJHtkZXRhaWxzfTogJHtib3Jyb3dlZENvdW50fSBib3Jyb3dlZCBlbGVtZW50KHMpIHdlcmUgbm90IHJlbGVhc2VkYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEJhY2t3YXJkLWNvbXBhdGlibGUgYWxpYXMgZm9yIHRoZSBmYXN0IGltcGxlbWVudGF0aW9uLlxyXG5leHBvcnQgY2xhc3MgQzJQb29sPFQ+IGV4dGVuZHMgQzJGYXN0UG9vbDxUPiB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVmVjMlBvb2wgZXh0ZW5kcyBDMkZhc3RQb29sPEMyVmVjMj4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKCkgPT4gbmV3IEMyVmVjMigpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRGVidWdWZWMyUG9vbCBleHRlbmRzIEMyRGVidWdQb29sPEMyVmVjMj4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKCkgPT4gbmV3IEMyVmVjMigpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyTWF0MngzUG9vbCBleHRlbmRzIEMyRmFzdFBvb2w8QzJNYXQyeDM+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCgpID0+IG5ldyBDMk1hdDJ4MygpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRGVidWdNYXQyeDNQb29sIGV4dGVuZHMgQzJEZWJ1Z1Bvb2w8QzJNYXQyeDM+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCgpID0+IG5ldyBDMk1hdDJ4MygpKTtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGNsYXNzIEMyVGltZXIge1xuICAgIHByb3RlY3RlZCBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgZGVsdGE6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHVuc2NhbGVkRGVsdGE6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBtYXhEZWx0YTogbnVtYmVyID0gMjAwO1xuICAgIHByb3RlY3RlZCBlbGFwc2VkOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCB1bnNjYWxlZEVsYXBzZWQ6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCh0aW1lc3RhbXA6IG51bWJlcik6IHRoaXMge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVzdGFtcDogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGltZXN0YW1wIC0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgdGhpcy51bnNjYWxlZERlbHRhID0gTWF0aC5taW4oZGVsdGEsIHRoaXMubWF4RGVsdGEpO1xuICAgICAgICB0aGlzLmRlbHRhID0gdGhpcy51bnNjYWxlZERlbHRhICogdGhpcy5zY2FsZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy51bnNjYWxlZEVsYXBzZWQgKz0gdGhpcy51bnNjYWxlZERlbHRhO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gdGhpcy5kZWx0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0TWF4aW11bURlbHRhVGltZShtYXhEZWx0YTogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMubWF4RGVsdGEgPSBtYXhEZWx0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0VGltZVNjYWxlKHNjYWxlOiBudW1iZXIpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRUaW1lU2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGU7XG4gICAgfVxuXG4gICAgZ2V0RGVsdGEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsdGE7XG4gICAgfVxuXG4gICAgZ2V0VW5zY2FsZWREZWx0YSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51bnNjYWxlZERlbHRhO1xuICAgIH1cblxuICAgIGdldEVsYXBzZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgICB9XG5cbiAgICBnZXRVbnNjYWxlZEVsYXBzZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zY2FsZWRFbGFwc2VkO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDMlRpbWVyIH0gZnJvbSAnLi9jMi10aW1lcic7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlBsYXlhYmxlIH0gZnJvbSAnLi9jMi1wbGF5YWJsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJBbmltYXRpb25NYW5hZ2VyIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3RhbmNlOiBDMkFuaW1hdGlvbk1hbmFnZXIgfCBudWxsID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCB0aW1lcjogQzJUaW1lcjtcclxuICAgIHByb3RlY3RlZCBhY3RpdmVBbmltYXRpb25zOiBTZXQ8QzJQbGF5YWJsZT4gPSBuZXcgU2V0KCk7XHJcbiAgICBwcm90ZWN0ZWQgc2NlbmVUb1VwZGF0ZTogU2V0PEMyQmFzZVNjZW5lPiA9IG5ldyBTZXQoKTtcclxuICAgIHByb3RlY3RlZCBpc0F3YWtlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IEMyVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQzJBbmltYXRpb25NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIUMyQW5pbWF0aW9uTWFuYWdlci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbU1hbmFnZXIgPSBuZXcgQzJBbmltYXRpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltTWFuYWdlci5vbkZpcnN0RnJhbWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbU1hbmFnZXIub25VcGRhdGUpO1xyXG4gICAgICAgICAgICBDMkFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlID0gYW5pbU1hbmFnZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gQzJBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbjogQzJQbGF5YWJsZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQzJBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlQW5pbWF0aW9ucy5hZGQoYW5pbWF0aW9uKTtcclxuICAgICAgICBpbnN0YW5jZS53YWtlVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVtb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbjogQzJQbGF5YWJsZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQzJBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlQW5pbWF0aW9ucy5kZWxldGUoYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVxdWVzdFVwZGF0ZShzY2VuZTogQzJCYXNlU2NlbmUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IEMyQW5pbWF0aW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGluc3RhbmNlLnNjZW5lVG9VcGRhdGUuYWRkKHNjZW5lKTtcclxuICAgICAgICBpbnN0YW5jZS53YWtlVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBbmltYXRpb24oYW5pbWF0aW9uOiBDMlBsYXlhYmxlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVBbmltYXRpb25zLmFkZChhbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMud2FrZVVwKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbjogQzJQbGF5YWJsZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5kZWxldGUoYW5pbWF0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB3YWtlVXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBd2FrZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNBd2FrZSA9IHRydWU7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25VcGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaXJzdEZyYW1lID0gKHRpbWVzdGFtcDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCh0aW1lc3RhbXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG9uVXBkYXRlID0gKHRpbWVzdGFtcDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lci51cGRhdGUodGltZXN0YW1wKTtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMudGltZXIuZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhbmltIG9mIHRoaXMuYWN0aXZlQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBhbmltLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHNjZW5lIG9mIHRoaXMuc2NlbmVUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICBzY2VuZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lVG9VcGRhdGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQW5pbWF0aW9ucy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblVwZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBd2FrZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F3YWtlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQzJDYW1lcmEgfSBmcm9tICcuLi9tYXRoL2MyLWNhbWVyYSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJNYXQyeDMgfSBmcm9tICcuLi9tYXRoL2MyLW1hdDJ4Myc7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NFbGVtZW50LCB0eXBlIEMyQmFzZUVsZW1lbnQsIHR5cGUgQzJCYXNlR3JhcGhpY3MgfSBmcm9tICcuLi9lbGVtZW50L2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyTGF5ZXIgfSBmcm9tICcuLi9zaGFyZWQvYzItbGF5ZXInO1xyXG5pbXBvcnQgdHlwZSB7IEMyUG9pbnQgfSBmcm9tICcuLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMkRlYnVnVmVjMlBvb2wsIEMyVmVjMlBvb2wsIHR5cGUgQzJEZWJ1Z1Bvb2xMaWtlLCB0eXBlIEMyUG9vbExpa2UgfSBmcm9tICcuLi9tYXRoL2MyLXBvb2wnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQ29sb3JUaGVtZU1vZGUgfSBmcm9tICcuLi9zaGFyZWQvYzItY29sb3ItdGhlbWUnO1xyXG5pbXBvcnQgeyBDMkFuaW1hdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9hbmltYXRpb24vYzItYW5pbWF0aW9uLW1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMlNjZW5lT3B0aW9ucyB7XHJcbiAgICB2ZWNQb29sTW9kZT86ICdmYXN0JyB8ICdkZWJ1Zyc7XHJcbiAgICB0aGVtZU1vZGU/OiBDMkNvbG9yVGhlbWVNb2RlO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJCYXNlU2NlbmUge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRTcGFjZTogQzJTcGFjZSA9IG5ldyBDMlNwYWNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmlld1NwYWNlOiBDMlNwYWNlID0gbmV3IEMyU3BhY2UoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2aWV3cG9ydFNpemU6IEMyVmVjMiA9IG5ldyBDMlZlYzIoNjQwLjAsIDM2MC4wKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzcGFjZXM6IEMyU3BhY2VbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbWVyYTogQzJDYW1lcmE7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmVjUG9vbDogQzJWZWMyW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB1c2VkVmVjczogU2V0PEMyVmVjMj4gPSBuZXcgU2V0KCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWF0UG9vbDogQzJNYXQyeDNbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVsZW1lbnRzOiBDMkJhc2VFbGVtZW50W10gPSBbXTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSByZW5kZXJDb21tYW5kczogQzJCYXNlR3JhcGhpY3NbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFZlYzJQb29sOiBDMlBvb2xMaWtlPEMyVmVjMj47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlYnVnVmVjMlBvb2w6IEMyRGVidWdQb29sTGlrZTxDMlZlYzI+IHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdHJhY2VQb29sQWxsb2NhdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbmV4dEVsZW1lbnRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbmV4dFVwZGF0ZUlkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aGVtZU1vZGVJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG9wdGlvbnM6IEMyU2NlbmVPcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQzJDYW1lcmEodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zcGFjZXMucHVzaCh0aGlzLndvcmxkU3BhY2UsIHRoaXMudmlld1NwYWNlKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudmVjUG9vbE1vZGUgPT09ICdkZWJ1ZycpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVidWdQb29sID0gbmV3IEMyRGVidWdWZWMyUG9vbCgpO1xyXG4gICAgICAgICAgICB0aGlzLlZlYzJQb29sID0gZGVidWdQb29sO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnVmVjMlBvb2wgPSBkZWJ1Z1Bvb2w7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5WZWMyUG9vbCA9IG5ldyBDMlZlYzJQb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdWZWMyUG9vbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy50aGVtZU1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aGVtZU1vZGVJbmRleCA9IG9wdGlvbnMudGhlbWVNb2RlID09PSAnbGlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2ZWNQb29sQ2FwYWNpdHkgPSAzMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlY1Bvb2xDYXBhY2l0eTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVjUG9vbC5wdXNoKG5ldyBDMlZlYzIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEVsZW1lbnQoZWxlbWVudDogQzJCYXNlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEMyR3JhcGhpY3NFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tbWFuZHMucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoRWxlbWVudChlbGVtZW50OiBDMkJhc2VFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQzJHcmFwaGljc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVySW5kZXggPSB0aGlzLnJlbmRlckNvbW1hbmRzLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tbWFuZHMuc3BsaWNlKHJlbmRlckluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlY1Bvb2woKTogQzJQb29sTGlrZTxDMlZlYzI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WZWMyUG9vbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaGVtZU1vZGUoKTogQzJDb2xvclRoZW1lTW9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbWVNb2RlSW5kZXggPT09IDAgPyAnbGlnaHQnIDogJ2RhcmsnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRoZW1lTW9kZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbWVNb2RlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgYWNxdWlyZVZlYzIoKTogQzJWZWMyIHtcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy52ZWNQb29sLnBvcCgpO1xyXG4gICAgICAgIHZlYyA9IHZlYyA/IHZlYyA6IG5ldyBDMlZlYzIoKTtcclxuICAgICAgICByZXR1cm4gdmVjO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2VWZWMyKHZlYzogQzJWZWMyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZWNQb29sLnB1c2godmVjKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZWNQb29sU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlY1Bvb2wubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZWRWZWNDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZWRWZWNzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgYWNxdWlyZU1hdDJ4MygpOiBDMk1hdDJ4MyB7XHJcbiAgICAgICAgbGV0IG1hdCA9IHRoaXMubWF0UG9vbC5wb3AoKTtcclxuICAgICAgICBtYXQgPSBtYXQgPyBtYXQgOiBuZXcgQzJNYXQyeDMoKTtcclxuICAgICAgICByZXR1cm4gbWF0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2VNYXQyeDMobWF0OiBDMk1hdDJ4Myk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWF0UG9vbC5wdXNoKG1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF0UG9vbFNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRQb29sLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3cG9ydFNpemVJbnRvKGRzdDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LnNldCh0aGlzLnZpZXdwb3J0U2l6ZS54LCB0aGlzLnZpZXdwb3J0U2l6ZS55KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3cG9ydFNpemUoKTogQzJWZWMyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemUuY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3cG9ydFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnRTaXplLng7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld3BvcnRIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3cG9ydEFzcGVjdFJhdGlvKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnRTaXplLnggLyB0aGlzLnZpZXdwb3J0U2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRFbGVtZW50SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0RWxlbWVudElkKys7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dFVwZGF0ZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV4dFVwZGF0ZUlkKys7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FtZXJhKCk6IEMyQ2FtZXJhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW1lcmE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRTcGFjZSgpOiBDMlNwYWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZFNwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdTcGFjZSgpOiBDMlNwYWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3U3BhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld3BvcnRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydFNpemUuc2V0KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXdwb3J0U2l6ZVYoc2l6ZTogQzJWZWMyKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Vmlld3BvcnRTaXplKHNpemUueCwgc2l6ZS55KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaGVtZU1vZGUobW9kZTogQzJDb2xvclRoZW1lTW9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGhlbWVNb2RlSW5kZXggPSBtb2RlID09PSAnbGlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgQzJBbmltYXRpb25NYW5hZ2VyLnJlcXVlc3RVcGRhdGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU3BhY2UocGFyZW50OiBDMlNwYWNlID0gdGhpcy53b3JsZFNwYWNlKTogQzJTcGFjZSB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBuZXcgQzJTcGFjZShwYXJlbnQpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VzLnB1c2goc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiBzcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hTcGFjZShzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zcGFjZXMuaW5kZXhPZihzcGFjZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzcGFjZSBvZiB0aGlzLnNwYWNlcykge1xyXG4gICAgICAgICAgICBzcGFjZS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEMyTGF5ZXIuY29tcGFyZShhLmRhdGEudXBkYXRlLmxheWVyLCBiLmRhdGEudXBkYXRlLmxheWVyKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5lbGVtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhLmlzRW5hYmxlZC5nZXQoKSAmJiAhZWxlbWVudC5kYXRhLnVwZGF0ZS5pc01hbmFnZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnVmVjMlBvb2wpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z1ZlYzJQb29sLmFzc2VydE5vTGVha3MoJ3VwZGF0ZSgpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMuY2FtZXJhLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbW1hbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBDMkxheWVyLmNvbXBhcmUoYS5kYXRhLnJlbmRlci5sYXllciwgYi5kYXRhLnJlbmRlci5sYXllcik7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gMCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLnJlbmRlckNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGEuaXNFbmFibGVkLmdldCgpICYmIGVsZW1lbnQuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbmRlcih0aGlzLmN0eCwgdGhpcy52aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1ZlYzJQb29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdWZWMyUG9vbC5hc3NlcnROb0xlYWtzKCdyZW5kZXIoKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0Q2xpZW50UG9pbnRJbnRvKGRzdDogQzJQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5jYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc1ggPSAoeCAtIHJlY3QubGVmdCkgKiBzY2FsZVg7XHJcbiAgICAgICAgY29uc3QgY2FudmFzWSA9ICh5IC0gcmVjdC50b3ApICogc2NhbGVZO1xyXG5cclxuICAgICAgICBkc3Quc2V0VmFsdWVGcm9tU3BhY2UoY2FudmFzWCwgY2FudmFzWSwgdGhpcy5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJQb2ludCBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyUG9pbnQ+LCBDMkhhc0NvcHk8QzJQb2ludD4sIEMySGFzTGVycDxDMlBvaW50PiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ3Bvc2l0aW9uJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogQzJWZWMyO1xyXG4gICAgcHVibGljIHNwYWNlOiBDMlNwYWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IEMyVmVjMih4LCB5KTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMlBvaW50KHRoaXMuc2NlbmUsIHRoaXMudmFsdWUueCwgdGhpcy52YWx1ZS55LCB0aGlzLnNwYWNlLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyUG9pbnQpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyUG9pbnQpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgb3RoZXIudmFsdWUpICYmIHRoaXMuc3BhY2UgPT09IG90aGVyLnNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkob3RoZXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBvdGhlci5zcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJQb2ludCwgc3RhdGUxOiBDMlBvaW50LCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHN0YXRlMS5zcGFjZTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUwID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHN0YXRlMC5nZXRJbnRvKHZhbHVlMCwgc3BhY2UpO1xyXG4gICAgICAgIHN0YXRlMS5nZXRJbnRvKHZhbHVlMSwgc3BhY2UpO1xyXG4gICAgICAgIEMyVmVjMi5sZXJwVih0aGlzLnZhbHVlLCB2YWx1ZTAsIHZhbHVlMSwgdCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKHN0YXRlMDogQzJQb2ludCwgc3RhdGUxOiBDMlBvaW50LCB0OiBudW1iZXIpOiBDMlBvaW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyUG9pbnQoc3RhdGUxLnNjZW5lLCAwLCAwLCBzdGF0ZTEuc3BhY2UpLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS54ID09PSB4ICYmIHRoaXMudmFsdWUueSA9PT0geSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKHNwYWNlKSB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vihwb2ludDogQzJWZWMyLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgcG9pbnQpICYmIHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkocG9pbnQpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzKHRoaXMudmFsdWUueCwgdGhpcy52YWx1ZS55LCB4LCB5KSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50byh0aGlzLnZhbHVlLCB4LCB5LCB0aGlzLnNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUZyb21TcGFjZVYocG9pbnQ6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZUZyb21TcGFjZShwb2ludC54LCBwb2ludC55LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNwYWNlLmNvbnZlcnRQb2ludEludG9WKGRzdCwgdGhpcy52YWx1ZSwgc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNwYWNlKHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnNwYWNlLmNvbnZlcnRQb2ludEludG9WKHRoaXMudmFsdWUsIHRoaXMudmFsdWUsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgdHlwZSB7IEMyTGVuZ3RoIH0gZnJvbSAnLi9jMi1sZW5ndGgnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJFeHRlbnRzIGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJFeHRlbnRzPiwgQzJIYXNDb3B5PEMyRXh0ZW50cz4sIEMySGFzTGVycDxDMkV4dGVudHM+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAnZXh0ZW50cycgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IEMyVmVjMjtcclxuICAgIHB1YmxpYyBzcGFjZTogQzJTcGFjZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDMlZlYzIoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyRXh0ZW50cyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkV4dGVudHModGhpcy5zY2VuZSwgdGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnksIHRoaXMuc3BhY2UsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJFeHRlbnRzKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkV4dGVudHMpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgb3RoZXIudmFsdWUpICYmIHRoaXMuc3BhY2UgPT09IG90aGVyLnNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkob3RoZXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBvdGhlci5zcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJFeHRlbnRzLCBzdGF0ZTE6IEMyRXh0ZW50cywgdDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBzdGF0ZTEuc3BhY2U7XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUxID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBzdGF0ZTAuZ2V0SW50byh2YWx1ZTAsIHNwYWNlKTtcclxuICAgICAgICBzdGF0ZTEuZ2V0SW50byh2YWx1ZTEsIHNwYWNlKTtcclxuICAgICAgICBDMlZlYzIubGVycFYodGhpcy52YWx1ZSwgdmFsdWUwLCB2YWx1ZTEsIHQpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UodmFsdWUwKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UodmFsdWUxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChzdGF0ZTA6IEMyRXh0ZW50cywgc3RhdGUxOiBDMkV4dGVudHMsIHQ6IG51bWJlcik6IEMyRXh0ZW50cyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkV4dGVudHMoc3RhdGUxLnNjZW5lLCAwLCAwLCBzdGF0ZTEuc3BhY2UpLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U/OiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUueCA9PT0geCAmJiB0aGlzLnZhbHVlLnkgPT09IHkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFYoZXh0ZW50czogQzJWZWMyLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgZXh0ZW50cykgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShleHRlbnRzKTtcclxuICAgICAgICBpZiAoc3BhY2UpIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUZyb21TcGFjZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFscyh0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSwgeCwgeSkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRFeHRlbnRzSW50byh0aGlzLnZhbHVlLCB4LCB5LCB0aGlzLnNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUZyb21TcGFjZVYoZXh0ZW50czogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlRnJvbVNwYWNlKGV4dGVudHMueCwgZXh0ZW50cy55LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNwYWNlLmNvbnZlcnRFeHRlbnRzSW50b1YoZHN0LCB0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWF4TGVuZ3RoSW50byhkc3Q6IEMyTGVuZ3RoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gTWF0aC5tYXgodGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnkpO1xyXG4gICAgICAgIGRzdC5zZXRWYWx1ZUZyb21TcGFjZShtYXhMZW5ndGgsIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1pbkxlbmd0aEludG8oZHN0OiBDMkxlbmd0aCk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IE1hdGgubWluKHRoaXMudmFsdWUueCwgdGhpcy52YWx1ZS55KTtcclxuICAgICAgICBkc3Quc2V0VmFsdWVGcm9tU3BhY2UobWluTGVuZ3RoLCB0aGlzLnNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTcGFjZShzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy5zcGFjZS5jb252ZXJ0RXh0ZW50c0ludG9WKHRoaXMudmFsdWUsIHRoaXMudmFsdWUsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5IH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyU3BhY2VSZWYgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMlNwYWNlUmVmPiwgQzJIYXNDb3B5PEMyU3BhY2VSZWY+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAnc3BhY2UtcmVmJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogQzJTcGFjZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBDMlNwYWNlLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJTcGFjZVJlZiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMlNwYWNlUmVmKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJTcGFjZVJlZik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJTcGFjZVJlZik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBDMlNwYWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJOdW1iZXIgfSBmcm9tICcuLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHsgQzJQb2ludCB9IGZyb20gJy4uL3NoYXJlZC9jMi1wb2ludCc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuaW1wb3J0IHsgQzJTcGFjZVJlZiB9IGZyb20gJy4uL3NoYXJlZC9jMi1zcGFjZS1yZWYnO1xyXG5pbXBvcnQgeyBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyR3JpZERhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2VvbWV0cnk6IEMyR3JpZEdlb21ldHJ5RGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEMyR3JpZEdlb21ldHJ5RGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnN0cm9rZS5vcGFjaXR5LnNldCgxKTtcclxuICAgICAgICB0aGlzLnN0cm9rZS53aWR0aC5zZXQoMSwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLmxpbmVDYXAuc2V0KCdidXR0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkdyaWRHZW9tZXRyeURhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNwYWNlOiBDMlNwYWNlUmVmO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGJvdW5kQTogQzJQb2ludDtcclxuICAgIHB1YmxpYyByZWFkb25seSBib3VuZEI6IEMyUG9pbnQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RlcHM6IEMyRXh0ZW50cztcclxuICAgIHB1YmxpYyByZWFkb25seSByZWZlcmVuY2VQb2ludDogQzJQb2ludDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBjb25zdCB3b3JsZFNwYWNlID0gc2NlbmUuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBuZXcgQzJTcGFjZVJlZihzY2VuZSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5ib3VuZEEgPSBuZXcgQzJQb2ludChzY2VuZSwgLTgsIC00LjUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuYm91bmRCID0gbmV3IEMyUG9pbnQoc2NlbmUsICs4LCArNC41LCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMSwgMSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VQb2ludCA9IG5ldyBDMlBvaW50KHNjZW5lLCAwLCAwLCB3b3JsZFNwYWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyR3JpZCBleHRlbmRzIEMyR3JhcGhpY3NFbGVtZW50PEMyR3JpZERhdGE+IHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBuZXcgQzJHcmlkRGF0YShzY2VuZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHt9XHJcblxyXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmdlb21ldHJ5O1xyXG4gICAgICAgIGNvbnN0IGVwc2lsb24gPSAxZS00O1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gZGF0YS5zcGFjZS5nZXQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50QSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRCID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBkYXRhLmJvdW5kQS5nZXRJbnRvKHBvaW50QSwgc3BhY2UpO1xyXG4gICAgICAgIGRhdGEuYm91bmRCLmdldEludG8ocG9pbnRCLCBzcGFjZSk7XHJcbiAgICAgICAgY29uc3QgbG93ZXJYID0gTWF0aC5taW4ocG9pbnRBLngsIHBvaW50Qi54KTtcclxuICAgICAgICBjb25zdCB1cHBlclggPSBNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpO1xyXG4gICAgICAgIGNvbnN0IGxvd2VyWSA9IE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSk7XHJcbiAgICAgICAgY29uc3QgdXBwZXJZID0gTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgZGF0YS5zdGVwcy5nZXRJbnRvKHN0ZXBzLCBzcGFjZSk7XHJcbiAgICAgICAgZGF0YS5yZWZlcmVuY2VQb2ludC5nZXRJbnRvKGFuY2hvciwgc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBYID0gc3RlcHMueCA8PSAwID8gc3RlcHMueCA6IDE7XHJcbiAgICAgICAgY29uc3Qgc3RlcFkgPSBzdGVwcy55IDw9IDAgPyBzdGVwcy55IDogMTtcclxuICAgICAgICBjb25zdCBzdGFydFggPSBhbmNob3IueCAtIE1hdGguZmxvb3IoKGFuY2hvci54IC0gbG93ZXJYICsgZXBzaWxvbikgLyBzdGVwWCkgKiBzdGVwWDtcclxuICAgICAgICBjb25zdCBzdGFydFkgPSBhbmNob3IueSAtIE1hdGguZmxvb3IoKGFuY2hvci55IC0gbG93ZXJZICsgZXBzaWxvbikgLyBzdGVwWSkgKiBzdGVwWTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnN0cm9rZS5hcHBseVRvQ29udGV4dChjdHgpO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8IHVwcGVyWCArIGVwc2lsb247IHggKz0gc3RlcFgpIHtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50byhwb2ludEEsIHgsIGxvd2VyWSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50byhwb2ludEIsIHgsIHVwcGVyWSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcG9pbnRBLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHBvaW50Qi5yb3VuZCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHBvaW50QS54LCBwb2ludEEueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRCLngsIHBvaW50Qi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8IHVwcGVyWSArIGVwc2lsb247IHkgKz0gc3RlcFkpIHtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50byhwb2ludEEsIGxvd2VyWCwgeSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50byhwb2ludEIsIHVwcGVyWCwgeSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcG9pbnRBLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHBvaW50Qi5yb3VuZCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHBvaW50QS54LCBwb2ludEEueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRCLngsIHBvaW50Qi55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2Uoc3RlcHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShhbmNob3IpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb2ludEEpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb2ludEIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMlBvaW50IH0gZnJvbSAnLi4vc2hhcmVkL2MyLXBvaW50JztcclxuaW1wb3J0IHsgQzJMZW5ndGggfSBmcm9tICcuLi9zaGFyZWQvYzItbGVuZ3RoJztcclxuaW1wb3J0IHsgQzJTcGFjZVJlZiB9IGZyb20gJy4uL3NoYXJlZC9jMi1zcGFjZS1yZWYnO1xyXG5pbXBvcnQgeyBDMkdyYXBoaWNzRWxlbWVudCwgdHlwZSBDMkhhc0JvdW5kcyB9IGZyb20gJy4vYmFzZS9jMi1lbGVtZW50JztcclxuaW1wb3J0IHsgQzJGaWxsRGF0YSwgQzJHcmFwaGljc0RhdGEsIEMyU3Ryb2tlRGF0YSB9IGZyb20gJy4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU0RGIH0gZnJvbSAnLi4vbWF0aC9jdXJ2ZS9jMi1zZGYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyUGF0aENpcmNsZURhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BhY2U6IEMyU3BhY2VSZWY7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuICAgIC8vIHB1YmxpYyByZWFkb25seSB0cmFuc2Zvcm06IEMyVHJhbnNmb3JtO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBwb3NpdGlvbjogQzJQb2ludDtcclxuICAgIHB1YmxpYyByZWFkb25seSByYWRpdXM6IEMyTGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICBjb25zdCB3b3JsZFNwYWNlID0gc2NlbmUuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBuZXcgQzJTcGFjZVJlZihzY2VuZSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5maWxsID0gbmV3IEMyRmlsbERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IEMyU3Ryb2tlRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAxLCB3b3JsZFNwYWNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJva2UuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgICAgICB0aGlzLmZpbGwuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyUGF0aENpcmNsZSBleHRlbmRzIEMyR3JhcGhpY3NFbGVtZW50PEMyUGF0aENpcmNsZURhdGE+IGltcGxlbWVudHMgQzJIYXNCb3VuZHMsIEMyU0RGIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sRTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRyb2xORTE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sTkUyOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udHJvbE46IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sTlcxOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udHJvbE5XMjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRyb2xXOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udHJvbFNXMTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRyb2xTVzI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sUzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRyb2xTRTE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sU0UyOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNkZkNlbnRlcjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNkZkV4dGVudHM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCBzZGZSYWRpdXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlBhdGhDaXJjbGVEYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFkaXVzKHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnJhZGl1cy5nZXQoc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmRhdGEucmFkaXVzLmdldChzcGFjZSk7XHJcbiAgICAgICAgZHN0LnNldChyYWRpdXMsIHJhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWN0UG9pbnRJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSwgYW5jaG9yWDogbnVtYmVyLCBhbmNob3JZOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmRhdGEucmFkaXVzLmdldChzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc2l0aW9uLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgZHN0LmFkZChyYWRpdXMgKiBhbmNob3JYLCByYWRpdXMgKiBhbmNob3JZKTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVNERih4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSBNYXRoLmFicyh4IC0gdGhpcy5zZGZDZW50ZXIueCk7XHJcbiAgICAgICAgY29uc3QgZHkgPSBNYXRoLmFicyh5IC0gdGhpcy5zZGZDZW50ZXIueSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgLSB0aGlzLnNkZlJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVNERlYocDogQzJWZWMyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVNERihwLngsIHAueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUdlb21ldHJ5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGNlbnRlciwgc3BhY2UpO1xyXG5cclxuICAgICAgICBjb25zdCByID0gdGhpcy5kYXRhLnJhZGl1cy5nZXQoc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGNYID0gY2VudGVyLng7XHJcbiAgICAgICAgY29uc3QgY1kgPSBjZW50ZXIueTtcclxuICAgICAgICBjb25zdCBrID0gciAqIDAuNTUyMjg0NzQ5ODMxOyAvLyA0LzMqdGFuKHBpLzgpXHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbEUuc2V0KGNYICsgciwgY1kpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFcuc2V0KGNYIC0gciwgY1kpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFMuc2V0KGNYLCBjWSAtIHIpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbE4uc2V0KGNYLCBjWSArIHIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xORTEuY29weSh0aGlzLmNvbnRyb2xFKS5hZGQoMCwgK2spO1xyXG4gICAgICAgIHRoaXMuY29udHJvbE5FMi5jb3B5KHRoaXMuY29udHJvbE4pLmFkZCgraywgMCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sTlcxLmNvcHkodGhpcy5jb250cm9sTikuYWRkKC1rLCAwKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xOVzIuY29weSh0aGlzLmNvbnRyb2xXKS5hZGQoMCwgK2spO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFNXMS5jb3B5KHRoaXMuY29udHJvbFcpLmFkZCgwLCAtayk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sU1cyLmNvcHkodGhpcy5jb250cm9sUykuYWRkKC1rLCAwKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xTRTEuY29weSh0aGlzLmNvbnRyb2xTKS5hZGQoK2ssIDApO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFNFMi5jb3B5KHRoaXMuY29udHJvbEUpLmFkZCgwLCAtayk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGNlbnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVNERigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZGF0YS5zcGFjZS5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byh0aGlzLnNkZkNlbnRlciwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc2RmUmFkaXVzID0gdGhpcy5kYXRhLnJhZGl1cy5nZXQoc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTREYoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdlb21ldHJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwMSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZGF0YS5zcGFjZS5nZXQoKTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvbnRyb2xFLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHAxLnJvdW5kKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcclxuXHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDEsIHRoaXMuY29udHJvbE5FMSwgdmlld1NwYWNlKTtcclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMiwgdGhpcy5jb250cm9sTkUyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCB0aGlzLmNvbnRyb2xOLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHAxLnJvdW5kKCk7XHJcbiAgICAgICAgcDIucm91bmQoKTtcclxuICAgICAgICBwMy5yb3VuZCgpO1xyXG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xyXG5cclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMSwgdGhpcy5jb250cm9sTlcxLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAyLCB0aGlzLmNvbnRyb2xOVzIsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDMsIHRoaXMuY29udHJvbFcsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgcDEucm91bmQoKTtcclxuICAgICAgICBwMi5yb3VuZCgpO1xyXG4gICAgICAgIHAzLnJvdW5kKCk7XHJcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8ocDEueCwgcDEueSwgcDIueCwgcDIueSwgcDMueCwgcDMueSk7XHJcblxyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvbnRyb2xTVzEsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHRoaXMuY29udHJvbFNXMiwgdmlld1NwYWNlKTtcclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMywgdGhpcy5jb250cm9sUywgdmlld1NwYWNlKTtcclxuICAgICAgICBwMS5yb3VuZCgpO1xyXG4gICAgICAgIHAyLnJvdW5kKCk7XHJcbiAgICAgICAgcDMucm91bmQoKTtcclxuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcclxuXHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDEsIHRoaXMuY29udHJvbFNFMSwgdmlld1NwYWNlKTtcclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMiwgdGhpcy5jb250cm9sU0UyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCB0aGlzLmNvbnRyb2xFLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHAxLnJvdW5kKCk7XHJcbiAgICAgICAgcDIucm91bmQoKTtcclxuICAgICAgICBwMy5yb3VuZCgpO1xyXG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5maWxsLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsbC5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0cm9rZS5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0cm9rZS5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDEpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHksIEMySGFzTGVycCB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJQb2ludCB9IGZyb20gJy4vYzItcG9pbnQnO1xyXG5pbXBvcnQgdHlwZSB7IEMyRXh0ZW50cyB9IGZyb20gJy4vYzItZXh0ZW50cyc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbi8qKlxyXG4gKiBEXHUwMEU5Y3JpdCBjb21tZW50IHVuIHJlY3RhbmdsZSBlc3QgYW5jclx1MDBFOSBcdTAwRTAgc2EgcG9zaXRpb24gZGUgclx1MDBFOWZcdTAwRTlyZW5jZS5cclxuICogTGVzIGNvb3Jkb25uXHUwMEU5ZXMgKHgsIHkpIGluZGlxdWVudCBsXHUyMDE5YW5jcmFnZSByZWxhdGlmIDpcclxuICogIC0gKC0xLCAtMSkgLT4gY29pbiBpbmZcdTAwRTlyaWV1ciBnYXVjaGVcclxuICogIC0gKCswLCArMCkgLT4gY2VudHJlXHJcbiAqICAtICgrMSwgKzEpIC0+IGNvaW4gc3VwXHUwMEU5cmlldXIgZHJvaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDMkFuY2hvciBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyQW5jaG9yPiwgQzJIYXNDb3B5PEMyQW5jaG9yPiwgQzJIYXNMZXJwPEMyQW5jaG9yPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ2FuY2hvcicgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IEMyVmVjMjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IEMyVmVjMih4LCB5KTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkFuY2hvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkFuY2hvcih0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkFuY2hvcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJBbmNob3IpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgb3RoZXIudmFsdWUpKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkob3RoZXIudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMkFuY2hvciwgc3RhdGUxOiBDMkFuY2hvciwgdDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgQzJWZWMyLmxlcnBWKHRoaXMudmFsdWUsIHN0YXRlMC52YWx1ZSwgc3RhdGUxLnZhbHVlLCB0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChzdGF0ZTA6IEMyQW5jaG9yLCBzdGF0ZTE6IEMyQW5jaG9yLCB0OiBudW1iZXIpOiBDMkFuY2hvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkFuY2hvcihzdGF0ZTEuc2NlbmUsIDAsIDApLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUueCA9PT0geCAmJiB0aGlzLnZhbHVlLnkgPT09IHkpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KHgsIHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFYob2Zmc2V0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgb2Zmc2V0KSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5jb3B5KG9mZnNldCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXRJbnRvKGRzdDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjdFBvaW50SW50b0YoXHJcbiAgICAgICAgZHN0OiBDMlZlYzIsXHJcbiAgICAgICAgcG9zaXRpb25YOiBudW1iZXIsXHJcbiAgICAgICAgcG9zaXRpb25ZOiBudW1iZXIsXHJcbiAgICAgICAgZXh0ZW50c1g6IG51bWJlcixcclxuICAgICAgICBleHRlbnRzWTogbnVtYmVyLFxyXG4gICAgICAgIGFuY2hvclg6IG51bWJlcixcclxuICAgICAgICBhbmNob3JZOiBudW1iZXIsXHJcbiAgICApOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHBvc2l0aW9uWCAtICh0aGlzLnZhbHVlLnggLSBhbmNob3JYKSAqIGV4dGVudHNYLCBwb3NpdGlvblkgLSAodGhpcy52YWx1ZS55IC0gYW5jaG9yWSkgKiBleHRlbnRzWSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjdFBvaW50SW50b1YoZHN0OiBDMlZlYzIsIHBvc2l0aW9uOiBDMlZlYzIsIGV4dGVudHM6IEMyVmVjMiwgYW5jaG9yOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHBvc2l0aW9uLnggLSAodGhpcy52YWx1ZS54IC0gYW5jaG9yLngpICogZXh0ZW50cy54LCBwb3NpdGlvbi55IC0gKHRoaXMudmFsdWUueSAtIGFuY2hvci55KSAqIGV4dGVudHMueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjdFBvaW50SW50byhcclxuICAgICAgICBkc3Q6IEMyVmVjMixcclxuICAgICAgICBzcGFjZTogQzJTcGFjZSxcclxuICAgICAgICBwb3NpdGlvbjogQzJQb2ludCxcclxuICAgICAgICBleHRlbnRzOiBDMkV4dGVudHMsXHJcbiAgICAgICAgYW5jaG9yWDogbnVtYmVyLFxyXG4gICAgICAgIGFuY2hvclk6IG51bWJlcixcclxuICAgICk6IHRoaXMge1xyXG4gICAgICAgIHBvc2l0aW9uLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgY29uc3QgcG9zWCA9IGRzdC54O1xyXG4gICAgICAgIGNvbnN0IHBvc1kgPSBkc3QueTtcclxuICAgICAgICBleHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgY29uc3QgZXh0WCA9IGRzdC54O1xyXG4gICAgICAgIGNvbnN0IGV4dFkgPSBkc3QueTtcclxuICAgICAgICBkc3Quc2V0KHBvc1ggLSAodGhpcy52YWx1ZS54IC0gYW5jaG9yWCkgKiBleHRYLCBwb3NZIC0gKHRoaXMudmFsdWUueSAtIGFuY2hvclkpICogZXh0WSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVyKHNwYWNlOiBDMlNwYWNlLCBwb3NpdGlvbjogQzJQb2ludCwgZXh0ZW50czogQzJFeHRlbnRzKTogQzJWZWMyIHtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDZW50ZXJJbnRvKGNlbnRlciwgc3BhY2UsIHBvc2l0aW9uLCBleHRlbnRzKTtcclxuICAgICAgICByZXR1cm4gY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlckludG9GKGRzdDogQzJWZWMyLCBwb3NpdGlvblg6IG51bWJlciwgcG9zaXRpb25ZOiBudW1iZXIsIGV4dGVudHNYOiBudW1iZXIsIGV4dGVudHNZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHBvc2l0aW9uWCAtIHRoaXMudmFsdWUueCAqIGV4dGVudHNYLCBwb3NpdGlvblkgLSB0aGlzLnZhbHVlLnkgKiBleHRlbnRzWSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50b1YoZHN0OiBDMlZlYzIsIHBvc2l0aW9uOiBDMlZlYzIsIGV4dGVudHM6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGRzdC5zZXQocG9zaXRpb24ueCAtIHRoaXMudmFsdWUueCAqIGV4dGVudHMueCwgcG9zaXRpb24ueSAtIHRoaXMudmFsdWUueSAqIGV4dGVudHMueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UsIHBvc2l0aW9uOiBDMlBvaW50LCBleHRlbnRzOiBDMkV4dGVudHMpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0UG9pbnRJbnRvKGRzdCwgc3BhY2UsIHBvc2l0aW9uLCBleHRlbnRzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb3dlcihzcGFjZTogQzJTcGFjZSwgcG9zaXRpb246IEMyUG9pbnQsIGV4dGVudHM6IEMyRXh0ZW50cyk6IEMyVmVjMiB7XHJcbiAgICAgICAgY29uc3QgbG93ZXIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRMb3dlckludG8obG93ZXIsIHNwYWNlLCBwb3NpdGlvbiwgZXh0ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIGxvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvd2VySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UsIHBvc2l0aW9uOiBDMlBvaW50LCBleHRlbnRzOiBDMkV4dGVudHMpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0UG9pbnRJbnRvKGRzdCwgc3BhY2UsIHBvc2l0aW9uLCBleHRlbnRzLCAtMSwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwcGVyKHNwYWNlOiBDMlNwYWNlLCBwb3NpdGlvbjogQzJQb2ludCwgZXh0ZW50czogQzJFeHRlbnRzKTogQzJWZWMyIHtcclxuICAgICAgICBjb25zdCB1cHBlciA9IG5ldyBDMlZlYzIoKTtcclxuICAgICAgICB0aGlzLmdldFVwcGVySW50byh1cHBlciwgc3BhY2UsIHBvc2l0aW9uLCBleHRlbnRzKTtcclxuICAgICAgICByZXR1cm4gdXBwZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBwZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSwgcG9zaXRpb246IEMyUG9pbnQsIGV4dGVudHM6IEMyRXh0ZW50cyk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlY3RQb2ludEludG8oZHN0LCBzcGFjZSwgcG9zaXRpb24sIGV4dGVudHMsICsxLCArMSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMkV4dGVudHMgfSBmcm9tICcuLi9zaGFyZWQvYzItZXh0ZW50cyc7XHJcbmltcG9ydCB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB7IEMyQW5jaG9yIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWFuY2hvcic7XHJcbmltcG9ydCB7IEMyU3BhY2VSZWYgfSBmcm9tICcuLi9zaGFyZWQvYzItc3BhY2UtcmVmJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0VsZW1lbnQsIHR5cGUgQzJIYXNCb3VuZHMgfSBmcm9tICcuL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRmlsbERhdGEsIEMyR3JhcGhpY3NEYXRhLCBDMlN0cm9rZURhdGEgfSBmcm9tICcuL2Jhc2UvYzItZWxlbWVudC1kYXRhJztcclxuaW1wb3J0IHR5cGUgeyBDMlNERiB9IGZyb20gJy4uL21hdGgvY3VydmUvYzItc2RmJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlBhdGhSZWN0RGF0YSBleHRlbmRzIEMyR3JhcGhpY3NEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzcGFjZTogQzJTcGFjZVJlZjtcclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxsOiBDMkZpbGxEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0cm9rZTogQzJTdHJva2VEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG4gICAgLy8gcHVibGljIHJlYWRvbmx5IHRyYW5zZm9ybTogQzJUcmFuc2Zvcm07XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBDMlBvaW50O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4dGVudHM6IEMyRXh0ZW50cztcclxuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6IEMyQW5jaG9yO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvcm5lclJhZGl1czogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29ybmVyVGVuc2lvbjogQzJOdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIGNvbnN0IHdvcmxkU3BhY2UgPSBzY2VuZS5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG5ldyBDMlNwYWNlUmVmKHNjZW5lLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQzJQb2ludChzY2VuZSwgMCwgMCwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMSwgMSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3IgPSBuZXcgQzJBbmNob3Ioc2NlbmUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuY29ybmVyUmFkaXVzID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuY29ybmVyVGVuc2lvbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgMC41NTIyODQ3NDk4MzEpOyAvLyA0LzMqdGFuKHBpLzgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJva2UuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgICAgICB0aGlzLmZpbGwuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyUGF0aFJlY3QgZXh0ZW5kcyBDMkdyYXBoaWNzRWxlbWVudDxDMlBhdGhSZWN0RGF0YT4gaW1wbGVtZW50cyBDMkhhc0JvdW5kcywgQzJTREYge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5FMDogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5FMTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5FMjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5FMzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5XMDogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5XMTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5XMjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lck5XMzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNXMDogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNXMTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNXMjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNXMzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNFMDogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNFMTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNFMjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvcm5lclNFMzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlY05FOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmVjTlc6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2ZWNTRTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlY1NXOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNkZkNlbnRlcjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNkZkV4dGVudHM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCBzZGZSYWRpdXM6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgcGF0aDogUGF0aDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBuZXcgQzJQYXRoUmVjdERhdGEoc2NlbmUpKTtcclxuICAgICAgICB0aGlzLnBhdGggPSBuZXcgUGF0aDJEKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb25JbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhdGgoKTogUGF0aDJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV4dGVudHNJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5leHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEuYW5jaG9yLmdldENlbnRlckludG8oZHN0LCBzcGFjZSwgdGhpcy5kYXRhLnBvc2l0aW9uLCB0aGlzLmRhdGEuZXh0ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjdFBvaW50SW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UsIGFuY2hvclg6IG51bWJlciwgYW5jaG9yWTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRSZWN0UG9pbnRJbnRvKGRzdCwgc3BhY2UsIHRoaXMuZGF0YS5wb3NpdGlvbiwgdGhpcy5kYXRhLmV4dGVudHMsIGFuY2hvclgsIGFuY2hvclkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvcm5lclJhZGl1cyhzcGFjZTogQzJTcGFjZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jb3JuZXJSYWRpdXMuZ2V0KHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVNERih4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSBNYXRoLmFicyh4IC0gdGhpcy5zZGZDZW50ZXIueCkgLSAodGhpcy5zZGZFeHRlbnRzLnggLSB0aGlzLnNkZlJhZGl1cyk7XHJcbiAgICAgICAgY29uc3QgZHkgPSBNYXRoLmFicyh5IC0gdGhpcy5zZGZDZW50ZXIueSkgLSAodGhpcy5zZGZFeHRlbnRzLnkgLSB0aGlzLnNkZlJhZGl1cyk7XHJcbiAgICAgICAgY29uc3QgYXggPSBNYXRoLm1heChkeCwgMCk7XHJcbiAgICAgICAgY29uc3QgYXkgPSBNYXRoLm1heChkeSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSkgKyBNYXRoLm1pbihNYXRoLm1heChkeCwgZHkpLCAwKSAtIHRoaXMuc2RmUmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlU0RGVihwOiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlU0RGKHAueCwgcC55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlR2VvbWV0cnkoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLmRhdGEuc3BhY2UuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZXh0ZW50cyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc2l0aW9uLmdldEludG8oY2VudGVyLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmV4dGVudHMuZ2V0SW50byhleHRlbnRzLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRSZWN0UG9pbnRJbnRvRihjZW50ZXIsIGNlbnRlci54LCBjZW50ZXIueSwgZXh0ZW50cy54LCBleHRlbnRzLnksIDAsIDApO1xyXG5cclxuICAgICAgICBjb25zdCBjWCA9IGNlbnRlci54O1xyXG4gICAgICAgIGNvbnN0IGNZID0gY2VudGVyLnk7XHJcbiAgICAgICAgY29uc3QgZVggPSBleHRlbnRzLng7XHJcbiAgICAgICAgY29uc3QgZVkgPSBleHRlbnRzLnk7XHJcbiAgICAgICAgY29uc3QgciA9IE1hdGgubWluKHRoaXMuZGF0YS5jb3JuZXJSYWRpdXMuZ2V0KHNwYWNlKSwgZVgsIGVZKTtcclxuICAgICAgICBjb25zdCBrID0gciAqIHRoaXMuZGF0YS5jb3JuZXJUZW5zaW9uLmdldCgpO1xyXG5cclxuICAgICAgICB0aGlzLnZlY05FLnNldChjWCArIGVYLCBjWSArIGVZKTtcclxuICAgICAgICB0aGlzLnZlY05XLnNldChjWCAtIGVYLCBjWSArIGVZKTtcclxuICAgICAgICB0aGlzLnZlY1NXLnNldChjWCAtIGVYLCBjWSAtIGVZKTtcclxuICAgICAgICB0aGlzLnZlY1NFLnNldChjWCArIGVYLCBjWSAtIGVZKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3JuZXJORTAuY29weSh0aGlzLnZlY05FKS5hZGQoMCwgLXIpO1xyXG4gICAgICAgIHRoaXMuY29ybmVyTkUxLmNvcHkodGhpcy52ZWNORSkuYWRkKDAsIC1yICsgayk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJORTIuY29weSh0aGlzLnZlY05FKS5hZGQoLXIgKyBrLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lck5FMy5jb3B5KHRoaXMudmVjTkUpLmFkZCgtciwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ybmVyTlcwLmNvcHkodGhpcy52ZWNOVykuYWRkKCtyLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lck5XMS5jb3B5KHRoaXMudmVjTlcpLmFkZCgrciAtIGssIDApO1xyXG4gICAgICAgIHRoaXMuY29ybmVyTlcyLmNvcHkodGhpcy52ZWNOVykuYWRkKDAsIC1yICsgayk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJOVzMuY29weSh0aGlzLnZlY05XKS5hZGQoMCwgLXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvcm5lclNXMC5jb3B5KHRoaXMudmVjU1cpLmFkZCgwLCArcik7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJTVzEuY29weSh0aGlzLnZlY1NXKS5hZGQoMCwgK3IgLSBrKTtcclxuICAgICAgICB0aGlzLmNvcm5lclNXMi5jb3B5KHRoaXMudmVjU1cpLmFkZCgrciAtIGssIDApO1xyXG4gICAgICAgIHRoaXMuY29ybmVyU1czLmNvcHkodGhpcy52ZWNTVykuYWRkKCtyLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3JuZXJTRTAuY29weSh0aGlzLnZlY1NFKS5hZGQoLXIsIDApO1xyXG4gICAgICAgIHRoaXMuY29ybmVyU0UxLmNvcHkodGhpcy52ZWNTRSkuYWRkKC1yICsgaywgMCk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJTRTIuY29weSh0aGlzLnZlY1NFKS5hZGQoMCwgK3IgLSBrKTtcclxuICAgICAgICB0aGlzLmNvcm5lclNFMy5jb3B5KHRoaXMudmVjU0UpLmFkZCgwLCArcik7XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjZW50ZXIpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShleHRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlU0RGKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc2l0aW9uLmdldEludG8ocG9zaXRpb24sIHNwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEuZXh0ZW50cy5nZXRJbnRvKHRoaXMuc2RmRXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0Q2VudGVySW50b1YodGhpcy5zZGZDZW50ZXIsIHBvc2l0aW9uLCB0aGlzLnNkZkV4dGVudHMpO1xyXG4gICAgICAgIHRoaXMuc2RmUmFkaXVzID0gTWF0aC5taW4odGhpcy5kYXRhLmNvcm5lclJhZGl1cy5nZXQoc3BhY2UpLCB0aGlzLnNkZkV4dGVudHMueCwgdGhpcy5zZGZFeHRlbnRzLnkpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNERigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlR2VvbWV0cnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZpZXdTcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLnJlbmRlci5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHAwID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwMSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZGF0YS5zcGFjZS5nZXQoKTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY29ybmVyUmFkaXVzLnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMCwgdGhpcy5jb3JuZXJORTAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvcm5lck5FMSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHRoaXMuY29ybmVyTkUyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMywgdGhpcy5jb3JuZXJORTMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHAwLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAzLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocDAueCwgcDAueSk7XHJcbiAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xyXG5cclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDAsIHRoaXMuY29ybmVyTlcwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMSwgdGhpcy5jb3JuZXJOVzEsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAyLCB0aGlzLmNvcm5lck5XMiwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDMsIHRoaXMuY29ybmVyTlczLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBwMC5yb3VuZCgpO1xyXG4gICAgICAgICAgICBwMy5yb3VuZCgpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHAwLngsIHAwLnkpO1xyXG4gICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcclxuXHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAwLCB0aGlzLmNvcm5lclNXMCwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDEsIHRoaXMuY29ybmVyU1cxLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMiwgdGhpcy5jb3JuZXJTVzIsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCB0aGlzLmNvcm5lclNXMywgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcDAucm91bmQoKTtcclxuICAgICAgICAgICAgcDMucm91bmQoKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMC54LCBwMC55KTtcclxuICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8ocDEueCwgcDEueSwgcDIueCwgcDIueSwgcDMueCwgcDMueSk7XHJcblxyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMCwgdGhpcy5jb3JuZXJTRTAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvcm5lclNFMSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHRoaXMuY29ybmVyU0UyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMywgdGhpcy5jb3JuZXJTRTMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHAwLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAzLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDAueCwgcDAueSk7XHJcbiAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAwLCB0aGlzLmNvcm5lck5FMCwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDEsIHRoaXMuY29ybmVyTlcwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMiwgdGhpcy5jb3JuZXJTVzAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCB0aGlzLmNvcm5lclNFMCwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcDAucm91bmQoKTtcclxuICAgICAgICAgICAgcDEucm91bmQoKTtcclxuICAgICAgICAgICAgcDIucm91bmQoKTtcclxuICAgICAgICAgICAgcDMucm91bmQoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwMC54LCBwMC55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMS54LCBwMS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMy54LCBwMy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmZpbGwuaXNFbmFibGVkLmdldCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maWxsLmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc3Ryb2tlLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3Ryb2tlLmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAxKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDIpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCB0eXBlIEMyRWFzZVR5cGUgPSAodDogbnVtYmVyKSA9PiBudW1iZXI7XHJcbmV4cG9ydCB0eXBlIEMyUGFyYW1FYXNlVHlwZSA9IChwYXJhbT86IG51bWJlcikgPT4gQzJFYXNlVHlwZTtcclxuXHJcbi8vIExpbmVhciBlYXNpbmcgZnVuY3Rpb24gKHQpXHJcbmZ1bmN0aW9uIGVhc2VMaW5lYXIodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG4vLyBRdWFkcmF0aWMgZWFzaW5nIGZ1bmN0aW9ucyAodF4yKVxyXG5mdW5jdGlvbiBlYXNlSW5RdWFkKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdCAqIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICByZXR1cm4gMSAtIHMgKiBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodCA8IDAuNSkge1xyXG4gICAgICAgIHJldHVybiAyICogdCAqIHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgICAgICByZXR1cm4gMSAtIDIgKiBzICogcztcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3ViaWMgZWFzaW5nIGZ1bmN0aW9ucyAodF4zKVxyXG5mdW5jdGlvbiBlYXNlSW5DdWJpYyh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHQgKiB0ICogdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICByZXR1cm4gMSAtIHMgKiBzICogcztcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0IDwgMC41KSB7XHJcbiAgICAgICAgcmV0dXJuIDQgKiB0ICogdCAqIHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgICAgICByZXR1cm4gMSAtIDIgKiBzICogcyAqIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFF1YXJ0aWMgZWFzaW5nIGZ1bmN0aW9ucyAodF40KVxyXG5mdW5jdGlvbiBlYXNlSW5RdWFydCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcyA9IDEgLSB0O1xyXG4gICAgcmV0dXJuIDEgLSBzICogcyAqIHMgKiBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHQgPCAwLjUpIHtcclxuICAgICAgICByZXR1cm4gOCAqIHQgKiB0ICogdCAqIHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgICAgICByZXR1cm4gMSAtIDggKiBzICogcyAqIHMgKiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFeHBvbmVudGlhbCBlYXNpbmcgZnVuY3Rpb25zICgyXnQpXHJcbmZ1bmN0aW9uIGVhc2VJbkV4cG8odDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0IDw9IDAgPyAwIDogTWF0aC5wb3coMiwgMTAgKiB0IC0gMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0RXhwbyh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHQgPj0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VJbk91dEV4cG8odDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0IDw9IDApIHJldHVybiAwO1xyXG4gICAgaWYgKHQgPj0gMSkgcmV0dXJuIDE7XHJcblxyXG4gICAgaWYgKHQgPCAwLjUpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgMjAgKiB0IC0gMTApIC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICgyIC0gTWF0aC5wb3coMiwgLTIwICogdCArIDEwKSkgLyAyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTaW5lIGVhc2luZyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gZWFzZUluU2luZSh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogKE1hdGguUEkgLyAyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRTaW5lKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zaW4odCAqIChNYXRoLlBJIC8gMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlU21vb3RoU3RlcCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHQgKiB0ICogKDMgLSAyICogdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VTbW9vdGhlclN0ZXAodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNiAtIDE1KSArIDEwKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVhc2U6IFJlY29yZDxzdHJpbmcsIEMyRWFzZVR5cGU+ID0ge1xyXG4gICAgbGluZWFyOiBlYXNlTGluZWFyLFxyXG4gICAgaW46IGVhc2VJblF1YWQsXHJcbiAgICBpblNpbmU6IGVhc2VJblNpbmUsXHJcbiAgICBpblF1YWQ6IGVhc2VJblF1YWQsXHJcbiAgICBpbkN1YmljOiBlYXNlSW5DdWJpYyxcclxuICAgIGluUXVhcnQ6IGVhc2VJblF1YXJ0LFxyXG4gICAgaW5FeHBvOiBlYXNlSW5FeHBvLFxyXG4gICAgb3V0OiBlYXNlT3V0UXVhZCxcclxuICAgIG91dFNpbmU6IGVhc2VPdXRTaW5lLFxyXG4gICAgb3V0UXVhZDogZWFzZU91dFF1YWQsXHJcbiAgICBvdXRDdWJpYzogZWFzZU91dEN1YmljLFxyXG4gICAgb3V0UXVhcnQ6IGVhc2VPdXRRdWFydCxcclxuICAgIG91dEV4cG86IGVhc2VPdXRFeHBvLFxyXG4gICAgaW5PdXQ6IGVhc2VJbk91dFF1YWQsXHJcbiAgICBpbk91dFNpbmU6IGVhc2VJbk91dFNpbmUsXHJcbiAgICBpbk91dFF1YWQ6IGVhc2VJbk91dFF1YWQsXHJcbiAgICBpbk91dEN1YmljOiBlYXNlSW5PdXRDdWJpYyxcclxuICAgIGluT3V0UXVhcnQ6IGVhc2VJbk91dFF1YXJ0LFxyXG4gICAgaW5PdXRFeHBvOiBlYXNlSW5PdXRFeHBvLFxyXG4gICAgc21vb3RoU3RlcDogZWFzZVNtb290aFN0ZXAsXHJcbiAgICBzbW9vdGhlclN0ZXA6IGVhc2VTbW9vdGhlclN0ZXAsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5Qb3dlcihwb3dlcjogbnVtYmVyID0gMik6IEMyRWFzZVR5cGUge1xyXG4gICAgcmV0dXJuICh0OiBudW1iZXIpID0+IE1hdGgucG93KHQsIHBvd2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZU91dFBvd2VyKHBvd2VyOiBudW1iZXIgPSAyKTogQzJFYXNlVHlwZSB7XHJcbiAgICByZXR1cm4gKHQ6IG51bWJlcikgPT4gMSAtIE1hdGgucG93KDEgLSB0LCBwb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VJbk91dFBvd2VyKHBvd2VyOiBudW1iZXIgPSAyKTogQzJFYXNlVHlwZSB7XHJcbiAgICByZXR1cm4gKHQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICh0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyICogdCwgcG93ZXIpIC8gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDIgKiAoMSAtIHQpLCBwb3dlcikgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRCYWNrKG92ZXJzaG9vdDogbnVtYmVyID0gMS43MDE1OCk6IEMyRWFzZVR5cGUge1xyXG4gICAgcmV0dXJuICh0OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgcmV0dXJuIDEgLSAoMSArIG92ZXJzaG9vdCkgKiBzICogcyAqIHMgKyBvdmVyc2hvb3QgKiBzICogcztcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlYXNlUGFyYW06IFJlY29yZDxzdHJpbmcsIEMyUGFyYW1FYXNlVHlwZT4gPSB7XHJcbiAgICBpblBvd2VyOiBlYXNlSW5Qb3dlcixcclxuICAgIG91dFBvd2VyOiBlYXNlT3V0UG93ZXIsXHJcbiAgICBpbk91dFBvd2VyOiBlYXNlSW5PdXRQb3dlcixcclxuICAgIG91dEJhY2s6IGVhc2VPdXRCYWNrLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gY29uc3QgaGFsZlBJID0gUEkgLyAyO1xyXG4vLyBjb25zdCBkb3VibGVQSSA9IFBJICogMjtcclxuLy8gLyoqIEB0eXBlIHtQb3dlckVhc2luZ30gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGVhc2VJblBvd2VyID0gKHAgPSAxLjY4KSA9PiB0ID0+IHBvdyh0LCArcCk7XHJcblxyXG4vLy8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzZXNGYWN0b3J5fEVhc2luZ0Z1bmN0aW9uPn0gKi9cclxuLy8gY29uc3QgZWFzZUluRnVuY3Rpb25zID0ge1xyXG4vLyAgIFtlbXB0eVN0cmluZ106IGVhc2VJblBvd2VyLFxyXG4vLyAgIFF1YWQ6IGVhc2VJblBvd2VyKDIpLFxyXG4vLyAgIEN1YmljOiBlYXNlSW5Qb3dlcigzKSxcclxuLy8gICBRdWFydDogZWFzZUluUG93ZXIoNCksXHJcbi8vICAgUXVpbnQ6IGVhc2VJblBvd2VyKDUpLFxyXG4vLyAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXHJcbi8vICAgU2luZTogdCA9PiAxIC0gY29zKHQgKiBoYWxmUEkpLFxyXG4vLyAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXHJcbi8vICAgQ2lyYzogdCA9PiAxIC0gc3FydCgxIC0gdCAqIHQpLFxyXG4vLyAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXHJcbi8vICAgRXhwbzogdCA9PiB0ID8gcG93KDIsIDEwICogdCAtIDEwKSA6IDAsXHJcbi8vICAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cclxuLy8gICBCb3VuY2U6IHQgPT4ge1xyXG4vLyAgICAgbGV0IHBvdzIsIGIgPSA0O1xyXG4vLyAgICAgd2hpbGUgKHQgPCAoKHBvdzIgPSBwb3coMiwgLS1iKSkgLSAxKSAvIDExKTtcclxuLy8gICAgIHJldHVybiAxIC8gcG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIHBvdygocG93MiAqIDMgLSAyKSAvIDIyIC0gdCwgMik7XHJcbi8vICAgfSxcclxuLy8gICAvKiogQHR5cGUge0JhY2tFYXNpbmd9ICovXHJcbi8vICAgQmFjazogKG92ZXJzaG9vdCA9IDEuNzAxNTgpID0+IHQgPT4gKCtvdmVyc2hvb3QgKyAxKSAqIHQgKiB0ICogdCAtICtvdmVyc2hvb3QgKiB0ICogdCxcclxuLy8gICAvKiogQHR5cGUge0VsYXN0aWNFYXNpbmd9ICovXHJcbi8vICAgRWxhc3RpYzogKGFtcGxpdHVkZSA9IDEsIHBlcmlvZCA9IC4zKSA9PiB7XHJcbi8vICAgICBjb25zdCBhID0gY2xhbXAoK2FtcGxpdHVkZSwgMSwgMTApO1xyXG4vLyAgICAgY29uc3QgcCA9IGNsYW1wKCtwZXJpb2QsIG1pblZhbHVlLCAyKTtcclxuLy8gICAgIGNvbnN0IHMgPSAocCAvIGRvdWJsZVBJKSAqIGFzaW4oMSAvIGEpO1xyXG4vLyAgICAgY29uc3QgZSA9IGRvdWJsZVBJIC8gcDtcclxuLy8gICAgIHJldHVybiB0ID0+IHQgPT09IDAgfHwgdCA9PT0gMSA/IHQgOiAtYSAqIHBvdygyLCAtMTAgKiAoMSAtIHQpKSAqIHNpbigoKDEgLSB0KSAtIHMpICogZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvKipcclxuLy8gICogQGNhbGxiYWNrIEVhc2VUeXBlXHJcbi8vICAqIEBwYXJhbSB7RWFzaW5nRnVuY3Rpb259IEVhc2VcclxuLy8gICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XHJcbi8vICAqL1xyXG5cclxuLy8gLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBFYXNlVHlwZT59ICovXHJcbi8vIGV4cG9ydCBjb25zdCBlYXNlVHlwZXMgPSB7XHJcbi8vICAgaW46IGVhc2VJbiA9PiB0ID0+IGVhc2VJbih0KSxcclxuLy8gICBvdXQ6IGVhc2VJbiA9PiB0ID0+IDEgLSBlYXNlSW4oMSAtIHQpLFxyXG4vLyAgIGluT3V0OiBlYXNlSW4gPT4gdCA9PiB0IDwgLjUgPyBlYXNlSW4odCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4odCAqIC0yICsgMikgLyAyLFxyXG4vLyAgIG91dEluOiBlYXNlSW4gPT4gdCA9PiB0IDwgLjUgPyAoMSAtIGVhc2VJbigxIC0gdCAqIDIpKSAvIDIgOiAoZWFzZUluKHQgKiAyIC0gMSkgKyAxKSAvIDIsXHJcbi8vIH1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJPZmZzZXQgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMk9mZnNldD4sIEMySGFzQ29weTxDMk9mZnNldD4sIEMySGFzTGVycDxDMk9mZnNldD4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdvZmZzZXQnIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBDMlZlYzI7XHJcbiAgICBwdWJsaWMgc3BhY2U6IEMyU3BhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQzJWZWMyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMk9mZnNldCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMk9mZnNldCh0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSwgdGhpcy5zcGFjZSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMk9mZnNldCk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJPZmZzZXQpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFsc1YodGhpcy52YWx1ZSwgb3RoZXIudmFsdWUpICYmIHRoaXMuc3BhY2UgPT09IG90aGVyLnNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkob3RoZXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBvdGhlci5zcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJPZmZzZXQsIHN0YXRlMTogQzJPZmZzZXQsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gc3RhdGUxLnNwYWNlO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTAgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgc3RhdGUwLmdldEludG8odmFsdWUwLCBzcGFjZSk7XHJcbiAgICAgICAgc3RhdGUxLmdldEludG8odmFsdWUxLCBzcGFjZSk7XHJcbiAgICAgICAgQzJWZWMyLmxlcnBWKHRoaXMudmFsdWUsIHZhbHVlMCwgdmFsdWUxLCB0KTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHZhbHVlMCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHZhbHVlMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoc3RhdGUwOiBDMk9mZnNldCwgc3RhdGUxOiBDMk9mZnNldCwgdDogbnVtYmVyKTogQzJPZmZzZXQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJPZmZzZXQoc3RhdGUxLnNjZW5lLCAwLCAwLCBzdGF0ZTEuc3BhY2UpLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS54ID09PSB4ICYmIHRoaXMudmFsdWUueSA9PT0geSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKHNwYWNlKSB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VihvZmZzZXQ6IEMyVmVjMiwgc3BhY2U/OiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKEMyVmVjMi5lcXVhbHNWKHRoaXMudmFsdWUsIG9mZnNldCkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShvZmZzZXQpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzKHRoaXMudmFsdWUueCwgdGhpcy52YWx1ZS55LCB4LCB5KSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgc3BhY2UuY29udmVydE9mZnNldEludG8odGhpcy52YWx1ZSwgeCwgeSwgdGhpcy5zcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVGcm9tU3BhY2VWKG9mZnNldDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlRnJvbVNwYWNlKG9mZnNldC54LCBvZmZzZXQueSwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5zcGFjZS5jb252ZXJ0T2Zmc2V0SW50b1YoZHN0LCB0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3BhY2Uoc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BhY2UuY29udmVydE9mZnNldEludG9WKHRoaXMudmFsdWUsIHRoaXMudmFsdWUsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgLy8gTm8gbWFya0RpcnR5KCkgYmVjYXVzZSB0aGUgcG9pbnQgdmFsdWUgZGlkIG5vdCBjaGFuZ2VcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBTMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9zMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgUzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9zMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBTMkV4dGVudHMgfSBmcm9tICcuL3MyLWV4dGVudHMnO1xyXG5pbXBvcnQgdHlwZSB7IFMyQXJyb3dUaXAgfSBmcm9tICcuLi9lbGVtZW50L3MyLWFycm93LXRpcCc7XHJcbmltcG9ydCB7IFMyUG9pbnQgfSBmcm9tICcuL3MyLXBvaW50JztcclxuaW1wb3J0IHsgUzJWZWMyIH0gZnJvbSAnLi4vbWF0aC9zMi12ZWMyJztcclxuaW1wb3J0IHsgUzJPZmZzZXQgfSBmcm9tICcuL3MyLW9mZnNldCc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkFycm93VGlwIH0gZnJvbSAnLi4vZWxlbWVudC9jMi1hcnJvdy10aXAnO1xyXG5pbXBvcnQgeyBDMk9mZnNldCB9IGZyb20gJy4vYzItb2Zmc2V0JztcclxuaW1wb3J0IHsgQzJQb2ludCB9IGZyb20gJy4vYzItcG9pbnQnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbmV4cG9ydCB0eXBlIFMyU1ZHQXR0cmlidXRlcyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcblxyXG5leHBvcnQgdHlwZSBDMkxpbmVDYXAgPSAnYnV0dCcgfCAncm91bmQnIHwgJ3NxdWFyZSc7XHJcbmV4cG9ydCB0eXBlIEMyTGluZUpvaW4gPSAnbWl0ZXInIHwgJ3JvdW5kJyB8ICdiZXZlbCc7XHJcbmV4cG9ydCB0eXBlIFMyVGV4dEFuY2hvciA9ICdzdGFydCcgfCAnbWlkZGxlJyB8ICdlbmQnO1xyXG5leHBvcnQgdHlwZSBTMkhvcml6b250YWxBbGlnbiA9ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcclxuZXhwb3J0IHR5cGUgUzJWZXJ0aWNhbEFsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xyXG5leHBvcnQgdHlwZSBDMkZvbnRTdHlsZSA9ICdub3JtYWwnIHwgJ2l0YWxpYycgfCAnb2JsaXF1ZSc7XHJcbmV4cG9ydCB0eXBlIFMyUG9pbnRlckV2ZW50cyA9ICdhdXRvJyB8ICdub25lJztcclxuXHJcbmV4cG9ydCB0eXBlIFMyRHJhZ1NuYXBNb2RlID0gJ2Fsd2F5cycgfCAncmVsZWFzZScgfCAnbm9uZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFMyRGlydHlhYmxlIHtcclxuICAgIGlzRGlydHkoKTogYm9vbGVhbjtcclxuICAgIG1hcmtEaXJ0eSgpOiB2b2lkO1xyXG4gICAgY2xlYXJEaXJ0eSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUzJUaXBUcmFuc2Zvcm0ge1xyXG4gICAgcHVibGljIHNwYWNlOiBTMlNwYWNlO1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBTMlBvaW50O1xyXG4gICAgcHVibGljIHRhbmdlbnQ6IFMyT2Zmc2V0O1xyXG4gICAgcHVibGljIHN0cm9rZVdpZHRoOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHBhdGhMZW5ndGg6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNjZW5lLmdldFdvcmxkU3BhY2UoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFMyUG9pbnQoMCwgMCwgdGhpcy5zcGFjZSk7XHJcbiAgICAgICAgdGhpcy50YW5nZW50ID0gbmV3IFMyT2Zmc2V0KDAsIDAsIHRoaXMuc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFMyVGlwYWJsZSB7XHJcbiAgICBjcmVhdGVBcnJvd1RpcCgpOiBTMkFycm93VGlwO1xyXG4gICAgZ2V0VGlwKGluZGV4OiBudW1iZXIpOiBTMkFycm93VGlwO1xyXG4gICAgZ2V0VGlwQ291bnQoKTogbnVtYmVyO1xyXG4gICAgZGV0YWNoVGlwKGluZGV4OiBudW1iZXIpOiB0aGlzO1xyXG4gICAgZGV0YWNoVGlwRWxlbWVudCh0aXA6IFMyQXJyb3dUaXApOiB0aGlzO1xyXG4gICAgZGV0YWNoVGlwRWxlbWVudHMoKTogdGhpcztcclxuICAgIGdldFRpcFRyYW5zZm9ybUF0SW50byhkc3Q6IFMyVGlwVHJhbnNmb3JtLCB0OiBudW1iZXIpOiBTMlRpcFRyYW5zZm9ybTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGlwVHJhbnNmb3JtIHtcclxuICAgIHB1YmxpYyBzcGFjZTogQzJTcGFjZTtcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogQzJQb2ludDtcclxuICAgIHB1YmxpYyB0YW5nZW50OiBDMk9mZnNldDtcclxuICAgIHB1YmxpYyBzdHJva2VXaWR0aDogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBwYXRoTGVuZ3RoOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzY2VuZS5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBDMlBvaW50KHNjZW5lLCAwLCAwLCB0aGlzLnNwYWNlKTtcclxuICAgICAgICB0aGlzLnRhbmdlbnQgPSBuZXcgQzJPZmZzZXQoc2NlbmUsIDAsIDAsIHRoaXMuc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMyVGlwYWJsZSB7XHJcbiAgICBjcmVhdGVBcnJvd1RpcCgpOiBDMkFycm93VGlwO1xyXG4gICAgZ2V0VGlwKGluZGV4OiBudW1iZXIpOiBDMkFycm93VGlwO1xyXG4gICAgZ2V0VGlwQ291bnQoKTogbnVtYmVyO1xyXG4gICAgZGV0YWNoVGlwKGluZGV4OiBudW1iZXIpOiB0aGlzO1xyXG4gICAgZGV0YWNoVGlwRWxlbWVudCh0aXA6IEMyQXJyb3dUaXApOiB0aGlzO1xyXG4gICAgZGV0YWNoVGlwRWxlbWVudHMoKTogdGhpcztcclxuICAgIC8vZ2V0VGlwVHJhbnNmb3JtQXQodDogbnVtYmVyKTogUzJUaXBUcmFuc2Zvcm07XHJcbiAgICBnZXRUaXBUcmFuc2Zvcm1BdEludG8oZHN0OiBDMlRpcFRyYW5zZm9ybSwgdDogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUzJBbmNob3JPbGQgPVxyXG4gICAgfCAnbm9ydGgtd2VzdCdcclxuICAgIHwgJ25vcnRoJ1xyXG4gICAgfCAnbm9ydGgtZWFzdCdcclxuICAgIHwgJ3dlc3QnXHJcbiAgICB8ICdjZW50ZXInXHJcbiAgICB8ICdlYXN0J1xyXG4gICAgfCAnc291dGgtd2VzdCdcclxuICAgIHwgJ3NvdXRoJ1xyXG4gICAgfCAnc291dGgtZWFzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUzJBbmNob3JVdGlscyB7XHJcbiAgICBzdGF0aWMgZ2V0Q2VudGVyKFxyXG4gICAgICAgIGFuY2hvcjogUzJBbmNob3JPbGQsXHJcbiAgICAgICAgc3BhY2U6IFMyU3BhY2UsXHJcbiAgICAgICAgc2NlbmU6IFMyQmFzZVNjZW5lLFxyXG4gICAgICAgIHBvc2l0aW9uOiBTMlBvaW50LFxyXG4gICAgICAgIGV4dGVudHM6IFMyRXh0ZW50cyxcclxuICAgICk6IFMyVmVjMiB7XHJcbiAgICAgICAgY29uc3Qgc2lnbiA9IHNwYWNlID09PSBzY2VuZS5nZXRWaWV3U3BhY2UoKSA/IC0xIDogKzE7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZXh0ZW50cy5nZXQoc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHBvc2l0aW9uLmdldChzcGFjZSk7XHJcbiAgICAgICAgc3dpdGNoIChhbmNob3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnbm9ydGgtd2VzdCc6XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2hpZnRZKC1zaWduICogZXh0LnkpLnNoaWZ0WCgrZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25vcnRoJzpcclxuICAgICAgICAgICAgICAgIGNlbnRlci5zaGlmdFkoLXNpZ24gKiBleHQueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbm9ydGgtZWFzdCc6XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2hpZnRZKC1zaWduICogZXh0LnkpLnNoaWZ0WCgtZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3dlc3QnOlxyXG4gICAgICAgICAgICAgICAgY2VudGVyLnNoaWZ0WCgrZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZWFzdCc6XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2hpZnRYKC1leHQueCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc291dGgtd2VzdCc6XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2hpZnRZKCtzaWduICogZXh0LnkpLnNoaWZ0WCgrZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NvdXRoJzpcclxuICAgICAgICAgICAgICAgIGNlbnRlci5zaGlmdFkoK3NpZ24gKiBleHQueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc291dGgtZWFzdCc6XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2hpZnRZKCtzaWduICogZXh0LnkpLnNoaWZ0WCgtZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE5vcnRoV2VzdChcclxuICAgICAgICBhbmNob3I6IFMyQW5jaG9yT2xkLFxyXG4gICAgICAgIHNwYWNlOiBTMlNwYWNlLFxyXG4gICAgICAgIHNjZW5lOiBTMkJhc2VTY2VuZSxcclxuICAgICAgICBwb3NpdGlvbjogUzJQb2ludCxcclxuICAgICAgICBleHRlbnRzOiBTMkV4dGVudHMsXHJcbiAgICApOiBTMlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHNpZ24gPSBzcGFjZSA9PT0gc2NlbmUuZ2V0Vmlld1NwYWNlKCkgPyAtMSA6ICsxO1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IGV4dGVudHMuZ2V0KHNwYWNlKTtcclxuICAgICAgICBjb25zdCBudyA9IHBvc2l0aW9uLmdldChzcGFjZSk7XHJcbiAgICAgICAgc3dpdGNoIChhbmNob3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnbm9ydGgtd2VzdCc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbm9ydGgnOlxyXG4gICAgICAgICAgICAgICAgbncuc2hpZnRYKC1leHQueCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbm9ydGgtZWFzdCc6XHJcbiAgICAgICAgICAgICAgICBudy5zaGlmdFgoLTIgKiBleHQueCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2VzdCc6XHJcbiAgICAgICAgICAgICAgICBudy5zaGlmdFkoc2lnbiAqIGV4dC55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAgICAgICAgICAgbncuc2hpZnRZKHNpZ24gKiBleHQueSkuc2hpZnRYKC1leHQueCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZWFzdCc6XHJcbiAgICAgICAgICAgICAgICBudy5zaGlmdFkoc2lnbiAqIGV4dC55KS5zaGlmdFgoLTIgKiBleHQueCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc291dGgtd2VzdCc6XHJcbiAgICAgICAgICAgICAgICBudy5zaGlmdFkoMiAqIHNpZ24gKiBleHQueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc291dGgnOlxyXG4gICAgICAgICAgICAgICAgbncuc2hpZnRZKDIgKiBzaWduICogZXh0LnkpLnNoaWZ0WCgtZXh0LngpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NvdXRoLWVhc3QnOlxyXG4gICAgICAgICAgICAgICAgbncuc2hpZnRZKDIgKiBzaWduICogZXh0LnkpLnNoaWZ0WCgtMiAqIGV4dC54KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTMkZsZXhVdGlscyB7XHJcbiAgICBzdGF0aWMgY29tcHV0ZVNpemVzKFxyXG4gICAgICAgIGl0ZW1TaXplczogQXJyYXk8bnVtYmVyPixcclxuICAgICAgICBncm93czogQXJyYXk8bnVtYmVyPixcclxuICAgICAgICBkZXNpcmVkU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIHBhZGRpbmc6IG51bWJlcixcclxuICAgICAgICBpdGVtU2VwOiBudW1iZXIsXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGdyb3dTdW0gPSBncm93cy5yZWR1Y2UoKGFjY3UsIHgpID0+IGFjY3UgKyB4LCAwKTtcclxuICAgICAgICBjb25zdCBmaXhlZFNlcCA9IDIgKiBwYWRkaW5nICsgaXRlbVNlcCAqIE1hdGgubWF4KGl0ZW1TaXplcy5sZW5ndGggLSAxLCAwKTtcclxuICAgICAgICBjb25zdCB1bml0ID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIChkZXNpcmVkU2l6ZSAtIGZpeGVkU2VwKSAvIGdyb3dTdW0sXHJcbiAgICAgICAgICAgIGl0ZW1TaXplcy5tYXAoKHgsIGkpID0+IHggLyBncm93c1tpXSkucmVkdWNlKChhY2N1LCB4KSA9PiBNYXRoLm1heChhY2N1LCB4KSwgMCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1TaXplcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtU2l6ZXNbaV0gPSBncm93c1tpXSAqIHVuaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bml0ICogZ3Jvd1N1bSArIGZpeGVkU2VwO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBlYXNlIH0gZnJvbSAnLi4vYW5pbWF0aW9uL2MyLWVhc2luZyc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuaW1wb3J0IHsgQzJUaXBUcmFuc2Zvcm0sIHN2Z05TLCB0eXBlIEMyVGlwYWJsZSB9IGZyb20gJy4uL3NoYXJlZC9zMi1nbG9iYWxzJztcclxuaW1wb3J0IHsgQzJMZW5ndGggfSBmcm9tICcuLi9zaGFyZWQvYzItbGVuZ3RoJztcclxuaW1wb3J0IHsgQzJOdW1iZXIgfSBmcm9tICcuLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHsgQzJGaWxsRGF0YSwgQzJHcmFwaGljc0RhdGEsIEMyU3Ryb2tlRGF0YSB9IGZyb20gJy4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJCb29sZWFuIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWJvb2xlYW4nO1xyXG5pbXBvcnQgeyBDMk1hdDJ4MyB9IGZyb20gJy4uL21hdGgvYzItbWF0MngzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkFycm93VGlwRGF0YSBleHRlbmRzIEMyR3JhcGhpY3NEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxsOiBDMkZpbGxEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0cm9rZTogQzJTdHJva2VEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4dGVudHM6IEMyRXh0ZW50cztcclxuICAgIHB1YmxpYyByZWFkb25seSBwYXRoUG9zaXRpb246IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhUaHJlc2hvbGQ6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhTdHJva2VGYWN0b3I6IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRpcEluc2V0OiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc1JldmVyc2VkOiBDMkJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5jaG9yOiBDMk51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5maWxsID0gbmV3IEMyRmlsbERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IEMyU3Ryb2tlRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhQb3NpdGlvbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoVGhyZXNob2xkID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAzMCwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmV4dGVudHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCA1LCA1LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMucGF0aFN0cm9rZUZhY3RvciA9IG5ldyBDMk51bWJlcihzY2VuZSwgMS41KTtcclxuICAgICAgICB0aGlzLnRpcEluc2V0ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAwLjI1KTtcclxuICAgICAgICB0aGlzLmlzUmV2ZXJzZWQgPSBuZXcgQzJCb29sZWFuKHNjZW5lLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3IgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDApO1xyXG5cclxuICAgICAgICB0aGlzLnN0cm9rZS5pc0VuYWJsZWQuc2V0KGZhbHNlKTtcclxuICAgICAgICB0aGlzLmZpbGwuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQXJyb3dUaXAgZXh0ZW5kcyBDMkdyYXBoaWNzRWxlbWVudDxDMkFycm93VGlwRGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIGVsZW1lbnQ6IFNWR1BhdGhFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybTogQzJNYXQyeDM7XHJcbiAgICBwcm90ZWN0ZWQgdGlwYWJsZVJlZmVyZW5jZTogQzJUaXBhYmxlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgdGlwVHJhbnNmb3JtOiBDMlRpcFRyYW5zZm9ybTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyQXJyb3dUaXBEYXRhKHNjZW5lKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCAncGF0aCcpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IEMyTWF0MngzKCk7XHJcbiAgICAgICAgdGhpcy50aXBUcmFuc2Zvcm0gPSBuZXcgQzJUaXBUcmFuc2Zvcm0oc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpcGFibGVSZWZlcmVuY2UodGlwYWJsZTogQzJUaXBhYmxlIHwgbnVsbCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMudGlwYWJsZVJlZmVyZW5jZSA9IHRpcGFibGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge31cclxuXHJcbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZpZXdTcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpcGFibGVSZWZlcmVuY2UgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGlwU3BhY2UgPSB0aGlzLnRpcFRyYW5zZm9ybS5zcGFjZTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgZXh0ZW50cyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmV4dGVudHMuZ2V0SW50byhleHRlbnRzLCB2aWV3U3BhY2UpO1xyXG5cclxuICAgICAgICB0aGlzLnRpcGFibGVSZWZlcmVuY2UuZ2V0VGlwVHJhbnNmb3JtQXRJbnRvKHRoaXMudGlwVHJhbnNmb3JtLCB0aGlzLmRhdGEucGF0aFBvc2l0aW9uLmdldCgpKTtcclxuICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IHRpcFNwYWNlLmNvbnZlcnRMZW5ndGgodGhpcy50aXBUcmFuc2Zvcm0uc3Ryb2tlV2lkdGgsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgZXh0ZW50cy54ICs9IHN0cm9rZVdpZHRoICogdGhpcy5kYXRhLnBhdGhTdHJva2VGYWN0b3IuZ2V0KCk7XHJcbiAgICAgICAgZXh0ZW50cy55ICs9IHN0cm9rZVdpZHRoICogdGhpcy5kYXRhLnBhdGhTdHJva2VGYWN0b3IuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExlbmd0aCA9IHRpcFNwYWNlLmNvbnZlcnRMZW5ndGgodGhpcy50aXBUcmFuc2Zvcm0ucGF0aExlbmd0aCwgdmlld1NwYWNlKTtcclxuICAgICAgICBjb25zdCBwYXRoVGhyZXNob2xkID0gdGhpcy5kYXRhLnBhdGhUaHJlc2hvbGQuZ2V0KHZpZXdTcGFjZSk7XHJcbiAgICAgICAgaWYgKHBhdGhUaHJlc2hvbGQgPiAwICYmIHBhdGhMZW5ndGggPCBwYXRoVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIGV4dGVudHMuc2NhbGUoZWFzZS5vdXQocGF0aExlbmd0aCAvIHBhdGhUaHJlc2hvbGQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhbmdlbnQgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLnRpcFRyYW5zZm9ybS5wb3NpdGlvbi5nZXRJbnRvKHBvc2l0aW9uLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMudGlwVHJhbnNmb3JtLnRhbmdlbnQuZ2V0SW50byh0YW5nZW50LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLXRhbmdlbnQuYW5nbGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeFNjYWxlU2lnbiA9IHRoaXMuZGF0YS5pc1JldmVyc2VkLmdldCgpID8gLTEgOiArMTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVxyXG4gICAgICAgICAgICAubWFrZUlkZW50aXR5KClcclxuICAgICAgICAgICAgLnRyYW5zbGF0ZSh0aGlzLmRhdGEuYW5jaG9yLmdldCgpLCAwKVxyXG4gICAgICAgICAgICAuc2NhbGUoeFNjYWxlU2lnbiAqIGV4dGVudHMueCwgZXh0ZW50cy55KVxyXG4gICAgICAgICAgICAucm90YXRlKGFuZ2xlLCAncmFkJylcclxuICAgICAgICAgICAgLnRyYW5zbGF0ZVYocG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBwMCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwMyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgaW5zZXQgPSAtMSArIDIgKiB0aGlzLmRhdGEudGlwSW5zZXQuZ2V0KCk7XHJcbiAgICAgICAgcDAuc2V0KGluc2V0LCAwKS5hcHBseTJ4Myh0aGlzLnRyYW5zZm9ybSkucm91bmQoKTtcclxuICAgICAgICBwMS5zZXQoLTEsIDEpLmFwcGx5MngzKHRoaXMudHJhbnNmb3JtKS5yb3VuZCgpO1xyXG4gICAgICAgIHAyLnNldCgxLCAwKS5hcHBseTJ4Myh0aGlzLnRyYW5zZm9ybSkucm91bmQoKTtcclxuICAgICAgICBwMy5zZXQoLTEsIC0xKS5hcHBseTJ4Myh0aGlzLnRyYW5zZm9ybSkucm91bmQoKTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8ocDAueCwgcDAueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhwMS54LCBwMS55KTtcclxuICAgICAgICBjdHgubGluZVRvKHAyLngsIHAyLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8ocDMueCwgcDMueSk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0cm9rZS5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0cm9rZS5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZmlsbC5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbGwuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShleHRlbnRzKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UodGFuZ2VudCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHBvc2l0aW9uKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMSk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAyKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDMpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJUaXBhYmxlLCBDMlRpcFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zMi1nbG9iYWxzJztcclxuaW1wb3J0IHsgQzJMZW5ndGggfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItbGVuZ3RoJztcclxuaW1wb3J0IHsgQzJOdW1iZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuLi9iYXNlL2MyLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgeyBDMkFycm93VGlwIH0gZnJvbSAnLi4vYzItYXJyb3ctdGlwJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VOb2RlIH0gZnJvbSAnLi9jMi1iYXNlLW5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyRWRnZURhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGF0aEZyb206IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhUbzogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhcnREaXN0YW5jZTogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW5kRGlzdGFuY2U6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBhdGhUaHJlc2hvbGQ6IEMyTGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoRnJvbSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoVG8gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREaXN0YW5jZSA9IG5ldyBDMkxlbmd0aChzY2VuZSwgMCwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmVuZERpc3RhbmNlID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMucGF0aFRocmVzaG9sZCA9IG5ldyBDMkxlbmd0aChzY2VuZSwgMiwgdmlld1NwYWNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJva2UuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgICAgICB0aGlzLnN0cm9rZS53aWR0aC5zZXQoNCwgdmlld1NwYWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEMyQmFzZUVkZ2U8RGF0YSBleHRlbmRzIEMyRWRnZURhdGE+IGV4dGVuZHMgQzJHcmFwaGljc0VsZW1lbnQ8RGF0YT4gaW1wbGVtZW50cyBDMlRpcGFibGUge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0YXJ0OiBDMkJhc2VOb2RlO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVuZDogQzJCYXNlTm9kZTtcclxuICAgIHByb3RlY3RlZCBhcnJvd1RpcHM6IEMyQXJyb3dUaXBbXSA9IFtdO1xyXG4gICAgLy9wcm90ZWN0ZWQgbGFiZWxzOiBDMkVkZ2VMYWJlbFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCBkYXRhOiBEYXRhLCBzdGFydDogQzJCYXNlTm9kZSwgZW5kOiBDMkJhc2VOb2RlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmRhdGEudXBkYXRlLmxheWVyLnNldChNYXRoLm1heChzdGFydC5kYXRhLnVwZGF0ZS5sYXllci5nZXQoKSwgZW5kLmRhdGEudXBkYXRlLmxheWVyLmdldCgpKSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldFRpcFRyYW5zZm9ybUF0SW50byhkc3Q6IEMyVGlwVHJhbnNmb3JtLCB0OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgIGNyZWF0ZUFycm93VGlwKCk6IEMyQXJyb3dUaXAge1xyXG4gICAgICAgIGNvbnN0IGFycm93VGlwID0gbmV3IEMyQXJyb3dUaXAodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5hcnJvd1RpcHMucHVzaChhcnJvd1RpcCk7XHJcbiAgICAgICAgYXJyb3dUaXAuZGF0YS5wYXRoUG9zaXRpb24uc2V0KDEpO1xyXG4gICAgICAgIGFycm93VGlwLmRhdGEudXBkYXRlLmxheWVyLnNldCh0aGlzLmRhdGEudXBkYXRlLmxheWVyLmdldCgpICsgMSk7XHJcbiAgICAgICAgYXJyb3dUaXAuc2V0VGlwYWJsZVJlZmVyZW5jZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gYXJyb3dUaXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlwKGluZGV4OiBudW1iZXIpOiBDMkFycm93VGlwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJvd1RpcHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpcENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dUaXBzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hUaXAoaW5kZXg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hcnJvd1RpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dUaXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaFRpcEVsZW1lbnQoYXJyb3dUaXA6IEMyQXJyb3dUaXApOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYXJyb3dUaXBzLmluZGV4T2YoYXJyb3dUaXApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dUaXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaFRpcEVsZW1lbnRzKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuYXJyb3dUaXBzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXR0YWNoTGFiZWwobGFiZWw6IEMyRWRnZUxhYmVsKTogdGhpcyB7XHJcbiAgICAvLyAgICAgbGFiZWwuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgLy8gICAgIGxhYmVsLnNldEVkZ2VSZWZlcmVuY2UodGhpcyk7XHJcbiAgICAvLyAgICAgbGFiZWwubWFya0RpcnR5KCk7XHJcbiAgICAvLyAgICAgdGhpcy5sYWJlbHMucHVzaChsYWJlbCk7XHJcbiAgICAvLyAgICAgdGhpcy5tYXJrRGlydHkoKTtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBkZXRhY2hMYWJlbChsYWJlbDogQzJFZGdlTGFiZWwpOiB0aGlzIHtcclxuICAgIC8vICAgICBsYWJlbC5zZXRQYXJlbnQobnVsbCk7XHJcbiAgICAvLyAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxhYmVscy5pbmRleE9mKGxhYmVsKTtcclxuICAgIC8vICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcclxuICAgIC8vICAgICB0aGlzLmxhYmVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgLy8gICAgIGxhYmVsLm1hcmtEaXJ0eSgpO1xyXG4gICAgLy8gICAgIHRoaXMubWFya0RpcnR5KCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0U3RhcnQoKTogQzJCYXNlTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kKCk6IEMyQmFzZU5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlQXJyb3dUaXBzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUxheWVyID0gdGhpcy5kYXRhLnVwZGF0ZS5sYXllci5nZXQoKTtcclxuICAgICAgICBjb25zdCByZW5kZXJMYXllciA9IHRoaXMuZGF0YS5yZW5kZXIubGF5ZXIuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRW5hYmxlZCA9IHRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyRW5hYmxlZCA9IHRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgYXJyb3dUaXAgb2YgdGhpcy5hcnJvd1RpcHMpIHtcclxuICAgICAgICAgICAgYXJyb3dUaXAuZGF0YS5maWxsLmNvbG9yLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5zdHJva2UuY29sb3IpO1xyXG4gICAgICAgICAgICBhcnJvd1RpcC5kYXRhLmZpbGwub3BhY2l0eS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuc3Ryb2tlLm9wYWNpdHkpO1xyXG4gICAgICAgICAgICBhcnJvd1RpcC5kYXRhLnVwZGF0ZS5sYXllci5zZXQodXBkYXRlTGF5ZXIgKyAxKTtcclxuICAgICAgICAgICAgYXJyb3dUaXAuZGF0YS5yZW5kZXIubGF5ZXIuc2V0KHJlbmRlckxheWVyICsgMSk7XHJcbiAgICAgICAgICAgIGFycm93VGlwLmRhdGEuaXNFbmFibGVkLnNldCh1cGRhdGVFbmFibGVkKTtcclxuICAgICAgICAgICAgYXJyb3dUaXAuZGF0YS5yZW5kZXIuaXNFbmFibGVkLnNldChyZW5kZXJFbmFibGVkKTtcclxuICAgICAgICAgICAgYXJyb3dUaXAudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb3RlY3RlZCB1cGRhdGVMYWJlbHMoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgZm9yIChjb25zdCBsYWJlbCBvZiB0aGlzLmxhYmVscykge1xyXG4gICAgLy8gICAgICAgICBsYWJlbC51cGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJNYXQyeDMgfSBmcm9tICcuLi9jMi1tYXQyeDMnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMkN1cnZlIH0gZnJvbSAnLi9jMi1jdXJ2ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMyU0RGIHtcclxuICAgIGV2YWx1YXRlU0RGKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyO1xyXG4gICAgZXZhbHVhdGVTREZWKHA6IEMyVmVjMik6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ2lyY2xlU0RGIGltcGxlbWVudHMgQzJTREYge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNlbnRlcjogQzJWZWMyID0gbmV3IEMyVmVjMigwLCAwKTtcclxuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZXZhbHVhdGVTREYoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0geCAtIHRoaXMuY2VudGVyLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSB5IC0gdGhpcy5jZW50ZXIueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSAtIHRoaXMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlU0RGVihwOiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlU0RGKHAueCwgcC55KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDZW50ZXIoY2VudGVyOiBDMlZlYzIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNlbnRlci5jb3B5KGNlbnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlckludG8oZHN0OiBDMlZlYzIpOiB2b2lkIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLmNlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlNERlV0aWxzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGV2YWx1YXRlU0RGKHNkZjogQzJTREYsIGN1cnZlOiBDMkN1cnZlLCBjdXJ2ZVRyYW5zZm9ybTogQzJNYXQyeDMsIHQ6IG51bWJlciwgdG1wOiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGN1cnZlLmdldFBvaW50SW50byh0bXAsIHQpO1xyXG4gICAgICAgIHRtcC5hcHBseTJ4MyhjdXJ2ZVRyYW5zZm9ybSk7XHJcbiAgICAgICAgcmV0dXJuIHNkZi5ldmFsdWF0ZVNERlYodG1wKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmluZFBvaW50QXREaXN0YW5jZShcclxuICAgICAgICBzZGY6IEMyU0RGLFxyXG4gICAgICAgIGN1cnZlOiBDMkN1cnZlLFxyXG4gICAgICAgIGN1cnZlVHJhbnNmb3JtOiBDMk1hdDJ4MyxcclxuICAgICAgICBkaXN0YW5jZTogbnVtYmVyLFxyXG4gICAgICAgIHRNaW46IG51bWJlcixcclxuICAgICAgICB0TWF4OiBudW1iZXIsXHJcbiAgICAgICAgdG1wOiBDMlZlYzIsXHJcbiAgICAgICAgdG9sZXJhbmNlOiBudW1iZXIgPSAxZS0yLFxyXG4gICAgICAgIG1heEl0ZXJhdGlvbnM6IG51bWJlciA9IDMwLFxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdmFsdWVNaW4gPSB0aGlzLmV2YWx1YXRlU0RGKHNkZiwgY3VydmUsIGN1cnZlVHJhbnNmb3JtLCB0TWluLCB0bXApIC0gZGlzdGFuY2U7XHJcbiAgICAgICAgbGV0IHZhbHVlTWF4ID0gdGhpcy5ldmFsdWF0ZVNERihzZGYsIGN1cnZlLCBjdXJ2ZVRyYW5zZm9ybSwgdE1heCwgdG1wKSAtIGRpc3RhbmNlO1xyXG4gICAgICAgIGlmICh2YWx1ZU1pbiAqIHZhbHVlTWF4ID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4SXRlcmF0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRNaWQgPSAodE1pbiArIHRNYXgpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVNaWQgPSB0aGlzLmV2YWx1YXRlU0RGKHNkZiwgY3VydmUsIGN1cnZlVHJhbnNmb3JtLCB0TWlkLCB0bXApIC0gZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModmFsdWVNaWQpIDwgdG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdE1pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWVNaW4gKiB2YWx1ZU1pZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRNYXggPSB0TWlkO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVNYXggPSB2YWx1ZU1pZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRNaW4gPSB0TWlkO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVNaW4gPSB2YWx1ZU1pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRNaW4gKyB0TWF4KSAvIDI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJDdXJ2ZUxlbmd0aE1hcHBlciB9IGZyb20gJy4vYzItY3VydmUtbGVuZ3RoLW1hcHBlcic7XHJcbmltcG9ydCB7IEMyTWF0aFV0aWxzIH0gZnJvbSAnLi4vLi4vYzItbWF0aC11dGlscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJTYW1wbGVyTGVuZ3RoTWFwcGVyIGltcGxlbWVudHMgQzJDdXJ2ZUxlbmd0aE1hcHBlciB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2FtcGxlQ291bnQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBhcmNMZW5ndGhzOiBGbG9hdDMyQXJyYXk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2FtcGxlSW5wdXRWYWx1ZXM6IEZsb2F0MzJBcnJheTtcclxuICAgIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2FtcGxlQ291bnQ6IG51bWJlciA9IDgpIHtcclxuICAgICAgICB0aGlzLnNhbXBsZUNvdW50ID0gc2FtcGxlQ291bnQ7XHJcbiAgICAgICAgdGhpcy5hcmNMZW5ndGhzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNhbXBsZUNvdW50KTtcclxuICAgICAgICB0aGlzLnNhbXBsZUlucHV0VmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNhbXBsZUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCB1cGRhdGUoKTogdm9pZDtcclxuXHJcbiAgICBnZXRMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VEZyb21MZW5ndGgodGFyZ2V0TGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0YXJnZXRMZW5ndGggPD0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHRhcmdldExlbmd0aCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heEluZGV4ID0gdGhpcy5hcmNMZW5ndGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IGxvdyA9IDA7XHJcbiAgICAgICAgbGV0IGhpZ2ggPSBtYXhJbmRleDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgbWlkTGVuZ3RoID0gdGhpcy5hcmNMZW5ndGhzW21pZF07XHJcbiAgICAgICAgICAgIGlmIChtaWRMZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWlkTGVuZ3RoID4gdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkIC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmNMZW5ndGhzW2xvd10gPiB0YXJnZXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgbG93LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvdyA9IEMyTWF0aFV0aWxzLmNsYW1wKGxvdywgMCwgbWF4SW5kZXggLSAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEMyTWF0aFV0aWxzLnJlbWFwKFxyXG4gICAgICAgICAgICB0aGlzLmFyY0xlbmd0aHNbbG93XSxcclxuICAgICAgICAgICAgdGhpcy5hcmNMZW5ndGhzW2xvdyArIDFdLFxyXG4gICAgICAgICAgICB0aGlzLnNhbXBsZUlucHV0VmFsdWVzW2xvd10sXHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlSW5wdXRWYWx1ZXNbbG93ICsgMV0sXHJcbiAgICAgICAgICAgIHRhcmdldExlbmd0aCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRGcm9tVSh1OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRGcm9tTGVuZ3RoKHUgKiB0aGlzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VUZyb21UKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLmFyY0xlbmd0aHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgbG93ID0gMDtcclxuICAgICAgICBsZXQgaGlnaCA9IG1heEluZGV4O1xyXG5cclxuICAgICAgICB3aGlsZSAobG93IDwgaGlnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBtaWRUID0gdGhpcy5zYW1wbGVJbnB1dFZhbHVlc1ttaWRdO1xyXG4gICAgICAgICAgICBpZiAobWlkVCA8IHQpIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWlkVCA+IHQpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2ggPSBtaWQgLSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG93ID0gbWlkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2FtcGxlSW5wdXRWYWx1ZXNbbG93XSA+IHQpIHtcclxuICAgICAgICAgICAgbG93LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvdyA9IEMyTWF0aFV0aWxzLmNsYW1wKGxvdywgMCwgbWF4SW5kZXggLSAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgQzJNYXRoVXRpbHMucmVtYXAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZUlucHV0VmFsdWVzW2xvd10sXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZUlucHV0VmFsdWVzW2xvdyArIDFdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmNMZW5ndGhzW2xvd10sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyY0xlbmd0aHNbbG93ICsgMV0sXHJcbiAgICAgICAgICAgICAgICB0LFxyXG4gICAgICAgICAgICApIC8gdGhpcy5sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQ3ViaWNDdXJ2ZSB9IGZyb20gJy4uL2MyLWN1YmljLWN1cnZlJztcclxuaW1wb3J0IHsgQzJTYW1wbGVyTGVuZ3RoTWFwcGVyIH0gZnJvbSAnLi9jMi1zYW1wbGVyLWxlbmd0aC1tYXBwZXInO1xyXG5pbXBvcnQgdHlwZSB7IEMyUG9vbExpa2UgfSBmcm9tICcuLi8uLi9jMi1wb29sJztcclxuaW1wb3J0IHR5cGUgeyBDMlZlYzIgfSBmcm9tICcuLi8uLi9jMi12ZWMyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkJlemllckxlbmd0aE1hcHBlciBleHRlbmRzIEMyU2FtcGxlckxlbmd0aE1hcHBlciB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3VydmU6IEMyQ3ViaWNDdXJ2ZTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2ZWNQb29sOiBDMlBvb2xMaWtlPEMyVmVjMj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3VydmU6IEMyQ3ViaWNDdXJ2ZSwgdmVjUG9vbDogQzJQb29sTGlrZTxDMlZlYzI+LCBzYW1wbGVDb3VudDogbnVtYmVyID0gOCkge1xyXG4gICAgICAgIHN1cGVyKHNhbXBsZUNvdW50KTtcclxuICAgICAgICB0aGlzLmN1cnZlID0gY3VydmU7XHJcbiAgICAgICAgdGhpcy52ZWNQb29sID0gdmVjUG9vbDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcmV2UG9pbnQgPSB0aGlzLnZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY3VyclBvaW50ID0gdGhpcy52ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuY3VydmUuZ2V0UG9pbnRJbnRvKHByZXZQb2ludCwgMCk7XHJcbiAgICAgICAgdGhpcy5hcmNMZW5ndGhzWzBdID0gMDtcclxuICAgICAgICB0aGlzLnNhbXBsZUlucHV0VmFsdWVzWzBdID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJMZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zYW1wbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBpIC8gKHRoaXMuc2FtcGxlQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVJbnB1dFZhbHVlc1tpXSA9IHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3VydmUuZ2V0UG9pbnRJbnRvKGN1cnJQb2ludCwgdCk7XHJcbiAgICAgICAgICAgIGN1cnJMZW5ndGggKz0gcHJldlBvaW50LmRpc3RhbmNlKGN1cnJQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJjTGVuZ3Roc1tpXSA9IGN1cnJMZW5ndGg7XHJcbiAgICAgICAgICAgIHByZXZQb2ludC5jb3B5KGN1cnJQb2ludCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGN1cnJMZW5ndGg7XHJcbiAgICAgICAgdGhpcy52ZWNQb29sLnJlbGVhc2UocHJldlBvaW50KTtcclxuICAgICAgICB0aGlzLnZlY1Bvb2wucmVsZWFzZShjdXJyUG9pbnQpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQ3VydmUsIEMyU3ViZGl2aWRhYmxlQ3VydmUgfSBmcm9tICcuL2MyLWN1cnZlJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi4vYzItdmVjMic7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJDdWJpY0N1cnZlIGltcGxlbWVudHMgQzJDdXJ2ZSwgQzJTdWJkaXZpZGFibGVDdXJ2ZTxDMkN1YmljQ3VydmU+IHtcclxuICAgIHB1YmxpYyB4MDogbnVtYmVyO1xyXG4gICAgcHVibGljIHkwOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeDE6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5MTogbnVtYmVyO1xyXG4gICAgcHVibGljIHgyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTI6IG51bWJlcjtcclxuICAgIHB1YmxpYyB4MzogbnVtYmVyO1xyXG4gICAgcHVibGljIHkzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgeDA6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeTA6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeDE6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeTE6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeDI6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeTI6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeDM6IG51bWJlciA9IDAsXHJcbiAgICAgICAgeTM6IG51bWJlciA9IDAsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLngwID0geDA7XHJcbiAgICAgICAgdGhpcy55MCA9IHkwO1xyXG4gICAgICAgIHRoaXMueDEgPSB4MTtcclxuICAgICAgICB0aGlzLnkxID0geTE7XHJcbiAgICAgICAgdGhpcy54MiA9IHgyO1xyXG4gICAgICAgIHRoaXMueTIgPSB5MjtcclxuICAgICAgICB0aGlzLngzID0geDM7XHJcbiAgICAgICAgdGhpcy55MyA9IHkzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRyb2xQb2ludHMoXHJcbiAgICAgICAgeDA6IG51bWJlcixcclxuICAgICAgICB5MDogbnVtYmVyLFxyXG4gICAgICAgIHgxOiBudW1iZXIsXHJcbiAgICAgICAgeTE6IG51bWJlcixcclxuICAgICAgICB4MjogbnVtYmVyLFxyXG4gICAgICAgIHkyOiBudW1iZXIsXHJcbiAgICAgICAgeDM6IG51bWJlcixcclxuICAgICAgICB5MzogbnVtYmVyLFxyXG4gICAgKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54MCA9IHgwO1xyXG4gICAgICAgIHRoaXMueTAgPSB5MDtcclxuICAgICAgICB0aGlzLngxID0geDE7XHJcbiAgICAgICAgdGhpcy55MSA9IHkxO1xyXG4gICAgICAgIHRoaXMueDIgPSB4MjtcclxuICAgICAgICB0aGlzLnkyID0geTI7XHJcbiAgICAgICAgdGhpcy54MyA9IHgzO1xyXG4gICAgICAgIHRoaXMueTMgPSB5MztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb250cm9sUG9pbnRzVihwMDogQzJWZWMyLCBwMTogQzJWZWMyLCBwMjogQzJWZWMyLCBwMzogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54MCA9IHAwLng7XHJcbiAgICAgICAgdGhpcy55MCA9IHAwLnk7XHJcbiAgICAgICAgdGhpcy54MSA9IHAxLng7XHJcbiAgICAgICAgdGhpcy55MSA9IHAxLnk7XHJcbiAgICAgICAgdGhpcy54MiA9IHAyLng7XHJcbiAgICAgICAgdGhpcy55MiA9IHAyLnk7XHJcbiAgICAgICAgdGhpcy54MyA9IHAzLng7XHJcbiAgICAgICAgdGhpcy55MyA9IHAzLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhcnQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLngwID0geDtcclxuICAgICAgICB0aGlzLnkwID0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFydFYocDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54MCA9IHAueDtcclxuICAgICAgICB0aGlzLnkwID0gcC55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRyb2wxKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54MSA9IHg7XHJcbiAgICAgICAgdGhpcy55MSA9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udHJvbDFWKHA6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueDEgPSBwLng7XHJcbiAgICAgICAgdGhpcy55MSA9IHAueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb250cm9sMih4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueDIgPSB4O1xyXG4gICAgICAgIHRoaXMueTIgPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRyb2wyVihwOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLngyID0gcC54O1xyXG4gICAgICAgIHRoaXMueTIgPSBwLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW5kKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54MyA9IHg7XHJcbiAgICAgICAgdGhpcy55MyA9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW5kVihwOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLngzID0gcC54O1xyXG4gICAgICAgIHRoaXMueTMgPSBwLnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShzcmM6IEMyQ3ViaWNDdXJ2ZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueDAgPSBzcmMueDA7XHJcbiAgICAgICAgdGhpcy55MCA9IHNyYy55MDtcclxuICAgICAgICB0aGlzLngxID0gc3JjLngxO1xyXG4gICAgICAgIHRoaXMueTEgPSBzcmMueTE7XHJcbiAgICAgICAgdGhpcy54MiA9IHNyYy54MjtcclxuICAgICAgICB0aGlzLnkyID0gc3JjLnkyO1xyXG4gICAgICAgIHRoaXMueDMgPSBzcmMueDM7XHJcbiAgICAgICAgdGhpcy55MyA9IHNyYy55MztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250cm9sUG9pbnRzSW50byhkc3QwOiBDMlZlYzIsIGRzdDE6IEMyVmVjMiwgZHN0MjogQzJWZWMyLCBkc3QzOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3QwLnNldCh0aGlzLngwLCB0aGlzLnkwKTtcclxuICAgICAgICBkc3QxLnNldCh0aGlzLngxLCB0aGlzLnkxKTtcclxuICAgICAgICBkc3QyLnNldCh0aGlzLngyLCB0aGlzLnkyKTtcclxuICAgICAgICBkc3QzLnNldCh0aGlzLngzLCB0aGlzLnkzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGFydEludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMueDAsIHRoaXMueTApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVuZEludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMueDMsIHRoaXMueTMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRyb2wxSW50byhkc3Q6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGRzdC5zZXQodGhpcy54MSwgdGhpcy55MSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXRDb250cm9sMkludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMueDIsIHRoaXMueTIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXJ0VGFuZ2VudEludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMueDEgLSB0aGlzLngwLCB0aGlzLnkxIC0gdGhpcy55MCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kVGFuZ2VudEludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMueDMgLSB0aGlzLngyLCB0aGlzLnkzIC0gdGhpcy55Mik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9pbnRJbnRvKGRzdDogQzJWZWMyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgY29uc3QgYzAgPSBzICogcyAqIHM7XHJcbiAgICAgICAgY29uc3QgYzEgPSBzICogcyAqIHQgKiAzO1xyXG4gICAgICAgIGNvbnN0IGMyID0gcyAqIHQgKiB0ICogMztcclxuICAgICAgICBjb25zdCBjMyA9IHQgKiB0ICogdDtcclxuICAgICAgICBkc3Quc2V0KFxyXG4gICAgICAgICAgICBjMCAqIHRoaXMueDAgKyBjMSAqIHRoaXMueDEgKyBjMiAqIHRoaXMueDIgKyBjMyAqIHRoaXMueDMsXHJcbiAgICAgICAgICAgIGMwICogdGhpcy55MCArIGMxICogdGhpcy55MSArIGMyICogdGhpcy55MiArIGMzICogdGhpcy55MyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhbmdlbnRJbnRvKGRzdDogQzJWZWMyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgY29uc3QgYzAgPSBzICogcztcclxuICAgICAgICBjb25zdCBjMSA9IHMgKiB0ICogMjtcclxuICAgICAgICBjb25zdCBjMiA9IHQgKiB0O1xyXG4gICAgICAgIGRzdC5zZXQoXHJcbiAgICAgICAgICAgIGMwICogKHRoaXMueDEgLSB0aGlzLngwKSArIGMxICogKHRoaXMueDIgLSB0aGlzLngxKSArIGMyICogKHRoaXMueDMgLSB0aGlzLngyKSxcclxuICAgICAgICAgICAgYzAgKiAodGhpcy55MSAtIHRoaXMueTApICsgYzEgKiAodGhpcy55MiAtIHRoaXMueTEpICsgYzIgKiAodGhpcy55MyAtIHRoaXMueTIpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViZGl2aWRlTG93ZXJJbnRvKGRzdDogQzJDdWJpY0N1cnZlLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB4MDEgPSB0aGlzLngwICsgKHRoaXMueDEgLSB0aGlzLngwKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTAxID0gdGhpcy55MCArICh0aGlzLnkxIC0gdGhpcy55MCkgKiB0O1xyXG4gICAgICAgIGNvbnN0IHgxMiA9IHRoaXMueDEgKyAodGhpcy54MiAtIHRoaXMueDEpICogdDtcclxuICAgICAgICBjb25zdCB5MTIgPSB0aGlzLnkxICsgKHRoaXMueTIgLSB0aGlzLnkxKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDIzID0gdGhpcy54MiArICh0aGlzLngzIC0gdGhpcy54MikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkyMyA9IHRoaXMueTIgKyAodGhpcy55MyAtIHRoaXMueTIpICogdDtcclxuICAgICAgICBjb25zdCB4MDEyID0geDAxICsgKHgxMiAtIHgwMSkgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkwMTIgPSB5MDEgKyAoeTEyIC0geTAxKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDEyMyA9IHgxMiArICh4MjMgLSB4MTIpICogdDtcclxuICAgICAgICBjb25zdCB5MTIzID0geTEyICsgKHkyMyAtIHkxMikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHgwMTIzID0geDAxMiArICh4MTIzIC0geDAxMikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkwMTIzID0geTAxMiArICh5MTIzIC0geTAxMikgKiB0O1xyXG4gICAgICAgIGRzdC54MCA9IHRoaXMueDA7XHJcbiAgICAgICAgZHN0LnkwID0gdGhpcy55MDtcclxuICAgICAgICBkc3QueDEgPSB4MDE7XHJcbiAgICAgICAgZHN0LnkxID0geTAxO1xyXG4gICAgICAgIGRzdC54MiA9IHgwMTI7XHJcbiAgICAgICAgZHN0LnkyID0geTAxMjtcclxuICAgICAgICBkc3QueDMgPSB4MDEyMztcclxuICAgICAgICBkc3QueTMgPSB5MDEyMztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWJkaXZpZGVVcHBlckludG8oZHN0OiBDMkN1YmljQ3VydmUsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHgwMSA9IHRoaXMueDAgKyAodGhpcy54MSAtIHRoaXMueDApICogdDtcclxuICAgICAgICBjb25zdCB5MDEgPSB0aGlzLnkwICsgKHRoaXMueTEgLSB0aGlzLnkwKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDEyID0gdGhpcy54MSArICh0aGlzLngyIC0gdGhpcy54MSkgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkxMiA9IHRoaXMueTEgKyAodGhpcy55MiAtIHRoaXMueTEpICogdDtcclxuICAgICAgICBjb25zdCB4MjMgPSB0aGlzLngyICsgKHRoaXMueDMgLSB0aGlzLngyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTIzID0gdGhpcy55MiArICh0aGlzLnkzIC0gdGhpcy55MikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHgwMTIgPSB4MDEgKyAoeDEyIC0geDAxKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTAxMiA9IHkwMSArICh5MTIgLSB5MDEpICogdDtcclxuICAgICAgICBjb25zdCB4MTIzID0geDEyICsgKHgyMyAtIHgxMikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkxMjMgPSB5MTIgKyAoeTIzIC0geTEyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDAxMjMgPSB4MDEyICsgKHgxMjMgLSB4MDEyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTAxMjMgPSB5MDEyICsgKHkxMjMgLSB5MDEyKSAqIHQ7XHJcbiAgICAgICAgZHN0LngwID0geDAxMjM7XHJcbiAgICAgICAgZHN0LnkwID0geTAxMjM7XHJcbiAgICAgICAgZHN0LngxID0geDEyMztcclxuICAgICAgICBkc3QueTEgPSB5MTIzO1xyXG4gICAgICAgIGRzdC54MiA9IHgyMztcclxuICAgICAgICBkc3QueTIgPSB5MjM7XHJcbiAgICAgICAgZHN0LngzID0gdGhpcy54MztcclxuICAgICAgICBkc3QueTMgPSB0aGlzLnkzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YmRpdmlkZUF0SW50byhkc3RMb3dlcjogQzJDdWJpY0N1cnZlIHwgbnVsbCwgZHN0VXBwZXI6IEMyQ3ViaWNDdXJ2ZSB8IG51bGwsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHgwMSA9IHRoaXMueDAgKyAodGhpcy54MSAtIHRoaXMueDApICogdDtcclxuICAgICAgICBjb25zdCB5MDEgPSB0aGlzLnkwICsgKHRoaXMueTEgLSB0aGlzLnkwKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDEyID0gdGhpcy54MSArICh0aGlzLngyIC0gdGhpcy54MSkgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkxMiA9IHRoaXMueTEgKyAodGhpcy55MiAtIHRoaXMueTEpICogdDtcclxuICAgICAgICBjb25zdCB4MjMgPSB0aGlzLngyICsgKHRoaXMueDMgLSB0aGlzLngyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTIzID0gdGhpcy55MiArICh0aGlzLnkzIC0gdGhpcy55MikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHgwMTIgPSB4MDEgKyAoeDEyIC0geDAxKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTAxMiA9IHkwMSArICh5MTIgLSB5MDEpICogdDtcclxuICAgICAgICBjb25zdCB4MTIzID0geDEyICsgKHgyMyAtIHgxMikgKiB0O1xyXG4gICAgICAgIGNvbnN0IHkxMjMgPSB5MTIgKyAoeTIzIC0geTEyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeDAxMjMgPSB4MDEyICsgKHgxMjMgLSB4MDEyKSAqIHQ7XHJcbiAgICAgICAgY29uc3QgeTAxMjMgPSB5MDEyICsgKHkxMjMgLSB5MDEyKSAqIHQ7XHJcbiAgICAgICAgaWYgKGRzdExvd2VyKSB7XHJcbiAgICAgICAgICAgIGRzdExvd2VyLngwID0gdGhpcy54MDtcclxuICAgICAgICAgICAgZHN0TG93ZXIueTAgPSB0aGlzLnkwO1xyXG4gICAgICAgICAgICBkc3RMb3dlci54MSA9IHgwMTtcclxuICAgICAgICAgICAgZHN0TG93ZXIueTEgPSB5MDE7XHJcbiAgICAgICAgICAgIGRzdExvd2VyLngyID0geDAxMjtcclxuICAgICAgICAgICAgZHN0TG93ZXIueTIgPSB5MDEyO1xyXG4gICAgICAgICAgICBkc3RMb3dlci54MyA9IHgwMTIzO1xyXG4gICAgICAgICAgICBkc3RMb3dlci55MyA9IHkwMTIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHN0VXBwZXIpIHtcclxuICAgICAgICAgICAgZHN0VXBwZXIueDAgPSB4MDEyMztcclxuICAgICAgICAgICAgZHN0VXBwZXIueTAgPSB5MDEyMztcclxuICAgICAgICAgICAgZHN0VXBwZXIueDEgPSB4MTIzO1xyXG4gICAgICAgICAgICBkc3RVcHBlci55MSA9IHkxMjM7XHJcbiAgICAgICAgICAgIGRzdFVwcGVyLngyID0geDIzO1xyXG4gICAgICAgICAgICBkc3RVcHBlci55MiA9IHkyMztcclxuICAgICAgICAgICAgZHN0VXBwZXIueDMgPSB0aGlzLngzO1xyXG4gICAgICAgICAgICBkc3RVcHBlci55MyA9IHRoaXMueTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YmRpdmlkZUludG8oZHN0OiBDMkN1YmljQ3VydmUsIHQwOiBudW1iZXIsIHQxOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnN1YmRpdmlkZUxvd2VySW50byhkc3QsIHQxKTtcclxuICAgICAgICBkc3Quc3ViZGl2aWRlVXBwZXJJbnRvKGRzdCwgdDAgLyB0MSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmV6aWVyUG9pbnRJbnRvKGRzdDogQzJWZWMyLCBpbmRleDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBkc3Quc2V0KHRoaXMueDAsIHRoaXMueTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGRzdC5zZXQodGhpcy54MSwgdGhpcy55MSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZHN0LnNldCh0aGlzLngyLCB0aGlzLnkyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBkc3Quc2V0KHRoaXMueDMsIHRoaXMueTMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvdW5kaW5nQm94SW50byhkc3RNaW46IEMyVmVjMiwgZHN0TWF4OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3RNaW4uc2V0KE1hdGgubWluKHRoaXMueDAsIHRoaXMueDEsIHRoaXMueDIsIHRoaXMueDMpLCBNYXRoLm1pbih0aGlzLnkwLCB0aGlzLnkxLCB0aGlzLnkyLCB0aGlzLnkzKSk7XHJcbiAgICAgICAgZHN0TWF4LnNldChNYXRoLm1heCh0aGlzLngwLCB0aGlzLngxLCB0aGlzLngyLCB0aGlzLngzKSwgTWF0aC5tYXgodGhpcy55MCwgdGhpcy55MSwgdGhpcy55MiwgdGhpcy55MykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2xQb2ludHNGbGF0bmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gdGhpcy54MyAtIHRoaXMueDA7XHJcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkzIC0gdGhpcy55MDtcclxuICAgICAgICBjb25zdCBkZW5vbSA9IE1hdGgubWF4KE1hdGguaHlwb3QoZHgsIGR5KSwgMWUtMTIpOyAvLyBcdTAwRTl2aXRlciBkaXYwXHJcblxyXG4gICAgICAgIGNvbnN0IGQxID0gTWF0aC5hYnMoZHggKiAodGhpcy55MCAtIHRoaXMueTEpIC0gKHRoaXMueDAgLSB0aGlzLngxKSAqIGR5KSAvIGRlbm9tO1xyXG4gICAgICAgIGNvbnN0IGQyID0gTWF0aC5hYnMoZHggKiAodGhpcy55MCAtIHRoaXMueTIpIC0gKHRoaXMueDAgLSB0aGlzLngyKSAqIGR5KSAvIGRlbm9tO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoZDEsIGQyKTsgLy8gZGlzdGFuY2UgbWF4aW1hbGUgYXV4IHBvaW50cyBkZSBjb250clx1MDBGNGxlXHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEMyU0RGVXRpbHMgfSBmcm9tICcuLi8uLi9tYXRoL2N1cnZlL2MyLXNkZic7XHJcbmltcG9ydCB7IEMyQmV6aWVyTGVuZ3RoTWFwcGVyIH0gZnJvbSAnLi4vLi4vbWF0aC9jdXJ2ZS9sZW5ndGgtbWFwcGVyL2MyLWJlemllci1sZW5ndGgtbWFwcGVyJztcclxuaW1wb3J0IHsgQzJDdWJpY0N1cnZlIH0gZnJvbSAnLi4vLi4vbWF0aC9jdXJ2ZS9jMi1jdWJpYy1jdXJ2ZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uLy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJUaXBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi9zaGFyZWQvczItZ2xvYmFscyc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyQmFzZUVkZ2UsIEMyRWRnZURhdGEgfSBmcm9tICcuL2MyLWJhc2UtZWRnZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlTm9kZSB9IGZyb20gJy4vYzItYmFzZS1ub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkN1YmljRWRnZURhdGEgZXh0ZW5kcyBDMkVkZ2VEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdGFydEFuZ2xlOiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBlbmRBbmdsZTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYmVuZEFuZ2xlOiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdGFydFRlbnNpb246IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGVuZFRlbnNpb246IEMyTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIC1JbmZpbml0eSk7XHJcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IG5ldyBDMk51bWJlcihzY2VuZSwgLUluZmluaXR5KTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGVuc2lvbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgMC4zKTtcclxuICAgICAgICB0aGlzLmVuZFRlbnNpb24gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDAuMyk7XHJcbiAgICAgICAgdGhpcy5iZW5kQW5nbGUgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJDdWJpY0VkZ2UgZXh0ZW5kcyBDMkJhc2VFZGdlPEMyQ3ViaWNFZGdlRGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGN1cnZlOiBDMkN1YmljQ3VydmU7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbGVuZ3RoTWFwcGVyOiBDMkJlemllckxlbmd0aE1hcHBlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHN0YXJ0OiBDMkJhc2VOb2RlLCBlbmQ6IEMyQmFzZU5vZGUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyQ3ViaWNFZGdlRGF0YShzY2VuZSksIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIHRoaXMuY3VydmUgPSBuZXcgQzJDdWJpY0N1cnZlKCk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGhNYXBwZXIgPSBuZXcgQzJCZXppZXJMZW5ndGhNYXBwZXIodGhpcy5jdXJ2ZSwgc2NlbmUuZ2V0VmVjUG9vbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXBUcmFuc2Zvcm1BdEludG8oZHN0OiBDMlRpcFRyYW5zZm9ybSwgdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLnNjZW5lLmdldFdvcmxkU3BhY2UoKTtcclxuICAgICAgICB0ID0gdGhpcy5sZW5ndGhNYXBwZXIuZ2V0VEZyb21VKHQpO1xyXG4gICAgICAgIGRzdC5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIGRzdC5wYXRoTGVuZ3RoID0gdGhpcy5sZW5ndGhNYXBwZXIuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgZHN0LnN0cm9rZVdpZHRoID0gdGhpcy5kYXRhLnN0cm9rZS53aWR0aC5nZXQoc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuY3VydmUuZ2V0UG9pbnRJbnRvKGRzdC5wb3NpdGlvbi52YWx1ZSwgdCk7XHJcbiAgICAgICAgdGhpcy5jdXJ2ZS5nZXRUYW5nZW50SW50byhkc3QudGFuZ2VudC52YWx1ZSwgdCk7XHJcbiAgICAgICAgZHN0LnBvc2l0aW9uLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgZHN0LnRhbmdlbnQuc3BhY2UgPSBzcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlQ3VydmUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLnNjZW5lLmdldFdvcmxkU3BhY2UoKTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgcDAgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwMiA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDMgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRtcCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5nZXRDZW50ZXJJbnRvKHAwLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5lbmQuZ2V0Q2VudGVySW50byhwMywgc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gcDAuZGlzdGFuY2UocDMpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8PSAxZS02KSB7XHJcbiAgICAgICAgICAgIHAxLnNldCgwLCAwKTtcclxuICAgICAgICAgICAgcDIuc2V0KDAsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLmNvcHkocDMpLnN1YlYocDApO1xyXG4gICAgICAgICAgICBwMS5zY2FsZSgxIC8gZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICBwMi5jb3B5KHAxKS5uZWdhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc3RhcnRBbmdsZS5nZXQoKSAhPT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHAxLnNldFBvbGFyKHRoaXMuZGF0YS5zdGFydEFuZ2xlLmdldCgpLCAxLCAnZGVnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZW5kQW5nbGUuZ2V0KCkgIT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICBwMi5zZXRQb2xhcih0aGlzLmRhdGEuZW5kQW5nbGUuZ2V0KCksIDEsICdkZWcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmVuZEFuZ2xlID0gdGhpcy5kYXRhLmJlbmRBbmdsZS5nZXQoKSAhPT0gLUluZmluaXR5ID8gdGhpcy5kYXRhLmJlbmRBbmdsZS5nZXQoKSA6IDA7XHJcbiAgICAgICAgcDEucm90YXRlKC1iZW5kQW5nbGUsICdkZWcnKTtcclxuICAgICAgICBwMi5yb3RhdGUoK2JlbmRBbmdsZSwgJ2RlZycpO1xyXG5cclxuICAgICAgICBwMS5zY2FsZSh0aGlzLmRhdGEuc3RhcnRUZW5zaW9uLmdldCgpICogZGlzdGFuY2UpLmFkZFYocDApO1xyXG4gICAgICAgIHAyLnNjYWxlKHRoaXMuZGF0YS5lbmRUZW5zaW9uLmdldCgpICogZGlzdGFuY2UpLmFkZFYocDMpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnZlLnNldENvbnRyb2xQb2ludHNWKHAwLCBwMSwgcDIsIHAzKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2RmMCA9IHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgY29uc3Qgc2RmMSA9IHRoaXMuZW5kO1xyXG4gICAgICAgIGNvbnN0IHNwYWNlMCA9IHRoaXMuc3RhcnQuZGF0YS5zcGFjZS5nZXQoKTtcclxuICAgICAgICBjb25zdCBzcGFjZTEgPSB0aGlzLmVuZC5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGQwID0gdGhpcy5kYXRhLnN0YXJ0RGlzdGFuY2UuZ2V0KHNwYWNlMCk7XHJcbiAgICAgICAgY29uc3QgZDEgPSB0aGlzLmRhdGEuZW5kRGlzdGFuY2UuZ2V0KHNwYWNlMSk7XHJcbiAgICAgICAgY29uc3QgbWF0ID0gdGhpcy5zY2VuZS5hY3F1aXJlTWF0MngzKCk7XHJcbiAgICAgICAgc3BhY2UuZ2V0VGhpc1RvU3BhY2VJbnRvKG1hdCwgc3BhY2UwKTtcclxuICAgICAgICBsZXQgdDAgPSBDMlNERlV0aWxzLmZpbmRQb2ludEF0RGlzdGFuY2Uoc2RmMCwgdGhpcy5jdXJ2ZSwgbWF0LCBkMCwgMCwgMSwgdG1wKTtcclxuICAgICAgICBzcGFjZS5nZXRUaGlzVG9TcGFjZUludG8obWF0LCBzcGFjZTEpO1xyXG4gICAgICAgIGxldCB0MSA9IEMyU0RGVXRpbHMuZmluZFBvaW50QXREaXN0YW5jZShzZGYxLCB0aGlzLmN1cnZlLCBtYXQsIGQxLCAwLCAxLCB0bXApO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhVCA9IHQxIC0gdDA7XHJcbiAgICAgICAgdDAgKz0gdGhpcy5kYXRhLnBhdGhGcm9tLmdldCgpICogZGVsdGFUO1xyXG4gICAgICAgIHQxIC09ICgxIC0gdGhpcy5kYXRhLnBhdGhUby5nZXQoKSkgKiBkZWx0YVQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3VydmUuc3ViZGl2aWRlSW50byh0aGlzLmN1cnZlLCB0MCwgdDEpO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoTWFwcGVyLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMSk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAyKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0bXApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVsZWFzZU1hdDJ4MyhtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJ2ZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQXJyb3dUaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3Ryb2tlLmlzRW5hYmxlZC5nZXQoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuc2NlbmUuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhUaHJlc2hvbGQgPSB0aGlzLmRhdGEucGF0aFRocmVzaG9sZC5nZXQodmlld1NwYWNlKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzcGFjZS5jb252ZXJ0TGVuZ3RoKHRoaXMubGVuZ3RoTWFwcGVyLmdldExlbmd0aCgpLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGlmIChwYXRoVGhyZXNob2xkID4gMCAmJiBsZW5ndGggPCBwYXRoVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwMCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwMyA9IHZlY1Bvb2wuZ2V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VydmUuZ2V0Q29udHJvbFBvaW50c0ludG8ocDAsIHAxLCBwMiwgcDMpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAwLCBwMCwgdmlld1NwYWNlKTtcclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMSwgcDEsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHAyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCBwMywgdmlld1NwYWNlKTtcclxuICAgICAgICBwMC5yb3VuZCgpO1xyXG4gICAgICAgIHAxLnJvdW5kKCk7XHJcbiAgICAgICAgcDIucm91bmQoKTtcclxuICAgICAgICBwMy5yb3VuZCgpO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhwMC54LCBwMC55KTtcclxuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnN0cm9rZS5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAwKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDEpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQzJFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWVudW0nO1xyXG5pbXBvcnQgeyBDMkV4dGVudHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItZXh0ZW50cyc7XHJcbmltcG9ydCB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMkFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1hbmNob3InO1xyXG5pbXBvcnQgeyBDMlNwYWNlUmVmIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLXNwYWNlLXJlZic7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHsgQzJGaWxsRGF0YSwgQzJGb250RGF0YSwgQzJHcmFwaGljc0RhdGEsIEMyU3Ryb2tlRGF0YSB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudC1kYXRhJztcclxuXHJcbmV4cG9ydCB0eXBlIEMyTm9kZVNoYXBlID0gJ25vbmUnIHwgJ3JlY3RhbmdsZScgfCAnY2lyY2xlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMk5vZGVEYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNwYWNlOiBDMlNwYWNlUmVmO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBDMlBvaW50O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG1pbkV4dGVudHM6IEMyRXh0ZW50cztcclxuICAgIHB1YmxpYyByZWFkb25seSBhbmNob3I6IEMyQW5jaG9yO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGJhY2tncm91bmQ6IEMyTm9kZUJhY2tncm91bmREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRleHQ6IEMyTm9kZVRleHREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBhZGRpbmc6IEMyRXh0ZW50cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRTcGFjZSA9IHNjZW5lLmdldFdvcmxkU3BhY2UoKTtcclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSBzY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gbmV3IEMyU3BhY2VSZWYoc2NlbmUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQzJQb2ludChzY2VuZSwgMCwgMCwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3IgPSBuZXcgQzJBbmNob3Ioc2NlbmUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMubWluRXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDAsIDAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEMyTm9kZUJhY2tncm91bmREYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnRleHQgPSBuZXcgQzJOb2RlVGV4dERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMucGFkZGluZyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDEwLCA1LCB2aWV3U3BhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJOb2RlQmFja2dyb3VuZERhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGw6IEMyRmlsbERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29ybmVyUmFkaXVzOiBDMkxlbmd0aDtcclxuICAgIHB1YmxpYyByZWFkb25seSBzaGFwZTogQzJFbnVtPEMyTm9kZVNoYXBlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSBzY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMuY29ybmVyUmFkaXVzID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCA1LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc2hhcGUgPSBuZXcgQzJFbnVtPEMyTm9kZVNoYXBlPihzY2VuZSwgJ3JlY3RhbmdsZScpO1xyXG5cclxuICAgICAgICB0aGlzLnN0cm9rZS5vcGFjaXR5LnNldCgxKTtcclxuICAgICAgICB0aGlzLmZpbGwub3BhY2l0eS5zZXQoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMk5vZGVUZXh0RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuICAgIC8vcHVibGljIHJlYWRvbmx5IHRyYW5zZm9ybTogQzJUcmFuc2Zvcm07XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGZvbnQ6IEMyRm9udERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaG9yaXpvbnRhbEFsaWduOiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJ0aWNhbEFsaWduOiBDMk51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IG5ldyBDMkZvbnREYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgMCk7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJva2UuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uLy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMkZpbGxEYXRhLCBDMkZvbnREYXRhLCBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgeyBDMk9mZnNldCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1vZmZzZXQnO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMkdyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlRleHREYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGw6IEMyRmlsbERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IEMyUG9pbnQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb2Zmc2V0OiBDMk9mZnNldDtcclxuICAgIHB1YmxpYyByZWFkb25seSBmb250OiBDMkZvbnREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRleHRBbmNob3I6IEMyTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgQzJGb250RGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFdvcmxkU3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgQzJPZmZzZXQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDApO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLmlzRW5hYmxlZC5zZXQoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDMkJhc2VUZXh0PERhdGEgZXh0ZW5kcyBDMlRleHREYXRhPiBleHRlbmRzIEMyR3JhcGhpY3NFbGVtZW50PERhdGE+IHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2VudGVyOiBDMlBvaW50O1xyXG4gICAgcHJvdGVjdGVkIGFzY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBkZXNjZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgZGF0YTogRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmV4dGVudHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQzJQb2ludChzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50ZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY2VudGVyLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgoc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpLmNvbnZlcnRMZW5ndGgodGhpcy53aWR0aCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoUHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250QXNjZW50KHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKS5jb252ZXJ0TGVuZ3RoKHRoaXMuYXNjZW50LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9udEFzY2VudFB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnREZXNjZW50KHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKS5jb252ZXJ0TGVuZ3RoKHRoaXMuZGVzY2VudCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnREZXNjZW50UHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnRIZWlnaHQoc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpLmNvbnZlcnRMZW5ndGgodGhpcy5hc2NlbnQgKyB0aGlzLmRlc2NlbnQsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250SGVpZ2h0UHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc2NlbnQgKyB0aGlzLmRlc2NlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgIC8vICAgICBjb25zdCBmb250QXNjZW50ID0gdGhpcy5nZXRGb250QXNjZW50UHgoKTtcclxuICAgIC8vICAgICBjb25zdCBmb250RGVzY2VudCA9IHRoaXMuZ2V0Rm9udERlc2NlbnRQeCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aFB4KCk7XHJcbiAgICAvLyAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgIC8vICAgICB0aGlzLmdldFBvc2l0aW9uSW50byhkc3QsIHZpZXdTcGFjZSk7XHJcbiAgICAvLyAgICAgZHN0LnkgKz0gLTAuNSAqIChmb250QXNjZW50IC0gZm9udERlc2NlbnQpO1xyXG4gICAgLy8gICAgIGRzdC54ICs9IC0wLjUgKiB0aGlzLmRhdGEudGV4dEFuY2hvci5nZXQoKSAqIHdpZHRoO1xyXG4gICAgLy8gICAgIHZpZXdTcGFjZS5jb252ZXJ0UG9pbnRJbnRvKGRzdCwgZHN0LngsIGRzdC55LCBzcGFjZSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyQmFzZVRleHQsIEMyVGV4dERhdGEgfSBmcm9tICcuL2MyLWJhc2UtdGV4dCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJCYXNlUGxhaW5UZXh0PERhdGEgZXh0ZW5kcyBDMlRleHREYXRhPiBleHRlbmRzIEMyQmFzZVRleHQ8RGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIG1ldHJpY3M6IFRleHRNZXRyaWNzIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCBkYXRhOiBEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLnNjZW5lLmdldENvbnRleHQoKTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5mb250LmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHRoaXMuY29udGVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXNjZW50ID0gdGhpcy5tZXRyaWNzLmZvbnRCb3VuZGluZ0JveEFzY2VudDtcclxuICAgICAgICB0aGlzLmRlc2NlbnQgPSB0aGlzLm1ldHJpY3MuZm9udEJvdW5kaW5nQm94RGVzY2VudDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tZXRyaWNzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICh0aGlzLm1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgdGhpcy5tZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpIC8gMixcclxuICAgICAgICAgICAgdmlld1NwYWNlLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRQb3NpdGlvbkludG8oY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNlbnRlci55ICs9IC0wLjUgKiAodGhpcy5hc2NlbnQgLSB0aGlzLmRlc2NlbnQpO1xyXG4gICAgICAgIGNlbnRlci54ICs9IC0wLjUgKiB0aGlzLmRhdGEudGV4dEFuY2hvci5nZXQoKSAqIHRoaXMud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyLnNldFYoY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjZW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdmlld1NwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmZvbnQuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBleHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhwb3NpdGlvbiwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEub2Zmc2V0LmdldEludG8ob2Zmc2V0LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5nZXRJbnRvKGV4dGVudHMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgcG9zaXRpb24uYWRkVihvZmZzZXQpO1xyXG4gICAgICAgIHBvc2l0aW9uLnggLT0gdGhpcy5kYXRhLnRleHRBbmNob3IuZ2V0KCkgKiBleHRlbnRzLng7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc3Ryb2tlLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3Ryb2tlLmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KHRoaXMuY29udGVudCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZmlsbC5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbGwuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuY29udGVudCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb3NpdGlvbik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKG9mZnNldCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGV4dGVudHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJQbGFpblRleHQgZXh0ZW5kcyBDMkJhc2VQbGFpblRleHQ8QzJUZXh0RGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlRleHREYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEMyQ2lyY2xlU0RGLCB0eXBlIEMyU0RGIH0gZnJvbSAnLi4vLi4vbWF0aC9jdXJ2ZS9jMi1zZGYnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi8uLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHR5cGUgeyBDMlZlYzIgfSBmcm9tICcuLi8uLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuaW1wb3J0IHsgQzJQb2ludCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1wb2ludCc7XHJcbmltcG9ydCB7IEMyRWxlbWVudCwgdHlwZSBDMkhhc0JvdW5kcyB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyUGF0aENpcmNsZSB9IGZyb20gJy4uL2MyLXBhdGgtY2lyY2xlJztcclxuaW1wb3J0IHsgQzJQYXRoUmVjdCB9IGZyb20gJy4uL2MyLXBhdGgtcmVjdCc7XHJcbmltcG9ydCB7IEMyTm9kZURhdGEsIHR5cGUgQzJOb2RlU2hhcGUgfSBmcm9tICcuL2MyLW5vZGUtZGF0YSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJCYXNlTm9kZSBleHRlbmRzIEMyRWxlbWVudDxDMk5vZGVEYXRhPiBpbXBsZW1lbnRzIEMySGFzQm91bmRzLCBDMlNERiB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2VudGVyOiBDMlBvaW50O1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4dGVudHM6IEMyRXh0ZW50cztcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBkZWZhdWx0U0RGOiBDMkNpcmNsZVNERiA9IG5ldyBDMkNpcmNsZVNERigpO1xyXG4gICAgcHJvdGVjdGVkIGJhY2tncm91bmQ6IEMyUGF0aFJlY3QgfCBDMlBhdGhDaXJjbGUgfCBudWxsID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBwcmV2U2hhcGU6IEMyTm9kZVNoYXBlID0gJ25vbmUnO1xyXG4gICAgLy9wcm90ZWN0ZWQgZWRnZXM6IEMyQmFzZUVkZ2VbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBuZXcgQzJOb2RlRGF0YShzY2VuZSkpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBDMlBvaW50KHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRXb3JsZFNwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuZGF0YS51cGRhdGUubGF5ZXIub3JkZXJJbkxheWVyID0gMDtcclxuICAgICAgICB0aGlzLmRhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb25JbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2VudGVyLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNlbnRlci5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCB0aGlzLmRhdGEucG9zaXRpb24sIHRoaXMuZXh0ZW50cywgYW5jaG9yWCwgYW5jaG9yWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWluRXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm1pbkV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdHRhY2hFZGdlKGVkZ2U6IEMyQmFzZUVkZ2UpOiB0aGlzIHtcclxuICAgIC8vICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZSk7XHJcbiAgICAvLyAgICAgZWRnZS5tYXJrRGlydHkoKTtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBkZXRhY2hFZGdlKGVkZ2U6IEMyQmFzZUVkZ2UpOiB0aGlzIHtcclxuICAgIC8vICAgICBjb25zdCBpbmRleCA9IHRoaXMuZWRnZXMuaW5kZXhPZihlZGdlKTtcclxuICAgIC8vICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcclxuICAgIC8vICAgICB0aGlzLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyAgICAgZWRnZS5tYXJrRGlydHkoKTtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcztcclxuICAgIC8vIH1cclxuXHJcbiAgICBldmFsdWF0ZVNERih4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kLmV2YWx1YXRlU0RGKHgsIHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRTREYuZXZhbHVhdGVTREYoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlU0RGVihwOiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlU0RGKHAueCwgcC55KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kKCk6IEMyUGF0aENpcmNsZSB8IEMyUGF0aFJlY3QgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGVCYWNrZ3JvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZTaGFwZSAhPT0gdGhpcy5kYXRhLmJhY2tncm91bmQuc2hhcGUudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2U2hhcGUgPSB0aGlzLmRhdGEuYmFja2dyb3VuZC5zaGFwZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kICE9PSBudWxsKSB0aGlzLnNjZW5lLmRldGFjaEVsZW1lbnQodGhpcy5iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5iYWNrZ3JvdW5kLnNoYXBlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBDMlBhdGhSZWN0KHRoaXMuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQzJQYXRoQ2lyY2xlKHRoaXMuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgYmFja0RhdGEgPSB0aGlzLmJhY2tncm91bmQuZGF0YTtcclxuICAgICAgICBjb25zdCB0aGlzRGF0YSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgYmFja0RhdGEuc3BhY2Uuc2V0KHRoaXNEYXRhLnNwYWNlLmdldCgpKTtcclxuICAgICAgICBiYWNrRGF0YS5wb3NpdGlvbi5jb3B5KHRoaXMuY2VudGVyKTtcclxuICAgICAgICBiYWNrRGF0YS5zdHJva2UuY29weUlmVW5sb2NrZWQodGhpc0RhdGEuYmFja2dyb3VuZC5zdHJva2UpO1xyXG4gICAgICAgIGJhY2tEYXRhLmZpbGwuY29weUlmVW5sb2NrZWQodGhpc0RhdGEuYmFja2dyb3VuZC5maWxsKTtcclxuICAgICAgICBiYWNrRGF0YS5vcGFjaXR5LmNvcHlJZlVubG9ja2VkKHRoaXNEYXRhLmJhY2tncm91bmQub3BhY2l0eSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTGF5ZXIgPSB0aGlzRGF0YS51cGRhdGUubGF5ZXI7XHJcbiAgICAgICAgYmFja0RhdGEudXBkYXRlLmxheWVyLnNldCh1cGRhdGVMYXllci5nZXQoKSk7XHJcbiAgICAgICAgYmFja0RhdGEudXBkYXRlLmxheWVyLm9yZGVySW5MYXllciA9IDI7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGF5ZXIgPSB0aGlzRGF0YS5yZW5kZXIubGF5ZXI7XHJcbiAgICAgICAgYmFja0RhdGEucmVuZGVyLmxheWVyLnNldChyZW5kZXJMYXllci5nZXQoKSk7XHJcbiAgICAgICAgYmFja0RhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQgaW5zdGFuY2VvZiBDMlBhdGhSZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIFJlY3RhbmdsZVxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQuZGF0YS5leHRlbnRzLmNvcHkodGhpcy5leHRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRhdGEuYW5jaG9yLnNldCgwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRhdGEuY29ybmVyUmFkaXVzLmNvcHlJZlVubG9ja2VkKHRoaXNEYXRhLmJhY2tncm91bmQuY29ybmVyUmFkaXVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZCBpbnN0YW5jZW9mIEMyUGF0aENpcmNsZSkge1xyXG4gICAgICAgICAgICAvLyBDaXJjbGVcclxuICAgICAgICAgICAgdGhpcy5leHRlbnRzLmdldE1heExlbmd0aEludG8odGhpcy5iYWNrZ3JvdW5kLmRhdGEucmFkaXVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgdXBkYXRlRWRnZXMoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgZm9yIChjb25zdCBlZGdlIG9mIHRoaXMuZWRnZXMpIHtcclxuICAgIC8vICAgICAgICAgZWRnZS5tYXJrRGlydHkoKTtcclxuICAgIC8vICAgICAgICAgZWRnZS51cGRhdGUoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uLy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyT2Zmc2V0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW9mZnNldCc7XHJcbmltcG9ydCB7IEMyUGxhaW5UZXh0IH0gZnJvbSAnLi4vdGV4dC9jMi1wbGFpbi10ZXh0JztcclxuaW1wb3J0IHsgQzJCYXNlTm9kZSB9IGZyb20gJy4vYzItYmFzZS1ub2RlJztcclxuXHJcbmNsYXNzIEMyUGxhaW5Ob2RlU3RhdGUge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRleHQ6IEMyUGxhaW5UZXh0O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9mZnNldDogQzJPZmZzZXQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IEMyUGxhaW5UZXh0KHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBDMk9mZnNldChzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlBsYWluTm9kZSBleHRlbmRzIEMyQmFzZU5vZGUge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0YXRlczogUmVjb3JkPHN0cmluZywgQzJQbGFpbk5vZGVTdGF0ZT4gPSB7fTtcclxuICAgIHByb3RlY3RlZCBzdGF0ZUluZGV4OiBudW1iZXIgPSAtMTtcclxuICAgIHByb3RlY3RlZCBjdXJyS2V5OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlcykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKGtleTogc3RyaW5nKTogQzJQbGFpblRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlc1trZXldLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0YXRlKHZhbHVlOiBzdHJpbmcpOiBDMlBsYWluVGV4dCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVzW3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNbdmFsdWVdLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBuZXcgQzJQbGFpbk5vZGVTdGF0ZSh0aGlzLnNjZW5lKTtcclxuXHJcbiAgICAgICAgY29udGVudC50ZXh0LnNldENvbnRlbnQodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHRleHREYXRhID0gY29udGVudC50ZXh0LmRhdGE7XHJcbiAgICAgICAgdGV4dERhdGEuaXNFbmFibGVkLnNldCh0cnVlKTtcclxuICAgICAgICB0ZXh0RGF0YS51cGRhdGUubGF5ZXIuc2V0KHRoaXMuZGF0YS51cGRhdGUubGF5ZXIuZ2V0KCkpO1xyXG4gICAgICAgIHRleHREYXRhLnVwZGF0ZS5sYXllci5vcmRlckluTGF5ZXIgPSAwO1xyXG5cclxuICAgICAgICB0ZXh0RGF0YS5yZW5kZXIubGF5ZXIudmFsdWUgPSB0aGlzLmRhdGEucmVuZGVyLmxheWVyLnZhbHVlO1xyXG4gICAgICAgIHRleHREYXRhLnJlbmRlci5sYXllci5vcmRlckluTGF5ZXIgPSAxO1xyXG5cclxuICAgICAgICB0ZXh0RGF0YS5wb3NpdGlvbi5jb3B5SWZVbmxvY2tlZCh0aGlzLmNlbnRlcik7XHJcbiAgICAgICAgdGV4dERhdGEuZm9udC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEudGV4dC5mb250KTtcclxuICAgICAgICB0ZXh0RGF0YS5maWxsLmNvbG9yLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS50ZXh0LmZpbGwuY29sb3IpO1xyXG4gICAgICAgIHRleHREYXRhLmZpbGwub3BhY2l0eS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEudGV4dC5maWxsLm9wYWNpdHkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlc1t2YWx1ZV0gPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuY3VycktleSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50LnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5pbWF0ZUNoYW5nZVN0YXRlKFxyXG4gICAgLy8gICAgIGtleTogc3RyaW5nLFxyXG4gICAgLy8gICAgIGFuaW1hdG9yOiBDMlN0ZXBBbmltYXRvcixcclxuICAgIC8vICAgICBvcHRpb25zOiB7IHRpbWVMYWJlbD86IHN0cmluZzsgdGltZU9mZnNldD86IG51bWJlcjsgZHVyYXRpb24/OiBudW1iZXI7IHBvc2l0aW9uT2Zmc2V0PzogQzJPZmZzZXQgfSA9IHt9LFxyXG4gICAgLy8gKTogdm9pZCB7XHJcbiAgICAvLyAgICAgY29uc3QgdGltZUxhYmVsID0gYW5pbWF0b3IuZW5zdXJlTGFiZWwob3B0aW9ucy50aW1lTGFiZWwpO1xyXG4gICAgLy8gICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBvcHRpb25zLnRpbWVPZmZzZXQgPz8gMDtcclxuICAgIC8vICAgICBjb25zdCBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPz8gNTAwO1xyXG5cclxuICAgIC8vICAgICBpZiAodGhpcy5jdXJyS2V5ID09PSBrZXkpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZXNbdGhpcy5jdXJyS2V5XSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFuaW1hdGVGYWRlT3V0KHRoaXMuY3VycktleSwgYW5pbWF0b3IsIG5ldyBDMlZlYzIoMTAsIDApLCB0aW1lTGFiZWwsIGR1cmF0aW9uLCB0aW1lT2Zmc2V0KTtcclxuICAgIC8vICAgICAgICAgZGVsYXkgPSAwLjUgKiBkdXJhdGlvbjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlc1trZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hZGRTdGF0ZShrZXkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmFuaW1hdGVGYWRlSW4oa2V5LCBhbmltYXRvciwgbmV3IEMyVmVjMigtMTAsIDApLCB0aW1lTGFiZWwsIGR1cmF0aW9uLCB0aW1lT2Zmc2V0ICsgZGVsYXkpO1xyXG4gICAgLy8gICAgIHRoaXMuY3VycktleSA9IGtleTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgYW5pbWF0ZUZhZGVJbihcclxuICAgIC8vICAgICBrZXk6IHN0cmluZyxcclxuICAgIC8vICAgICBhbmltYXRvcjogQzJTdGVwQW5pbWF0b3IsXHJcbiAgICAvLyAgICAgc2hpZnQ6IEMyVmVjMixcclxuICAgIC8vICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgLy8gICAgIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgICAvLyAgICAgdGltZU9mZnNldDogbnVtYmVyLFxyXG4gICAgLy8gKTogdm9pZCB7XHJcbiAgICAvLyAgICAgY29uc3QgY29udGVudCA9IHRoaXMuc3RhdGVzW2tleV07XHJcbiAgICAvLyAgICAgY29udGVudC5vcGFjaXR5LnNldCgwLjApO1xyXG4gICAgLy8gICAgIGNvbnN0IG9wYWNpdHlBbmltID0gQzJMZXJwQW5pbUZhY3RvcnkuY3JlYXRlKHRoaXMuc2NlbmUsIGNvbnRlbnQub3BhY2l0eSlcclxuICAgIC8vICAgICAgICAgLnNldEN5Y2xlRHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAvLyAgICAgICAgIC5zZXRFYXNpbmcoZWFzZS5vdXQpO1xyXG4gICAgLy8gICAgIGNvbnRlbnQub3BhY2l0eS5zZXQoMS4wKTtcclxuICAgIC8vICAgICBvcGFjaXR5QW5pbS5jb21taXRGaW5hbFN0YXRlKCk7XHJcblxyXG4gICAgLy8gICAgIGFuaW1hdG9yLmVuYWJsZUVsZW1lbnQoY29udGVudC50ZXh0LCB0cnVlLCBsYWJlbCwgdGltZU9mZnNldCk7XHJcbiAgICAvLyAgICAgYW5pbWF0b3IuYWRkQW5pbWF0aW9uKG9wYWNpdHlBbmltLCBsYWJlbCwgdGltZU9mZnNldCk7XHJcblxyXG4gICAgLy8gICAgIGlmIChDMlZlYzIuaXNaZXJvVihzaGlmdCkgPT09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQub2Zmc2V0LnNldFYoc2hpZnQsIHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBzaGlmdEFuaW0gPSBDMkxlcnBBbmltRmFjdG9yeS5jcmVhdGUodGhpcy5zY2VuZSwgY29udGVudC5vZmZzZXQpXHJcbiAgICAvLyAgICAgICAgICAgICAuc2V0Q3ljbGVEdXJhdGlvbihkdXJhdGlvbilcclxuICAgIC8vICAgICAgICAgICAgIC5zZXRFYXNpbmcoZWFzZS5pbk91dCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQub2Zmc2V0LnNldCgwLCAwLCB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgIC8vICAgICAgICAgc2hpZnRBbmltLmNvbW1pdEZpbmFsU3RhdGUoKTtcclxuICAgIC8vICAgICAgICAgYW5pbWF0b3IuYWRkQW5pbWF0aW9uKHNoaWZ0QW5pbSwgbGFiZWwsIHRpbWVPZmZzZXQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgYW5pbWF0ZUZhZGVPdXQoXHJcbiAgICAvLyAgICAga2V5OiBzdHJpbmcsXHJcbiAgICAvLyAgICAgYW5pbWF0b3I6IEMyU3RlcEFuaW1hdG9yLFxyXG4gICAgLy8gICAgIHNoaWZ0OiBDMlZlYzIsXHJcbiAgICAvLyAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgIC8vICAgICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gICAgLy8gICAgIHRpbWVPZmZzZXQ6IG51bWJlcixcclxuICAgIC8vICk6IHZvaWQge1xyXG4gICAgLy8gICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnN0YXRlc1trZXldO1xyXG4gICAgLy8gICAgIGNvbnRlbnQub3BhY2l0eS5zZXQoMS4wKTtcclxuICAgIC8vICAgICBjb25zdCBvcGFjaXR5QW5pbSA9IEMyTGVycEFuaW1GYWN0b3J5LmNyZWF0ZSh0aGlzLnNjZW5lLCBjb250ZW50Lm9wYWNpdHkpXHJcbiAgICAvLyAgICAgICAgIC5zZXRDeWNsZUR1cmF0aW9uKGR1cmF0aW9uKVxyXG4gICAgLy8gICAgICAgICAuc2V0RWFzaW5nKGVhc2Uub3V0KTtcclxuICAgIC8vICAgICBjb250ZW50Lm9wYWNpdHkuc2V0KDAuMCk7XHJcbiAgICAvLyAgICAgb3BhY2l0eUFuaW0uY29tbWl0RmluYWxTdGF0ZSgpO1xyXG4gICAgLy8gICAgIGFuaW1hdG9yLmFkZEFuaW1hdGlvbihvcGFjaXR5QW5pbSwgbGFiZWwsIHRpbWVPZmZzZXQpO1xyXG4gICAgLy8gICAgIGlmIChDMlZlYzIuaXNaZXJvVihzaGlmdCkgPT09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQub2Zmc2V0LnNldCgwLCAwLCB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgIC8vICAgICAgICAgY29uc3Qgc2hpZnRBbmltID0gQzJMZXJwQW5pbUZhY3RvcnkuY3JlYXRlKHRoaXMuc2NlbmUsIGNvbnRlbnQub2Zmc2V0KVxyXG4gICAgLy8gICAgICAgICAgICAgLnNldEN5Y2xlRHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAvLyAgICAgICAgICAgICAuc2V0RWFzaW5nKGVhc2UuaW5PdXQpO1xyXG4gICAgLy8gICAgICAgICBjb250ZW50Lm9mZnNldC5zZXRWKHNoaWZ0LCB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgIC8vICAgICAgICAgc2hpZnRBbmltLmNvbW1pdEZpbmFsU3RhdGUoKTtcclxuICAgIC8vICAgICAgICAgYW5pbWF0b3IuYWRkQW5pbWF0aW9uKHNoaWZ0QW5pbSwgbGFiZWwsIHRpbWVPZmZzZXQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBhbmltYXRvci5lbmFibGVFbGVtZW50KGNvbnRlbnQudGV4dCwgZmFsc2UsIGxhYmVsLCB0aW1lT2Zmc2V0ICsgZHVyYXRpb24pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0IHN0eWxlcyAoZm9yIGNvcnJlY3QgbWVhc3VyZW1lbnQpXHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBjb250ZW50Lm9wYWNpdHkuZ2V0KCkgKiB0aGlzLmRhdGEudGV4dC5vcGFjaXR5LmdldCgpO1xyXG4gICAgICAgICAgICBjb250ZW50LnRleHQuZGF0YS5vcGFjaXR5LnNldChvcGFjaXR5KTtcclxuICAgICAgICAgICAgY29udGVudC50ZXh0LmRhdGEuZm9udC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEudGV4dC5mb250KTtcclxuICAgICAgICAgICAgY29udGVudC50ZXh0LmRhdGEuZmlsbC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEudGV4dC5maWxsKTtcclxuICAgICAgICAgICAgY29udGVudC50ZXh0LmRhdGEuc3Ryb2tlLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS50ZXh0LnN0cm9rZSk7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50LnRleHQudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXh0ZW50c1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIGNvbnN0IG5vZGVFeHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB0ZXh0RXh0ZW50cyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgbm9kZVBhZGRpbmcgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFeHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFzY2VudCA9IDA7XHJcbiAgICAgICAgbGV0IGRlc2NlbnQgPSAwO1xyXG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udGVudCBvZiBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGVzKSkge1xyXG4gICAgICAgICAgICBhc2NlbnQgPSBNYXRoLm1heChhc2NlbnQsIGNvbnRlbnQudGV4dC5nZXRGb250QXNjZW50UHgoKSk7XHJcbiAgICAgICAgICAgIGRlc2NlbnQgPSBNYXRoLm1heChkZXNjZW50LCBjb250ZW50LnRleHQuZ2V0Rm9udERlc2NlbnRQeCgpKTtcclxuICAgICAgICAgICAgdGV4dFdpZHRoID0gTWF0aC5tYXgodGV4dFdpZHRoLCBjb250ZW50LnRleHQuZ2V0V2lkdGhQeCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXNjZW50ID0gdmlld1NwYWNlLmNvbnZlcnRMZW5ndGgoYXNjZW50LCBzcGFjZSk7XHJcbiAgICAgICAgZGVzY2VudCA9IHZpZXdTcGFjZS5jb252ZXJ0TGVuZ3RoKGRlc2NlbnQsIHNwYWNlKTtcclxuICAgICAgICB0ZXh0V2lkdGggPSB2aWV3U3BhY2UuY29udmVydExlbmd0aCh0ZXh0V2lkdGgsIHNwYWNlKTtcclxuICAgICAgICB0ZXh0RXh0ZW50cy54ID0gMC41ICogdGV4dFdpZHRoO1xyXG4gICAgICAgIHRleHRFeHRlbnRzLnkgPSAwLjUgKiAoYXNjZW50ICsgZGVzY2VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5wYWRkaW5nLmdldEludG8obm9kZVBhZGRpbmcsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEubWluRXh0ZW50cy5nZXRJbnRvKG5vZGVFeHRlbnRzLCBzcGFjZSk7XHJcbiAgICAgICAgbm9kZUV4dGVudHMubWF4KHRleHRFeHRlbnRzLnggKyBub2RlUGFkZGluZy54LCB0ZXh0RXh0ZW50cy55ICsgbm9kZVBhZGRpbmcueSk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLnNldFYobm9kZUV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICBjb250ZW50RXh0ZW50cy5jb3B5KG5vZGVFeHRlbnRzKS5zdWJWKG5vZGVQYWRkaW5nKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGNlbnRlciBhbmQgU0RGXHJcbiAgICAgICAgdGhpcy5jZW50ZXIuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICBjb25zdCBub2RlQ2VudGVyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhub2RlQ2VudGVyLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRDZW50ZXJJbnRvVihub2RlQ2VudGVyLCBub2RlQ2VudGVyLCBub2RlRXh0ZW50cyk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U0RGLnNldENlbnRlcihub2RlQ2VudGVyKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTREYuc2V0UmFkaXVzKE1hdGgubWF4KG5vZGVFeHRlbnRzLngsIG5vZGVFeHRlbnRzLnkpKTtcclxuICAgICAgICB0aGlzLmNlbnRlci5zZXRWKG5vZGVDZW50ZXIsIHNwYWNlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRleHQgcG9zaXRpb25cclxuICAgICAgICBjb25zdCBzaWduID0gc3BhY2UuaXNEaXJlY3RTcGFjZSgpID8gMSA6IC0xO1xyXG4gICAgICAgIGNvbnN0IHZBbGlnbiA9IHNpZ24gKiB0aGlzLmRhdGEudGV4dC52ZXJ0aWNhbEFsaWduLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGhBbGlnbiA9IHRoaXMuZGF0YS50ZXh0Lmhvcml6b250YWxBbGlnbi5nZXQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFBvc2l0aW9uID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB0ZXh0T2Zmc2V0ID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0ZXh0UG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICBub2RlQ2VudGVyLnggKyBoQWxpZ24gKiAoY29udGVudEV4dGVudHMueCAtIHRleHRFeHRlbnRzLngpLFxyXG4gICAgICAgICAgICBub2RlQ2VudGVyLnkgKyB2QWxpZ24gKiAoY29udGVudEV4dGVudHMueSAtIHRleHRFeHRlbnRzLnkpIC0gKHNpZ24gKiAoYXNjZW50IC0gZGVzY2VudCkpIC8gMixcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlckxheWVyID0gdGhpcy5kYXRhLnJlbmRlci5sYXllcjtcclxuICAgICAgICBjb25zdCB1cGRhdGVMYXllciA9IHRoaXMuZGF0YS51cGRhdGUubGF5ZXI7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQub2Zmc2V0LmdldEludG8odGV4dE9mZnNldCwgc3BhY2UpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGF0YSA9IGNvbnRlbnQudGV4dC5kYXRhO1xyXG4gICAgICAgICAgICB0ZXh0RGF0YS50ZXh0QW5jaG9yLnNldCgwKTtcclxuICAgICAgICAgICAgdGV4dERhdGEucG9zaXRpb24uc2V0KHRleHRQb3NpdGlvbi54ICsgdGV4dE9mZnNldC54LCB0ZXh0UG9zaXRpb24ueSArIHRleHRPZmZzZXQueSwgc3BhY2UpO1xyXG4gICAgICAgICAgICB0ZXh0RGF0YS51cGRhdGUubGF5ZXIuc2V0KHVwZGF0ZUxheWVyLmdldCgpKTtcclxuICAgICAgICAgICAgdGV4dERhdGEudXBkYXRlLmxheWVyLm9yZGVySW5MYXllciA9IDA7XHJcbiAgICAgICAgICAgIHRleHREYXRhLnJlbmRlci5sYXllci5zZXQocmVuZGVyTGF5ZXIuZ2V0KCkpO1xyXG4gICAgICAgICAgICB0ZXh0RGF0YS5yZW5kZXIubGF5ZXIub3JkZXJJbkxheWVyID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0ZXh0RXh0ZW50cyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKG5vZGVQYWRkaW5nKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoY29udGVudEV4dGVudHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0ZXh0UG9zaXRpb24pO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0ZXh0T2Zmc2V0KTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2Uobm9kZUNlbnRlcik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKG5vZGVFeHRlbnRzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhY2tncm91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZpZXdTcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHZvaWQgY3R4O1xyXG4gICAgICAgIHZvaWQgdmlld1NwYWNlO1xyXG4gICAgICAgIC8vIFJlbmRlcmluZyBpcyBoYW5kbGVkIGJ5IGNoaWxkIHRleHQgZWxlbWVudHMgYW5kIGJhY2tncm91bmQgc2hhcGVcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uLy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi8uLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJQbGFpblRleHQgfSBmcm9tICcuL2MyLXBsYWluLXRleHQnO1xyXG5pbXBvcnQgeyBDMkJhc2VUZXh0LCBDMlRleHREYXRhIH0gZnJvbSAnLi9jMi1iYXNlLXRleHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyU3BhbiBleHRlbmRzIEMyUGxhaW5UZXh0IHtcclxuICAgIHByb3RlY3RlZCBjYXRlZ29yeTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3J5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQmFzZVJpY2hUZXh0PERhdGEgZXh0ZW5kcyBDMlRleHREYXRhPiBleHRlbmRzIEMyQmFzZVRleHQ8RGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNwYW5zOiBDMlNwYW5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgZGF0YTogRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTcGFuKGNvbnRlbnQ6IHN0cmluZywgY2F0ZWdvcnk/OiBzdHJpbmcpOiBDMlNwYW4ge1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBuZXcgQzJTcGFuKHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIHNwYW4uZGF0YS51cGRhdGUuaXNNYW5hZ2VkLnNldCh0cnVlKTtcclxuICAgICAgICBzcGFuLnNldENvbnRlbnQoY29udGVudCk7XHJcbiAgICAgICAgc3Bhbi5zZXRDYXRlZ29yeShjYXRlZ29yeSA/PyAnJyk7XHJcbiAgICAgICAgdGhpcy5zcGFucy5wdXNoKHNwYW4pO1xyXG4gICAgICAgIHJldHVybiBzcGFuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYW5zKCk6IEFycmF5PEMyU3Bhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYW5Db3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYW5zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFuKGluZGV4OiBudW1iZXIpOiBDMlNwYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYW5zW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kU3BhbihvcHRpb25zOiB7IGNvbnRlbnQ/OiBzdHJpbmc7IGNhdGVnb3J5Pzogc3RyaW5nIH0pOiBDMlNwYW4gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYW5zLmZpbmQoKHNwYW4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIChvcHRpb25zLmNvbnRlbnQgPyBzcGFuLmdldENvbnRlbnQoKSA9PT0gb3B0aW9ucy5jb250ZW50IDogdHJ1ZSkgJiZcclxuICAgICAgICAgICAgICAgIChvcHRpb25zLmNhdGVnb3J5ID8gc3Bhbi5nZXRDYXRlZ29yeSgpID09PSBvcHRpb25zLmNhdGVnb3J5IDogdHJ1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3BhbiBvZiB0aGlzLnNwYW5zKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLmRhdGEuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hc2NlbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVzY2VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGF5ZXIgPSB0aGlzLmRhdGEucmVuZGVyLmxheWVyO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUVuYWJsZWQgPSB0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlckVuYWJsZWQgPSB0aGlzLmRhdGEucmVuZGVyLmlzRW5hYmxlZC5nZXQoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwYW4gb2YgdGhpcy5zcGFucykge1xyXG4gICAgICAgICAgICBzcGFuLmRhdGEuZm9udC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuZm9udCk7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS5maWxsLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5maWxsKTtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLnN0cm9rZS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuc3Ryb2tlKTtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLnVwZGF0ZS5pc01hbmFnZWQuc2V0KHRydWUpO1xyXG4gICAgICAgICAgICBzcGFuLmRhdGEucmVuZGVyLmxheWVyLmNvcHlJZlVubG9ja2VkKHJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLmlzRW5hYmxlZC5zZXQodXBkYXRlRW5hYmxlZCk7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS5yZW5kZXIuaXNFbmFibGVkLnNldChyZW5kZXJFbmFibGVkKTtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLnRleHRBbmNob3Iuc2V0KC0xKTtcclxuICAgICAgICAgICAgc3Bhbi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gc3Bhbi5nZXRXaWR0aFB4KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXNjZW50ID0gTWF0aC5tYXgodGhpcy5hc2NlbnQsIHNwYW4uZ2V0Rm9udEFzY2VudFB4KCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NlbnQgPSBNYXRoLm1heCh0aGlzLmRlc2NlbnQsIHNwYW4uZ2V0Rm9udERlc2NlbnRQeCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLnNldCh0aGlzLndpZHRoIC8gMiwgKHRoaXMuYXNjZW50ICsgdGhpcy5kZXNjZW50KSAvIDIsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhwb3NpdGlvbiwgdmlld1NwYWNlKTtcclxuICAgICAgICBwb3NpdGlvbi54IC09IDAuNSAqICgxICsgdGhpcy5kYXRhLnRleHRBbmNob3IuZ2V0KCkpICogdGhpcy53aWR0aDtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwYW4gb2YgdGhpcy5zcGFucykge1xyXG4gICAgICAgICAgICBzcGFuLmRhdGEucG9zaXRpb24uc2V0Vihwb3NpdGlvbiwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcG9zaXRpb24ueCArPSBzcGFuLmdldFdpZHRoUHgoKTtcclxuICAgICAgICAgICAgc3Bhbi51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRQb3NpdGlvbkludG8oY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNlbnRlci55ICs9IC0wLjUgKiAodGhpcy5hc2NlbnQgLSB0aGlzLmRlc2NlbnQpO1xyXG4gICAgICAgIGNlbnRlci54ICs9IC0wLjUgKiB0aGlzLmRhdGEudGV4dEFuY2hvci5nZXQoKSAqIHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIuc2V0VihjZW50ZXIsIHZpZXdTcGFjZSk7XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjZW50ZXIpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB2b2lkIGN0eDtcclxuICAgICAgICB2b2lkIHZpZXdTcGFjZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyUmljaFRleHQgZXh0ZW5kcyBDMkJhc2VSaWNoVGV4dDxDMlRleHREYXRhPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyVGV4dERhdGEoc2NlbmUpKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJWZWMyIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uLy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgeyBDMkFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1hbmNob3InO1xyXG5pbXBvcnQgeyBDMkV4dGVudHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItZXh0ZW50cyc7XHJcbmltcG9ydCB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMlNwYWNlUmVmIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLXNwYWNlLXJlZic7XHJcbmltcG9ydCB7IEMyRWxlbWVudCwgdHlwZSBDMkhhc0JvdW5kcyB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRmlsbERhdGEsIEMyRm9udERhdGEsIEMyR3JhcGhpY3NEYXRhLCBDMlN0cm9rZURhdGEgfSBmcm9tICcuLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcbmltcG9ydCB7IEMyVGV4dERhdGEgfSBmcm9tICcuL2MyLWJhc2UtdGV4dCc7XHJcbmltcG9ydCB7IEMyQmFzZVJpY2hUZXh0IH0gZnJvbSAnLi9jMi1yaWNoLXRleHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGV4dExpbmVEYXRhIGV4dGVuZHMgQzJUZXh0RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2tpcDogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaG9yaXpvbnRhbEFsaWduOiBDMk51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5za2lwID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAwLCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ24gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIC0xKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGV4dExpbmUgZXh0ZW5kcyBDMkJhc2VSaWNoVGV4dDxDMlRleHRMaW5lRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlRleHRMaW5lRGF0YShzY2VuZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJUZXh0R3JvdXBEYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNwYWNlOiBDMlNwYWNlUmVmO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGw6IEMyRmlsbERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IEMyUG9pbnQ7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGZvbnQ6IEMyRm9udERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2tpcDogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaG9yaXpvbnRhbEFsaWduOiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJ0aWNhbEFsaWduOiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBtaW5FeHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5jaG9yOiBDMkFuY2hvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRTcGFjZSA9IHNjZW5lLmdldFdvcmxkU3BhY2UoKTtcclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSBzY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gbmV3IEMyU3BhY2VSZWYoc2NlbmUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZmlsbCA9IG5ldyBDMkZpbGxEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IG5ldyBDMkZvbnREYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQzJQb2ludChzY2VuZSwgMCwgMCwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5za2lwID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCAwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWduID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAtMSk7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAtMSk7XHJcbiAgICAgICAgdGhpcy5taW5FeHRlbnRzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMCwgMCwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3IgPSBuZXcgQzJBbmNob3Ioc2NlbmUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLmlzRW5hYmxlZC5zZXQoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJUZXh0R3JvdXAgZXh0ZW5kcyBDMkVsZW1lbnQ8QzJUZXh0R3JvdXBEYXRhPiBpbXBsZW1lbnRzIEMySGFzQm91bmRzIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0TGluZXM6IEMyVGV4dExpbmVbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNlbnRlcjogQzJQb2ludDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dEV4dGVudHM6IEMyRXh0ZW50cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyVGV4dEdyb3VwRGF0YShzY2VuZSkpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFdvcmxkU3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMudGV4dEV4dGVudHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGluZShvcHRpb25zPzogeyBhbGlnbj86IG51bWJlcjsgc2tpcD86IG51bWJlciB9KTogQzJUZXh0TGluZSB7XHJcbiAgICAgICAgY29uc3QgdGV4dExpbmUgPSBuZXcgQzJUZXh0TGluZSh0aGlzLnNjZW5lKTtcclxuICAgICAgICBpZiAob3B0aW9ucz8uYWxpZ24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0ZXh0TGluZS5kYXRhLmhvcml6b250YWxBbGlnbi5zZXQob3B0aW9ucy5hbGlnbik7XHJcbiAgICAgICAgICAgIHRleHRMaW5lLmRhdGEuaG9yaXpvbnRhbEFsaWduLmxvY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnM/LnNraXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0ZXh0TGluZS5kYXRhLnNraXAuc2V0KG9wdGlvbnMuc2tpcCk7XHJcbiAgICAgICAgICAgIHRleHRMaW5lLmRhdGEuc2tpcC5sb2NrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRMaW5lLmRhdGEudXBkYXRlLmlzTWFuYWdlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0TGluZXMucHVzaCh0ZXh0TGluZSk7XHJcbiAgICAgICAgcmV0dXJuIHRleHRMaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpbmVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRMaW5lcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGluZShpbmRleDogbnVtYmVyKTogQzJUZXh0TGluZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dExpbmVzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbkludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc2l0aW9uLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dEV4dGVudHNJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dEV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50ZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0Q2VudGVySW50byhkc3QsIHNwYWNlLCB0aGlzLmRhdGEucG9zaXRpb24sIHRoaXMuZXh0ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjdFBvaW50SW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UsIGFuY2hvclg6IG51bWJlciwgYW5jaG9yWTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRSZWN0UG9pbnRJbnRvKGRzdCwgc3BhY2UsIHRoaXMuZGF0YS5wb3NpdGlvbiwgdGhpcy5leHRlbnRzLCBhbmNob3JYLCBhbmNob3JZKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLmRhdGEuc3BhY2UuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckxheWVyID0gdGhpcy5kYXRhLnJlbmRlci5sYXllcjtcclxuICAgICAgICBjb25zdCB1cGRhdGVFbmFibGVkID0gdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKTtcclxuICAgICAgICBjb25zdCByZW5kZXJFbmFibGVkID0gdGhpcy5kYXRhLnJlbmRlci5pc0VuYWJsZWQuZ2V0KCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXh0IHN0eWxlcyAoZm9yIGNvcnJlY3QgbWVhc3VyZW1lbnQpXHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHRoaXMudGV4dExpbmVzKSB7XHJcbiAgICAgICAgICAgIGxpbmUuZGF0YS5mb250LmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5mb250KTtcclxuICAgICAgICAgICAgbGluZS5kYXRhLmZpbGwuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmZpbGwpO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEuc3Ryb2tlLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5zdHJva2UpO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEuaG9yaXpvbnRhbEFsaWduLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5ob3Jpem9udGFsQWxpZ24pO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEuc2tpcC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuc2tpcCk7XHJcblxyXG4gICAgICAgICAgICBsaW5lLmRhdGEucmVuZGVyLmxheWVyLmNvcHlJZlVubG9ja2VkKHJlbmRlckxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIGxpbmUuZGF0YS5pc0VuYWJsZWQuc2V0KHVwZGF0ZUVuYWJsZWQpO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEucmVuZGVyLmlzRW5hYmxlZC5zZXQocmVuZGVyRW5hYmxlZCk7XHJcbiAgICAgICAgICAgIGxpbmUuZGF0YS51cGRhdGUuaXNNYW5hZ2VkLnNldCh0cnVlKTtcclxuICAgICAgICAgICAgbGluZS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBleHRlbnRzXHJcbiAgICAgICAgY29uc3QgdGV4dEV4dGVudHMgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRleHRFeHRlbnRzLnNldCgwLCAwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy50ZXh0TGluZXMpIHtcclxuICAgICAgICAgICAgdGV4dEV4dGVudHMueCA9IE1hdGgubWF4KHRleHRFeHRlbnRzLngsIGxpbmUuZ2V0V2lkdGhQeCgpKTtcclxuICAgICAgICAgICAgdGV4dEV4dGVudHMueSArPSBsaW5lLmdldEZvbnRBc2NlbnRQeCgpICsgbGluZS5nZXRGb250RGVzY2VudFB4KCkgKyBsaW5lLmRhdGEuc2tpcC5nZXQodmlld1NwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dEV4dGVudHMuc2NhbGUoMC41KTtcclxuICAgICAgICB2aWV3U3BhY2UuY29udmVydEV4dGVudHNJbnRvVih0ZXh0RXh0ZW50cywgdGV4dEV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLnRleHRFeHRlbnRzLnNldFYodGV4dEV4dGVudHMsIHNwYWNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXBFeHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEubWluRXh0ZW50cy5nZXRJbnRvKGdyb3VwRXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIGdyb3VwRXh0ZW50cy5tYXhWKHRleHRFeHRlbnRzKTtcclxuICAgICAgICB0aGlzLmV4dGVudHMuc2V0Vihncm91cEV4dGVudHMsIHNwYWNlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGNlbnRlclxyXG4gICAgICAgIHRoaXMuY2VudGVyLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBDZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGdyb3VwQ2VudGVyLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRDZW50ZXJJbnRvVihncm91cENlbnRlciwgZ3JvdXBDZW50ZXIsIGdyb3VwRXh0ZW50cyk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIuc2V0Vihncm91cENlbnRlciwgc3BhY2UpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGV4dCBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZBbGlnbiA9IC10aGlzLmRhdGEudmVydGljYWxBbGlnbi5nZXQoKTtcclxuICAgICAgICBsZXQgbGluZVkgPSBncm91cENlbnRlci55ICsgdkFsaWduICogKHRleHRFeHRlbnRzLnkgLSBncm91cEV4dGVudHMueSkgKyB0ZXh0RXh0ZW50cy55O1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLnRleHRMaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lWSAtPSB2aWV3U3BhY2UuY29udmVydExlbmd0aChsaW5lLmdldEZvbnRBc2NlbnRQeCgpLCBzcGFjZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhBbGlnbiA9IGxpbmUuZGF0YS5ob3Jpem9udGFsQWxpZ24uZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVYID0gZ3JvdXBDZW50ZXIueCArIGhBbGlnbiAqIGdyb3VwRXh0ZW50cy54O1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEudGV4dEFuY2hvci5zZXQoK2hBbGlnbik7XHJcbiAgICAgICAgICAgIGxpbmUuZGF0YS5wb3NpdGlvbi5zZXQobGluZVgsIGxpbmVZLCBzcGFjZSk7XHJcbiAgICAgICAgICAgIGxpbmUudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBsaW5lWSAtPSB2aWV3U3BhY2UuY29udmVydExlbmd0aChsaW5lLmdldEZvbnREZXNjZW50UHgoKSwgc3BhY2UpICsgbGluZS5kYXRhLnNraXAuZ2V0KHNwYWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0ZXh0RXh0ZW50cyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGdyb3VwRXh0ZW50cyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGdyb3VwQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IHR5cGUgQzJDb2xvck5hbWUgPSBzdHJpbmc7XHJcbmV4cG9ydCB0eXBlIEMyQ29sb3JTY2FsZSA9IG51bWJlcjtcclxuZXhwb3J0IHR5cGUgQzJIZXhDb2xvciA9IGAjJHtzdHJpbmd9YDtcclxuZXhwb3J0IHR5cGUgQzJQYWxldHRlID0gUmVjb3JkPEMyQ29sb3JOYW1lLCBSZWNvcmQ8QzJDb2xvclNjYWxlLCBDMkhleENvbG9yPj47XHJcblxyXG5leHBvcnQgdHlwZSBDMkNvbG9yVGhlbWVNb2RlID0gJ2xpZ2h0JyB8ICdkYXJrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkNvbG9yVGhlbWUge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhbGV0dGU6IEMyUGFsZXR0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWxldHRlOiBDMlBhbGV0dGUpIHtcclxuICAgICAgICB0aGlzLnBhbGV0dGUgPSBwYWxldHRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yKG5hbWU6IEMyQ29sb3JOYW1lLCBzY2FsZTogQzJDb2xvclNjYWxlKTogQzJIZXhDb2xvciB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnBhbGV0dGVbbmFtZV0/LltzY2FsZV07XHJcbiAgICAgICAgaWYgKCFjb2xvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbG9yIG5vdCBmb3VuZDogJHtuYW1lfSAvICR7c2NhbGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBvcGFjaXR5KG5hbWU6IEMyQ29sb3JOYW1lLCBzY2FsZTogQzJDb2xvclNjYWxlKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBoZXggPSB0aGlzLmNvbG9yKG5hbWUsIHNjYWxlKTtcclxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gOSkge1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYUhleCA9IGhleC5zdWJzdHJpbmcoNywgOSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhbHBoYUhleCwgMTYpIC8gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBTMkhleENvbG9yLCBTMkNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb3JlL3NoYXJlZC9zMi1jb2xvci10aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBncmF5RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTExMTEnLFxuICAgIDI6ICcjMTkxOTE5JyxcbiAgICAzOiAnIzIyMjIyMicsXG4gICAgNDogJyMyYTJhMmEnLFxuICAgIDU6ICcjMzEzMTMxJyxcbiAgICA2OiAnIzNhM2EzYScsXG4gICAgNzogJyM0ODQ4NDgnLFxuICAgIDg6ICcjNjA2MDYwJyxcbiAgICA5OiAnIzZlNmU2ZScsXG4gICAgMTA6ICcjN2I3YjdiJyxcbiAgICAxMTogJyNiNGI0YjQnLFxuICAgIDEyOiAnI2VlZWVlZScsXG59O1xuXG5leHBvcnQgY29uc3QgZ3JheURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDAwMDAwJyxcbiAgICAyOiAnI2ZmZmZmZjA5JyxcbiAgICAzOiAnI2ZmZmZmZjEyJyxcbiAgICA0OiAnI2ZmZmZmZjFiJyxcbiAgICA1OiAnI2ZmZmZmZjIyJyxcbiAgICA2OiAnI2ZmZmZmZjJjJyxcbiAgICA3OiAnI2ZmZmZmZjNiJyxcbiAgICA4OiAnI2ZmZmZmZjU1JyxcbiAgICA5OiAnI2ZmZmZmZjY0JyxcbiAgICAxMDogJyNmZmZmZmY3MicsXG4gICAgMTE6ICcjZmZmZmZmYWYnLFxuICAgIDEyOiAnI2ZmZmZmZmVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXV2ZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTIxMTEzJyxcbiAgICAyOiAnIzFhMTkxYicsXG4gICAgMzogJyMyMzIyMjUnLFxuICAgIDQ6ICcjMmIyOTJkJyxcbiAgICA1OiAnIzMyMzAzNScsXG4gICAgNjogJyMzYzM5M2YnLFxuICAgIDc6ICcjNDk0NzRlJyxcbiAgICA4OiAnIzYyNWY2OScsXG4gICAgOTogJyM2ZjZkNzgnLFxuICAgIDEwOiAnIzdjN2E4NScsXG4gICAgMTE6ICcjYjViMmJjJyxcbiAgICAxMjogJyNlZWVlZjAnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdXZlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDAwMDAwMDAnLFxuICAgIDI6ICcjZjVmNGY2MDknLFxuICAgIDM6ICcjZWJlYWY4MTQnLFxuICAgIDQ6ICcjZWVlNWY4MWQnLFxuICAgIDU6ICcjZWZlNmZlMjUnLFxuICAgIDY6ICcjZjFlNmZkMzAnLFxuICAgIDc6ICcjZWVlOWZmNDAnLFxuICAgIDg6ICcjZWVlN2ZmNWQnLFxuICAgIDk6ICcjZWFlNmZkNmUnLFxuICAgIDEwOiAnI2VjZTlmZDdjJyxcbiAgICAxMTogJyNmNWYxZmZiNycsXG4gICAgMTI6ICcjZmRmZGZmZWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNsYXRlRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTExMTMnLFxuICAgIDI6ICcjMTgxOTFiJyxcbiAgICAzOiAnIzIxMjIyNScsXG4gICAgNDogJyMyNzJhMmQnLFxuICAgIDU6ICcjMmUzMTM1JyxcbiAgICA2OiAnIzM2M2EzZicsXG4gICAgNzogJyM0MzQ4NGUnLFxuICAgIDg6ICcjNWE2MTY5JyxcbiAgICA5OiAnIzY5NmU3NycsXG4gICAgMTA6ICcjNzc3Yjg0JyxcbiAgICAxMTogJyNiMGI0YmEnLFxuICAgIDEyOiAnI2VkZWVmMCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2xhdGVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMCcsXG4gICAgMjogJyNkOGY0ZjYwOScsXG4gICAgMzogJyNkZGVhZjgxNCcsXG4gICAgNDogJyNkM2VkZjgxZCcsXG4gICAgNTogJyNkOWVkZmUyNScsXG4gICAgNjogJyNkNmViZmQzMCcsXG4gICAgNzogJyNkOWVkZmY0MCcsXG4gICAgODogJyNkOWVkZmY1ZCcsXG4gICAgOTogJyNkZmViZmQ2ZCcsXG4gICAgMTA6ICcjZTVlZGZkN2InLFxuICAgIDExOiAnI2YxZjdmZWI1JyxcbiAgICAxMjogJyNmY2ZkZmZlZicsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FnZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTAxMjExJyxcbiAgICAyOiAnIzE3MTkxOCcsXG4gICAgMzogJyMyMDIyMjEnLFxuICAgIDQ6ICcjMjcyYTI5JyxcbiAgICA1OiAnIzJlMzEzMCcsXG4gICAgNjogJyMzNzNiMzknLFxuICAgIDc6ICcjNDQ0OTQ3JyxcbiAgICA4OiAnIzViNjI1ZicsXG4gICAgOTogJyM2MzcwNmInLFxuICAgIDEwOiAnIzcxN2Q3OScsXG4gICAgMTE6ICcjYWRiNWIyJyxcbiAgICAxMjogJyNlY2VlZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhZ2VEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMCcsXG4gICAgMjogJyNmMGYyZjEwOCcsXG4gICAgMzogJyNmM2Y1ZjQxMicsXG4gICAgNDogJyNmMmZlZmQxYScsXG4gICAgNTogJyNmMWZiZmEyMicsXG4gICAgNjogJyNlZGZiZjQyZCcsXG4gICAgNzogJyNlZGZjZjczYycsXG4gICAgODogJyNlYmZkZjY1NycsXG4gICAgOTogJyNkZmZkZjI2NicsXG4gICAgMTA6ICcjZTVmZGY2NzQnLFxuICAgIDExOiAnI2Y0ZmVmYmIwJyxcbiAgICAxMjogJyNmZGZmZmVlZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgb2xpdmVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzExMTIxMCcsXG4gICAgMjogJyMxODE5MTcnLFxuICAgIDM6ICcjMjEyMjIwJyxcbiAgICA0OiAnIzI4MmEyNycsXG4gICAgNTogJyMyZjMxMmUnLFxuICAgIDY6ICcjMzgzYTM2JyxcbiAgICA3OiAnIzQ1NDg0MycsXG4gICAgODogJyM1YzYyNWInLFxuICAgIDk6ICcjNjg3MDY2JyxcbiAgICAxMDogJyM3NjdkNzQnLFxuICAgIDExOiAnI2FmYjVhZCcsXG4gICAgMTI6ICcjZWNlZWVjJyxcbn07XG5cbmV4cG9ydCBjb25zdCBvbGl2ZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDAwMDAwJyxcbiAgICAyOiAnI2YxZjJmMDA4JyxcbiAgICAzOiAnI2Y0ZjVmMzEyJyxcbiAgICA0OiAnI2YzZmVmMjFhJyxcbiAgICA1OiAnI2YyZmJmMTIyJyxcbiAgICA2OiAnI2Y0ZmFlZDJjJyxcbiAgICA3OiAnI2YyZmNlZDNiJyxcbiAgICA4OiAnI2VkZmRlYjU3JyxcbiAgICA5OiAnI2ViZmRlNzY2JyxcbiAgICAxMDogJyNmMGZkZWM3NCcsXG4gICAgMTE6ICcjZjZmZWY0YjAnLFxuICAgIDEyOiAnI2ZkZmZmZGVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzYW5kRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTExMTAnLFxuICAgIDI6ICcjMTkxOTE4JyxcbiAgICAzOiAnIzIyMjIyMScsXG4gICAgNDogJyMyYTJhMjgnLFxuICAgIDU6ICcjMzEzMTJlJyxcbiAgICA2OiAnIzNiM2EzNycsXG4gICAgNzogJyM0OTQ4NDQnLFxuICAgIDg6ICcjNjI2MDViJyxcbiAgICA5OiAnIzZmNmQ2NicsXG4gICAgMTA6ICcjN2M3Yjc0JyxcbiAgICAxMTogJyNiNWIzYWQnLFxuICAgIDEyOiAnI2VlZWVlYycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FuZERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDAwMDAwJyxcbiAgICAyOiAnI2Y0ZjRmMzA5JyxcbiAgICAzOiAnI2Y2ZjZmNTEzJyxcbiAgICA0OiAnI2ZlZmVmMzFiJyxcbiAgICA1OiAnI2ZiZmJlYjIzJyxcbiAgICA2OiAnI2ZmZmFlZDJkJyxcbiAgICA3OiAnI2ZmZmJlZDNjJyxcbiAgICA4OiAnI2ZmZjllYjU3JyxcbiAgICA5OiAnI2ZmZmFlOTY1JyxcbiAgICAxMDogJyNmZmZkZWU3MycsXG4gICAgMTE6ICcjZmZmY2Y0YjAnLFxuICAgIDEyOiAnI2ZmZmZmZGVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0b21hdG9EYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE4MTExMScsXG4gICAgMjogJyMxZjE1MTMnLFxuICAgIDM6ICcjMzkxNzE0JyxcbiAgICA0OiAnIzRlMTUxMScsXG4gICAgNTogJyM1ZTFjMTYnLFxuICAgIDY6ICcjNmUyOTIwJyxcbiAgICA3OiAnIzg1M2EyZCcsXG4gICAgODogJyNhYzRkMzknLFxuICAgIDk6ICcjZTU0ZDJlJyxcbiAgICAxMDogJyNlYzYxNDInLFxuICAgIDExOiAnI2ZmOTc3ZCcsXG4gICAgMTI6ICcjZmJkM2NiJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0b21hdG9EYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmMTEyMTIwOCcsXG4gICAgMjogJyNmZjU1MzMwZicsXG4gICAgMzogJyNmZjM1MjMyYicsXG4gICAgNDogJyNmZDIwMTE0MicsXG4gICAgNTogJyNmZTMzMjE1MycsXG4gICAgNjogJyNmZjRmMzg2NCcsXG4gICAgNzogJyNmZDY0NGE3ZCcsXG4gICAgODogJyNmZTZkNGVhNycsXG4gICAgOTogJyNmZTU0MzFlNCcsXG4gICAgMTA6ICcjZmY2ODQ3ZWInLFxuICAgIDExOiAnI2ZmOTc3ZCcsXG4gICAgMTI6ICcjZmZkNmNlZmInLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZERhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTkxMTExJyxcbiAgICAyOiAnIzIwMTMxNCcsXG4gICAgMzogJyMzYjEyMTknLFxuICAgIDQ6ICcjNTAwZjFjJyxcbiAgICA1OiAnIzYxMTYyMycsXG4gICAgNjogJyM3MjIzMmQnLFxuICAgIDc6ICcjOGMzMzNhJyxcbiAgICA4OiAnI2I1NDU0OCcsXG4gICAgOTogJyNlNTQ4NGQnLFxuICAgIDEwOiAnI2VjNWQ1ZScsXG4gICAgMTE6ICcjZmY5NTkyJyxcbiAgICAxMjogJyNmZmQxZDknLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2Y0MTIxMjA5JyxcbiAgICAyOiAnI2YyMmYzZTExJyxcbiAgICAzOiAnI2ZmMTczZjJkJyxcbiAgICA0OiAnI2ZlMGEzYjQ0JyxcbiAgICA1OiAnI2ZmMjA0NzU2JyxcbiAgICA2OiAnI2ZmM2U1NjY4JyxcbiAgICA3OiAnI2ZmNTM2MTg0JyxcbiAgICA4OiAnI2ZmNWQ2MWIwJyxcbiAgICA5OiAnI2ZlNGU1NGU0JyxcbiAgICAxMDogJyNmZjY0NjVlYicsXG4gICAgMTE6ICcjZmY5NTkyJyxcbiAgICAxMjogJyNmZmQxZDknLFxufTtcblxuZXhwb3J0IGNvbnN0IHJ1YnlEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE5MTExMycsXG4gICAgMjogJyMxZTE1MTcnLFxuICAgIDM6ICcjM2ExNDFlJyxcbiAgICA0OiAnIzRlMTMyNScsXG4gICAgNTogJyM1ZTFhMmUnLFxuICAgIDY6ICcjNmYyNTM5JyxcbiAgICA3OiAnIzg4MzQ0NycsXG4gICAgODogJyNiMzQ0NWEnLFxuICAgIDk6ICcjZTU0NjY2JyxcbiAgICAxMDogJyNlYzVhNzInLFxuICAgIDExOiAnI2ZmOTQ5ZCcsXG4gICAgMTI6ICcjZmVkMmUxJyxcbn07XG5cbmV4cG9ydCBjb25zdCBydWJ5RGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZjQxMjRhMDknLFxuICAgIDI6ICcjZmU1YTdmMGUnLFxuICAgIDM6ICcjZmYyMzVkMmMnLFxuICAgIDQ6ICcjZmQxOTVlNDInLFxuICAgIDU6ICcjZmUyZDZiNTMnLFxuICAgIDY6ICcjZmY0NDc2NjUnLFxuICAgIDc6ICcjZmY1NzdkODAnLFxuICAgIDg6ICcjZmY1YzdjYWUnLFxuICAgIDk6ICcjZmU0YzcwZTQnLFxuICAgIDEwOiAnI2ZmNjE3YmViJyxcbiAgICAxMTogJyNmZjk0OWQnLFxuICAgIDEyOiAnI2ZmZDNlMmZlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmltc29uRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxOTExMTQnLFxuICAgIDI6ICcjMjAxMzE4JyxcbiAgICAzOiAnIzM4MTUyNScsXG4gICAgNDogJyM0ZDEyMmYnLFxuICAgIDU6ICcjNWMxODM5JyxcbiAgICA2OiAnIzZkMjU0NScsXG4gICAgNzogJyM4NzMzNTYnLFxuICAgIDg6ICcjYjA0MzZlJyxcbiAgICA5OiAnI2U5M2Q4MicsXG4gICAgMTA6ICcjZWU1MThhJyxcbiAgICAxMTogJyNmZjkyYWQnLFxuICAgIDEyOiAnI2ZkZDNlOCcsXG59O1xuXG5leHBvcnQgY29uc3QgY3JpbXNvbkRhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2Y0MTI2NzA5JyxcbiAgICAyOiAnI2YyMmY3YTExJyxcbiAgICAzOiAnI2ZlMmE4YjJhJyxcbiAgICA0OiAnI2ZkMTU4NzQxJyxcbiAgICA1OiAnI2ZkMjc4ZjUxJyxcbiAgICA2OiAnI2ZlNDU5NzYzJyxcbiAgICA3OiAnI2ZkNTU5YjdmJyxcbiAgICA4OiAnI2ZlNWI5YmFiJyxcbiAgICA5OiAnI2ZlNDE4ZGU4JyxcbiAgICAxMDogJyNmZjU2OTNlZCcsXG4gICAgMTE6ICcjZmY5MmFkJyxcbiAgICAxMjogJyNmZmQ1ZWFmZCcsXG59O1xuXG5leHBvcnQgY29uc3QgcGlua0Rhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTkxMTE3JyxcbiAgICAyOiAnIzIxMTIxZCcsXG4gICAgMzogJyMzNzE3MmYnLFxuICAgIDQ6ICcjNGIxNDNkJyxcbiAgICA1OiAnIzU5MWM0NycsXG4gICAgNjogJyM2OTI5NTUnLFxuICAgIDc6ICcjODMzODY5JyxcbiAgICA4OiAnI2E4NDg4NScsXG4gICAgOTogJyNkNjQwOWYnLFxuICAgIDEwOiAnI2RlNTFhOCcsXG4gICAgMTE6ICcjZmY4ZGNjJyxcbiAgICAxMjogJyNmZGQxZWEnLFxufTtcblxuZXhwb3J0IGNvbnN0IHBpbmtEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmNDEyYmMwOScsXG4gICAgMjogJyNmNDIwYmIxMicsXG4gICAgMzogJyNmZTM3Y2MyOScsXG4gICAgNDogJyNmYzFlYzQzZicsXG4gICAgNTogJyNmZDM1YzI0ZScsXG4gICAgNjogJyNmZDUxYzc1ZicsXG4gICAgNzogJyNmZDYyYzg3YicsXG4gICAgODogJyNmZjY4YzhhMicsXG4gICAgOTogJyNmZTQ5YmNkNCcsXG4gICAgMTA6ICcjZmY1Y2MwZGMnLFxuICAgIDExOiAnI2ZmOGRjYycsXG4gICAgMTI6ICcjZmZkM2VjZmQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHBsdW1EYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE4MTExOCcsXG4gICAgMjogJyMyMDEzMjAnLFxuICAgIDM6ICcjMzUxYTM1JyxcbiAgICA0OiAnIzQ1MWQ0NycsXG4gICAgNTogJyM1MTI0NTQnLFxuICAgIDY6ICcjNWUzMDYxJyxcbiAgICA3OiAnIzczNDA3OScsXG4gICAgODogJyM5MjU0OWMnLFxuICAgIDk6ICcjYWI0YWJhJyxcbiAgICAxMDogJyNiNjU4YzQnLFxuICAgIDExOiAnI2U3OTZmMycsXG4gICAgMTI6ICcjZjRkNGY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBwbHVtRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZjExMmYxMDgnLFxuICAgIDI6ICcjZjIyZmYyMTEnLFxuICAgIDM6ICcjZmQ0Y2ZkMjcnLFxuICAgIDQ6ICcjZjY0NmZmM2EnLFxuICAgIDU6ICcjZjQ1NWZmNDgnLFxuICAgIDY6ICcjZjY2ZGZmNTYnLFxuICAgIDc6ICcjZjA3Y2ZkNzAnLFxuICAgIDg6ICcjZWU4NGZmOTUnLFxuICAgIDk6ICcjZTk2MWZlYjYnLFxuICAgIDEwOiAnI2VkNzBmZmMwJyxcbiAgICAxMTogJyNmMTljZmVmMycsXG4gICAgMTI6ICcjZmVkZGZlZjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHB1cnBsZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTgxMTFiJyxcbiAgICAyOiAnIzFlMTUyMycsXG4gICAgMzogJyMzMDFjM2InLFxuICAgIDQ6ICcjM2QyMjRlJyxcbiAgICA1OiAnIzQ4Mjk1YycsXG4gICAgNjogJyM1NDM0NmInLFxuICAgIDc6ICcjNjY0MjgyJyxcbiAgICA4OiAnIzg0NTdhYScsXG4gICAgOTogJyM4ZTRlYzYnLFxuICAgIDEwOiAnIzlhNWNkMCcsXG4gICAgMTE6ICcjZDE5ZGZmJyxcbiAgICAxMjogJyNlY2Q5ZmEnLFxufTtcblxuZXhwb3J0IGNvbnN0IHB1cnBsZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2I0MTJmOTBiJyxcbiAgICAyOiAnI2I3NDRmNzE0JyxcbiAgICAzOiAnI2MxNTBmZjJkJyxcbiAgICA0OiAnI2JiNTNmZDQyJyxcbiAgICA1OiAnI2JlNWNmZDUxJyxcbiAgICA2OiAnI2MxNmRmZDYxJyxcbiAgICA3OiAnI2MzNzhmZDdhJyxcbiAgICA4OiAnI2M0N2VmZmE0JyxcbiAgICA5OiAnI2I2NjFmZmMyJyxcbiAgICAxMDogJyNiYzZmZmZjZCcsXG4gICAgMTE6ICcjZDE5ZGZmJyxcbiAgICAxMjogJyNmMWRkZmZmYScsXG59O1xuXG5leHBvcnQgY29uc3QgdmlvbGV0RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxNDEyMWYnLFxuICAgIDI6ICcjMWIxNTI1JyxcbiAgICAzOiAnIzI5MWY0MycsXG4gICAgNDogJyMzMzI1NWInLFxuICAgIDU6ICcjM2MyZTY5JyxcbiAgICA2OiAnIzQ3Mzg3NicsXG4gICAgNzogJyM1NjQ2OGInLFxuICAgIDg6ICcjNjk1OGFkJyxcbiAgICA5OiAnIzZlNTZjZicsXG4gICAgMTA6ICcjN2Q2NmQ5JyxcbiAgICAxMTogJyNiYWE3ZmYnLFxuICAgIDEyOiAnI2UyZGRmZScsXG59O1xuXG5leHBvcnQgY29uc3QgdmlvbGV0RGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjNDQyMmZmMGYnLFxuICAgIDI6ICcjODUzZmY5MTYnLFxuICAgIDM6ICcjODM1NGZlMzYnLFxuICAgIDQ6ICcjN2Q1MWZkNTAnLFxuICAgIDU6ICcjODQ1ZmZkNWYnLFxuICAgIDY6ICcjOGY2Y2ZkNmQnLFxuICAgIDc6ICcjOTg3OWZmODMnLFxuICAgIDg6ICcjOTc3ZGZlYTgnLFxuICAgIDk6ICcjODY2OGZmY2MnLFxuICAgIDEwOiAnIzkxNzZmZWQ3JyxcbiAgICAxMTogJyNiYWE3ZmYnLFxuICAgIDEyOiAnI2UzZGVmZmZlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpcmlzRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMzEzMWUnLFxuICAgIDI6ICcjMTcxNjI1JyxcbiAgICAzOiAnIzIwMjI0OCcsXG4gICAgNDogJyMyNjJhNjUnLFxuICAgIDU6ICcjMzAzMzc0JyxcbiAgICA2OiAnIzNkM2U4MicsXG4gICAgNzogJyM0YTRhOTUnLFxuICAgIDg6ICcjNTk1OGIxJyxcbiAgICA5OiAnIzViNWJkNicsXG4gICAgMTA6ICcjNmU2YWRlJyxcbiAgICAxMTogJyNiMWE5ZmYnLFxuICAgIDEyOiAnI2UwZGZmZScsXG59O1xuXG5leHBvcnQgY29uc3QgaXJpc0RhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzM2MzZmZTBlJyxcbiAgICAyOiAnIzU2NGJmOTE2JyxcbiAgICAzOiAnIzUyNWJmZjNiJyxcbiAgICA0OiAnIzRkNThmZjVhJyxcbiAgICA1OiAnIzViNjJmZDZiJyxcbiAgICA2OiAnIzZkNmZmZDdhJyxcbiAgICA3OiAnIzc3NzdmZThlJyxcbiAgICA4OiAnIzdiN2FmZWFjJyxcbiAgICA5OiAnIzZhNmFmZWQ0JyxcbiAgICAxMDogJyM3ZDc5ZmZkYycsXG4gICAgMTE6ICcjYjFhOWZmJyxcbiAgICAxMjogJyNlMWUwZmZmZScsXG59O1xuXG5leHBvcnQgY29uc3QgaW5kaWdvRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTEzMWYnLFxuICAgIDI6ICcjMTQxNzI2JyxcbiAgICAzOiAnIzE4MjQ0OScsXG4gICAgNDogJyMxZDJlNjInLFxuICAgIDU6ICcjMjUzOTc0JyxcbiAgICA2OiAnIzMwNDM4NCcsXG4gICAgNzogJyMzYTRmOTcnLFxuICAgIDg6ICcjNDM1ZGIxJyxcbiAgICA5OiAnIzNlNjNkZCcsXG4gICAgMTA6ICcjNTQ3MmU0JyxcbiAgICAxMTogJyM5ZWIxZmYnLFxuICAgIDEyOiAnI2Q2ZTFmZicsXG59O1xuXG5leHBvcnQgY29uc3QgaW5kaWdvRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTEzM2ZmMGYnLFxuICAgIDI6ICcjMzM1NGZhMTcnLFxuICAgIDM6ICcjMmY2MmZmM2MnLFxuICAgIDQ6ICcjMzU2NmZmNTcnLFxuICAgIDU6ICcjNDE3MWZkNmInLFxuICAgIDY6ICcjNTE3OGZkN2MnLFxuICAgIDc6ICcjNWE3ZmZmOTAnLFxuICAgIDg6ICcjNWI4MWZlYWMnLFxuICAgIDk6ICcjNDY3MWZmZGInLFxuICAgIDEwOiAnIzVjN2VmZWUzJyxcbiAgICAxMTogJyM5ZWIxZmYnLFxuICAgIDEyOiAnI2Q2ZTFmZicsXG59O1xuXG5leHBvcnQgY29uc3QgYmx1ZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMGQxNTIwJyxcbiAgICAyOiAnIzExMTkyNycsXG4gICAgMzogJyMwZDI4NDcnLFxuICAgIDQ6ICcjMDAzMzYyJyxcbiAgICA1OiAnIzAwNDA3NCcsXG4gICAgNjogJyMxMDRkODcnLFxuICAgIDc6ICcjMjA1ZDllJyxcbiAgICA4OiAnIzI4NzBiZCcsXG4gICAgOTogJyMwMDkwZmYnLFxuICAgIDEwOiAnIzNiOWVmZicsXG4gICAgMTE6ICcjNzBiOGZmJyxcbiAgICAxMjogJyNjMmU2ZmYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJsdWVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDRkZjIxMScsXG4gICAgMjogJyMxMTY2ZmIxOCcsXG4gICAgMzogJyMwMDc3ZmYzYScsXG4gICAgNDogJyMwMDc1ZmY1NycsXG4gICAgNTogJyMwMDgxZmQ2YicsXG4gICAgNjogJyMwZjg5ZmQ3ZicsXG4gICAgNzogJyMyYTkxZmU5OCcsXG4gICAgODogJyMzMDk0ZmViOScsXG4gICAgOTogJyMwMDkwZmYnLFxuICAgIDEwOiAnIzNiOWVmZicsXG4gICAgMTE6ICcjNzBiOGZmJyxcbiAgICAxMjogJyNjMmU2ZmYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGN5YW5EYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBiMTYxYScsXG4gICAgMjogJyMxMDFiMjAnLFxuICAgIDM6ICcjMDgyYzM2JyxcbiAgICA0OiAnIzAwMzg0OCcsXG4gICAgNTogJyMwMDQ1NTgnLFxuICAgIDY6ICcjMDQ1NDY4JyxcbiAgICA3OiAnIzEyNjc3ZScsXG4gICAgODogJyMxMTgwOWMnLFxuICAgIDk6ICcjMDBhMmM3JyxcbiAgICAxMDogJyMyM2FmZDAnLFxuICAgIDExOiAnIzRjY2NlNicsXG4gICAgMTI6ICcjYjZlY2Y3Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBjeWFuRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA5MWY3MGEnLFxuICAgIDI6ICcjMDJhN2YyMTEnLFxuICAgIDM6ICcjMDBiZWZkMjgnLFxuICAgIDQ6ICcjMDBiYWZmM2InLFxuICAgIDU6ICcjMDBiZWZkNGQnLFxuICAgIDY6ICcjMDBjN2ZkNWUnLFxuICAgIDc6ICcjMTRjZGZmNzUnLFxuICAgIDg6ICcjMTFjZmZmOTUnLFxuICAgIDk6ICcjMDBjZmZmYzMnLFxuICAgIDEwOiAnIzI4ZDZmZmNkJyxcbiAgICAxMTogJyM1MmUxZmVlNScsXG4gICAgMTI6ICcjYmJmM2ZlZjcnLFxufTtcblxuZXhwb3J0IGNvbnN0IHRlYWxEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBkMTUxNCcsXG4gICAgMjogJyMxMTFjMWInLFxuICAgIDM6ICcjMGQyZDJhJyxcbiAgICA0OiAnIzAyM2IzNycsXG4gICAgNTogJyMwODQ4NDMnLFxuICAgIDY6ICcjMTQ1NzUwJyxcbiAgICA3OiAnIzFjNjk2MScsXG4gICAgODogJyMyMDdlNzMnLFxuICAgIDk6ICcjMTJhNTk0JyxcbiAgICAxMDogJyMwZWIzOWUnLFxuICAgIDExOiAnIzBiZDhiNicsXG4gICAgMTI6ICcjYWRmMGRkJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZWFsRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBkZWFiMDUnLFxuICAgIDI6ICcjMTJmYmU2MGMnLFxuICAgIDM6ICcjMDBmZmU2MWUnLFxuICAgIDQ6ICcjMDBmZmU5MmQnLFxuICAgIDU6ICcjMDBmZmVhM2InLFxuICAgIDY6ICcjMWNmZmU4NGInLFxuICAgIDc6ICcjMmVmZGU4NWYnLFxuICAgIDg6ICcjMzJmZmU3NzUnLFxuICAgIDk6ICcjMTNmZmU0OWYnLFxuICAgIDEwOiAnIzBkZmZlMGFlJyxcbiAgICAxMTogJyMwYWZlZDVkNicsXG4gICAgMTI6ICcjYjhmZmViZWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGphZGVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBkMTUxMicsXG4gICAgMjogJyMxMjFjMTgnLFxuICAgIDM6ICcjMGYyZTIyJyxcbiAgICA0OiAnIzBiM2IyYycsXG4gICAgNTogJyMxMTQ4MzcnLFxuICAgIDY6ICcjMWI1NzQ1JyxcbiAgICA3OiAnIzI0Njg1NCcsXG4gICAgODogJyMyYTdlNjgnLFxuICAgIDk6ICcjMjlhMzgzJyxcbiAgICAxMDogJyMyN2IwOGInLFxuICAgIDExOiAnIzFmZDhhNCcsXG4gICAgMTI6ICcjYWRmMGQ0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBqYWRlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBkZTQ1MDUnLFxuICAgIDI6ICcjMjdmYmE2MGMnLFxuICAgIDM6ICcjMDJmOTk5MjAnLFxuICAgIDQ6ICcjMDBmZmFhMmQnLFxuICAgIDU6ICcjMTFmZmI2M2InLFxuICAgIDY6ICcjMzRmZmMyNGInLFxuICAgIDc6ICcjNDVmZGM3NWUnLFxuICAgIDg6ICcjNDhmZmNmNzUnLFxuICAgIDk6ICcjMzhmZWNhOWQnLFxuICAgIDEwOiAnIzMxZmVjN2FiJyxcbiAgICAxMTogJyMyMWZlYzBkNicsXG4gICAgMTI6ICcjYjhmZmUxZWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyZWVuRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZTE1MTInLFxuICAgIDI6ICcjMTIxYjE3JyxcbiAgICAzOiAnIzEzMmQyMScsXG4gICAgNDogJyMxMTNiMjknLFxuICAgIDU6ICcjMTc0OTMzJyxcbiAgICA2OiAnIzIwNTczZScsXG4gICAgNzogJyMyODY4NGEnLFxuICAgIDg6ICcjMmY3YzU3JyxcbiAgICA5OiAnIzMwYTQ2YycsXG4gICAgMTA6ICcjMzNiMDc0JyxcbiAgICAxMTogJyMzZGQ2OGMnLFxuICAgIDEyOiAnI2IxZjFjYicsXG59O1xuXG5leHBvcnQgY29uc3QgZ3JlZW5EYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGRlNDUwNScsXG4gICAgMjogJyMyOWY5OWQwYicsXG4gICAgMzogJyMyMmZmOTkxZScsXG4gICAgNDogJyMxMWZmOTkyZCcsXG4gICAgNTogJyMyYmZmYTIzYycsXG4gICAgNjogJyM0NGZmYWE0YicsXG4gICAgNzogJyM1MGZkYWM1ZScsXG4gICAgODogJyM1NGZmYWQ3MycsXG4gICAgOTogJyM0NGZmYTQ5ZScsXG4gICAgMTA6ICcjNDNmZWE0YWInLFxuICAgIDExOiAnIzQ2ZmVhNWQ0JyxcbiAgICAxMjogJyNiYmZmZDdmMCcsXG59O1xuXG5leHBvcnQgY29uc3QgZ3Jhc3NEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBlMTUxMScsXG4gICAgMjogJyMxNDFhMTUnLFxuICAgIDM6ICcjMWIyYTFlJyxcbiAgICA0OiAnIzFkM2EyNCcsXG4gICAgNTogJyMyNTQ4MmQnLFxuICAgIDY6ICcjMmQ1NzM2JyxcbiAgICA3OiAnIzM2Njc0MCcsXG4gICAgODogJyMzZTc5NDknLFxuICAgIDk6ICcjNDZhNzU4JyxcbiAgICAxMDogJyM1M2IzNjUnLFxuICAgIDExOiAnIzcxZDA4MycsXG4gICAgMTI6ICcjYzJmMGMyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBncmFzc0RhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwZGUxMjA1JyxcbiAgICAyOiAnIzVlZjc3ODBhJyxcbiAgICAzOiAnIzcwZmU4YzFiJyxcbiAgICA0OiAnIzU3ZmY4MDJjJyxcbiAgICA1OiAnIzY4ZmY4YjNiJyxcbiAgICA2OiAnIzcxZmY4ZjRiJyxcbiAgICA3OiAnIzc3ZmQ5MjVkJyxcbiAgICA4OiAnIzc3ZmQ5MDcwJyxcbiAgICA5OiAnIzY1ZmY4MmExJyxcbiAgICAxMDogJyM3MmZmOGRhZScsXG4gICAgMTE6ICcjODlmZjlmY2QnLFxuICAgIDEyOiAnI2NlZmZjZWVmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm93bkRhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTIxMTBmJyxcbiAgICAyOiAnIzFjMTgxNicsXG4gICAgMzogJyMyODIxMWQnLFxuICAgIDQ6ICcjMzIyOTIyJyxcbiAgICA1OiAnIzNlMzEyOCcsXG4gICAgNjogJyM0ZDNjMmYnLFxuICAgIDc6ICcjNjE0YTM5JyxcbiAgICA4OiAnIzdjNWY0NicsXG4gICAgOTogJyNhZDdmNTgnLFxuICAgIDEwOiAnI2I4OGM2NycsXG4gICAgMTE6ICcjZGJiNTk0JyxcbiAgICAxMjogJyNmMmUxY2EnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJyb3duRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjOTExMTAwMDInLFxuICAgIDI6ICcjZmJhNjdjMGMnLFxuICAgIDM6ICcjZmNiNThjMTknLFxuICAgIDQ6ICcjZmJiYjhhMjQnLFxuICAgIDU6ICcjZmNiODg5MzEnLFxuICAgIDY6ICcjZmRiYTg3NDEnLFxuICAgIDc6ICcjZmZiYjg4NTYnLFxuICAgIDg6ICcjZmZiZTg3NzMnLFxuICAgIDk6ICcjZmViODdkYTgnLFxuICAgIDEwOiAnI2ZmYzE4Y2IzJyxcbiAgICAxMTogJyNmZWQxYWFkOScsXG4gICAgMTI6ICcjZmVlY2Q0ZjInLFxufTtcblxuZXhwb3J0IGNvbnN0IGJyb256ZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTQxMTEwJyxcbiAgICAyOiAnIzFjMTkxNycsXG4gICAgMzogJyMyNjIyMjAnLFxuICAgIDQ6ICcjMzAyYTI3JyxcbiAgICA1OiAnIzNiMzMzMCcsXG4gICAgNjogJyM0OTNlM2EnLFxuICAgIDc6ICcjNWE0YzQ3JyxcbiAgICA4OiAnIzZmNWY1OCcsXG4gICAgOTogJyNhMTgwNzInLFxuICAgIDEwOiAnI2FlOGM3ZScsXG4gICAgMTE6ICcjZDRiM2E1JyxcbiAgICAxMjogJyNlZGUwZDknLFxufTtcblxuZXhwb3J0IGNvbnN0IGJyb256ZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2QxMTEwMDA0JyxcbiAgICAyOiAnI2ZiYmM5MTBjJyxcbiAgICAzOiAnI2ZhY2ViODE3JyxcbiAgICA0OiAnI2ZhY2RiNjIyJyxcbiAgICA1OiAnI2ZmZDJjMTJkJyxcbiAgICA2OiAnI2ZmZDFjMDNjJyxcbiAgICA3OiAnI2ZkZDBjMDRmJyxcbiAgICA4OiAnI2ZmZDZjNTY1JyxcbiAgICA5OiAnI2ZlYzdiMDliJyxcbiAgICAxMDogJyNmZWNhYjVhOScsXG4gICAgMTE6ICcjZmZkN2M2ZDEnLFxuICAgIDEyOiAnI2ZmZjFlOWVjJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnb2xkRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMjEyMTEnLFxuICAgIDI6ICcjMWIxYTE3JyxcbiAgICAzOiAnIzI0MjMxZicsXG4gICAgNDogJyMyZDJiMjYnLFxuICAgIDU6ICcjMzgzNTJlJyxcbiAgICA2OiAnIzQ0NDAzOScsXG4gICAgNzogJyM1NDRmNDYnLFxuICAgIDg6ICcjNjk2MjU2JyxcbiAgICA5OiAnIzk3ODM2NScsXG4gICAgMTA6ICcjYTM5MDczJyxcbiAgICAxMTogJyNjYmI5OWYnLFxuICAgIDEyOiAnI2U4ZTJkOScsXG59O1xuXG5leHBvcnQgY29uc3QgZ29sZERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzkxOTExMTAyJyxcbiAgICAyOiAnI2Y5ZTI5ZDBiJyxcbiAgICAzOiAnI2Y4ZWNiYjE1JyxcbiAgICA0OiAnI2ZmZWVjNDFlJyxcbiAgICA1OiAnI2ZlZWNjMjJhJyxcbiAgICA2OiAnI2ZlZWJjYjM3JyxcbiAgICA3OiAnI2ZmZWRjZDQ4JyxcbiAgICA4OiAnI2ZkZWFjYTVmJyxcbiAgICA5OiAnI2ZmZGJhNjkwJyxcbiAgICAxMDogJyNmZWRmYjA5ZCcsXG4gICAgMTE6ICcjZmVlN2M2YzgnLFxuICAgIDEyOiAnI2ZlZjdlZGU3Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBza3lEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBkMTQxZicsXG4gICAgMjogJyMxMTFhMjcnLFxuICAgIDM6ICcjMTEyODQwJyxcbiAgICA0OiAnIzExMzU1NScsXG4gICAgNTogJyMxNTQ0NjcnLFxuICAgIDY6ICcjMWI1MzdiJyxcbiAgICA3OiAnIzFmNjY5MicsXG4gICAgODogJyMxOTdjYWUnLFxuICAgIDk6ICcjN2NlMmZlJyxcbiAgICAxMDogJyNhOGVlZmYnLFxuICAgIDExOiAnIzc1YzdmMCcsXG4gICAgMTI6ICcjYzJmM2ZmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBza3lEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDQ0ZmYwZicsXG4gICAgMjogJyMxMTcxZmIxOCcsXG4gICAgMzogJyMxMTg0ZmMzMycsXG4gICAgNDogJyMxMjhmZmY0OScsXG4gICAgNTogJyMxYzlkZmQ1ZCcsXG4gICAgNjogJyMyOGE1ZmY3MicsXG4gICAgNzogJyMyYmFkZmU4YicsXG4gICAgODogJyMxZGIyZmVhOScsXG4gICAgOTogJyM3Y2UzZmZmZScsXG4gICAgMTA6ICcjYThlZWZmJyxcbiAgICAxMTogJyM3Y2QzZmZlZicsXG4gICAgMTI6ICcjYzJmM2ZmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtaW50RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZTE1MTUnLFxuICAgIDI6ICcjMGYxYjFiJyxcbiAgICAzOiAnIzA5MmMyYicsXG4gICAgNDogJyMwMDNhMzgnLFxuICAgIDU6ICcjMDA0NzQ0JyxcbiAgICA2OiAnIzEwNTY1MCcsXG4gICAgNzogJyMxZTY4NWYnLFxuICAgIDg6ICcjMjc3ZjcwJyxcbiAgICA5OiAnIzg2ZWFkNCcsXG4gICAgMTA6ICcjYThmNWU1JyxcbiAgICAxMTogJyM1OGQ1YmEnLFxuICAgIDEyOiAnI2M0ZjVlMScsXG59O1xuXG5leHBvcnQgY29uc3QgbWludERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwZGVkZTA1JyxcbiAgICAyOiAnIzAwZjlmOTBiJyxcbiAgICAzOiAnIzAwZmZmNjFkJyxcbiAgICA0OiAnIzAwZmZmNDJjJyxcbiAgICA1OiAnIzAwZmZmMjNhJyxcbiAgICA2OiAnIzBlZmZlYjRhJyxcbiAgICA3OiAnIzM0ZmRlNTVlJyxcbiAgICA4OiAnIzQxZmZkZjc2JyxcbiAgICA5OiAnIzkyZmZlN2U5JyxcbiAgICAxMDogJyNhZWZlZWRmNScsXG4gICAgMTE6ICcjNjdmZmRlZDInLFxuICAgIDEyOiAnI2NiZmVlOWY1Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBsaW1lRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTEzMGMnLFxuICAgIDI6ICcjMTUxYTEwJyxcbiAgICAzOiAnIzFmMjkxNycsXG4gICAgNDogJyMyOTM3MWQnLFxuICAgIDU6ICcjMzM0NDIzJyxcbiAgICA2OiAnIzNkNTIyYScsXG4gICAgNzogJyM0OTYyMzEnLFxuICAgIDg6ICcjNTc3NTM4JyxcbiAgICA5OiAnI2JkZWU2MycsXG4gICAgMTA6ICcjZDRmZjcwJyxcbiAgICAxMTogJyNiZGU1NmMnLFxuICAgIDEyOiAnI2UzZjdiYScsXG59O1xuXG5leHBvcnQgY29uc3QgbGltZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzExYmIwMDAzJyxcbiAgICAyOiAnIzc4ZjcwMDBhJyxcbiAgICAzOiAnIzliZmQ0YzFhJyxcbiAgICA0OiAnI2E3ZmU1YzI5JyxcbiAgICA1OiAnI2FmZmU2NTM3JyxcbiAgICA2OiAnI2IyZmU2ZDQ2JyxcbiAgICA3OiAnI2I2ZmY2ZjU3JyxcbiAgICA4OiAnI2I2ZmQ2ZDZjJyxcbiAgICA5OiAnI2NhZmY2OWVkJyxcbiAgICAxMDogJyNkNGZmNzAnLFxuICAgIDExOiAnI2QxZmU3N2U0JyxcbiAgICAxMjogJyNlOWZlYmZmNycsXG59O1xuXG5leHBvcnQgY29uc3QgeWVsbG93RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxNDEyMGInLFxuICAgIDI6ICcjMWIxODBmJyxcbiAgICAzOiAnIzJkMjMwNScsXG4gICAgNDogJyMzNjJiMDAnLFxuICAgIDU6ICcjNDMzNTAwJyxcbiAgICA2OiAnIzUyNDIwMicsXG4gICAgNzogJyM2NjU0MTcnLFxuICAgIDg6ICcjODM2YTIxJyxcbiAgICA5OiAnI2ZmZTYyOScsXG4gICAgMTA6ICcjZmZmZjU3JyxcbiAgICAxMTogJyNmNWUxNDcnLFxuICAgIDEyOiAnI2Y2ZWViNCcsXG59O1xuXG5leHBvcnQgY29uc3QgeWVsbG93RGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZDE1MTAwMDQnLFxuICAgIDI6ICcjZjliNDAwMGInLFxuICAgIDM6ICcjZmZhYTAwMWUnLFxuICAgIDQ6ICcjZmRiNzAwMjgnLFxuICAgIDU6ICcjZmViYjAwMzYnLFxuICAgIDY6ICcjZmVjNDAwNDYnLFxuICAgIDc6ICcjZmRjYjIyNWMnLFxuICAgIDg6ICcjZmRjYTMyN2InLFxuICAgIDk6ICcjZmZlNjI5JyxcbiAgICAxMDogJyNmZmZmNTcnLFxuICAgIDExOiAnI2ZlZTk0OWY1JyxcbiAgICAxMjogJyNmZWY2YmFmNicsXG59O1xuXG5leHBvcnQgY29uc3QgYW1iZXJEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE2MTIwYycsXG4gICAgMjogJyMxZDE4MGYnLFxuICAgIDM6ICcjMzAyMDA4JyxcbiAgICA0OiAnIzNmMjcwMCcsXG4gICAgNTogJyM0ZDMwMDAnLFxuICAgIDY6ICcjNWMzZDA1JyxcbiAgICA3OiAnIzcxNGYxOScsXG4gICAgODogJyM4ZjY0MjQnLFxuICAgIDk6ICcjZmZjNTNkJyxcbiAgICAxMDogJyNmZmQ2MGEnLFxuICAgIDExOiAnI2ZmY2ExNicsXG4gICAgMTI6ICcjZmZlN2IzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBhbWJlckRhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2U2M2MwMDA2JyxcbiAgICAyOiAnI2ZkOWIwMDBkJyxcbiAgICAzOiAnI2ZhODIwMDIyJyxcbiAgICA0OiAnI2ZjODIwMDMyJyxcbiAgICA1OiAnI2ZkOGIwMDQxJyxcbiAgICA2OiAnI2ZkOWIwMDUxJyxcbiAgICA3OiAnI2ZmYWIyNTY3JyxcbiAgICA4OiAnI2ZmYWUzNTg3JyxcbiAgICA5OiAnI2ZmYzUzZCcsXG4gICAgMTA6ICcjZmZkNjBhJyxcbiAgICAxMTogJyNmZmNhMTYnLFxuICAgIDEyOiAnI2ZmZTdiMycsXG59O1xuXG5leHBvcnQgY29uc3Qgb3JhbmdlRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxNzEyMGUnLFxuICAgIDI6ICcjMWUxNjBmJyxcbiAgICAzOiAnIzMzMWUwYicsXG4gICAgNDogJyM0NjIxMDAnLFxuICAgIDU6ICcjNTYyODAwJyxcbiAgICA2OiAnIzY2MzUwYycsXG4gICAgNzogJyM3ZTQ1MWQnLFxuICAgIDg6ICcjYTM1ODI5JyxcbiAgICA5OiAnI2Y3NmIxNScsXG4gICAgMTA6ICcjZmY4MDFmJyxcbiAgICAxMTogJyNmZmEwNTcnLFxuICAgIDEyOiAnI2ZmZTBjMicsXG59O1xuXG5leHBvcnQgY29uc3Qgb3JhbmdlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZWMzNjAwMDcnLFxuICAgIDI6ICcjZmU2ZDAwMGUnLFxuICAgIDM6ICcjZmI2YTAwMjUnLFxuICAgIDQ6ICcjZmY1OTAwMzknLFxuICAgIDU6ICcjZmY2MTAwNGEnLFxuICAgIDY6ICcjZmQ3NTA0NWMnLFxuICAgIDc6ICcjZmY4MzJjNzUnLFxuICAgIDg6ICcjZmU4NDM4OWQnLFxuICAgIDk6ICcjZmU2ZDE1ZjcnLFxuICAgIDEwOiAnI2ZmODAxZicsXG4gICAgMTE6ICcjZmZhMDU3JyxcbiAgICAxMjogJyNmZmUwYzInLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IFMySGV4Q29sb3IsIFMyQ29sb3JTY2FsZSB9IGZyb20gJy4uL2NvcmUvc2hhcmVkL3MyLWNvbG9yLXRoZW1lJztcblxuZXhwb3J0IGNvbnN0IGdyYXk6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmNmY2ZjJyxcbiAgICAyOiAnI2Y5ZjlmOScsXG4gICAgMzogJyNmMGYwZjAnLFxuICAgIDQ6ICcjZThlOGU4JyxcbiAgICA1OiAnI2UwZTBlMCcsXG4gICAgNjogJyNkOWQ5ZDknLFxuICAgIDc6ICcjY2VjZWNlJyxcbiAgICA4OiAnI2JiYmJiYicsXG4gICAgOTogJyM4ZDhkOGQnLFxuICAgIDEwOiAnIzgzODM4MycsXG4gICAgMTE6ICcjNjQ2NDY0JyxcbiAgICAxMjogJyMyMDIwMjAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyYXlBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDAwMDAzJyxcbiAgICAyOiAnIzAwMDAwMDA2JyxcbiAgICAzOiAnIzAwMDAwMDBmJyxcbiAgICA0OiAnIzAwMDAwMDE3JyxcbiAgICA1OiAnIzAwMDAwMDFmJyxcbiAgICA2OiAnIzAwMDAwMDI2JyxcbiAgICA3OiAnIzAwMDAwMDMxJyxcbiAgICA4OiAnIzAwMDAwMDQ0JyxcbiAgICA5OiAnIzAwMDAwMDcyJyxcbiAgICAxMDogJyMwMDAwMDA3YycsXG4gICAgMTE6ICcjMDAwMDAwOWInLFxuICAgIDEyOiAnIzAwMDAwMGRmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXV2ZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZGZjZmQnLFxuICAgIDI6ICcjZmFmOWZiJyxcbiAgICAzOiAnI2YyZWZmMycsXG4gICAgNDogJyNlYWU3ZWMnLFxuICAgIDU6ICcjZTNkZmU2JyxcbiAgICA2OiAnI2RiZDhlMCcsXG4gICAgNzogJyNkMGNkZDcnLFxuICAgIDg6ICcjYmNiYWM3JyxcbiAgICA5OiAnIzhlOGM5OScsXG4gICAgMTA6ICcjODQ4MjhlJyxcbiAgICAxMTogJyM2NTYzNmQnLFxuICAgIDEyOiAnIzIxMWYyNicsXG59O1xuXG5leHBvcnQgY29uc3QgbWF1dmVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzU1MDA1NTAzJyxcbiAgICAyOiAnIzJiMDA1NTA2JyxcbiAgICAzOiAnIzMwMDA0MDEwJyxcbiAgICA0OiAnIzIwMDAzNjE4JyxcbiAgICA1OiAnIzIwMDAzODIwJyxcbiAgICA2OiAnIzE0MDAzNTI3JyxcbiAgICA3OiAnIzEwMDAzMzMyJyxcbiAgICA4OiAnIzA4MDAzMTQ1JyxcbiAgICA5OiAnIzA1MDAxZDczJyxcbiAgICAxMDogJyMwNTAwMTk3ZCcsXG4gICAgMTE6ICcjMDQwMDExOWMnLFxuICAgIDEyOiAnIzAyMDAwOGUwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzbGF0ZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmY2ZjZmQnLFxuICAgIDI6ICcjZjlmOWZiJyxcbiAgICAzOiAnI2YwZjBmMycsXG4gICAgNDogJyNlOGU4ZWMnLFxuICAgIDU6ICcjZTBlMWU2JyxcbiAgICA2OiAnI2Q5ZDllMCcsXG4gICAgNzogJyNjZGNlZDYnLFxuICAgIDg6ICcjYjliYmM2JyxcbiAgICA5OiAnIzhiOGQ5OCcsXG4gICAgMTA6ICcjODA4MzhkJyxcbiAgICAxMTogJyM2MDY0NmMnLFxuICAgIDEyOiAnIzFjMjAyNCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2xhdGVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDA1NTAzJyxcbiAgICAyOiAnIzAwMDA1NTA2JyxcbiAgICAzOiAnIzAwMDAzMzBmJyxcbiAgICA0OiAnIzAwMDAyZDE3JyxcbiAgICA1OiAnIzAwMDkzMjFmJyxcbiAgICA2OiAnIzAwMDAyZjI2JyxcbiAgICA3OiAnIzAwMDYyZTMyJyxcbiAgICA4OiAnIzAwMDgzMDQ2JyxcbiAgICA5OiAnIzAwMDUxZDc0JyxcbiAgICAxMDogJyMwMDA3MWI3ZicsXG4gICAgMTE6ICcjMDAwNzE0OWYnLFxuICAgIDEyOiAnIzAwMDUwOWUzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzYWdlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZiZmRmYycsXG4gICAgMjogJyNmN2Y5ZjgnLFxuICAgIDM6ICcjZWVmMWYwJyxcbiAgICA0OiAnI2U2ZTllOCcsXG4gICAgNTogJyNkZmUyZTAnLFxuICAgIDY6ICcjZDdkYWQ5JyxcbiAgICA3OiAnI2NiY2ZjZCcsXG4gICAgODogJyNiOGJjYmEnLFxuICAgIDk6ICcjODY4ZThiJyxcbiAgICAxMDogJyM3Yzg0ODEnLFxuICAgIDExOiAnIzVmNjU2MycsXG4gICAgMTI6ICcjMWEyMTFlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzYWdlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDgwNDAwNCcsXG4gICAgMjogJyMwMDQwMjAwOCcsXG4gICAgMzogJyMwMDJkMWUxMScsXG4gICAgNDogJyMwMDFmMTUxOScsXG4gICAgNTogJyMwMDE4MDgyMCcsXG4gICAgNjogJyMwMDE0MGQyOCcsXG4gICAgNzogJyMwMDE0MGEzNCcsXG4gICAgODogJyMwMDBmMDg0NycsXG4gICAgOTogJyMwMDExMGI3OScsXG4gICAgMTA6ICcjMDAxMDBhODMnLFxuICAgIDExOiAnIzAwMGEwN2EwJyxcbiAgICAxMjogJyMwMDA4MDVlNScsXG59O1xuXG5leHBvcnQgY29uc3Qgb2xpdmU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmNmZGZjJyxcbiAgICAyOiAnI2Y4ZmFmOCcsXG4gICAgMzogJyNlZmYxZWYnLFxuICAgIDQ6ICcjZTdlOWU3JyxcbiAgICA1OiAnI2RmZTJkZicsXG4gICAgNjogJyNkN2RhZDcnLFxuICAgIDc6ICcjY2NjZmNjJyxcbiAgICA4OiAnI2I5YmNiOCcsXG4gICAgOTogJyM4OThlODcnLFxuICAgIDEwOiAnIzdmODQ3ZCcsXG4gICAgMTE6ICcjNjA2NTVmJyxcbiAgICAxMjogJyMxZDIxMWMnLFxufTtcblxuZXhwb3J0IGNvbnN0IG9saXZlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDU1MDAwMycsXG4gICAgMjogJyMwMDQ5MDAwNycsXG4gICAgMzogJyMwMDIwMDAxMCcsXG4gICAgNDogJyMwMDE2MDAxOCcsXG4gICAgNTogJyMwMDE4MDAyMCcsXG4gICAgNjogJyMwMDE0MDAyOCcsXG4gICAgNzogJyMwMDBmMDAzMycsXG4gICAgODogJyMwNDBmMDA0NycsXG4gICAgOTogJyMwNTBmMDA3OCcsXG4gICAgMTA6ICcjMDQwZTAwODInLFxuICAgIDExOiAnIzAyMGEwMGEwJyxcbiAgICAxMjogJyMwMTA2MDBlMycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FuZDogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZGZkZmMnLFxuICAgIDI6ICcjZjlmOWY4JyxcbiAgICAzOiAnI2YxZjBlZicsXG4gICAgNDogJyNlOWU4ZTYnLFxuICAgIDU6ICcjZTJlMWRlJyxcbiAgICA2OiAnI2RhZDlkNicsXG4gICAgNzogJyNjZmNlY2EnLFxuICAgIDg6ICcjYmNiYmI1JyxcbiAgICA5OiAnIzhkOGQ4NicsXG4gICAgMTA6ICcjODI4MjdjJyxcbiAgICAxMTogJyM2MzYzNWUnLFxuICAgIDEyOiAnIzIxMjAxYycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FuZEE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjNTU1NTAwMDMnLFxuICAgIDI6ICcjMjUyNTAwMDcnLFxuICAgIDM6ICcjMjAxMDAwMTAnLFxuICAgIDQ6ICcjMWYxNTAwMTknLFxuICAgIDU6ICcjMWYxODAwMjEnLFxuICAgIDY6ICcjMTkxMzAwMjknLFxuICAgIDc6ICcjMTkxNDAwMzUnLFxuICAgIDg6ICcjMTkxNTAxNGEnLFxuICAgIDk6ICcjMGYwZjAwNzknLFxuICAgIDEwOiAnIzBjMGMwMDgzJyxcbiAgICAxMTogJyMwODA4MDBhMScsXG4gICAgMTI6ICcjMDYwNTAwZTMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHRvbWF0bzogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZmZjZmMnLFxuICAgIDI6ICcjZmZmOGY3JyxcbiAgICAzOiAnI2ZlZWJlNycsXG4gICAgNDogJyNmZmRjZDMnLFxuICAgIDU6ICcjZmZjZGMyJyxcbiAgICA2OiAnI2ZkYmRhZicsXG4gICAgNzogJyNmNWE4OTgnLFxuICAgIDg6ICcjZWM4ZTdiJyxcbiAgICA5OiAnI2U1NGQyZScsXG4gICAgMTA6ICcjZGQ0NDI1JyxcbiAgICAxMTogJyNkMTM0MTUnLFxuICAgIDEyOiAnIzVjMjcxZicsXG59O1xuXG5leHBvcnQgY29uc3QgdG9tYXRvQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZjAwMDAwMycsXG4gICAgMjogJyNmZjIwMDAwOCcsXG4gICAgMzogJyNmNTJiMDAxOCcsXG4gICAgNDogJyNmZjM1MDAyYycsXG4gICAgNTogJyNmZjJlMDAzZCcsXG4gICAgNjogJyNmOTJkMDA1MCcsXG4gICAgNzogJyNlNzI4MDA2NycsXG4gICAgODogJyNkYjI1MDA4NCcsXG4gICAgOTogJyNkZjI2MDBkMScsXG4gICAgMTA6ICcjZDcyNDAwZGEnLFxuICAgIDExOiAnI2NkMjIwMGVhJyxcbiAgICAxMjogJyM0NjA5MDBlMCcsXG59O1xuXG5leHBvcnQgY29uc3QgcmVkOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmZmNmYycsXG4gICAgMjogJyNmZmY3ZjcnLFxuICAgIDM6ICcjZmVlYmVjJyxcbiAgICA0OiAnI2ZmZGJkYycsXG4gICAgNTogJyNmZmNkY2UnLFxuICAgIDY6ICcjZmRiZGJlJyxcbiAgICA3OiAnI2Y0YTlhYScsXG4gICAgODogJyNlYjhlOTAnLFxuICAgIDk6ICcjZTU0ODRkJyxcbiAgICAxMDogJyNkYzNlNDInLFxuICAgIDExOiAnI2NlMmMzMScsXG4gICAgMTI6ICcjNjQxNzIzJyxcbn07XG5cbmV4cG9ydCBjb25zdCByZWRBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmMDAwMDAzJyxcbiAgICAyOiAnI2ZmMDAwMDA4JyxcbiAgICAzOiAnI2YzMDAwZDE0JyxcbiAgICA0OiAnI2ZmMDAwODI0JyxcbiAgICA1OiAnI2ZmMDAwNjMyJyxcbiAgICA2OiAnI2Y4MDAwNDQyJyxcbiAgICA3OiAnI2RmMDAwMzU2JyxcbiAgICA4OiAnI2QyMDAwNTcxJyxcbiAgICA5OiAnI2RiMDAwN2I3JyxcbiAgICAxMDogJyNkMTAwMDVjMScsXG4gICAgMTE6ICcjYzQwMDA2ZDMnLFxuICAgIDEyOiAnIzU1MDAwZGU4Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBydWJ5OiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmZmNmZCcsXG4gICAgMjogJyNmZmY3ZjgnLFxuICAgIDM6ICcjZmVlYWVkJyxcbiAgICA0OiAnI2ZmZGNlMScsXG4gICAgNTogJyNmZmNlZDYnLFxuICAgIDY6ICcjZjhiZmM4JyxcbiAgICA3OiAnI2VmYWNiOCcsXG4gICAgODogJyNlNTkyYTMnLFxuICAgIDk6ICcjZTU0NjY2JyxcbiAgICAxMDogJyNkYzNiNWQnLFxuICAgIDExOiAnI2NhMjQ0ZCcsXG4gICAgMTI6ICcjNjQxNzJiJyxcbn07XG5cbmV4cG9ydCBjb25zdCBydWJ5QTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZjAwNTUwMycsXG4gICAgMjogJyNmZjAwMjAwOCcsXG4gICAgMzogJyNmMzAwMjUxNScsXG4gICAgNDogJyNmZjAwMjUyMycsXG4gICAgNTogJyNmZjAwMmEzMScsXG4gICAgNjogJyNlNDAwMjQ0MCcsXG4gICAgNzogJyNjZTAwMjU1MycsXG4gICAgODogJyNjMzAwMjg2ZCcsXG4gICAgOTogJyNkYjAwMmNiOScsXG4gICAgMTA6ICcjZDIwMDJjYzQnLFxuICAgIDExOiAnI2MxMDAzMGRiJyxcbiAgICAxMjogJyM1NTAwMTZlOCcsXG59O1xuXG5leHBvcnQgY29uc3QgY3JpbXNvbjogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZmZjZmQnLFxuICAgIDI6ICcjZmVmN2Y5JyxcbiAgICAzOiAnI2ZmZTlmMCcsXG4gICAgNDogJyNmZWRjZTcnLFxuICAgIDU6ICcjZmFjZWRkJyxcbiAgICA2OiAnI2YzYmVkMScsXG4gICAgNzogJyNlYWFjYzMnLFxuICAgIDg6ICcjZTA5M2IyJyxcbiAgICA5OiAnI2U5M2Q4MicsXG4gICAgMTA6ICcjZGYzNDc4JyxcbiAgICAxMTogJyNjYjFkNjMnLFxuICAgIDEyOiAnIzYyMTYzOScsXG59O1xuXG5leHBvcnQgY29uc3QgY3JpbXNvbkE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmYwMDU1MDMnLFxuICAgIDI6ICcjZTAwMDQwMDgnLFxuICAgIDM6ICcjZmYwMDUyMTYnLFxuICAgIDQ6ICcjZjgwMDUxMjMnLFxuICAgIDU6ICcjZTUwMDRmMzEnLFxuICAgIDY6ICcjZDAwMDRiNDEnLFxuICAgIDc6ICcjYmYwMDQ3NTMnLFxuICAgIDg6ICcjYjYwMDRhNmMnLFxuICAgIDk6ICcjZTIwMDViYzInLFxuICAgIDEwOiAnI2Q3MDA1NmNiJyxcbiAgICAxMTogJyNjNDAwNGZlMicsXG4gICAgMTI6ICcjNTMwMDI2ZTknLFxufTtcblxuZXhwb3J0IGNvbnN0IHBpbms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmZmY2ZlJyxcbiAgICAyOiAnI2ZlZjdmYicsXG4gICAgMzogJyNmZWU5ZjUnLFxuICAgIDQ6ICcjZmJkY2VmJyxcbiAgICA1OiAnI2Y2Y2VlNycsXG4gICAgNjogJyNlZmJmZGQnLFxuICAgIDc6ICcjZTdhY2QwJyxcbiAgICA4OiAnI2RkOTNjMicsXG4gICAgOTogJyNkNjQwOWYnLFxuICAgIDEwOiAnI2NmMzg5NycsXG4gICAgMTE6ICcjYzIyOThhJyxcbiAgICAxMjogJyM2NTEyNDknLFxufTtcblxuZXhwb3J0IGNvbnN0IHBpbmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmMDBhYTAzJyxcbiAgICAyOiAnI2UwMDA4MDA4JyxcbiAgICAzOiAnI2Y0MDA4YzE2JyxcbiAgICA0OiAnI2UyMDA4YjIzJyxcbiAgICA1OiAnI2QxMDA4MzMxJyxcbiAgICA2OiAnI2MwMDA3ODQwJyxcbiAgICA3OiAnI2I2MDA2ZjUzJyxcbiAgICA4OiAnI2FmMDA2ZjZjJyxcbiAgICA5OiAnI2M4MDA3ZmJmJyxcbiAgICAxMDogJyNjMjAwN2FjNycsXG4gICAgMTE6ICcjYjYwMDc0ZDYnLFxuICAgIDEyOiAnIzU5MDAzYmVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwbHVtOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZlZmNmZicsXG4gICAgMjogJyNmZGY3ZmQnLFxuICAgIDM6ICcjZmJlYmZiJyxcbiAgICA0OiAnI2Y3ZGVmOCcsXG4gICAgNTogJyNmMmQxZjMnLFxuICAgIDY6ICcjZTljMmVjJyxcbiAgICA3OiAnI2RlYWRlMycsXG4gICAgODogJyNjZjkxZDgnLFxuICAgIDk6ICcjYWI0YWJhJyxcbiAgICAxMDogJyNhMTQ0YWYnLFxuICAgIDExOiAnIzk1M2VhMycsXG4gICAgMTI6ICcjNTMxOTVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwbHVtQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNhYTAwZmYwMycsXG4gICAgMjogJyNjMDAwYzAwOCcsXG4gICAgMzogJyNjYzAwY2MxNCcsXG4gICAgNDogJyNjMjAwYzkyMScsXG4gICAgNTogJyNiNzAwYmQyZScsXG4gICAgNjogJyNhNDAwYjAzZCcsXG4gICAgNzogJyM5OTAwYTg1MicsXG4gICAgODogJyM5MDAwYTU2ZScsXG4gICAgOTogJyM4OTAwOWViNScsXG4gICAgMTA6ICcjN2YwMDkyYmInLFxuICAgIDExOiAnIzczMDA4NmMxJyxcbiAgICAxMjogJyM0MDAwNGJlNicsXG59O1xuXG5leHBvcnQgY29uc3QgcHVycGxlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZlZmNmZScsXG4gICAgMjogJyNmYmY3ZmUnLFxuICAgIDM6ICcjZjdlZGZlJyxcbiAgICA0OiAnI2YyZTJmYycsXG4gICAgNTogJyNlYWQ1ZjknLFxuICAgIDY6ICcjZTBjNGY0JyxcbiAgICA3OiAnI2QxYWZlYycsXG4gICAgODogJyNiZTkzZTQnLFxuICAgIDk6ICcjOGU0ZWM2JyxcbiAgICAxMDogJyM4MzQ3YjknLFxuICAgIDExOiAnIzgxNDViNScsXG4gICAgMTI6ICcjNDAyMDYwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJwbGVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2FhMDBhYTAzJyxcbiAgICAyOiAnIzgwMDBlMDA4JyxcbiAgICAzOiAnIzhlMDBmMTEyJyxcbiAgICA0OiAnIzhkMDBlNTFkJyxcbiAgICA1OiAnIzgwMDBkYjJhJyxcbiAgICA2OiAnIzdhMDFkMDNiJyxcbiAgICA3OiAnIzZkMDBjMzUwJyxcbiAgICA4OiAnIzY2MDBjMDZjJyxcbiAgICA5OiAnIzVjMDBhZGIxJyxcbiAgICAxMDogJyM1MzAwOWViOCcsXG4gICAgMTE6ICcjNTIwMDlhYmEnLFxuICAgIDEyOiAnIzI1MDA0OWRmJyxcbn07XG5cbmV4cG9ydCBjb25zdCB2aW9sZXQ6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmY2ZlJyxcbiAgICAyOiAnI2ZhZjhmZicsXG4gICAgMzogJyNmNGYwZmUnLFxuICAgIDQ6ICcjZWJlNGZmJyxcbiAgICA1OiAnI2UxZDlmZicsXG4gICAgNjogJyNkNGNhZmUnLFxuICAgIDc6ICcjYzJiNWY1JyxcbiAgICA4OiAnI2FhOTllYycsXG4gICAgOTogJyM2ZTU2Y2YnLFxuICAgIDEwOiAnIzY1NGRjNCcsXG4gICAgMTE6ICcjNjU1MGI5JyxcbiAgICAxMjogJyMyZjI2NWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHZpb2xldEE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjNTUwMGFhMDMnLFxuICAgIDI6ICcjNDkwMGZmMDcnLFxuICAgIDM6ICcjNDQwMGVlMGYnLFxuICAgIDQ6ICcjNDMwMGZmMWInLFxuICAgIDU6ICcjMzYwMGZmMjYnLFxuICAgIDY6ICcjMzEwMGZiMzUnLFxuICAgIDc6ICcjMmQwMWRkNGEnLFxuICAgIDg6ICcjMmIwMGQwNjYnLFxuICAgIDk6ICcjMjQwMGI3YTknLFxuICAgIDEwOiAnIzIzMDBhYmIyJyxcbiAgICAxMTogJyMxZjAwOTlhZicsXG4gICAgMTI6ICcjMGIwMDQzZDknLFxufTtcblxuZXhwb3J0IGNvbnN0IGlyaXM6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmZGZmJyxcbiAgICAyOiAnI2Y4ZjhmZicsXG4gICAgMzogJyNmMGYxZmUnLFxuICAgIDQ6ICcjZTZlN2ZmJyxcbiAgICA1OiAnI2RhZGNmZicsXG4gICAgNjogJyNjYmNkZmYnLFxuICAgIDc6ICcjYjhiYWY4JyxcbiAgICA4OiAnIzliOWVmMCcsXG4gICAgOTogJyM1YjViZDYnLFxuICAgIDEwOiAnIzUxNTFjZCcsXG4gICAgMTE6ICcjNTc1M2M2JyxcbiAgICAxMjogJyMyNzI5NjInLFxufTtcblxuZXhwb3J0IGNvbnN0IGlyaXNBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDBmZjAyJyxcbiAgICAyOiAnIzAwMDBmZjA3JyxcbiAgICAzOiAnIzAwMTFlZTBmJyxcbiAgICA0OiAnIzAwMGJmZjE5JyxcbiAgICA1OiAnIzAwMGVmZjI1JyxcbiAgICA2OiAnIzAwMGFmZjM0JyxcbiAgICA3OiAnIzAwMDhlNjQ3JyxcbiAgICA4OiAnIzAwMDhkOTY0JyxcbiAgICA5OiAnIzAwMDBjMGE0JyxcbiAgICAxMDogJyMwMDAwYjZhZScsXG4gICAgMTE6ICcjMDYwMGFiYWMnLFxuICAgIDEyOiAnIzAwMDI0NmQ4Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbmRpZ286IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmZGZlJyxcbiAgICAyOiAnI2Y3ZjlmZicsXG4gICAgMzogJyNlZGYyZmUnLFxuICAgIDQ6ICcjZTFlOWZmJyxcbiAgICA1OiAnI2QyZGVmZicsXG4gICAgNjogJyNjMWQwZmYnLFxuICAgIDc6ICcjYWJiZGY5JyxcbiAgICA4OiAnIzhkYTRlZicsXG4gICAgOTogJyMzZTYzZGQnLFxuICAgIDEwOiAnIzMzNThkNCcsXG4gICAgMTE6ICcjM2E1YmM3JyxcbiAgICAxMjogJyMxZjJkNWMnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluZGlnb0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDAwMDgwMDInLFxuICAgIDI6ICcjMDA0MGZmMDgnLFxuICAgIDM6ICcjMDA0N2YxMTInLFxuICAgIDQ6ICcjMDA0NGZmMWUnLFxuICAgIDU6ICcjMDA0NGZmMmQnLFxuICAgIDY6ICcjMDAzZWZmM2UnLFxuICAgIDc6ICcjMDAzN2VkNTQnLFxuICAgIDg6ICcjMDAzNGRjNzInLFxuICAgIDk6ICcjMDAzMWQyYzEnLFxuICAgIDEwOiAnIzAwMmVjOWNjJyxcbiAgICAxMTogJyMwMDJiYjdjNScsXG4gICAgMTI6ICcjMDAxMDQ2ZTAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJsdWU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmJmZGZmJyxcbiAgICAyOiAnI2Y0ZmFmZicsXG4gICAgMzogJyNlNmY0ZmUnLFxuICAgIDQ6ICcjZDVlZmZmJyxcbiAgICA1OiAnI2MyZTVmZicsXG4gICAgNjogJyNhY2Q4ZmMnLFxuICAgIDc6ICcjOGVjOGY2JyxcbiAgICA4OiAnIzVlYjFlZicsXG4gICAgOTogJyMwMDkwZmYnLFxuICAgIDEwOiAnIzA1ODhmMCcsXG4gICAgMTE6ICcjMGQ3NGNlJyxcbiAgICAxMjogJyMxMTMyNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJsdWVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwODBmZjA0JyxcbiAgICAyOiAnIzAwOGNmZjBiJyxcbiAgICAzOiAnIzAwOGZmNTE5JyxcbiAgICA0OiAnIzAwOWVmZjJhJyxcbiAgICA1OiAnIzAwOTNmZjNkJyxcbiAgICA2OiAnIzAwODhmNjUzJyxcbiAgICA3OiAnIzAwODNlYjcxJyxcbiAgICA4OiAnIzAwODRlNmExJyxcbiAgICA5OiAnIzAwOTBmZicsXG4gICAgMTA6ICcjMDA4NmYwZmEnLFxuICAgIDExOiAnIzAwNmRjYmYyJyxcbiAgICAxMjogJyMwMDIzNTllZScsXG59O1xuXG5leHBvcnQgY29uc3QgY3lhbjogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmYWZkZmUnLFxuICAgIDI6ICcjZjJmYWZiJyxcbiAgICAzOiAnI2RlZjdmOScsXG4gICAgNDogJyNjYWYxZjYnLFxuICAgIDU6ICcjYjVlOWYwJyxcbiAgICA2OiAnIzlkZGRlNycsXG4gICAgNzogJyM3ZGNlZGMnLFxuICAgIDg6ICcjM2RiOWNmJyxcbiAgICA5OiAnIzAwYTJjNycsXG4gICAgMTA6ICcjMDc5N2I5JyxcbiAgICAxMTogJyMxMDdkOTgnLFxuICAgIDEyOiAnIzBkM2M0OCcsXG59O1xuXG5leHBvcnQgY29uc3QgY3lhbkE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA5OWNjMDUnLFxuICAgIDI6ICcjMDA5ZGIxMGQnLFxuICAgIDM6ICcjMDBjMmQxMjEnLFxuICAgIDQ6ICcjMDBiY2Q0MzUnLFxuICAgIDU6ICcjMDFiNGNjNGEnLFxuICAgIDY6ICcjMDBhN2MxNjInLFxuICAgIDc6ICcjMDA5ZmJiODInLFxuICAgIDg6ICcjMDBhM2MwYzInLFxuICAgIDk6ICcjMDBhMmM3JyxcbiAgICAxMDogJyMwMDk0YjdmOCcsXG4gICAgMTE6ICcjMDA3NDkxZWYnLFxuICAgIDEyOiAnIzAwMzIzZWYyJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZWFsOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZhZmVmZCcsXG4gICAgMjogJyNmM2ZiZjknLFxuICAgIDM6ICcjZTBmOGYzJyxcbiAgICA0OiAnI2NjZjNlYScsXG4gICAgNTogJyNiOGVhZTAnLFxuICAgIDY6ICcjYTFkZWQyJyxcbiAgICA3OiAnIzgzY2RjMScsXG4gICAgODogJyM1M2I5YWInLFxuICAgIDk6ICcjMTJhNTk0JyxcbiAgICAxMDogJyMwZDliOGEnLFxuICAgIDExOiAnIzAwODU3MycsXG4gICAgMTI6ICcjMGQzZDM4Jyxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZWFsQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGNjOTkwNScsXG4gICAgMjogJyMwMGFhODAwYycsXG4gICAgMzogJyMwMGM2OWQxZicsXG4gICAgNDogJyMwMGMzOTYzMycsXG4gICAgNTogJyMwMGI0OTA0NycsXG4gICAgNjogJyMwMGE2ODU1ZScsXG4gICAgNzogJyMwMDk5ODA3YycsXG4gICAgODogJyMwMDk3ODNhYycsXG4gICAgOTogJyMwMDllOGNlZCcsXG4gICAgMTA6ICcjMDA5Njg0ZjInLFxuICAgIDExOiAnIzAwODU3MycsXG4gICAgMTI6ICcjMDAzMzJkZjInLFxufTtcblxuZXhwb3J0IGNvbnN0IGphZGU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmJmZWZkJyxcbiAgICAyOiAnI2Y0ZmJmNycsXG4gICAgMzogJyNlNmY3ZWQnLFxuICAgIDQ6ICcjZDZmMWUzJyxcbiAgICA1OiAnI2MzZTlkNycsXG4gICAgNjogJyNhY2RlYzgnLFxuICAgIDc6ICcjOGJjZWI2JyxcbiAgICA4OiAnIzU2YmE5ZicsXG4gICAgOTogJyMyOWEzODMnLFxuICAgIDEwOiAnIzI2OTk3YicsXG4gICAgMTE6ICcjMjA4MzY4JyxcbiAgICAxMjogJyMxZDNiMzEnLFxufTtcblxuZXhwb3J0IGNvbnN0IGphZGVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwYzA4MDA0JyxcbiAgICAyOiAnIzAwYTM0NjBiJyxcbiAgICAzOiAnIzAwYWU0ODE5JyxcbiAgICA0OiAnIzAwYTg1MTI5JyxcbiAgICA1OiAnIzAwYTI1NTNjJyxcbiAgICA2OiAnIzAwOWE1NzUzJyxcbiAgICA3OiAnIzAwOTQ1Zjc0JyxcbiAgICA4OiAnIzAwOTc2ZWE5JyxcbiAgICA5OiAnIzAwOTE2YmQ2JyxcbiAgICAxMDogJyMwMDg3NjRkOScsXG4gICAgMTE6ICcjMDA3MTUyZGYnLFxuICAgIDEyOiAnIzAwMjIxN2UyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBncmVlbjogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmYmZlZmMnLFxuICAgIDI6ICcjZjRmYmY2JyxcbiAgICAzOiAnI2U2ZjZlYicsXG4gICAgNDogJyNkNmYxZGYnLFxuICAgIDU6ICcjYzRlOGQxJyxcbiAgICA2OiAnI2FkZGRjMCcsXG4gICAgNzogJyM4ZWNlYWEnLFxuICAgIDg6ICcjNWJiOThiJyxcbiAgICA5OiAnIzMwYTQ2YycsXG4gICAgMTA6ICcjMmI5YTY2JyxcbiAgICAxMTogJyMyMTgzNTgnLFxuICAgIDEyOiAnIzE5M2IyZCcsXG59O1xuXG5leHBvcnQgY29uc3QgZ3JlZW5BOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwYzA0MDA0JyxcbiAgICAyOiAnIzAwYTMyZjBiJyxcbiAgICAzOiAnIzAwYTQzMzE5JyxcbiAgICA0OiAnIzAwYTgzODI5JyxcbiAgICA1OiAnIzAxOWMzOTNiJyxcbiAgICA2OiAnIzAwOTYzYzUyJyxcbiAgICA3OiAnIzAwOTE0MDcxJyxcbiAgICA4OiAnIzAwOTI0YmE0JyxcbiAgICA5OiAnIzAwOGY0YWNmJyxcbiAgICAxMDogJyMwMDg2NDdkNCcsXG4gICAgMTE6ICcjMDA3MTNmZGUnLFxuICAgIDEyOiAnIzAwMjYxNmU2Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBncmFzczogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmYmZlZmInLFxuICAgIDI6ICcjZjVmYmY1JyxcbiAgICAzOiAnI2U5ZjZlOScsXG4gICAgNDogJyNkYWYxZGInLFxuICAgIDU6ICcjYzllOGNhJyxcbiAgICA2OiAnI2IyZGRiNScsXG4gICAgNzogJyM5NGNlOWEnLFxuICAgIDg6ICcjNjViYTc0JyxcbiAgICA5OiAnIzQ2YTc1OCcsXG4gICAgMTA6ICcjM2U5YjRmJyxcbiAgICAxMTogJyMyYTdlM2InLFxuICAgIDEyOiAnIzIwM2MyNScsXG59O1xuXG5leHBvcnQgY29uc3QgZ3Jhc3NBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwYzAwMDA0JyxcbiAgICAyOiAnIzAwOTkwMDBhJyxcbiAgICAzOiAnIzAwOTcwMDE2JyxcbiAgICA0OiAnIzAwOWYwNzI1JyxcbiAgICA1OiAnIzAwOTMwNTM2JyxcbiAgICA2OiAnIzAwOGYwYTRkJyxcbiAgICA3OiAnIzAxOGIwZjZiJyxcbiAgICA4OiAnIzAwOGQxOTlhJyxcbiAgICA5OiAnIzAwODYxOWI5JyxcbiAgICAxMDogJyMwMDdiMTdjMScsXG4gICAgMTE6ICcjMDA2NTE0ZDUnLFxuICAgIDEyOiAnIzAwMjAwNmRmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm93bjogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZWZkZmMnLFxuICAgIDI6ICcjZmNmOWY2JyxcbiAgICAzOiAnI2Y2ZWVlNycsXG4gICAgNDogJyNmMGU0ZDknLFxuICAgIDU6ICcjZWJkYWNhJyxcbiAgICA2OiAnI2U0Y2RiNycsXG4gICAgNzogJyNkY2JjOWYnLFxuICAgIDg6ICcjY2VhMzdlJyxcbiAgICA5OiAnI2FkN2Y1OCcsXG4gICAgMTA6ICcjYTA3NTUzJyxcbiAgICAxMTogJyM4MTVlNDYnLFxuICAgIDEyOiAnIzNlMzMyZScsXG59O1xuXG5leHBvcnQgY29uc3QgYnJvd25BOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2FhNTUwMDAzJyxcbiAgICAyOiAnI2FhNTUwMDA5JyxcbiAgICAzOiAnI2EwNGIwMDE4JyxcbiAgICA0OiAnIzliNGEwMDI2JyxcbiAgICA1OiAnIzlmNGQwMDM1JyxcbiAgICA2OiAnI2EwNGUwMDQ4JyxcbiAgICA3OiAnI2EzNGUwMDYwJyxcbiAgICA4OiAnIzlmNGEwMDgxJyxcbiAgICA5OiAnIzgyM2MwMGE3JyxcbiAgICAxMDogJyM3MjMzMDBhYycsXG4gICAgMTE6ICcjNTIyMTAwYjknLFxuICAgIDEyOiAnIzE0MDYwMGQxJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm9uemU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmY2ZjJyxcbiAgICAyOiAnI2ZkZjdmNScsXG4gICAgMzogJyNmNmVkZWEnLFxuICAgIDQ6ICcjZWZlNGRmJyxcbiAgICA1OiAnI2U3ZDlkMycsXG4gICAgNjogJyNkZmNkYzUnLFxuICAgIDc6ICcjZDNiY2IzJyxcbiAgICA4OiAnI2MyYTQ5OScsXG4gICAgOTogJyNhMTgwNzInLFxuICAgIDEwOiAnIzk1NzQ2OCcsXG4gICAgMTE6ICcjN2Q1ZTU0JyxcbiAgICAxMjogJyM0MzMwMmInLFxufTtcblxuZXhwb3J0IGNvbnN0IGJyb256ZUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjNTUwMDAwMDMnLFxuICAgIDI6ICcjY2MzMzAwMGEnLFxuICAgIDM6ICcjOTIyNTAwMTUnLFxuICAgIDQ6ICcjODAyODAwMjAnLFxuICAgIDU6ICcjNzQyMzAwMmMnLFxuICAgIDY6ICcjNzMyNDAwM2EnLFxuICAgIDc6ICcjNmMxZjAwNGMnLFxuICAgIDg6ICcjNjcxYzAwNjYnLFxuICAgIDk6ICcjNTUxYTAwOGQnLFxuICAgIDEwOiAnIzRjMTUwMDk3JyxcbiAgICAxMTogJyMzZDBmMDBhYicsXG4gICAgMTI6ICcjMWQwNjAwZDQnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdvbGQ6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmZGZjJyxcbiAgICAyOiAnI2ZhZjlmMicsXG4gICAgMzogJyNmMmYwZTcnLFxuICAgIDQ6ICcjZWFlNmRiJyxcbiAgICA1OiAnI2UxZGNjZicsXG4gICAgNjogJyNkOGQwYmYnLFxuICAgIDc6ICcjY2JjMGFhJyxcbiAgICA4OiAnI2I5YTg4ZCcsXG4gICAgOTogJyM5NzgzNjUnLFxuICAgIDEwOiAnIzhjN2E1ZScsXG4gICAgMTE6ICcjNzE2MjRiJyxcbiAgICAxMjogJyMzYjM1MmInLFxufTtcblxuZXhwb3J0IGNvbnN0IGdvbGRBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzU1NTUwMDAzJyxcbiAgICAyOiAnIzlkOGEwMDBkJyxcbiAgICAzOiAnIzc1NjAwMDE4JyxcbiAgICA0OiAnIzZiNGUwMDI0JyxcbiAgICA1OiAnIzYwNDYwMDMwJyxcbiAgICA2OiAnIzY0NDQwMDQwJyxcbiAgICA3OiAnIzYzNDIwMDU1JyxcbiAgICA4OiAnIzYzM2QwMDcyJyxcbiAgICA5OiAnIzUzMzIwMDlhJyxcbiAgICAxMDogJyM0OTJkMDBhMScsXG4gICAgMTE6ICcjMzYyMTAwYjQnLFxuICAgIDEyOiAnIzEzMGMwMGQ0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBza3k6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZjlmZWZmJyxcbiAgICAyOiAnI2YxZmFmZCcsXG4gICAgMzogJyNlMWY2ZmQnLFxuICAgIDQ6ICcjZDFmMGZhJyxcbiAgICA1OiAnI2JlZTdmNScsXG4gICAgNjogJyNhOWRhZWQnLFxuICAgIDc6ICcjOGRjYWUzJyxcbiAgICA4OiAnIzYwYjNkNycsXG4gICAgOTogJyM3Y2UyZmUnLFxuICAgIDEwOiAnIzc0ZGFmOCcsXG4gICAgMTE6ICcjMDA3NDllJyxcbiAgICAxMjogJyMxZDNlNTYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNreUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBkNWZmMDYnLFxuICAgIDI6ICcjMDBhNGRiMGUnLFxuICAgIDM6ICcjMDBiM2VlMWUnLFxuICAgIDQ6ICcjMDBhY2U0MmUnLFxuICAgIDU6ICcjMDBhMWQ4NDEnLFxuICAgIDY6ICcjMDA5MmNhNTYnLFxuICAgIDc6ICcjMDA4OWMxNzInLFxuICAgIDg6ICcjMDA4NWJmOWYnLFxuICAgIDk6ICcjMDBjN2ZlODMnLFxuICAgIDEwOiAnIzAwYmNmMzhiJyxcbiAgICAxMTogJyMwMDc0OWUnLFxuICAgIDEyOiAnIzAwMjU0MGUyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtaW50OiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2Y5ZmVmZCcsXG4gICAgMjogJyNmMmZiZjknLFxuICAgIDM6ICcjZGRmOWYyJyxcbiAgICA0OiAnI2M4ZjRlOScsXG4gICAgNTogJyNiM2VjZGUnLFxuICAgIDY6ICcjOWNlMGQwJyxcbiAgICA3OiAnIzdlY2ZiZCcsXG4gICAgODogJyM0Y2JiYTUnLFxuICAgIDk6ICcjODZlYWQ0JyxcbiAgICAxMDogJyM3ZGUwY2InLFxuICAgIDExOiAnIzAyNzg2NCcsXG4gICAgMTI6ICcjMTY0MzNjJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtaW50QTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGQ1YWEwNicsXG4gICAgMjogJyMwMGIxOGEwZCcsXG4gICAgMzogJyMwMGQyOWUyMicsXG4gICAgNDogJyMwMGNjOTkzNycsXG4gICAgNTogJyMwMGMwOTE0YycsXG4gICAgNjogJyMwMGIwODY2MycsXG4gICAgNzogJyMwMGExN2Q4MScsXG4gICAgODogJyMwMDllN2ZiMycsXG4gICAgOTogJyMwMGQzYTU3OScsXG4gICAgMTA6ICcjMDBjMzk5ODInLFxuICAgIDExOiAnIzAwNzc2M2ZkJyxcbiAgICAxMjogJyMwMDMxMmFlOScsXG59O1xuXG5leHBvcnQgY29uc3QgbGltZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmY2ZkZmEnLFxuICAgIDI6ICcjZjhmYWYzJyxcbiAgICAzOiAnI2VlZjZkNicsXG4gICAgNDogJyNlMmYwYmQnLFxuICAgIDU6ICcjZDNlN2E2JyxcbiAgICA2OiAnI2MyZGE5MScsXG4gICAgNzogJyNhYmM5NzgnLFxuICAgIDg6ICcjOGRiNjU0JyxcbiAgICA5OiAnI2JkZWU2MycsXG4gICAgMTA6ICcjYjBlNjRjJyxcbiAgICAxMTogJyM1YzdjMmYnLFxuICAgIDEyOiAnIzM3NDAxYycsXG59O1xuXG5leHBvcnQgY29uc3QgbGltZUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjNjY5OTAwMDUnLFxuICAgIDI6ICcjNmI5NTAwMGMnLFxuICAgIDM6ICcjOTZjODAwMjknLFxuICAgIDQ6ICcjOGZjNjAwNDInLFxuICAgIDU6ICcjODFiYjAwNTknLFxuICAgIDY6ICcjNzJhYTAwNmUnLFxuICAgIDc6ICcjNjE5OTAwODcnLFxuICAgIDg6ICcjNTU5MjAwYWInLFxuICAgIDk6ICcjOTNlNDAwOWMnLFxuICAgIDEwOiAnIzhmZGMwMGIzJyxcbiAgICAxMTogJyMzNzVmMDBkMCcsXG4gICAgMTI6ICcjMWUyOTAwZTMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHllbGxvdzogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZGZkZjknLFxuICAgIDI6ICcjZmVmY2U5JyxcbiAgICAzOiAnI2ZmZmFiOCcsXG4gICAgNDogJyNmZmYzOTQnLFxuICAgIDU6ICcjZmZlNzcwJyxcbiAgICA2OiAnI2YzZDc2OCcsXG4gICAgNzogJyNlNGM3NjcnLFxuICAgIDg6ICcjZDVhZTM5JyxcbiAgICA5OiAnI2ZmZTYyOScsXG4gICAgMTA6ICcjZmZkYzAwJyxcbiAgICAxMTogJyM5ZTZjMDAnLFxuICAgIDEyOiAnIzQ3M2IxZicsXG59O1xuXG5leHBvcnQgY29uc3QgeWVsbG93QTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNhYWFhMDAwNicsXG4gICAgMjogJyNmNGRkMDAxNicsXG4gICAgMzogJyNmZmVlMDA0NycsXG4gICAgNDogJyNmZmUzMDE2YicsXG4gICAgNTogJyNmZmQ1MDA4ZicsXG4gICAgNjogJyNlYmJjMDA5NycsXG4gICAgNzogJyNkMmExMDA5OCcsXG4gICAgODogJyNjOTk3MDBjNicsXG4gICAgOTogJyNmZmUxMDBkNicsXG4gICAgMTA6ICcjZmZkYzAwJyxcbiAgICAxMTogJyM5ZTZjMDAnLFxuICAgIDEyOiAnIzJlMjAwMGUwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBhbWJlcjogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZWZkZmInLFxuICAgIDI6ICcjZmVmYmU5JyxcbiAgICAzOiAnI2ZmZjdjMicsXG4gICAgNDogJyNmZmVlOWMnLFxuICAgIDU6ICcjZmJlNTc3JyxcbiAgICA2OiAnI2YzZDY3MycsXG4gICAgNzogJyNlOWMxNjInLFxuICAgIDg6ICcjZTJhMzM2JyxcbiAgICA5OiAnI2ZmYzUzZCcsXG4gICAgMTA6ICcjZmZiYTE4JyxcbiAgICAxMTogJyNhYjY0MDAnLFxuICAgIDEyOiAnIzRmMzQyMicsXG59O1xuXG5leHBvcnQgY29uc3QgYW1iZXJBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2MwODAwMDA0JyxcbiAgICAyOiAnI2Y0ZDEwMDE2JyxcbiAgICAzOiAnI2ZmZGUwMDNkJyxcbiAgICA0OiAnI2ZmZDQwMDYzJyxcbiAgICA1OiAnI2Y4Y2YwMDg4JyxcbiAgICA2OiAnI2VhYjUwMDhjJyxcbiAgICA3OiAnI2RjOWIwMDlkJyxcbiAgICA4OiAnI2RhOGEwMGM5JyxcbiAgICA5OiAnI2ZmYjMwMGMyJyxcbiAgICAxMDogJyNmZmIzMDBlNycsXG4gICAgMTE6ICcjYWI2NDAwJyxcbiAgICAxMjogJyMzNDE1MDBkZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgb3JhbmdlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZlZmNmYicsXG4gICAgMjogJyNmZmY3ZWQnLFxuICAgIDM6ICcjZmZlZmQ2JyxcbiAgICA0OiAnI2ZmZGZiNScsXG4gICAgNTogJyNmZmQxOWEnLFxuICAgIDY6ICcjZmZjMTgyJyxcbiAgICA3OiAnI2Y1YWU3MycsXG4gICAgODogJyNlYzk0NTUnLFxuICAgIDk6ICcjZjc2YjE1JyxcbiAgICAxMDogJyNlZjVmMDAnLFxuICAgIDExOiAnI2NjNGUwMCcsXG4gICAgMTI6ICcjNTgyZDFkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBvcmFuZ2VBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2MwNDAwMDA0JyxcbiAgICAyOiAnI2ZmOGUwMDEyJyxcbiAgICAzOiAnI2ZmOWMwMDI5JyxcbiAgICA0OiAnI2ZmOTEwMTRhJyxcbiAgICA1OiAnI2ZmOGIwMDY1JyxcbiAgICA2OiAnI2ZmODEwMDdkJyxcbiAgICA3OiAnI2VkNmMwMDhjJyxcbiAgICA4OiAnI2UzNWYwMGFhJyxcbiAgICA5OiAnI2Y2NWUwMGVhJyxcbiAgICAxMDogJyNlZjVmMDAnLFxuICAgIDExOiAnI2NjNGUwMCcsXG4gICAgMTI6ICcjNDMxMjAwZTInLFxufTtcbiIsICJpbXBvcnQge1xyXG4gICAgQzJCYXNlU2NlbmUsXHJcbiAgICBDMkdyaWQsXHJcbiAgICBDMlBsYWluVGV4dCxcclxuICAgIEMyUmljaFRleHQsXHJcbiAgICBDMlNwYW4sXHJcbiAgICBDMlRleHRHcm91cCxcclxuICAgIEMyUGF0aFJlY3QsXHJcbiAgICBDMlBhdGhDaXJjbGUsXHJcbiAgICBDMlZlYzIsXHJcbiAgICBDMlBsYWluTm9kZSxcclxuICAgIEMyQ3ViaWNFZGdlLFxyXG4gICAgQzJDb2xvclRoZW1lLFxyXG4gICAgc2xhdGVEYXJrLFxyXG4gICAgY3lhbkRhcmssXHJcbiAgICBydWJ5RGFyayxcclxuICAgIHNsYXRlLFxyXG4gICAgY3lhbixcclxuICAgIHJ1YnksXHJcbiAgICB0eXBlIEMyUGFsZXR0ZSxcclxufSBmcm9tICdAYXJuYXVkYmFubmllci9jMic7XHJcblxyXG5jb25zdCBtb2RlID0gMDsgLy8gMCA9IGRhcmssIDEgPSBsaWdodFxyXG5sZXQgcGFsZXR0ZTogQzJQYWxldHRlO1xyXG5pZiAobW9kZSA9PT0gMCkge1xyXG4gICAgcGFsZXR0ZSA9IHtcclxuICAgICAgICBiYWNrOiBzbGF0ZURhcmssXHJcbiAgICAgICAgcHJpbWFyeTogY3lhbkRhcmssXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBydWJ5RGFyayxcclxuICAgIH07XHJcbn0gZWxzZSB7XHJcbiAgICBwYWxldHRlID0ge1xyXG4gICAgICAgIGJhY2s6IHNsYXRlLFxyXG4gICAgICAgIHByaW1hcnk6IGN5YW4sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBydWJ5LFxyXG4gICAgfTtcclxufVxyXG5jb25zdCBjb2xvclRoZW1lID0gbmV3IEMyQ29sb3JUaGVtZShwYWxldHRlKTtcclxuXHJcbmNsYXNzIENhbnZhc0ZpZ3VyZSBleHRlbmRzIEMyQmFzZVNjZW5lIHtcclxuICAgIHByb3RlY3RlZCB2YXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHRleHQ6IEMyUGxhaW5UZXh0O1xyXG4gICAgcHJvdGVjdGVkIHJpY2hUZXh0OiBDMlJpY2hUZXh0O1xyXG4gICAgcHJvdGVjdGVkIHRleHRDcHQ6IEMyU3BhbjtcclxuICAgIHByb3RlY3RlZCB0ZXh0R3JvdXA6IEMyVGV4dEdyb3VwO1xyXG4gICAgcHJvdGVjdGVkIHRleHRHcm91cEJhY2s6IEMyUGF0aFJlY3Q7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JvdXBBbmNob3I6IEMyVmVjMiA9IG5ldyBDMlZlYzIoMCwgMCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JvdXBBbGlnbjogQzJWZWMyID0gbmV3IEMyVmVjMigwLCAwKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjYW52YXMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEV4dGVudHMoOC4wLCA0LjUpO1xyXG4gICAgICAgIC8vIHRoaXMuY2FtZXJhLnNldFpvb20oMik7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuc2V0Um90YXRpb25EZWcoLTQ1KTtcclxuICAgICAgICBjb25zdCB3b3JsZFNwYWNlID0gdGhpcy5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5nZXRWaWV3U3BhY2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IG5ldyBDMkdyaWQodGhpcyk7XHJcbiAgICAgICAgZ3JpZC5kYXRhLmdlb21ldHJ5LmJvdW5kQS5zZXQoLTgsIC00LjUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIGdyaWQuZGF0YS5nZW9tZXRyeS5ib3VuZEIuc2V0KDgsIDQuNSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgZ3JpZC5kYXRhLmdlb21ldHJ5LnN0ZXBzLnNldCgxLCAxLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBncmlkLmRhdGEuc3Ryb2tlLndpZHRoLnNldCgyLCB0aGlzLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICBncmlkLmRhdGEuc3Ryb2tlLmNvbG9yLnNldEZyb21UaGVtZShjb2xvclRoZW1lLCAnYmFjaycsIDQpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IEMyUGxhaW5UZXh0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGV4dC5zZXRDb250ZW50KCdIZWxsbywgQ2FudmFzIScpO1xyXG4gICAgICAgIHRleHQuZGF0YS5mb250LmZhbWlseS5zZXQoJ21vbm9zcGFjZScpO1xyXG4gICAgICAgIHRleHQuZGF0YS5mb250LnNpemUuc2V0KDAuNSwgdGhpcy5nZXRXb3JsZFNwYWNlKCkpO1xyXG4gICAgICAgIC8vdGV4dC5kYXRhLmZvbnQud2VpZ2h0LnNldCg4NzMpO1xyXG4gICAgICAgIHRleHQuZGF0YS50ZXh0QW5jaG9yLnNldCgtMSk7XHJcbiAgICAgICAgdGV4dC5kYXRhLnJlbmRlci5sYXllci5zZXQoMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpY2hUZXh0ID0gbmV3IEMyUmljaFRleHQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yaWNoVGV4dCA9IHJpY2hUZXh0O1xyXG4gICAgICAgIHJpY2hUZXh0LmRhdGEuZm9udC5mYW1pbHkuc2V0KCdtb25vc3BhY2UnKTtcclxuICAgICAgICByaWNoVGV4dC5kYXRhLmZvbnQuc2l6ZS5zZXQoMC41LCB0aGlzLmdldFdvcmxkU3BhY2UoKSk7XHJcbiAgICAgICAgcmljaFRleHQuZGF0YS5yZW5kZXIubGF5ZXIuc2V0KDEpO1xyXG4gICAgICAgIHJpY2hUZXh0LmRhdGEuc3Ryb2tlLndpZHRoLnNldCgwLjEsIHRoaXMuZ2V0V29ybGRTcGFjZSgpKTtcclxuICAgICAgICByaWNoVGV4dC5kYXRhLnBvc2l0aW9uLnNldCgwLCAtMSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgcmljaFRleHQuZGF0YS50ZXh0QW5jaG9yLnNldCgtMSk7XHJcbiAgICAgICAgcmljaFRleHQuYWRkU3BhbignQ291Y291Jyk7XHJcbiAgICAgICAgbGV0IHNwYW4gPSByaWNoVGV4dC5hZGRTcGFuKCcgbGVzICcpO1xyXG4gICAgICAgIHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21UaGVtZShjb2xvclRoZW1lLCAncHJpbWFyeScsIDUpLmxvY2soKTtcclxuICAgICAgICBzcGFuID0gcmljaFRleHQuYWRkU3BhbignMCcpO1xyXG4gICAgICAgIHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21UaGVtZShjb2xvclRoZW1lLCAncHJpbWFyeScsIDEyKS5sb2NrKCk7XHJcbiAgICAgICAgc3Bhbi5kYXRhLmZvbnQuZmFtaWx5LnNldCgnbW9ub3NwYWNlJykubG9jaygpO1xyXG4gICAgICAgIHNwYW4uZGF0YS5mb250LndlaWdodC5zZXQoNzAwKS5sb2NrKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0Q3B0ID0gc3BhbjtcclxuICAgICAgICBzcGFuID0gcmljaFRleHQuYWRkU3BhbignIGFtaXMnKTtcclxuICAgICAgICBzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tVGhlbWUoY29sb3JUaGVtZSwgJ3ByaW1hcnknLCA3KS5sb2NrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgQzJQYXRoUmVjdCh0aGlzKTtcclxuICAgICAgICByZWN0LmRhdGEucG9zaXRpb24uc2V0KDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHJlY3QuZGF0YS5leHRlbnRzLnNldCgyLCAxLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICByZWN0LmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tVGhlbWUoY29sb3JUaGVtZSwgJ3ByaW1hcnknLCA1KTtcclxuICAgICAgICByZWN0LmRhdGEuY29ybmVyUmFkaXVzLnNldCgwLjUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHJlY3QuZGF0YS5zdHJva2Uud2lkdGguc2V0KDIsIHRoaXMuZ2V0Vmlld1NwYWNlKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXJjbGUgPSBuZXcgQzJQYXRoQ2lyY2xlKHRoaXMpO1xyXG4gICAgICAgIGNpcmNsZS5kYXRhLnBvc2l0aW9uLnNldCgxLCAyLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBjaXJjbGUuZGF0YS5yYWRpdXMuc2V0KDEsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIGNpcmNsZS5kYXRhLmZpbGwuY29sb3Iuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsICdwcmltYXJ5JywgNyk7XHJcbiAgICAgICAgY2lyY2xlLmRhdGEuc3Ryb2tlLndpZHRoLnNldCgyLCB0aGlzLmdldFZpZXdTcGFjZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXM6IEMyUGxhaW5Ob2RlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IEMyUGxhaW5Ob2RlKHRoaXMpO1xyXG4gICAgICAgICAgICBub2RlLmRhdGEudGV4dC5mb250LmZhbWlseS5zZXQoJ21vbm9zcGFjZScpO1xyXG4gICAgICAgICAgICBub2RlLmRhdGEudGV4dC5mb250LnNpemUuc2V0KDAuNSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS50ZXh0LmZpbGwuY29sb3Iuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsICdwcmltYXJ5JywgOSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS50ZXh0LnN0cm9rZS5jb2xvci5zZXRGcm9tVGhlbWUoY29sb3JUaGVtZSwgJ3ByaW1hcnknLCAxMSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS5iYWNrZ3JvdW5kLmZpbGwuY29sb3Iuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsICdwcmltYXJ5JywgNSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS5iYWNrZ3JvdW5kLnN0cm9rZS5jb2xvci5zZXRGcm9tVGhlbWUoY29sb3JUaGVtZSwgJ3ByaW1hcnknLCA3KTtcclxuICAgICAgICAgICAgbm9kZS5kYXRhLmJhY2tncm91bmQuc3Ryb2tlLndpZHRoLnNldCg1LCB0aGlzLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5kYXRhLnRleHQuaG9yaXpvbnRhbEFsaWduLnNldCgwKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5kYXRhLnRleHQudmVydGljYWxBbGlnbi5zZXQoMCk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS5iYWNrZ3JvdW5kLmNvcm5lclJhZGl1cy5zZXQoMTAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS5iYWNrZ3JvdW5kLnNoYXBlLnNldCgncmVjdGFuZ2xlJyk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS5taW5FeHRlbnRzLnNldCgyLCAxLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICAgICAgbm9kZS5kYXRhLnRleHQuaG9yaXpvbnRhbEFsaWduLnNldCgtMSk7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YS50ZXh0LnZlcnRpY2FsQWxpZ24uc2V0KDEpO1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2Rlc1swXS5kYXRhLnBvc2l0aW9uLnNldCgzLCAtMiwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgbm9kZXNbMF0uZGF0YS5wYWRkaW5nLnNldCgxMCwgNSwgdmlld1NwYWNlKTtcclxuICAgICAgICAvL25vZGUuZGF0YS5taW5FeHRlbnRzLnNldCgyLCAxLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBub2Rlc1swXS5hZGRTdGF0ZSgnTm9kZSBzdGF0ZSAxcCcpO1xyXG5cclxuICAgICAgICBub2Rlc1sxXS5kYXRhLnBvc2l0aW9uLnNldCgtNCwgLTEsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIG5vZGVzWzFdLmRhdGEucGFkZGluZy5zZXQoMTAsIDUsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgLy9ub2RlLmRhdGEubWluRXh0ZW50cy5zZXQoMiwgMSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgbm9kZXNbMV0uYWRkU3RhdGUoJ05vZGUgMicpO1xyXG5cclxuICAgICAgICBjb25zdCBlZGdlID0gbmV3IEMyQ3ViaWNFZGdlKHRoaXMsIG5vZGVzWzBdLCBub2Rlc1sxXSk7XHJcbiAgICAgICAgLy9jb25zdCBlZGdlID0gbmV3IEMyTGluZUVkZ2UodGhpcywgbm9kZXNbMF0sIG5vZGVzWzFdKTtcclxuICAgICAgICBlZGdlLmRhdGEuZW5kRGlzdGFuY2Uuc2V0KDIwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGVkZ2UuZGF0YS5zdHJva2Uud2lkdGguc2V0KDUsIHRoaXMuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIGVkZ2UuZGF0YS5zdHJva2UuY29sb3Iuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsICdwcmltYXJ5JywgOSk7XHJcbiAgICAgICAgZWRnZS5kYXRhLmJlbmRBbmdsZS5zZXQoLTQ1KTtcclxuICAgICAgICBlZGdlLmNyZWF0ZUFycm93VGlwKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRHcm91cCA9IG5ldyBDMlRleHRHcm91cCh0aGlzKTtcclxuICAgICAgICB0ZXh0R3JvdXAuZGF0YS5zcGFjZS5zZXQod29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGV4dEdyb3VwLmRhdGEucG9zaXRpb24uc2V0KDAsIDIsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRleHRHcm91cC5kYXRhLmFuY2hvci5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGV4dEdyb3VwLmRhdGEuZm9udC5mYW1pbHkuc2V0KCdtb25vc3BhY2UnKTtcclxuICAgICAgICB0ZXh0R3JvdXAuZGF0YS5mb250LnNpemUuc2V0KDI0LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRleHRHcm91cC5kYXRhLmZpbGwuY29sb3Iuc2V0RnJvbVRoZW1lKGNvbG9yVGhlbWUsICdwcmltYXJ5JywgOSk7XHJcbiAgICAgICAgdGV4dEdyb3VwLmRhdGEuaG9yaXpvbnRhbEFsaWduLnNldCgwKTtcclxuICAgICAgICB0ZXh0R3JvdXAuZGF0YS52ZXJ0aWNhbEFsaWduLnNldCgwKTtcclxuICAgICAgICB0ZXh0R3JvdXAuZGF0YS5taW5FeHRlbnRzLnNldCg0LCAyLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBjb25zdCBsaW5lMSA9IHRleHRHcm91cC5hZGRMaW5lKCk7XHJcbiAgICAgICAgbGluZTEuYWRkU3BhbignVW5lIHByZW1pXHUwMEU4cmUgbGlnbmUnKTtcclxuICAgICAgICBjb25zdCBsaW5lMiA9IHRleHRHcm91cC5hZGRMaW5lKCk7XHJcbiAgICAgICAgbGluZTIuZGF0YS5ob3Jpem9udGFsQWxpZ24uc2V0KDApLmxvY2soKTtcclxuICAgICAgICBsaW5lMi5kYXRhLnNraXAuc2V0KDIwLCB2aWV3U3BhY2UpLmxvY2soKTtcclxuICAgICAgICBsaW5lMi5hZGRTcGFuKCdVbmUgZGV1eGlcdTAwRThtZSBsaWduZSAhJyk7XHJcbiAgICAgICAgY29uc3QgbGluZTMgPSB0ZXh0R3JvdXAuYWRkTGluZSgpO1xyXG4gICAgICAgIGxpbmUzLmFkZFNwYW4oJ1VuZSB0cm9pc2lcdTAwRThtZSBsaWduZSBxdWkgZXN0IHZyYWltZW50IHRyXHUwMEU4cyBsb25ndWUgIScpO1xyXG4gICAgICAgIHRoaXMudGV4dEdyb3VwID0gdGV4dEdyb3VwO1xyXG5cclxuICAgICAgICBjb25zdCBiYWNrUmVjdCA9IG5ldyBDMlBhdGhSZWN0KHRoaXMpO1xyXG4gICAgICAgIGJhY2tSZWN0LmRhdGEuc3BhY2Uuc2V0KHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIGJhY2tSZWN0LmRhdGEucG9zaXRpb24uY29weSh0ZXh0R3JvdXAuZGF0YS5wb3NpdGlvbik7XHJcbiAgICAgICAgYmFja1JlY3QuZGF0YS5hbmNob3IuY29weSh0ZXh0R3JvdXAuZGF0YS5hbmNob3IpO1xyXG4gICAgICAgIGJhY2tSZWN0LmRhdGEucmVuZGVyLmxheWVyLnNldCgtMSk7XHJcbiAgICAgICAgYmFja1JlY3QuZGF0YS5maWxsLmNvbG9yLnNldEZyb21UaGVtZShjb2xvclRoZW1lLCAncHJpbWFyeScsIDUpO1xyXG4gICAgICAgIHRoaXMudGV4dEdyb3VwQmFjayA9IGJhY2tSZWN0O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dENwdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDcHQuc2V0Q29udGVudCh0aGlzLnZhci50b0ZpeGVkKDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dEdyb3VwICYmIHRoaXMudGV4dEdyb3VwQmFjaykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RXh0ZW50cyA9IHRoaXMuYWNxdWlyZVZlYzIoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3JvdXAuZ2V0RXh0ZW50c0ludG8odGV4dEV4dGVudHMsIHRoaXMuZ2V0V29ybGRTcGFjZSgpKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3JvdXBCYWNrLmRhdGEuZXh0ZW50cy5zZXRWKHRleHRFeHRlbnRzLCB0aGlzLmdldFdvcmxkU3BhY2UoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVZlYzIodGV4dEV4dGVudHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0R3JvdXAuZGF0YS5hbmNob3Iuc2V0Vih0aGlzLmdyb3VwQW5jaG9yKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3JvdXAuZGF0YS5ob3Jpem9udGFsQWxpZ24uc2V0KHRoaXMuZ3JvdXBBbGlnbi54KTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0R3JvdXAuZGF0YS52ZXJ0aWNhbEFsaWduLnNldCh0aGlzLmdyb3VwQWxpZ24ueSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEdyb3VwQmFjay5kYXRhLmFuY2hvci5zZXRWKHRoaXMuZ3JvdXBBbmNob3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXBBbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdyb3VwQW5jaG9yLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXBBbGlnbihoOiBudW1iZXIsIHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBBbGlnbi5zZXQoaCwgdik7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBDYW52YXNGaWd1cmUoY2FudmFzLCBjb250ZXh0KTtcclxuXHJcbiAgICAvLyBjb25zdCB3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIC8vIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI2Y4ZmFmY1wiO1xyXG4gICAgLy8gY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gY29udGV4dC5hcmMod2lkdGggLyAyLCBoZWlnaHQgLyAyLCA1NCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSBcIiM4ZWM1ZmZcIjtcclxuICAgIC8vIGNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgIC8vIGNvbnRleHQubGluZVdpZHRoID0gNDtcclxuICAgIC8vIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiMyNTYzZWJcIjtcclxuICAgIC8vIGNvbnRleHQuc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxDYW52YXNFbGVtZW50PignI2NpcmNsZS1kZW1vLWNhbnZhcycpO1xyXG4gICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0NpcmNsZShjYW52YXMpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBSU0sSUFBTyxTQUFQLE1BQU8sUUFBTTtFQUlmLFlBQVksSUFBSSxHQUFHLElBQUksR0FBQztBQUNwQixTQUFLLElBQUk7QUFDVCxTQUFLLElBQUk7RUFDYjtFQUVBLE9BQU8sSUFBSSxLQUFhLEdBQVcsR0FBUztBQUN4QyxRQUFJLElBQUk7QUFDUixRQUFJLElBQUk7QUFDUixXQUFPO0VBQ1g7RUFFQSxPQUFPLFNBQVMsS0FBYSxPQUFlLElBQVksR0FBSyxPQUFvQixPQUFLO0FBQ2xGLFFBQUksU0FBUztBQUFPLGVBQVMsS0FBSyxLQUFLO0FBQ3ZDLFFBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLO0FBQzFCLFFBQUksSUFBSSxJQUFJ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QUFFLElBQUksS0FBSztFQUMvQztFQUVBLGFBQWEsR0FBUztBQUNsQixXQUFPLEtBQUssWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDO0VBQ3BDO0VBRVUsaUJBQWM7QUFDcEIsVUFBTSxRQUFRLEtBQUssS0FBSyxNQUFNLElBQUc7QUFDakMsVUFBTSxVQUFVLEtBQUssTUFBTSxXQUFVO0FBQ3JDLFVBQU0sU0FBUyxRQUFRLElBQUc7QUFDMUIsU0FBSyxLQUFLLFNBQVMsUUFBUSxRQUFRLEtBQUs7QUFFeEMsVUFBTSxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSztBQUNwQyxVQUFNLEtBQUssT0FBTztBQUNsQixVQUFNLEtBQUssT0FBTztBQUNsQixVQUFNLElBQUksSUFBSTtBQUVkLFNBQUssU0FBUyxJQUFJLEtBQUssR0FBRyxFQUFFO0FBQzVCLFNBQUssU0FBUyxJQUFJLEtBQUssR0FBRyxFQUFFO0FBQzVCLFNBQUssU0FBUyxJQUFJLElBQUksS0FBSyxDQUFDO0FBQzVCLFNBQUssU0FBUyxJQUFJLElBQUksS0FBSyxDQUFDO0FBRTVCLFNBQUssV0FBVyxLQUFLLEtBQUssUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7QUFDN0MsU0FBSyxXQUFXLEtBQUssS0FBSyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3QyxTQUFLLFdBQVcsS0FBSyxLQUFLLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzdDLFNBQUssV0FBVyxLQUFLLEtBQUssUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7QUFDN0MsU0FBSyxXQUFXLEtBQUssS0FBSyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM3QyxTQUFLLFdBQVcsS0FBSyxLQUFLLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzdDLFNBQUssV0FBVyxLQUFLLEtBQUssUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDN0MsU0FBSyxXQUFXLEtBQUssS0FBSyxRQUFRLEVBQUUsSUFB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TSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQzVDLFVBQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUM1QyxVQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDNUMsVUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQzVDLFVBQU0sT0FBTyxPQUFPLE1BQU0sT0FBTztBQUNqQyxVQUFNLE9BQU8sT0FBTyxNQUFNLE9BQU87QUFDakMsVUFBTSxPQUFPLE9BQU8sTUFBTSxPQUFPO0FBQ2pDLFVBQU0sT0FBTyxPQUFPLE1BQU0sT0FBTztBQUNqQyxVQUFNLFFBQVEsUUFBUSxPQUFPLFFBQVE7QUFDckMsVUFBTSxRQUFRLFFBQVEsT0FBTyxRQUFRO0FBQ3JDLFFBQUksS0FBSyxLQUFLO0FBQ2QsUUFBSSxLQUFLLEtBQUs7QUFDZCxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFDVCxXQUFPO0VBQ1g7RUFFQSxtQkFBbUIsS0FBbUIsR0FBUztBQUMzQyxVQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDNUMsVUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQzVDLFVBQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUM1QyxVQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU07QUFDNUMsVUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNO0FBQzVDLFVBQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUM1QyxVQUFNLE9BQU8sT0FBTyxNQUFNLE9BQU87QUFDakMsVUFBTSxPQUFPLE9BQU8sTUFBTSxPQUFPO0FBQ2pDLFVBQU0sT0FBTyxPQUFPLE1BQU0sT0FBTztB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
