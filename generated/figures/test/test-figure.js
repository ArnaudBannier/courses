var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// figures/figure-base.ts
var FigureBase = class {
  constructor(container, aspectRatio = 16 / 9) {
    __publicField(this, "scene");
    __publicField(this, "container");
    __publicField(this, "figure");
    __publicField(this, "canvas");
    __publicField(this, "resizeObserver");
    __publicField(this, "onWindowResize");
    __publicField(this, "aspectRatio");
    this.aspectRatio = aspectRatio;
    this.container = container;
    const divFigure = document.createElement("div");
    divFigure.className = "figure";
    this.figure = divFigure;
    const canvas = document.createElement("canvas");
    canvas.style.width = "max(100%, 500px)";
    canvas.style.aspectRatio = `${aspectRatio}`;
    canvas.style.display = "block";
    this.canvas = canvas;
    divFigure.appendChild(canvas);
    container.append(divFigure);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get 2D context");
    }
    this.scene = this.createScene(canvas, ctx);
    this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
    this.onWindowResize = () => this.resizeCanvas();
  }
  init() {
    this.resizeCanvas();
    this.resizeObserver.observe(this.canvas);
    window.addEventListener("resize", this.onWindowResize);
  }
  destroy() {
    this.resizeObserver.disconnect();
    window.removeEventListener("resize", this.onWindowResize);
  }
  resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const canvas = this.scene.getCanvas();
    const ctx = this.scene.getContext();
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.scene.setViewportSize(width, height);
    this.scene.update();
    this.scene.render();
  }
};

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
  setThemes(lightTheme2, darkTheme2, name, scale) {
    this.setFromHex(lightTheme2.color(name, scale), 0);
    this.setFromHex(darkTheme2.color(name, scale), 1);
    return this;
  }
  setFromTheme(colorTheme, name, scale, modeIndex = 0) {
    return this.setFromHex(colorTheme.color(name, scale), modeIndex);
  }
  static fromTheme(scene, colorTheme, name, scale, modeIndex = 0) {
    return new _C2Color(scene).setFromTheme(colorTheme, name, scale, modeIndex);
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
  setThemeMode(mode) {
    this.themeModeIndex = mode === "light" ? 0 : 1;
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
  constructor(palette) {
    this.palette = palette;
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

// ../c2/dist/core/element/c2-fill-rect.js
var C2FillRectData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    this.fill = new C2FillData(scene);
    this.opacity = new C2Number(scene, 1);
    this.fill.opacity.set(1);
  }
};
var C2FillRect = class extends C2GraphicsElement {
  constructor(scene) {
    super(scene, new C2FillRectData(scene));
  }
  update() {
    if (!this.data.isEnabled.get())
      return;
  }
  render(ctx, viewSpace) {
    viewSpace;
    if (!this.data.isEnabled.get())
      return;
    if (!this.data.render.isEnabled.get())
      return;
    const vecPool = this.scene.getVecPool();
    const size = vecPool.get();
    this.scene.getViewportSizeInto(size);
    if (this.data.fill.isEnabled.get()) {
      this.data.fill.applyToContext(ctx);
      ctx.fillRect(0, 0, Math.round(size.x), Math.round(size.y));
    }
    vecPool.release(size);
  }
};

// ../c2/dist/core/animation/c2-base-animation.js
var C2BaseAnimation = class {
  constructor(scene) {
    this.cycleIndex = 0;
    this.cycleCount = 1;
    this.cycleDuration = 0;
    this.rawCycleAlpha = 0;
    this.rawElapsed = 0;
    this.rawDuration = 0;
    this.wrapedCycleAlpha = 0;
    this.wrapedCycleElapsed = 0;
    this.ease = ease.linear;
    this.reversed = false;
    this.alternate = false;
    this.listeners = [];
    this.scene = scene;
    this.properties = /* @__PURE__ */ new Set();
  }
  getScene() {
    return this.scene;
  }
  getProperties() {
    return this.properties;
  }
  getElapsed() {
    return this.rawElapsed;
  }
  getDuration() {
    return this.rawDuration;
  }
  getCycleDuration() {
    return this.cycleDuration;
  }
  getCycleIndex() {
    return this.cycleIndex;
  }
  getCycleCount() {
    return this.cycleCount;
  }
  setCycleCount(cycleCount) {
    this.cycleCount = cycleCount;
    this.updateRawDuration();
    return this;
  }
  setEasing(ease2) {
    this.ease = ease2;
    return this;
  }
  setReversed(reversed = true) {
    this.reversed = reversed;
    return this;
  }
  setAlternate(alternate = true) {
    this.alternate = alternate;
    return this;
  }
  addListener(listener) {
    this.listeners.push(listener);
    return this;
  }
  removeListener(listener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
    return this;
  }
  clearListeners() {
    this.listeners.length = 0;
    return this;
  }
  setElapsed(elapsed) {
    this.setRawElapsed(elapsed);
    for (const target of this.properties) {
      this.setElapsedPropertyImpl(target);
    }
    for (const listener of this.listeners) {
      listener(this);
    }
    return this;
  }
  setElapsedProperty(property, elapsed) {
    this.setRawElapsed(elapsed);
    this.setElapsedPropertyImpl(property);
    return this;
  }
  updateRawDuration() {
    this.rawDuration = this.cycleDuration * (this.cycleCount < 0 ? 1 : this.cycleCount);
  }
  setRawElapsed(elapsed) {
    if (this.rawElapsed === elapsed)
      return;
    this.rawElapsed = elapsed;
    this.cycleIndex = C2MathUtils.clamp(Math.floor(this.rawElapsed / this.cycleDuration), 0, this.cycleCount - 1);
    if (elapsed >= this.cycleCount * this.cycleDuration) {
      this.rawCycleAlpha = 1;
    } else {
      this.rawCycleAlpha = this.rawElapsed % this.cycleDuration / this.cycleDuration;
    }
    this.wrapedCycleAlpha = this.reversed ? 1 - this.rawCycleAlpha : this.rawCycleAlpha;
    if (this.alternate && this.cycleIndex % 2 === 1)
      this.wrapedCycleAlpha = 1 - this.wrapedCycleAlpha;
    this.wrapedCycleAlpha = this.ease(this.wrapedCycleAlpha);
    this.wrapedCycleElapsed = C2MathUtils.clamp(this.wrapedCycleAlpha, 0, 1) * this.cycleDuration;
  }
};

// ../c2/dist/core/animation/c2-base-duration-animation.js
var C2BaseDurationAnimation = class extends C2BaseAnimation {
  setCycleDuration(cycleDuration) {
    this.cycleDuration = cycleDuration;
    this.updateRawDuration();
    return this;
  }
};

// ../c2/dist/core/animation/c2-lerp-animation.js
var C2LerpAnimationFactory = class {
  static create(scene, property) {
    switch (property.kind) {
      case "number":
        return new C2BaseLerpAnimation(scene, property);
      case "color":
        return new C2BaseLerpAnimation(scene, property);
      case "position":
        return new C2BaseLerpAnimation(scene, property);
      case "offset":
        return new C2BaseLerpAnimation(scene, property);
      case "length":
        return new C2BaseLerpAnimation(scene, property);
      case "extents":
        return new C2BaseLerpAnimation(scene, property);
      case "anchor":
        return new C2BaseLerpAnimation(scene, property);
      default:
        throw new Error("Unsupported property type");
    }
  }
};
var C2LerpAnimation = class extends C2BaseDurationAnimation {
};
var C2BaseLerpAnimation = class extends C2LerpAnimation {
  constructor(scene, property) {
    super(scene);
    this.property = property;
    this.state0 = property.clone();
    this.state1 = property.clone();
    this.properties.add(property);
  }
  commitInitialState() {
    this.state0.copy(this.property);
    return this;
  }
  commitFinalState() {
    this.state1.copy(this.property);
    return this;
  }
  setElapsedPropertyImpl(property) {
    if (property !== this.property)
      return;
    this.property.lerp(this.state0, this.state1, this.wrapedCycleAlpha);
  }
};

// ../c2/dist/core/math/c2-aabb.js
var C2AABB = class _C2AABB {
  constructor() {
    this.lower = new C2Vec2();
    this.upper = new C2Vec2();
  }
  setFromPoints(points) {
    if (points.length === 0) {
      this.lower.set(0, 0);
      this.upper.set(0, 0);
      return this;
    }
    this.lower.set(Infinity, Infinity);
    this.upper.set(-Infinity, -Infinity);
    for (const point of points) {
      this.lower.minV(point);
      this.upper.maxV(point);
    }
    return this;
  }
  setEmpty() {
    this.lower.set(Infinity, Infinity);
    this.upper.set(-Infinity, -Infinity);
    return this;
  }
  expandToInclude(point) {
    this.lower.minV(point);
    this.upper.maxV(point);
    return this;
  }
  getCenterInto(dst) {
    dst.copy(this.lower).addV(this.upper).scale(0.5);
    return this;
  }
  getExtentsInto(dst) {
    dst.copy(this.upper).subV(this.lower).scale(0.5);
    return this;
  }
  isPointInside(point) {
    return point.x >= this.lower.x && point.x <= this.upper.x && point.y >= this.lower.y && point.y <= this.upper.y;
  }
  expand(amount) {
    this.lower.x -= amount;
    this.lower.y -= amount;
    this.upper.x += amount;
    this.upper.y += amount;
    return this;
  }
  clone() {
    const aabb = new _C2AABB();
    aabb.lower.copy(this.lower);
    aabb.upper.copy(this.upper);
    return aabb;
  }
  copy(aabb) {
    this.lower.copy(aabb.lower);
    this.upper.copy(aabb.upper);
    return this;
  }
};

// ../c2/dist/core/element/text/c2-text-highlight.js
var C2TextHighlightData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const viewSpace = scene.getViewSpace();
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.cornerRadius = new C2Length(scene, 5, viewSpace);
    this.padding = new C2Extents(scene, 5, 0, viewSpace);
  }
};
var C2TextHighlight = class extends C2Element {
  constructor(scene) {
    super(scene, new C2TextHighlightData(scene));
    this.references = [];
    this.rect = new C2PathRect(scene);
    this.aabb = new C2AABB();
    this.extents = new C2Extents(scene, 0, 0, scene.getViewSpace());
    this.center = new C2Point(scene, 0, 0, scene.getViewSpace());
  }
  getExtentsInto(dst, space) {
    this.extents.getInto(dst, space);
    return this;
  }
  getCenterInto(dst, space) {
    this.center.getInto(dst, space);
    return this;
  }
  addReference(text) {
    this.references.push(text);
    return this;
  }
  addReferences(...texts) {
    this.references.push(...texts);
    return this;
  }
  clearReferences() {
    this.references.length = 0;
    return this;
  }
  animateFadeIn(animator, options = {}) {
    const label = animator.ensureLabel(options.label);
    const offset = options.offset ?? 0;
    const duration = options.duration ?? 500;
    this.data.opacity.set(0);
    const opacityAnim = C2LerpAnimationFactory.create(this.scene, this.data.opacity).setCycleDuration(duration).setEasing(ease.inOut);
    this.data.opacity.set(1);
    opacityAnim.commitFinalState();
    animator.addAnimation(opacityAnim, label, offset);
    animator.enableElement(this, true, label, offset);
    return this;
  }
  animateFadeOut(animator, options = {}) {
    const label = animator.ensureLabel(options.label);
    const offset = options.offset ?? 0;
    const duration = options.duration ?? 500;
    this.data.opacity.set(1);
    const opacityAnim = C2LerpAnimationFactory.create(this.scene, this.data.opacity).setCycleDuration(duration).setEasing(ease.inOut);
    this.data.opacity.set(0);
    opacityAnim.commitFinalState();
    animator.addAnimation(opacityAnim, label, offset);
    animator.enableElement(this, false, label, offset + duration);
    return this;
  }
  update() {
    if (!this.data.isEnabled.get())
      return;
    const viewSpace = this.scene.getViewSpace();
    const vecPool = this.scene.getVecPool();
    const extents = vecPool.get();
    const center = vecPool.get();
    const padding = vecPool.get();
    const lower = vecPool.get();
    const upper = vecPool.get();
    this.aabb.setEmpty();
    for (const span of this.references) {
      if (!span.data.isEnabled.get())
        continue;
      span.getExtentsInto(extents, viewSpace);
      span.getCenterInto(center, viewSpace);
      lower.setV(center).subV(extents);
      upper.setV(center).addV(extents);
      this.aabb.expandToInclude(lower);
      this.aabb.expandToInclude(upper);
    }
    this.aabb.getExtentsInto(extents);
    this.aabb.getCenterInto(center);
    this.data.padding.getInto(padding, viewSpace);
    extents.addV(padding);
    this.extents.setV(extents, viewSpace);
    this.center.setV(center, viewSpace);
    const rectData = this.rect.data;
    rectData.isEnabled.set(this.data.isEnabled.get());
    rectData.position.setV(center, viewSpace);
    rectData.extents.setV(extents, viewSpace);
    rectData.anchor.set(0, 0);
    rectData.fill.copyIfUnlocked(this.data.fill);
    rectData.opacity.copyIfUnlocked(this.data.opacity);
    rectData.stroke.copyIfUnlocked(this.data.stroke);
    rectData.cornerRadius.copyIfUnlocked(this.data.cornerRadius);
    rectData.render.copyIfUnlocked(this.data.render);
    rectData.update.isManaged.set(true);
    this.rect.update();
    vecPool.release(extents);
    vecPool.release(center);
    vecPool.release(padding);
    vecPool.release(lower);
    vecPool.release(upper);
  }
};

// ../c2/dist/core/element/text/c2-code.js
function tokenizeAlgorithm(input) {
  const tokens = [];
  const regex = /\*\*(\w+):(.*?)\*\*|(\s+)|([(){}\[\];,.])|([^\s(){}\[\];,.]+)/g;
  for (const line of input.split("\n")) {
    let match;
    while ((match = regex.exec(line)) !== null) {
      if (match[1]) {
        tokens.push({ type: match[1], value: match[2] });
      } else if (match[3]) {
        tokens.push({ type: "space", value: match[3] });
      } else if (match[4]) {
        tokens.push({ type: "punct", value: match[4] });
      } else if (match[5]) {
        tokens.push({ type: "plain", value: match[5] });
      }
    }
    tokens.push({ type: "newline", value: "\n" });
  }
  tokens.pop();
  return tokens;
}
var C2CodeData = class extends C2GraphicsData {
  constructor(scene) {
    super(scene);
    const worldSpace = scene.getWorldSpace();
    const viewSpace = scene.getViewSpace();
    this.space = new C2SpaceRef(scene, worldSpace);
    this.position = new C2Point(scene, 0, 0, worldSpace);
    this.anchor = new C2Anchor(scene, 0, 0);
    this.minExtents = new C2Extents(scene, 0, 0, viewSpace);
    this.background = new C2CodeBackgroundData(scene);
    this.text = new C2CodeTextData(scene);
    this.padding = new C2Extents(scene, 10, 5, viewSpace);
    this.currentLine = new C2CodeCurrentLineData(scene);
  }
};
var C2CodeBackgroundData = class {
  constructor(scene) {
    const viewSpace = scene.getViewSpace();
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.cornerRadius = new C2Length(scene, 5, viewSpace);
    this.stroke.opacity.set(1);
    this.fill.opacity.set(1);
  }
};
var C2CodeTextData = class {
  constructor(scene) {
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.font = new C2FontData(scene);
    this.horizontalAlign = new C2Number(scene, -1);
    this.verticalAlign = new C2Number(scene, 0);
    this.stroke.isEnabled.set(false);
  }
};
var C2CodeCurrentLineData = class {
  constructor(scene) {
    const viewSpace = scene.getViewSpace();
    this.fill = new C2FillData(scene);
    this.stroke = new C2StrokeData(scene);
    this.opacity = new C2Number(scene, 1);
    this.index = new C2Number(scene, 0);
    this.span = new C2Number(scene, 1);
    this.padding = new C2Extents(scene, 0, 5, viewSpace);
  }
};
var C2Code = class _C2Code extends C2Element {
  constructor(scene) {
    super(scene, new C2CodeData(scene));
    this.highlights = [];
    this.tokenStyleSetter = _C2Code.defaultTokenStyleSetter;
    this.center = new C2Point(scene, 0, 0, scene.getWorldSpace());
    this.extents = new C2Extents(scene, 0, 0, scene.getViewSpace());
    this.codeBackground = new C2PathRect(scene);
    this.lineBackground = new C2PathRect(scene);
    this.textGroup = new C2TextGroup(scene);
    this.data.render.layer.orderInLayer = 0;
    this.textGroup.data.render.layer.orderInLayer = 1;
    this.codeBackground.data.render.layer.orderInLayer = 0;
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
  setContent(tokens) {
    let lineElement = this.textGroup.addLine();
    for (const token of tokens) {
      if (token.type === "plain") {
        lineElement.addSpan(token.value);
      } else if (token.type === "newline") {
        lineElement = this.textGroup.addLine();
      } else {
        const span = lineElement.addSpan(token.value, token.type);
        this.tokenStyleSetter(span, token.type);
      }
    }
  }
  static defaultTokenStyleSetter(tspan, type) {
    switch (type) {
      case "fn":
        tspan.data.fill.color.setFromHex("#ffcd82", 0).lock();
        tspan.data.fill.color.setFromHex("#ffcd82", 1).lock();
        break;
      case "type":
        tspan.data.fill.color.setFromHex("#70B8FF", 0).lock();
        tspan.data.fill.color.setFromHex("#70B8FF", 1).lock();
        break;
      case "kw":
        tspan.data.fill.color.setFromHex("#E796F3", 0).lock();
        tspan.data.fill.color.setFromHex("#E796F3", 1).lock();
        break;
      case "var":
        tspan.data.fill.color.setFromHex("#B6ECF7", 0).lock();
        tspan.data.fill.color.setFromHex("#B6ECF7", 1).lock();
        break;
      case "num":
        tspan.data.fill.color.setFromHex("#E3F7BA", 0).lock();
        tspan.data.fill.color.setFromHex("#E3F7BA", 1).lock();
        break;
      case "str":
        tspan.data.fill.color.setFromHex("#ffac97", 0).lock();
        tspan.data.fill.color.setFromHex("#ffac97", 1).lock();
        break;
      case "punct":
        tspan.data.fill.color.setFromHex("#E9C2EC", 0).lock();
        tspan.data.fill.color.setFromHex("#E9C2EC", 1).lock();
        break;
    }
  }
  findToken(selector) {
    const line = this.textGroup.getLine(selector.lineIndex);
    return line.findSpan({ content: selector.content, category: selector.category });
  }
  createTokenHighlight(selectors) {
    const highlight = new C2TextHighlight(this.scene);
    for (const selector of selectors) {
      const span = this.findToken(selector);
      if (span) {
        highlight.addReference(span);
      } else {
        console.warn("Token not found for selector:", selector);
      }
    }
    this.highlights.push(highlight);
    highlight.data.update.isManaged.set(true);
    return highlight;
  }
  animateSetCurrentLine(index, animator, options = {}) {
    const label = animator.ensureLabel(options.label);
    const offset = options.offset ?? 0;
    const duration = options.duration ?? 500;
    if (options.prevIndex !== void 0) {
      this.data.currentLine.index.set(options.prevIndex);
    }
    const lerpAnim = C2LerpAnimationFactory.create(this.scene, this.data.currentLine.index).setCycleDuration(duration).setEasing(ease.inOut);
    this.data.currentLine.index.set(index);
    animator.addAnimation(lerpAnim.commitFinalState(), label, offset);
    return this;
  }
  update() {
    if (!this.data.isEnabled.get()) {
      this.codeBackground.data.isEnabled.set(false);
      this.textGroup.data.isEnabled.set(false);
      return;
    }
    const vecPool = this.scene.getVecPool();
    const space = this.data.space.get();
    const renderLayer = this.data.render.layer;
    const textData = this.textGroup.data;
    textData.font.copyIfUnlocked(this.data.text.font);
    textData.fill.copyIfUnlocked(this.data.text.fill);
    textData.stroke.copyIfUnlocked(this.data.text.stroke);
    textData.opacity.copyIfUnlocked(this.data.text.opacity);
    textData.horizontalAlign.copyIfUnlocked(this.data.text.horizontalAlign);
    textData.verticalAlign.copyIfUnlocked(this.data.text.verticalAlign);
    textData.update.isManaged.set(true);
    textData.render.layer.copyIfUnlocked(renderLayer);
    textData.render.layer.orderInLayer += 3;
    this.textGroup.update();
    this.extents.space = space;
    const codeExtents = vecPool.get();
    const textExtents = vecPool.get();
    const lineExtents = vecPool.get();
    const codePadding = vecPool.get();
    const contentExtents = vecPool.get();
    this.data.padding.getInto(codePadding, space);
    this.data.minExtents.getInto(codeExtents, space);
    this.textGroup.getTextExtentsInto(textExtents, space);
    codeExtents.max(textExtents.x + codePadding.x, textExtents.y + codePadding.y);
    this.extents.setV(codeExtents, space);
    contentExtents.copy(codeExtents).subV(codePadding);
    this.center.space = space;
    const codeCenter = vecPool.get();
    this.data.position.getInto(codeCenter, space);
    this.data.anchor.getCenterIntoV(codeCenter, codeCenter, codeExtents);
    this.center.setV(codeCenter, space);
    const backData = this.codeBackground.data;
    backData.fill.copyIfUnlocked(this.data.background.fill);
    backData.stroke.copyIfUnlocked(this.data.background.stroke);
    backData.opacity.copyIfUnlocked(this.data.background.opacity);
    backData.cornerRadius.copyIfUnlocked(this.data.background.cornerRadius);
    backData.render.layer.copyIfUnlocked(renderLayer);
    backData.position.copy(this.center);
    backData.extents.setV(codeExtents, space);
    backData.update.isManaged.set(true);
    this.codeBackground.update();
    const lineData = this.lineBackground.data;
    const lineCount = this.textGroup.getLineCount();
    const index = this.data.currentLine.index.get();
    lineData.update.isManaged.set(true);
    if (lineCount <= 0 || index < 0 || index >= lineCount) {
      lineData.isEnabled.set(false);
    } else {
      const position0 = vecPool.get();
      const position1 = vecPool.get();
      const linePadding = vecPool.get();
      this.data.currentLine.padding.getInto(linePadding, space);
      const currIndex = C2MathUtils.clamp(this.data.currentLine.index.get(), 0, lineCount - 1);
      const index0 = C2MathUtils.clamp(Math.floor(currIndex), 0, lineCount - 1);
      const index1 = C2MathUtils.clamp(Math.ceil(currIndex), 0, lineCount - 1);
      const t = currIndex - index0;
      const line0 = this.textGroup.getLine(index0);
      const line1 = this.textGroup.getLine(index1);
      const span = this.data.currentLine.span.get();
      line0.getCenterInto(position0, space);
      line1.getCenterInto(position1, space);
      const lineHeight = line0.getFontHeight(space);
      position0.y = C2MathUtils.lerp(position0.y, position1.y, t);
      position0.y += lineHeight * 0.5 + linePadding.y;
      position0.x = this.center.value.x;
      lineExtents.x = codeExtents.x;
      lineExtents.y = span * lineHeight / 2 + linePadding.y;
      lineData.fill.copyIfUnlocked(this.data.currentLine.fill);
      lineData.stroke.copyIfUnlocked(this.data.currentLine.stroke);
      lineData.opacity.copyIfUnlocked(this.data.currentLine.opacity);
      lineData.position.setV(position0, space);
      lineData.anchor.set(0, 1);
      lineData.extents.setV(lineExtents, space);
      lineData.render.layer.copyIfUnlocked(renderLayer);
      lineData.render.layer.orderInLayer += 1;
      this.lineBackground.update();
      vecPool.release(position0);
      vecPool.release(position1);
      vecPool.release(linePadding);
    }
    textData.position.copy(this.center);
    textData.minExtents.setV(contentExtents, space);
    this.textGroup.update();
    for (const highlight of this.highlights) {
      highlight.data.render.layer.copyIfUnlocked(renderLayer);
      highlight.data.render.layer.orderInLayer += 2;
      highlight.update();
      console.log("highlight updated", highlight);
    }
    vecPool.release(codeExtents);
    vecPool.release(textExtents);
    vecPool.release(lineExtents);
    vecPool.release(codePadding);
    vecPool.release(contentExtents);
    vecPool.release(codeCenter);
  }
};

// figures/test/test-scene.ts
var lightTheme = new C2ColorTheme({
  back: slate,
  primary: cyan,
  secondary: ruby
});
var darkTheme = new C2ColorTheme({
  back: slateDark,
  primary: cyanDark,
  secondary: rubyDark
});
var dsaturAlgorithm = "**kw:tant que** **num:vrai** **kw:faire**\n  **type:sommet** **var:u** = **num:ind\xE9fini**\n  **kw:pour chaque** sommet **var:v** non colori\xE9 **kw:faire**\n    **kw:si** (**var:u** est **num:ind\xE9fini**)\n      **kw:ou** (sat[**var:v**] > sat[**var:u**])\n      **kw:ou** (sat[**var:v**] = sat[**var:u**] **kw:et** deg[**var:v**] > deg[**var:u**])\n      **kw:alors**\n      **var:u** = **var:v**\n  **kw:si** **var:u** est **num:ind\xE9fini** **kw:alors**\n    **kw:quitter**\n  **var:u**.couleur = plus petite couleur disponible\n    dans le voisinage de **var:u**\n  **kw:pour** chaque voisin **var:v** de **var:u** non colori\xE9 **kw:faire**\n    mettre \xE0 jour sat[**var:v**]";
var TestScene = class extends C2BaseScene {
  constructor(canvas, context) {
    super(canvas, context, { vecPoolMode: "debug" });
    __publicField(this, "groupAnchor", new C2Vec2(0, 0));
    __publicField(this, "groupAlign", new C2Vec2(0, 0));
    __publicField(this, "groupExtents", new C2Vec2(1, 0.5));
    __publicField(this, "padding", new C2Vec2(20, 10));
    __publicField(this, "fontSize", 18);
    __publicField(this, "cornerRadius", 0.25);
    __publicField(this, "plainText", null);
    __publicField(this, "rect", null);
    this.camera.setExtents(8, 4.5);
    const worldSpace = this.getWorldSpace();
    const viewSpace = this.getViewSpace();
    this.update();
    this.setThemeMode("dark");
    const fillRect = new C2FillRect(this);
    fillRect.data.fill.color.setThemes(lightTheme, darkTheme, "back", 2);
    fillRect.data.render.layer.set(-1);
    const grid = new C2Grid(this);
    grid.data.geometry.boundA.set(-8, -4.5, worldSpace);
    grid.data.geometry.boundB.set(8, 4.5, worldSpace);
    grid.data.geometry.steps.set(1, 1, worldSpace);
    grid.data.stroke.width.set(2, this.getViewSpace());
    grid.data.stroke.color.setThemes(lightTheme, darkTheme, "back", 4);
    const code = new C2Code(this);
    code.data.padding.set(20, 20, viewSpace);
    code.data.anchor.set(0, 1);
    code.data.position.set(0, 2, worldSpace);
    code.data.minExtents.set(4, 3, worldSpace);
    code.data.text.font.size.set(18, viewSpace);
    code.data.text.font.size.set(0.3, worldSpace);
    code.data.text.font.family.set("monospace");
    code.data.text.fill.color.setThemes(darkTheme, darkTheme, "back", 12);
    code.data.text.opacity.set(1);
    code.data.text.verticalAlign.set(1);
    code.data.text.horizontalAlign.set(-1);
    code.data.background.fill.color.setThemes(darkTheme, darkTheme, "back", 1);
    code.data.background.stroke.color.setThemes(darkTheme, darkTheme, "back", 4);
    code.data.background.stroke.width.set(5, viewSpace);
    code.data.background.opacity.set(1);
    code.data.background.cornerRadius.set(this.cornerRadius, worldSpace);
    code.data.currentLine.span.set(8);
    code.data.currentLine.index.set(1);
    code.data.currentLine.padding.set(0, 0, viewSpace);
    code.data.currentLine.fill.color.setThemes(darkTheme, darkTheme, "back", 3);
    code.data.currentLine.stroke.color.setThemes(darkTheme, darkTheme, "back", 10);
    code.data.currentLine.stroke.width.set(1, viewSpace);
    code.setContent(tokenizeAlgorithm(dsaturAlgorithm));
    const plainText = new C2PlainText(this);
    this.plainText = plainText;
    plainText.setContent("Hello, World!");
    plainText.data.position.set(0, 3, worldSpace);
    plainText.data.font.size.set(this.fontSize, viewSpace);
    plainText.data.font.family.set("monospace");
    plainText.data.fill.color.setThemes(lightTheme, darkTheme, "back", 11);
    plainText.data.fill.opacity.set(1);
    this.update();
    const rect = new C2PathRect(this);
    this.rect = rect;
    rect.data.position.set(0, 3, worldSpace);
    rect.data.stroke.isEnabled.set(false);
    rect.data.fill.opacity.set(0.5);
    rect.data.fill.color.setThemes(lightTheme, darkTheme, "primary", 9);
    rect.data.extents.set(2, 2, viewSpace);
    plainText.getCenterInto(rect.data.position.value, worldSpace);
    plainText.getExtentsInto(rect.data.extents.value, viewSpace);
    const highlight = code.createTokenHighlight([
      { lineIndex: 1, content: "u" },
      { lineIndex: 1, content: "ind\xE9fini" }
    ]);
    highlight.data.fill.color.setThemes(lightTheme, darkTheme, "primary", 9);
    highlight.data.fill.opacity.set(0.5);
    highlight.data.stroke.isEnabled.set(false);
    highlight.data.render.layer.set(10);
    highlight.data.padding.set(5, 0, viewSpace);
    this.render();
  }
  update() {
    const worldSpace = this.getWorldSpace();
    const viewSpace = this.getViewSpace();
    if (this.plainText && this.rect) {
      this.plainText.getCenterInto(this.rect.data.position.value, worldSpace);
      this.plainText.getExtentsInto(this.rect.data.extents.value, viewSpace);
    }
    super.update();
  }
  setAnchor(x, y) {
    this.groupAnchor.set(x, y);
    this.update();
    this.render();
  }
  setAlign(h, v) {
    this.groupAlign.set(h, v);
    this.update();
    this.render();
  }
  setExtents(x, y) {
    this.groupExtents.set(x, y);
    this.update();
    this.render();
  }
  setFontSize(size) {
    this.fontSize = size;
    this.update();
    this.render();
  }
  setCornerRadius(radius) {
    this.cornerRadius = radius;
    this.update();
    this.render();
  }
};

// figures/test/test-figure.ts
var TestFigure = class extends FigureBase {
  constructor(container) {
    super(container);
  }
  createScene(canvas, context) {
    return new TestScene(canvas, context);
  }
  init() {
    super.init();
  }
};
function mount(root) {
  const container = root.querySelector("#test-figure");
  if (!container) return;
  const figure = new TestFigure(container);
  figure.init();
}
export {
  TestFigure,
  mount
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vZmlndXJlcy9maWd1cmUtYmFzZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2MyLXZlYzIudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvbWF0aC9jMi1jYW1lcmEudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvbWF0aC9jMi1tYXQyeDMudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvbWF0aC9jMi1zcGFjZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItYmFzZS10eXBlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1ib29sZWFuLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL21hdGgvYzItbWF0aC11dGlscy50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItY29sb3IudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWVudW0udHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWxlbmd0aC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItbnVtYmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1zdHJpbmcudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWxheWVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvYmFzZS9jMi1lbGVtZW50LWRhdGEudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC9iYXNlL2MyLWVsZW1lbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvbWF0aC9jMi1wb29sLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2FuaW1hdGlvbi9jMi10aW1lci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9hbmltYXRpb24vYzItYW5pbWF0aW9uLW1hbmFnZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2NlbmUvYzItYmFzZS1zY2VuZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9zaGFyZWQvYzItcG9pbnQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWV4dGVudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLXNwYWNlLXJlZi50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L2MyLWdyaWQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvc2hhcmVkL2MyLWFuY2hvci50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L2MyLXBhdGgtcmVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9hbmltYXRpb24vYzItZWFzaW5nLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1vZmZzZXQudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC90ZXh0L2MyLWJhc2UtdGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L3RleHQvYzItcGxhaW4tdGV4dC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L3RleHQvYzItcmljaC10ZXh0LnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvdGV4dC9jMi10ZXh0LWdyb3VwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL3NoYXJlZC9jMi1jb2xvci10aGVtZS50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvdXRpbHMvcmFkaXgtY29sb3JzLWRhcmsudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL3V0aWxzL3JhZGl4LWNvbG9ycy1saWdodC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9lbGVtZW50L2MyLWZpbGwtcmVjdC50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9hbmltYXRpb24vYzItYmFzZS1hbmltYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvYW5pbWF0aW9uL2MyLWJhc2UtZHVyYXRpb24tYW5pbWF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2FuaW1hdGlvbi9jMi1sZXJwLWFuaW1hdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi9jMi9zcmMvY29yZS9tYXRoL2MyLWFhYmIudHMiLCAiLi4vLi4vLi4vLi4vLi4vYzIvc3JjL2NvcmUvZWxlbWVudC90ZXh0L2MyLXRleHQtaGlnaGxpZ2h0LnRzIiwgIi4uLy4uLy4uLy4uLy4uL2MyL3NyYy9jb3JlL2VsZW1lbnQvdGV4dC9jMi1jb2RlLnRzIiwgIi4uLy4uLy4uLy4uL2ZpZ3VyZXMvdGVzdC90ZXN0LXNjZW5lLnRzIiwgIi4uLy4uLy4uLy4uL2ZpZ3VyZXMvdGVzdC90ZXN0LWZpZ3VyZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJ0Bhcm5hdWRiYW5uaWVyL2MyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWd1cmVCYXNlPFNjZW5lIGV4dGVuZHMgQzJCYXNlU2NlbmU+IHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzY2VuZTogU2NlbmU7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBmaWd1cmU6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG9uV2luZG93UmVzaXplOiAoKSA9PiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFzcGVjdFJhdGlvOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgYXNwZWN0UmF0aW86IG51bWJlciA9IDE2IC8gOSkge1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY29uc3QgZGl2RmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2RmlndXJlLmNsYXNzTmFtZSA9ICdmaWd1cmUnO1xyXG4gICAgICAgIHRoaXMuZmlndXJlID0gZGl2RmlndXJlO1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnbWF4KDEwMCUsIDUwMHB4KSc7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmFzcGVjdFJhdGlvID0gYCR7YXNwZWN0UmF0aW99YDtcclxuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGRpdkZpZ3VyZS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2RmlndXJlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaWYgKCFjdHgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IDJEIGNvbnRleHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKGNhbnZhcywgY3R4KTtcclxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMucmVzaXplQ2FudmFzKCkpO1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB0aGlzLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBTY2VuZTtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5zY2VuZS5nZXRDYW52YXMoKTtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLnNjZW5lLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcmF0aW87XHJcblxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0ocmF0aW8sIDAsIDAsIHJhdGlvLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnNldFZpZXdwb3J0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJNYXQyIH0gZnJvbSAnLi9jMi1tYXQyJztcclxuaW1wb3J0IHR5cGUgeyBDMk1hdDJ4MyB9IGZyb20gJy4vYzItbWF0MngzJztcclxuaW1wb3J0IHR5cGUgeyBDMkFuZ2xlVW5pdCB9IGZyb20gJy4vYzItbWF0aC11dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJWZWMyIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0KG91dDogQzJWZWMyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB4O1xyXG4gICAgICAgIG91dC55ID0geTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRQb2xhcihvdXQ6IEMyVmVjMiwgdGhldGE6IG51bWJlciwgcjogbnVtYmVyID0gMS4wLCB1bml0OiBDMkFuZ2xlVW5pdCA9ICdyYWQnKTogQzJWZWMyIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIHRoZXRhICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBvdXQueCA9IHIgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgb3V0LnkgPSByICogTWF0aC5zaW4odGhldGEpO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZChvdXQ6IEMyVmVjMiwgeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB4MSArIHgyO1xyXG4gICAgICAgIG91dC55ID0geTEgKyB5MjtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRWKG91dDogQzJWZWMyLCB2MTogQzJWZWMyLCB2MjogQzJWZWMyKTogQzJWZWMyIHtcclxuICAgICAgICBvdXQueCA9IHYxLnggKyB2Mi54O1xyXG4gICAgICAgIG91dC55ID0gdjEueSArIHYyLnk7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViKG91dDogQzJWZWMyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKTogQzJWZWMyIHtcclxuICAgICAgICBvdXQueCA9IHgxIC0geDI7XHJcbiAgICAgICAgb3V0LnkgPSB5MSAtIHkyO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1YlYob3V0OiBDMlZlYzIsIHYxOiBDMlZlYzIsIHYyOiBDMlZlYzIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0gdjEueCAtIHYyLng7XHJcbiAgICAgICAgb3V0LnkgPSB2MS55IC0gdjIueTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtdWwob3V0OiBDMlZlYzIsIHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIpOiBDMlZlYzIge1xyXG4gICAgICAgIG91dC54ID0geDEgKiB4MjtcclxuICAgICAgICBvdXQueSA9IHkxICogeTI7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsVihvdXQ6IEMyVmVjMiwgdjE6IEMyVmVjMiwgdjI6IEMyVmVjMik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB2MS54ICogdjIueDtcclxuICAgICAgICBvdXQueSA9IHYxLnkgKiB2Mi55O1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlKG91dDogQzJWZWMyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgczogbnVtYmVyKTogQzJWZWMyIHtcclxuICAgICAgICBvdXQueCA9IHggKiBzO1xyXG4gICAgICAgIG91dC55ID0geSAqIHM7XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2NhbGVWKG91dDogQzJWZWMyLCB2OiBDMlZlYzIsIHM6IG51bWJlcik6IEMyVmVjMiB7XHJcbiAgICAgICAgb3V0LnggPSB2LnggKiBzO1xyXG4gICAgICAgIG91dC55ID0gdi55ICogcztcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKG91dDogQzJWZWMyLCB4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB0OiBudW1iZXIpOiBDMlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgICAgICBvdXQueCA9IHMgKiB4MCArIHQgKiB4MTtcclxuICAgICAgICBvdXQueSA9IHMgKiB5MCArIHQgKiB5MTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwVihvdXQ6IEMyVmVjMiwgdjA6IEMyVmVjMiwgdjE6IEMyVmVjMiwgdDogbnVtYmVyKTogQzJWZWMyIHtcclxuICAgICAgICByZXR1cm4gQzJWZWMyLmxlcnAob3V0LCB2MC54LCB2MC55LCB2MS54LCB2MS55LCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXF1YWxzKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGVwc2lsb246IG51bWJlciA9IDFlLTQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoeDEgLSB4MikgPCBlcHNpbG9uICYmIE1hdGguYWJzKHkxIC0geTIpIDwgZXBzaWxvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXF1YWxzVih2MTogQzJWZWMyLCB2MjogQzJWZWMyLCBlcHNpbG9uOiBudW1iZXIgPSAxZS00KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHYxLnggLSB2Mi54KSA8PSBlcHNpbG9uICYmIE1hdGguYWJzKHYxLnkgLSB2Mi55KSA8PSBlcHNpbG9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1plcm9WKHY6IEMyVmVjMiwgZXBzaWxvbjogbnVtYmVyID0gMWUtNCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh2LngpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyh2LnkpIDwgZXBzaWxvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFgoeDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRZKHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ID0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvbGFyKHRoZXRhOiBudW1iZXIsIHI6IG51bWJlciA9IDEuMCwgdW5pdDogQzJBbmdsZVVuaXQgPSAncmFkJyk6IHRoaXMge1xyXG4gICAgICAgIGlmICh1bml0ID09PSAnZGVnJykgdGhldGEgKj0gTWF0aC5QSSAvIDE4MC4wO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChyICogTWF0aC5jb3ModGhldGEpLCByICogTWF0aC5zaW4odGhldGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHg6IG51bWJlciwgeTogbnVtYmVyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHMgKiB0aGlzLnggKyB0ICogeCwgcyAqIHRoaXMueSArIHQgKiB5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXJwVih2OiBDMlZlYzIsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlcnAodi54LCB2LnksIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaWZ0WChkeDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IGR4O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaWZ0WShkeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy55ICs9IGR5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbXBvbmVudChpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luZGV4IGlzIG91dCBvZiByYW5nZTogJyArIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJWZWMyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyVmVjMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSh2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCArPSB4O1xyXG4gICAgICAgIHRoaXMueSArPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueDtcclxuICAgICAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNjYWxhcihzOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKz0gcztcclxuICAgICAgICB0aGlzLnkgKz0gcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLT0geDtcclxuICAgICAgICB0aGlzLnkgLT0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWJWKHY6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICAgICAgdGhpcy55IC09IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWJTY2FsYXIoczogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC09IHM7XHJcbiAgICAgICAgdGhpcy55IC09IHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICo9IHg7XHJcbiAgICAgICAgdGhpcy55ICo9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggKj0gdi54O1xyXG4gICAgICAgIHRoaXMueSAqPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54IC89IHg7XHJcbiAgICAgICAgdGhpcy55IC89IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Vih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggLz0gdi54O1xyXG4gICAgICAgIHRoaXMueSAvPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGUoczogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ICo9IHM7XHJcbiAgICAgICAgdGhpcy55ICo9IHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmVnYXRlKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtaW4oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHgpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWluVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHYueCk7XHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy55LCB2LnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1pblNjYWxhcihzOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIHMpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMueSwgcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4KHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCB4KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1heFYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCB2LngpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KHRoaXMueSwgdi55KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYXhTY2FsYXIoczogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgodGhpcy54LCBzKTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYW1wKG1pblg6IG51bWJlciwgbWluWTogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1heFk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgubWF4KG1pblgsIE1hdGgubWluKG1heFgsIHRoaXMueCkpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKG1heFksIHRoaXMueSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYW1wVihtaW46IEMyVmVjMiwgbWF4OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHRoaXMueCkpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdGhpcy55KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBTY2FsYXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHRoaXMueCkpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB0aGlzLnkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzbmFwKHN0ZXBYOiBudW1iZXIsIHN0ZXBZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAoc3RlcFggPiAwKSB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCAvIHN0ZXBYKSAqIHN0ZXBYO1xyXG4gICAgICAgIGlmIChzdGVwWSA+IDApIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55IC8gc3RlcFkpICogc3RlcFk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcFYoc3RlcHM6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGlmIChzdGVwcy54ID4gMCkgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLnggLyBzdGVwcy54KSAqIHN0ZXBzLng7XHJcbiAgICAgICAgaWYgKHN0ZXBzLnkgPiAwKSB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSAvIHN0ZXBzLnkpICogc3RlcHMueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzbmFwU2NhbGFyKHN0ZXA6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChzdGVwIDw9IDApIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54IC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55IC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFicygpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLngpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMueSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcm91bmQoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhcHBseTJ4MihtYXRyaXg6IEMyTWF0Mik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IG1lID0gbWF0cml4LmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLng7XHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLnggPSBtZVswXSAqIHggKyBtZVsyXSAqIHk7XHJcbiAgICAgICAgdGhpcy55ID0gbWVbMV0gKiB4ICsgbWVbM10gKiB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5MngzKG1hdHJpeDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBtZSA9IG1hdHJpeC5lbGVtZW50cztcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55O1xyXG4gICAgICAgIHRoaXMueCA9IG1lWzBdICogeCArIG1lWzJdICogeSArIG1lWzRdO1xyXG4gICAgICAgIHRoaXMueSA9IG1lWzFdICogeCArIG1lWzNdICogeSArIG1lWzVdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5MngzT2Zmc2V0KG1hdHJpeDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBtZSA9IG1hdHJpeC5lbGVtZW50cztcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnk7XHJcbiAgICAgICAgdGhpcy54ID0gbWVbMF0gKiB4ICsgbWVbMl0gKiB5O1xyXG4gICAgICAgIHRoaXMueSA9IG1lWzFdICogeCArIG1lWzNdICogeTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkb3QodjogQzJWZWMyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG4gICAgfVxyXG5cclxuICAgIGRldCh2OiBDMlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2Lng7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoU3EoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXN0YW5jZVNxKHY6IEMyVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSB2LnggLSB0aGlzLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSB2LnkgLSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlKHY6IEMyVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZSgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW4gPT09IDApIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlKDEgLyBsZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExlbmd0aChsZW5ndGg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlKGxlbmd0aCAvIHRoaXMubGVuZ3RoKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21BcnJheShhcnJheTogbnVtYmVyW10sIG9mZnNldDogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMueCA9IGFycmF5W29mZnNldF07XHJcbiAgICAgICAgdGhpcy55ID0gYXJyYXlbb2Zmc2V0ICsgMV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9BcnJheShhcnJheTogbnVtYmVyW10gPSBbXSwgb2Zmc2V0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGFycmF5W29mZnNldF0gPSB0aGlzLng7XHJcbiAgICAgICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzLnk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoLXRoaXMueSwgdGhpcy54KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmdsZVRvKHY6IEMyVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuZGV0KHYpO1xyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmRvdCh2KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihzLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXJwKGZsaXA6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLng7XHJcbiAgICAgICAgaWYgKGZsaXApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy55O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAteDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAtdGhpcy55O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGUoYW5nbGU6IG51bWJlciwgdW5pdDogQzJBbmdsZVVuaXQgPSAncmFkJyk6IHRoaXMge1xyXG4gICAgICAgIGlmICh1bml0ID09PSAnZGVnJykgYW5nbGUgKj0gTWF0aC5QSSAvIDE4MC4wO1xyXG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55O1xyXG4gICAgICAgIHRoaXMueCA9IGMgKiB4IC0gcyAqIHk7XHJcbiAgICAgICAgdGhpcy55ID0gcyAqIHggKyBjICogeTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcy54O1xyXG4gICAgICAgIHlpZWxkIHRoaXMueTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUudHMnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuL2MyLXZlYzIudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ2FtZXJhIHtcclxuICAgIHByb3RlY3RlZCBzY2VuZTogQzJCYXNlU2NlbmU7XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCBleHRlbnRzOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgc2NhbGVGYWN0b3I6IG51bWJlciA9IDEuMDtcclxuICAgIHByb3RlY3RlZCByb3RhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBzY2VuZS5nZXRWaWV3cG9ydEFzcGVjdFJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzID0gbmV3IEMyVmVjMig4LjAsIDguMCAvIGFzcGVjdFJhdGlvKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdGF0aW9uUmFkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um90YXRpb25EZWcoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucm90YXRpb24gKiAxODAuMCkgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvd2VyKCk6IEMyVmVjMiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEMyVmVjMigpO1xyXG4gICAgICAgIHRoaXMuZ2V0TG93ZXJJbnRvKHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb3dlckludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLmV4dGVudHMpLnNjYWxlKC10aGlzLnNjYWxlRmFjdG9yKS5hZGRWKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwcGVyKCk6IEMyVmVjMiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEMyVmVjMigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VXBwZXJJbnRvKHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcHBlckludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLmV4dGVudHMpLnNjYWxlKCt0aGlzLnNjYWxlRmFjdG9yKS5hZGRWKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXh0ZW50cyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXQoeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Wm9vbSh6b29tOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gMS4wIC8gem9vbTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb3RhdGlvblJhZChhbmdsZVJhZDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlUmFkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvdGF0aW9uRGVnKGFuZ2xlRGVnOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gKGFuZ2xlRGVnICogTWF0aC5QSSkgLyAxODAuMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRYID0gdGhpcy5zY2VuZS5nZXRWaWV3cG9ydFdpZHRoKCk7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRZID0gdGhpcy5zY2VuZS5nZXRWaWV3cG9ydEhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IGN4ID0gdmlld3BvcnRYIC8gMjtcclxuICAgICAgICBjb25zdCBjeSA9IHZpZXdwb3J0WSAvIDI7XHJcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoLXRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKC10aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICBjb25zdCBweCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICBjb25zdCBweSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICBjb25zdCBzeCA9ICsoMi4wICogKHRoaXMuZXh0ZW50cy54ICogdGhpcy5zY2FsZUZhY3RvcikpIC8gdmlld3BvcnRYO1xyXG4gICAgICAgIGNvbnN0IHN5ID0gLSgyLjAgKiAodGhpcy5leHRlbnRzLnkgKiB0aGlzLnNjYWxlRmFjdG9yKSkgLyB2aWV3cG9ydFk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdmlld1NwYWNlLnNldFNwYWNlVG9QYXJlbnQoXHJcbiAgICAgICAgICAgICtzeCAqIGNvcyxcclxuICAgICAgICAgICAgK3N5ICogc2luLFxyXG4gICAgICAgICAgICAtY3ggKiBjb3MgKiBzeCAtIGN5ICogc2luICogc3kgKyBweCxcclxuICAgICAgICAgICAgLXN4ICogc2luLFxyXG4gICAgICAgICAgICArc3kgKiBjb3MsXHJcbiAgICAgICAgICAgICtjeCAqIHNpbiAqIHN4IC0gY3kgKiBjb3MgKiBzeSArIHB5LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJBbmdsZVVuaXQgfSBmcm9tICcuL2MyLW1hdGgtdXRpbHMnO1xyXG5pbXBvcnQgdHlwZSB7IEMyVmVjMiB9IGZyb20gJy4vYzItdmVjMic7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJNYXQyeDMge1xyXG4gICAgLy8gQ29sdW1uLW1ham9yIG9yZGVyIG9mIHRoZSBlbGVtZW50cyAoY29sdW1ucyBjb250aWd1b3VzKS5cclxuICAgIHJlYWRvbmx5IGVsZW1lbnRzOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDYpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEwMDogbnVtYmVyID0gMCwgYTAxOiBudW1iZXIgPSAwLCBhMDI6IG51bWJlciA9IDAsIGExMDogbnVtYmVyID0gMCwgYTExOiBudW1iZXIgPSAwLCBhMTI6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnNldChhMDAsIGEwMSwgYTAyLCBhMTAsIGExMSwgYTEyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0SWRlbnRpdHkob3V0OiBDMk1hdDJ4Myk6IEMyTWF0MngzIHtcclxuICAgICAgICBvdXQuZWxlbWVudHNbMF0gPSAxO1xyXG4gICAgICAgIG91dC5lbGVtZW50c1sxXSA9IDA7XHJcbiAgICAgICAgb3V0LmVsZW1lbnRzWzJdID0gMDtcclxuICAgICAgICBvdXQuZWxlbWVudHNbM10gPSAxO1xyXG4gICAgICAgIG91dC5lbGVtZW50c1s0XSA9IDA7XHJcbiAgICAgICAgb3V0LmVsZW1lbnRzWzVdID0gMDtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKG91dDogQzJNYXQyeDMsIG1hdHJpeDA6IEMyTWF0MngzLCBtYXRyaXgxOiBDMk1hdDJ4MywgdDogbnVtYmVyKTogQzJNYXQyeDMge1xyXG4gICAgICAgIHJldHVybiBvdXQuY29weShtYXRyaXgwKS5sZXJwKG1hdHJpeDEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcXVhbHMobTE6IEMyTWF0MngzLCBtMjogQzJNYXQyeDMsIGVwc2lsb246IG51bWJlciA9IDFlLTQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhID0gbTEuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgYiA9IG0yLmVsZW1lbnRzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMl0gLSBiWzJdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbM10gLSBiWzNdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNF0gLSBiWzRdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNV0gLSBiWzVdKSA8PSBlcHNpbG9uXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGV0KG1hdHJpeDogQzJNYXQyeDMpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGUgPSBtYXRyaXguZWxlbWVudHM7XHJcbiAgICAgICAgcmV0dXJuIGVbMF0gKiBlWzNdIC0gZVsyXSAqIGVbMV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGEwMDogbnVtYmVyID0gMCwgYTAxOiBudW1iZXIgPSAwLCBhMDI6IG51bWJlciA9IDAsIGExMDogbnVtYmVyID0gMCwgYTExOiBudW1iZXIgPSAwLCBhMTI6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzWzBdID0gYTAwO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbMl0gPSBhMDE7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1s0XSA9IGEwMjtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzWzFdID0gYTEwO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbM10gPSBhMTE7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1s1XSA9IGExMjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKG1hdHJpeDogQzJNYXQyeDMsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgbWUgPSBtYXRyaXguZWxlbWVudHM7XHJcbiAgICAgICAgdGVbMF0gPSBzICogdGVbMF0gKyB0ICogbWVbMF07XHJcbiAgICAgICAgdGVbMV0gPSBzICogdGVbMV0gKyB0ICogbWVbMV07XHJcbiAgICAgICAgdGVbMl0gPSBzICogdGVbMl0gKyB0ICogbWVbMl07XHJcbiAgICAgICAgdGVbM10gPSBzICogdGVbM10gKyB0ICogbWVbM107XHJcbiAgICAgICAgdGVbNF0gPSBzICogdGVbNF0gKyB0ICogbWVbNF07XHJcbiAgICAgICAgdGVbNV0gPSBzICogdGVbNV0gKyB0ICogbWVbNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUFycmF5KGFycmF5OiBBcnJheTxudW1iZXI+LCBvZmZzZXQgPSAwKTogdGhpcyB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tpXSA9IGFycmF5W2kgKyBvZmZzZXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpc0lkZW50aXR5KGVwc2lsb246IG51bWJlciA9IDFlLTQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBNYXRoLmFicyh0ZVswXSAtIDEpIDw9IGVwc2lsb24gJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGVbMV0pIDw9IGVwc2lsb24gJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGVbMl0pIDw9IGVwc2lsb24gJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGVbM10gLSAxKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRlWzRdKSA8PSBlcHNpbG9uICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRlWzVdKSA8PSBlcHNpbG9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHlNYXRyaWNlcyhhOiBDMk1hdDJ4MywgYjogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBhZSA9IGEuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgYmUgPSBiLmVsZW1lbnRzO1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICBjb25zdCBhMDAgPSBhZVswXTtcclxuICAgICAgICBjb25zdCBhMTAgPSBhZVsxXTtcclxuICAgICAgICBjb25zdCBhMDEgPSBhZVsyXTtcclxuICAgICAgICBjb25zdCBhMTEgPSBhZVszXTtcclxuICAgICAgICBjb25zdCBhMDIgPSBhZVs0XTtcclxuICAgICAgICBjb25zdCBhMTIgPSBhZVs1XTtcclxuICAgICAgICBjb25zdCBiMDAgPSBiZVswXTtcclxuICAgICAgICBjb25zdCBiMTAgPSBiZVsxXTtcclxuICAgICAgICBjb25zdCBiMDEgPSBiZVsyXTtcclxuICAgICAgICBjb25zdCBiMTEgPSBiZVszXTtcclxuICAgICAgICBjb25zdCBiMDIgPSBiZVs0XTtcclxuICAgICAgICBjb25zdCBiMTIgPSBiZVs1XTtcclxuICAgICAgICB0ZVswXSA9IGEwMCAqIGIwMCArIGEwMSAqIGIxMDtcclxuICAgICAgICB0ZVsxXSA9IGExMCAqIGIwMCArIGExMSAqIGIxMDtcclxuICAgICAgICB0ZVsyXSA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMTtcclxuICAgICAgICB0ZVszXSA9IGExMCAqIGIwMSArIGExMSAqIGIxMTtcclxuICAgICAgICB0ZVs0XSA9IGEwMCAqIGIwMiArIGEwMSAqIGIxMiArIGEwMjtcclxuICAgICAgICB0ZVs1XSA9IGExMCAqIGIwMiArIGExMSAqIGIxMiArIGExMjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBvc2VBZnRlckNvZWZmaWNpZW50cyhcclxuICAgICAgICBhMDA6IG51bWJlcixcclxuICAgICAgICBhMDE6IG51bWJlcixcclxuICAgICAgICBhMDI6IG51bWJlcixcclxuICAgICAgICBhMTA6IG51bWJlcixcclxuICAgICAgICBhMTE6IG51bWJlcixcclxuICAgICAgICBhMTI6IG51bWJlcixcclxuICAgICk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICBjb25zdCBiMDAgPSB0ZVswXTtcclxuICAgICAgICBjb25zdCBiMTAgPSB0ZVsxXTtcclxuICAgICAgICBjb25zdCBiMDEgPSB0ZVsyXTtcclxuICAgICAgICBjb25zdCBiMTEgPSB0ZVszXTtcclxuICAgICAgICBjb25zdCBiMDIgPSB0ZVs0XTtcclxuICAgICAgICBjb25zdCBiMTIgPSB0ZVs1XTtcclxuICAgICAgICB0ZVswXSA9IGEwMCAqIGIwMCArIGEwMSAqIGIxMDtcclxuICAgICAgICB0ZVsxXSA9IGExMCAqIGIwMCArIGExMSAqIGIxMDtcclxuICAgICAgICB0ZVsyXSA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMTtcclxuICAgICAgICB0ZVszXSA9IGExMCAqIGIwMSArIGExMSAqIGIxMTtcclxuICAgICAgICB0ZVs0XSA9IGEwMCAqIGIwMiArIGEwMSAqIGIxMiArIGEwMjtcclxuICAgICAgICB0ZVs1XSA9IGExMCAqIGIwMiArIGExMSAqIGIxMiArIGExMjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb21wb3NlQWZ0ZXIobTogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKHRoaXMsIG0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvc2VCZWZvcmUobTogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseU1hdHJpY2VzKG0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGludmVydCgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB0ZSA9IHRoaXMuZWxlbWVudHM7XHJcbiAgICAgICAgY29uc3QgYTAwID0gdGVbMF07XHJcbiAgICAgICAgY29uc3QgYTEwID0gdGVbMV07XHJcbiAgICAgICAgY29uc3QgYTAxID0gdGVbMl07XHJcbiAgICAgICAgY29uc3QgYTExID0gdGVbM107XHJcbiAgICAgICAgY29uc3QgYTAyID0gdGVbNF07XHJcbiAgICAgICAgY29uc3QgYTEyID0gdGVbNV07XHJcbiAgICAgICAgY29uc3QgZGV0ID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG5cclxuICAgICAgICBpZiAoZGV0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQzJNYXQyeDM6IC5pbnZlcnQoKSBjYW4gbm90IGludmVydCBtYXRyaXgsIGRldGVybWluYW50IGlzIDAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUlkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnZEZXQgPSAxIC8gZGV0O1xyXG4gICAgICAgIHRoaXMuc2V0KFxyXG4gICAgICAgICAgICBhMTEgKiBpbnZEZXQsXHJcbiAgICAgICAgICAgIC1hMDEgKiBpbnZEZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBhMTIgLSBhMTEgKiBhMDIpICogaW52RGV0LFxyXG4gICAgICAgICAgICAtYTEwICogaW52RGV0LFxyXG4gICAgICAgICAgICBhMDAgKiBpbnZEZXQsXHJcbiAgICAgICAgICAgIChhMTAgKiBhMDIgLSBhMDAgKiBhMTIpICogaW52RGV0LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShtOiBDMk1hdDJ4Myk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICBjb25zdCBtZSA9IG0uZWxlbWVudHM7XHJcbiAgICAgICAgdGVbMF0gPSBtZVswXTtcclxuICAgICAgICB0ZVsxXSA9IG1lWzFdO1xyXG4gICAgICAgIHRlWzJdID0gbWVbMl07XHJcbiAgICAgICAgdGVbM10gPSBtZVszXTtcclxuICAgICAgICB0ZVs0XSA9IG1lWzRdO1xyXG4gICAgICAgIHRlWzVdID0gbWVbNV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJNYXQyeDMge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJNYXQyeDMoKS5jb3B5KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHRlID0gdGhpcy5lbGVtZW50cztcclxuICAgICAgICByZXR1cm4gdGVbMF0gKiB0ZVszXSAtIHRlWzJdICogdGVbMV07XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUlkZW50aXR5KCk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldCgxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVHJhbnNsYXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQoMSwgMCwgeCwgMCwgMSwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVRyYW5zbGF0aW9uVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlVHJhbnNsYXRpb24odi54LCB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTY2FsZShzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQoc2NhbGVYLCAwLCAwLCAwLCBzY2FsZVksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTY2FsZVYodjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVNjYWxlKHYueCwgdi55KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2NhbGVGcm9tKHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlciwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQoc2NhbGVYLCAwLCAtc2NhbGVYICogY2VudGVyWCArIGNlbnRlclgsIDAsIHNjYWxlWSwgLXNjYWxlWSAqIGNlbnRlclkgKyBjZW50ZXJZKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2NhbGVGcm9tVihzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIsIGNlbnRlcjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVNjYWxlRnJvbShzY2FsZVgsIHNjYWxlWSwgY2VudGVyLngsIGNlbnRlci55KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUm90YXRpb24oYW5nbGU6IG51bWJlciwgdW5pdDogQzJBbmdsZVVuaXQpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIGFuZ2xlICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KGMsIC1zLCAwLCArcywgYywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVJvdGF0aW9uRnJvbShhbmdsZTogbnVtYmVyLCB1bml0OiBDMkFuZ2xlVW5pdCwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gJ2RlZycpIGFuZ2xlICo9IE1hdGguUEkgLyAxODAuMDtcclxuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KGMsIC1zLCAtY2VudGVyWCAqIGMgKyBjZW50ZXJZICogcyArIGNlbnRlclgsICtzLCBjLCAtY2VudGVyWSAqIGMgLSBjZW50ZXJYICogcyArIGNlbnRlclkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VSb3RhdGlvbkZyb21WKGFuZ2xlOiBudW1iZXIsIHVuaXQ6IEMyQW5nbGVVbml0LCBjZW50ZXI6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSb3RhdGlvbkZyb20oYW5nbGUsIHVuaXQsIGNlbnRlci54LCBjZW50ZXIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIHRlWzRdICs9IHg7XHJcbiAgICAgICAgdGVbNV0gKz0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGVWKHY6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh2LngsIHYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGUoc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgdGUgPSB0aGlzLmVsZW1lbnRzO1xyXG4gICAgICAgIHRlWzBdICo9IHNjYWxlWDtcclxuICAgICAgICB0ZVsxXSAqPSBzY2FsZVk7XHJcbiAgICAgICAgdGVbMl0gKj0gc2NhbGVYO1xyXG4gICAgICAgIHRlWzNdICo9IHNjYWxlWTtcclxuICAgICAgICB0ZVs0XSAqPSBzY2FsZVg7XHJcbiAgICAgICAgdGVbNV0gKj0gc2NhbGVZO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVih2OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSh2LngsIHYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVGcm9tKHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlciwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb3NlQWZ0ZXJDb2VmZmljaWVudHMoXHJcbiAgICAgICAgICAgIHNjYWxlWCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgLXNjYWxlWCAqIGNlbnRlclggKyBjZW50ZXJYLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBzY2FsZVksXHJcbiAgICAgICAgICAgIC1zY2FsZVkgKiBjZW50ZXJZICsgY2VudGVyWSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlRnJvbVYoc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyLCBjZW50ZXI6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlRnJvbShzY2FsZVgsIHNjYWxlWSwgY2VudGVyLngsIGNlbnRlci55KTtcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGUoYW5nbGU6IG51bWJlciwgdW5pdDogQzJBbmdsZVVuaXQgPSAncmFkJyk6IHRoaXMge1xyXG4gICAgICAgIGlmICh1bml0ID09PSAnZGVnJykgYW5nbGUgKj0gTWF0aC5QSSAvIDE4MC4wO1xyXG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb3NlQWZ0ZXJDb2VmZmljaWVudHMoYywgLXMsIDAsICtzLCBjLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGVGcm9tKGFuZ2xlOiBudW1iZXIsIHVuaXQ6IEMyQW5nbGVVbml0LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmICh1bml0ID09PSAnZGVnJykgYW5nbGUgKj0gTWF0aC5QSSAvIDE4MC4wO1xyXG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb3NlQWZ0ZXJDb2VmZmljaWVudHMoXHJcbiAgICAgICAgICAgIGMsXHJcbiAgICAgICAgICAgIC1zLFxyXG4gICAgICAgICAgICAtY2VudGVyWCAqIGMgKyBjZW50ZXJZICogcyArIGNlbnRlclgsXHJcbiAgICAgICAgICAgICtzLFxyXG4gICAgICAgICAgICBjLFxyXG4gICAgICAgICAgICAtY2VudGVyWSAqIGMgLSBjZW50ZXJYICogcyArIGNlbnRlclksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGVGcm9tVihhbmdsZTogbnVtYmVyLCB1bml0OiBDMkFuZ2xlVW5pdCwgY2VudGVyOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVGcm9tKGFuZ2xlLCB1bml0LCBjZW50ZXIueCwgY2VudGVyLnkpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBDMk1hdDJ4MyB9IGZyb20gJy4vYzItbWF0MngzJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi9jMi12ZWMyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlNwYWNlIHtcclxuICAgIHByb3RlY3RlZCBwYXJlbnQ6IEMyU3BhY2UgfCBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNwYWNlVG9QYXJlbnQ6IEMyTWF0MngzID0gbmV3IEMyTWF0MngzKDEsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhcmVudFRvU3BhY2U6IEMyTWF0MngzID0gbmV3IEMyTWF0MngzKDEsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNwYWNlVG9Xb3JsZDogQzJNYXQyeDMgPSBuZXcgQzJNYXQyeDMoMSwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRUb1NwYWNlOiBDMk1hdDJ4MyA9IG5ldyBDMk1hdDJ4MygxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzU2NhbGVUb1BhcmVudDogQzJWZWMyID0gbmV3IEMyVmVjMigxLjAsIDEuMCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXh0ZW50c1NjYWxlVG9Xb3JsZDogQzJWZWMyID0gbmV3IEMyVmVjMigxLjAsIDEuMCk7XHJcbiAgICBwcm90ZWN0ZWQgbGVuZ3RoU2NhbGVUb1BhcmVudDogbnVtYmVyID0gMS4wO1xyXG4gICAgcHJvdGVjdGVkIGxlbmd0aFNjYWxlVG9Xb3JsZDogbnVtYmVyID0gMS4wO1xyXG4gICAgcHJvdGVjdGVkIGlzRGlyZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEMyU3BhY2UgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBBc3N1bWUgc3BhY2VUb1BhcmVudCBpcyB1cGRhdGVkXHJcbiAgICAgICAgY29uc3QgZTB4ID0gdGhpcy5zcGFjZVRvUGFyZW50LmVsZW1lbnRzWzBdO1xyXG4gICAgICAgIGNvbnN0IGUweSA9IHRoaXMuc3BhY2VUb1BhcmVudC5lbGVtZW50c1sxXTtcclxuICAgICAgICBjb25zdCBlMXggPSB0aGlzLnNwYWNlVG9QYXJlbnQuZWxlbWVudHNbMl07XHJcbiAgICAgICAgY29uc3QgZTF5ID0gdGhpcy5zcGFjZVRvUGFyZW50LmVsZW1lbnRzWzNdO1xyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aFNjYWxlVG9QYXJlbnQgPSBNYXRoLnNxcnQoTWF0aC5hYnMoQzJNYXQyeDMuZGV0KHRoaXMuc3BhY2VUb1BhcmVudCkpKTtcclxuICAgICAgICB0aGlzLmV4dGVudHNTY2FsZVRvUGFyZW50LnNldChNYXRoLnNxcnQoZTB4ICogZTB4ICsgZTB5ICogZTB5KSwgTWF0aC5zcXJ0KGUxeCAqIGUxeCArIGUxeSAqIGUxeSkpO1xyXG4gICAgICAgIHRoaXMucGFyZW50VG9TcGFjZS5jb3B5KHRoaXMuc3BhY2VUb1BhcmVudCkuaW52ZXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZVRvV29ybGQubXVsdGlwbHlNYXRyaWNlcyh0aGlzLnBhcmVudC5zcGFjZVRvV29ybGQsIHRoaXMuc3BhY2VUb1BhcmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGRUb1NwYWNlLm11bHRpcGx5TWF0cmljZXModGhpcy5wYXJlbnRUb1NwYWNlLCB0aGlzLnBhcmVudC53b3JsZFRvU3BhY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aFNjYWxlVG9Xb3JsZCA9IHRoaXMubGVuZ3RoU2NhbGVUb1BhcmVudCAqIHRoaXMucGFyZW50Lmxlbmd0aFNjYWxlVG9Xb3JsZDtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnRzU2NhbGVUb1dvcmxkLmNvcHkodGhpcy5leHRlbnRzU2NhbGVUb1BhcmVudCkubXVsVih0aGlzLnBhcmVudC5leHRlbnRzU2NhbGVUb1dvcmxkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwYWNlVG9Xb3JsZC5jb3B5KHRoaXMuc3BhY2VUb1BhcmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGRUb1NwYWNlLmNvcHkodGhpcy5wYXJlbnRUb1NwYWNlKTtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGhTY2FsZVRvV29ybGQgPSB0aGlzLmxlbmd0aFNjYWxlVG9QYXJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW50c1NjYWxlVG9Xb3JsZC5jb3B5KHRoaXMuZXh0ZW50c1NjYWxlVG9QYXJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0RpcmVjdCA9IHRoaXMuc3BhY2VUb1dvcmxkLmRldCgpID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBpc0RpcmVjdFNwYWNlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlyZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYWNlVG9QYXJlbnRJbnRvKGRzdDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLnNwYWNlVG9QYXJlbnQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFRvU3BhY2VJbnRvKGRzdDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLnBhcmVudFRvU3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYWNlVG9Xb3JsZEludG8oZHN0OiBDMk1hdDJ4Myk6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMuc3BhY2VUb1dvcmxkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZFRvU3BhY2VJbnRvKGRzdDogQzJNYXQyeDMpOiB0aGlzIHtcclxuICAgICAgICBkc3QuY29weSh0aGlzLndvcmxkVG9TcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BhY2VUb1dvcmxkKCk6IEMyTWF0MngzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFjZVRvV29ybGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRUb1NwYWNlKCk6IEMyTWF0MngzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZFRvU3BhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGhpc1RvU3BhY2VJbnRvKGRzdDogQzJNYXQyeDMsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LmNvcHkodGhpcy5zcGFjZVRvV29ybGQpO1xyXG4gICAgICAgIGRzdC5tdWx0aXBseU1hdHJpY2VzKHNwYWNlLmdldFdvcmxkVG9TcGFjZSgpLCBkc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwYWNlVG9UaGlzSW50byhkc3Q6IEMyTWF0MngzLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMud29ybGRUb1NwYWNlKTtcclxuICAgICAgICBkc3QubXVsdGlwbHlNYXRyaWNlcyhkc3QsIHNwYWNlLmdldFNwYWNlVG9Xb3JsZCgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tU3BhY2Uoc3BhY2U6IEMyU3BhY2UsIG9yaWdpbjogQzJWZWMyLCBiYXNpczA6IEMyVmVjMiwgYmFzaXMxOiBDMlZlYzIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXcgQzJNYXQyeDMoKTtcclxuICAgICAgICB0cmFuc2Zvcm0uY29weShzcGFjZS5nZXRTcGFjZVRvV29ybGQoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS5tdWx0aXBseU1hdHJpY2VzKHRoaXMucGFyZW50LmdldFdvcmxkVG9TcGFjZSgpLCB0cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjMCA9IGJhc2lzMC5jbG9uZSgpLmFwcGx5MngzT2Zmc2V0KHRyYW5zZm9ybSk7XHJcbiAgICAgICAgY29uc3QgYzEgPSBiYXNpczEuY2xvbmUoKS5hcHBseTJ4M09mZnNldCh0cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNvbnN0IG8gPSBvcmlnaW4uY2xvbmUoKS5hcHBseTJ4Myh0cmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICB0aGlzLnNwYWNlVG9QYXJlbnQuc2V0KGMwLngsIGMxLngsIG8ueCwgYzAueSwgYzEueSwgby55KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNwYWNlVG9QYXJlbnQoYTAwOiBudW1iZXIsIGEwMTogbnVtYmVyLCBhMDI6IG51bWJlciwgYTEwOiBudW1iZXIsIGExMTogbnVtYmVyLCBhMTI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BhY2VUb1BhcmVudC5zZXQoYTAwLCBhMDEsIGEwMiwgYTEwLCBhMTEsIGExMik7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGFjZVRvUGFyZW50TWF0KG1hdHJpeDogQzJNYXQyeDMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwYWNlVG9QYXJlbnQuY29weShtYXRyaXgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFBvaW50SW50byhkc3Q6IEMyVmVjMiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgZHN0ID0gZHN0LnNldCh4LCB5KTtcclxuICAgICAgICBpZiAoc3BhY2UgPT09IHRoaXMpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGRzdC5hcHBseTJ4Myh0aGlzLnNwYWNlVG9Xb3JsZCkuYXBwbHkyeDMoc3BhY2Uud29ybGRUb1NwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0UG9pbnRJbnRvVihkc3Q6IEMyVmVjMiwgcG9pbnQ6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UG9pbnRJbnRvKGRzdCwgcG9pbnQueCwgcG9pbnQueSwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRPZmZzZXRJbnRvKGRzdDogQzJWZWMyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBkc3QgPSBkc3Quc2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChzcGFjZSA9PT0gdGhpcykgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgZHN0LmFwcGx5MngzT2Zmc2V0KHRoaXMuc3BhY2VUb1dvcmxkKS5hcHBseTJ4M09mZnNldChzcGFjZS53b3JsZFRvU3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRPZmZzZXRJbnRvVihkc3Q6IEMyVmVjMiwgcG9pbnQ6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0T2Zmc2V0SW50byhkc3QsIHBvaW50LngsIHBvaW50LnksIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0TGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHNwYWNlID09PSB0aGlzKSByZXR1cm4gTWF0aC5hYnMobGVuZ3RoKTtcclxuICAgICAgICBsZW5ndGggKj0gdGhpcy5sZW5ndGhTY2FsZVRvV29ybGQ7XHJcbiAgICAgICAgaWYgKHNwYWNlKSBsZW5ndGggLz0gc3BhY2UubGVuZ3RoU2NhbGVUb1dvcmxkO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhsZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgZHN0ID0gZHN0LnNldCh4LCB5KTtcclxuICAgICAgICBpZiAoc3BhY2UgPT09IHRoaXMpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGRzdC5tdWxWKHRoaXMuZXh0ZW50c1NjYWxlVG9Xb3JsZCk7XHJcbiAgICAgICAgaWYgKHNwYWNlKSBkc3QuZGl2VihzcGFjZS5leHRlbnRzU2NhbGVUb1dvcmxkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RXh0ZW50c0ludG9WKGRzdDogQzJWZWMyLCBwb2ludDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRFeHRlbnRzSW50byhkc3QsIHBvaW50LngsIHBvaW50LnksIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkhhc0Nsb25lPFQ+IHtcclxuICAgIGNsb25lKCk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJIYXNDb3B5PFQ+IHtcclxuICAgIGNvcHkob3RoZXI6IFQpOiB0aGlzO1xyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IFQpOiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMySGFzTGVycDxUPiB7XHJcbiAgICBsZXJwKHN0YXRlMDogVCwgc3RhdGUxOiBULCB0OiBudW1iZXIpOiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJCYXNlVHlwZSB7XHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBraW5kOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbG9ja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NrKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bmxvY2soKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkJvb2xlYW4gZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkJvb2xlYW4+LCBDMkhhc0NvcHk8QzJCb29sZWFuPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ2Jvb2xlYW4nIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgdmFsdWU6IGJvb2xlYW4gPSBmYWxzZSwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyQm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkJvb2xlYW4odGhpcy5zY2VuZSwgdGhpcy52YWx1ZSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyQm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCB0eXBlIEMyQW5nbGVVbml0ID0gJ2RlZycgfCAncmFkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMk1hdGhVdGlscyB7XHJcbiAgICBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYW1wMDEodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEMyTWF0aFV0aWxzLmNsYW1wKHZhbHVlLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycCh4OiBudW1iZXIsIHk6IG51bWJlciwgdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKDEgLSB0KSAqIHggKyB0ICogeTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW52TGVycCh4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHggIT09IHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAtIHgpIC8gKHkgLSB4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbWFwKG9yaWdGcm9tOiBudW1iZXIsIG9yaWdUbzogbnVtYmVyLCB0YXJnZXRGcm9tOiBudW1iZXIsIHRhcmdldFRvOiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMk1hdGhVdGlscy5sZXJwKHRhcmdldEZyb20sIHRhcmdldFRvLCBDMk1hdGhVdGlscy5pbnZMZXJwKG9yaWdGcm9tLCBvcmlnVG8sIHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vZCh4OiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICgoeCAlIG4pICsgbikgJSBuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkYW1wKHg6IG51bWJlciwgeTogbnVtYmVyLCBsYW1iZGE6IG51bWJlciwgZHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEMyTWF0aFV0aWxzLmxlcnAoeCwgeSwgMSAtIE1hdGguZXhwKC1sYW1iZGEgKiBkdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbmFwKHZhbHVlOiBudW1iZXIsIHN0ZXA6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPD0gMCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbmFwVG9BcnJheSh2YWx1ZTogbnVtYmVyLCBhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gYXJyYXkucmVkdWNlKChjbG9zZXN0LCBjdXJyVmFsdWUpID0+XHJcbiAgICAgICAgICAgIE1hdGguYWJzKGN1cnJWYWx1ZSAtIHZhbHVlKSA8IE1hdGguYWJzKGNsb3Nlc3QgLSB2YWx1ZSkgPyBjdXJyVmFsdWUgOiBjbG9zZXN0LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyTWF0aFV0aWxzIH0gZnJvbSAnLi4vbWF0aC9jMi1tYXRoLXV0aWxzJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQ29sb3JUaGVtZSB9IGZyb20gJy4vYzItY29sb3ItdGhlbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ29sb3IgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkNvbG9yPiwgQzJIYXNDb3B5PEMyQ29sb3I+LCBDMkhhc0xlcnA8QzJDb2xvcj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdjb2xvcicgYXMgY29uc3Q7XHJcbiAgICByZWFkb25seSBjb21wb25lbnRzOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgcjogbnVtYmVyID0gMCwgZzogbnVtYmVyID0gMCwgYjogbnVtYmVyID0gMCwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgY29uc3QgbGluZWFyUiA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKHIpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVhckcgPSBDMkNvbG9yLnNSR0IyNTVUb0xpbmVhcihnKTtcclxuICAgICAgICBjb25zdCBsaW5lYXJCID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoYik7XHJcbiAgICAgICAgY29uc3QgbGluZWFyQSA9IDEuMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIGkgKyAwXSA9IGxpbmVhclI7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogaSArIDFdID0gbGluZWFyRztcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzWzQgKiBpICsgMl0gPSBsaW5lYXJCO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbNCAqIGkgKyAzXSA9IGxpbmVhckE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzUkdCVG9MaW5lYXIoYzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoYyA8PSAwLjA0MDQ1KSB7XHJcbiAgICAgICAgICAgIGMgPSBjICogMC4wNzczOTkzODA4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGMgPSBNYXRoLnBvdyhjICogMC45NDc4NjcyOTg2ICsgMC4wNTIxMzI3MDE0LCAyLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQzJNYXRoVXRpbHMuY2xhbXAwMShjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGluZWFyVG9TUkdCKGM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGMgPD0gMC4wMDMxMzA4KSB7XHJcbiAgICAgICAgICAgIGMgPSBjICogMTIuOTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYyA9IDEuMDU1ICogTWF0aC5wb3coYywgMC40MTY2NikgLSAwLjA1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEMyTWF0aFV0aWxzLmNsYW1wMDEoYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNSR0IyNTVUb0xpbmVhcihjOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMkNvbG9yLnNSR0JUb0xpbmVhcihjIC8gMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGluZWFyVG9TUkdCMjU1KGM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoQzJDb2xvci5saW5lYXJUb1NSR0IoYykgKiAyNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IEMyQ29sb3IodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgY29sb3IuY29tcG9uZW50cy5zZXQodGhpcy5jb21wb25lbnRzKTtcclxuICAgICAgICBjb2xvci5sb2NrZWQgPSB0aGlzLmxvY2tlZDtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQoY29sb3I6IEMyQ29sb3IpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkoY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkoY29sb3I6IEMyQ29sb3IpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KGNvbG9yLmNvbXBvbmVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMkNvbG9yLCBzdGF0ZTE6IEMyQ29sb3IsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpXSA9IEMyTWF0aFV0aWxzLmxlcnAoc3RhdGUwLmNvbXBvbmVudHNbaV0sIHN0YXRlMS5jb21wb25lbnRzW2ldLCB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoY29sb3IwOiBDMkNvbG9yLCBjb2xvcjE6IEMyQ29sb3IsIHQ6IG51bWJlcik6IEMyQ29sb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJDb2xvcihjb2xvcjEuc2NlbmUpLmxlcnAoY29sb3IwLCBjb2xvcjEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChsaW5lYXJSOiBudW1iZXIsIGxpbmVhckc6IG51bWJlciwgbGluZWFyQjogbnVtYmVyLCBsaW5lYXJBOiBudW1iZXIsIG1vZGVJbmRleDogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMF0gPSBsaW5lYXJSO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMV0gPSBsaW5lYXJHO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMl0gPSBsaW5lYXJCO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgM10gPSBsaW5lYXJBO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZyb21IZXgoaGV4OiBzdHJpbmcsIG1vZGVJbmRleDogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIGxldCBsaW5lYXJSID0gMDtcclxuICAgICAgICBsZXQgbGluZWFyRyA9IDA7XHJcbiAgICAgICAgbGV0IGxpbmVhckIgPSAwO1xyXG4gICAgICAgIGxldCBsaW5lYXJBID0gMS4wO1xyXG5cclxuICAgICAgICBpZiAoL14jKFswLTlBLUZhLWZdezZ9KSQvLnRlc3QoaGV4KSkge1xyXG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDEpLCAxNik7XHJcbiAgICAgICAgICAgIGxpbmVhclIgPSBDMkNvbG9yLnNSR0IyNTVUb0xpbmVhcigobnVtID4+IDE2KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBsaW5lYXJHID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoKG51bSA+PiA4KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBsaW5lYXJCID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIobnVtICYgMHhmZik7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXiMoWzAtOUEtRmEtZl17OH0pJC8udGVzdChoZXgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMSksIDE2KTtcclxuICAgICAgICAgICAgbGluZWFyUiA9IEMyQ29sb3Iuc1JHQjI1NVRvTGluZWFyKChudW0gPj4gMjQpICYgMHhmZik7XHJcbiAgICAgICAgICAgIGxpbmVhckcgPSBDMkNvbG9yLnNSR0IyNTVUb0xpbmVhcigobnVtID4+IDE2KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBsaW5lYXJCID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIoKG51bSA+PiA4KSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICBsaW5lYXJBID0gQzJDb2xvci5zUkdCMjU1VG9MaW5lYXIobnVtICYgMHhmZik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhleCBjb2xvcjogJHtoZXh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldChsaW5lYXJSLCBsaW5lYXJHLCBsaW5lYXJCLCBsaW5lYXJBLCBtb2RlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tSGV4KHNjZW5lOiBDMkJhc2VTY2VuZSwgaGV4OiBzdHJpbmcsIG1vZGVJbmRleDogbnVtYmVyID0gMCk6IEMyQ29sb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJDb2xvcihzY2VuZSkuc2V0RnJvbUhleChoZXgsIG1vZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGhlbWVzKGxpZ2h0VGhlbWU6IEMyQ29sb3JUaGVtZSwgZGFya1RoZW1lOiBDMkNvbG9yVGhlbWUsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc2V0RnJvbUhleChsaWdodFRoZW1lLmNvbG9yKG5hbWUsIHNjYWxlKSwgMCk7XHJcbiAgICAgICAgdGhpcy5zZXRGcm9tSGV4KGRhcmtUaGVtZS5jb2xvcihuYW1lLCBzY2FsZSksIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZyb21UaGVtZShjb2xvclRoZW1lOiBDMkNvbG9yVGhlbWUsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlciwgbW9kZUluZGV4OiBudW1iZXIgPSAwKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0RnJvbUhleChjb2xvclRoZW1lLmNvbG9yKG5hbWUsIHNjYWxlKSwgbW9kZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVRoZW1lKFxyXG4gICAgICAgIHNjZW5lOiBDMkJhc2VTY2VuZSxcclxuICAgICAgICBjb2xvclRoZW1lOiBDMkNvbG9yVGhlbWUsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHNjYWxlOiBudW1iZXIsXHJcbiAgICAgICAgbW9kZUluZGV4OiBudW1iZXIgPSAwLFxyXG4gICAgKTogQzJDb2xvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkNvbG9yKHNjZW5lKS5zZXRGcm9tVGhlbWUoY29sb3JUaGVtZSwgbmFtZSwgc2NhbGUsIG1vZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2hpdGUoaW50ZW5zaXR5OiBudW1iZXIgPSAxLCBvcGFjaXR5OiBudW1iZXIgPSAxLCBtb2RlSW5kZXg6IG51bWJlciA9IDApOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXQoaW50ZW5zaXR5LCBpbnRlbnNpdHksIGludGVuc2l0eSwgb3BhY2l0eSwgbW9kZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCbGFjayhpbnRlbnNpdHk6IG51bWJlciA9IDEsIG9wYWNpdHk6IG51bWJlciA9IDEsIG1vZGVJbmRleDogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIGludGVuc2l0eSA9IDEgLSBpbnRlbnNpdHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KGludGVuc2l0eSwgaW50ZW5zaXR5LCBpbnRlbnNpdHksIG9wYWNpdHksIG1vZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG1vZGVJbmRleDogbnVtYmVyID0gMCk6IHsgcjogbnVtYmVyOyBnOiBudW1iZXI7IGI6IG51bWJlcjsgYTogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyKSA9PiBDMkNvbG9yLmxpbmVhclRvU1JHQjI1NSh4KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiBjKHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMF0pLFxyXG4gICAgICAgICAgICBnOiBjKHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMV0pLFxyXG4gICAgICAgICAgICBiOiBjKHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMl0pLFxyXG4gICAgICAgICAgICBhOiBjKHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgM10pLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Uihtb2RlSW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMkNvbG9yLmxpbmVhclRvU1JHQjI1NSh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDBdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHKG1vZGVJbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEMyQ29sb3IubGluZWFyVG9TUkdCMjU1KHRoaXMuY29tcG9uZW50c1s0ICogbW9kZUluZGV4ICsgMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEIobW9kZUluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQzJDb2xvci5saW5lYXJUb1NSR0IyNTUodGhpcy5jb21wb25lbnRzWzQgKiBtb2RlSW5kZXggKyAyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QShtb2RlSW5kZXg6IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBDMkNvbG9yLmxpbmVhclRvU1JHQjI1NSh0aGlzLmNvbXBvbmVudHNbNCAqIG1vZGVJbmRleCArIDNdKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkVudW08VD4gZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkVudW08VD4+LCBDMkhhc0NvcHk8QzJFbnVtPFQ+PiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ2VudW0nIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgdmFsdWU6IFQsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkVudW08VD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJFbnVtKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJFbnVtPFQ+KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkVudW08VD4pOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWUpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBvdGhlci52YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IFQpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMkJhc2VUeXBlIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgeyBDMk1hdGhVdGlscyB9IGZyb20gJy4uL21hdGgvYzItbWF0aC11dGlscyc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkxlbmd0aCBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyTGVuZ3RoPiwgQzJIYXNDb3B5PEMyTGVuZ3RoPiwgQzJIYXNMZXJwPEMyTGVuZ3RoPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ2xlbmd0aCcgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcGFjZTogQzJTcGFjZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyTGVuZ3RoIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyTGVuZ3RoKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMuc3BhY2UsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJMZW5ndGgpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyTGVuZ3RoKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlICYmIHRoaXMuc3BhY2UgPT09IG90aGVyLnNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gb3RoZXIudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG90aGVyLnNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMkxlbmd0aCwgc3RhdGUxOiBDMkxlbmd0aCwgdDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBzdGF0ZTEuc3BhY2U7XHJcbiAgICAgICAgY29uc3QgdmFsdWUwID0gc3RhdGUwLmdldChzcGFjZSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUxID0gc3RhdGUxLmdldChzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5zZXQoQzJNYXRoVXRpbHMubGVycCh2YWx1ZTAsIHZhbHVlMSwgdCksIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChzdGF0ZTA6IEMyTGVuZ3RoLCBzdGF0ZTE6IEMyTGVuZ3RoLCB0OiBudW1iZXIpOiBDMkxlbmd0aCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMkxlbmd0aChzdGF0ZTEuc2NlbmUsIDAsIHN0YXRlMS5zcGFjZSkubGVycChzdGF0ZTAsIHN0YXRlMSwgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlOiBudW1iZXIsIHNwYWNlPzogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlKHZhbHVlOiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlICYmIHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gc3BhY2UuY29udmVydExlbmd0aCh2YWx1ZSwgdGhpcy5zcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFjZS5jb252ZXJ0TGVuZ3RoKHRoaXMudmFsdWUsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTcGFjZShzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3BhY2UuY29udmVydExlbmd0aCh0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIC8vIE5vIG1hcmtEaXJ0eSgpIGJlY2F1c2UgdGhlIHBvaW50IHZhbHVlIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyTWF0aFV0aWxzIH0gZnJvbSAnLi4vbWF0aC9jMi1tYXRoLXV0aWxzJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyTnVtYmVyIGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJOdW1iZXI+LCBDMkhhc0NvcHk8QzJOdW1iZXI+LCBDMkhhc0xlcnA8QzJOdW1iZXI+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAnbnVtYmVyJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgdmFsdWU6IG51bWJlciwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyTnVtYmVyKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJOdW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyTnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gb3RoZXIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycChzdGF0ZTA6IEMyTnVtYmVyLCBzdGF0ZTE6IEMyTnVtYmVyLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTAgPSBzdGF0ZTAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUxID0gc3RhdGUxLmdldCgpO1xyXG4gICAgICAgIHRoaXMuc2V0KEMyTWF0aFV0aWxzLmxlcnAodmFsdWUwLCB2YWx1ZTEsIHQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChzdGF0ZTA6IEMyTnVtYmVyLCBzdGF0ZTE6IEMyTnVtYmVyLCB0OiBudW1iZXIpOiBDMk51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDMk51bWJlcihzdGF0ZTAuc2NlbmUsIDApLmxlcnAoc3RhdGUwLCBzdGF0ZTEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9GaXhlZChwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnRvRml4ZWQocHJlY2lzaW9uKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlN0cmluZyBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyU3RyaW5nPiwgQzJIYXNDb3B5PEMyU3RyaW5nPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ3N0cmluZycgYXMgY29uc3Q7XHJcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBzdHJpbmcgPSAnJywgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gbG9ja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCk6IEMyU3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyU3RyaW5nKHRoaXMuc2NlbmUsIHRoaXMudmFsdWUsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJTdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyU3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gb3RoZXIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBDMk1hdGhVdGlscyB9IGZyb20gJy4uL21hdGgvYzItbWF0aC11dGlscyc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSwgdHlwZSBDMkhhc0Nsb25lLCB0eXBlIEMySGFzQ29weSwgdHlwZSBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJMYXllciBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyTGF5ZXI+LCBDMkhhc0NvcHk8QzJMYXllcj4sIEMySGFzTGVycDxDMkxheWVyPiB7XHJcbiAgICByZWFkb25seSBraW5kID0gJ2xheWVyJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG9yZGVySW5MYXllcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHZhbHVlOiBudW1iZXIsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkxheWVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyTGF5ZXIodGhpcy5zY2VuZSwgdGhpcy52YWx1ZSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkxheWVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkxheWVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG90aGVyLnZhbHVlO1xyXG4gICAgICAgIHRoaXMub3JkZXJJbkxheWVyID0gb3RoZXIub3JkZXJJbkxheWVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMkxheWVyLCBzdGF0ZTE6IEMyTGF5ZXIsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMCA9IHN0YXRlMC5nZXQoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTEgPSBzdGF0ZTEuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXQoQzJNYXRoVXRpbHMubGVycCh2YWx1ZTAsIHZhbHVlMSwgdCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKHN0YXRlMDogQzJMYXllciwgc3RhdGUxOiBDMkxheWVyLCB0OiBudW1iZXIpOiBDMkxheWVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyTGF5ZXIoc3RhdGUxLnNjZW5lLCAwKS5sZXJwKHN0YXRlMCwgc3RhdGUxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29tcGFyZShsYXllckE6IEMyTGF5ZXIsIGxheWVyQjogQzJMYXllcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGxheWVyQS52YWx1ZSAhPT0gbGF5ZXJCLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXllckEudmFsdWUgLSBsYXllckIudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXllckEub3JkZXJJbkxheWVyIC0gbGF5ZXJCLm9yZGVySW5MYXllcjtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uLy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyRm9udFN0eWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3MyLWdsb2JhbHMnO1xyXG5pbXBvcnQgeyBDMkJvb2xlYW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItYm9vbGVhbic7XHJcbmltcG9ydCB7IEMyQ29sb3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItY29sb3InO1xyXG5pbXBvcnQgeyBDMkVudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItZW51bSc7XHJcbmltcG9ydCB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyU3RyaW5nIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLXN0cmluZyc7XHJcbmltcG9ydCB7IEMyTGF5ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyVXBkYXRlRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGF5ZXI6IEMyTGF5ZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNNYW5hZ2VkOiBDMkJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IG5ldyBDMkxheWVyKHNjZW5lLCAwKTtcclxuICAgICAgICB0aGlzLmlzTWFuYWdlZCA9IG5ldyBDMkJvb2xlYW4oc2NlbmUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMlVwZGF0ZURhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNvcHkob3RoZXIubGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuaXNNYW5hZ2VkLmNvcHkob3RoZXIuaXNNYW5hZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJVcGRhdGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jb3B5SWZVbmxvY2tlZChvdGhlci5sYXllcik7XHJcbiAgICAgICAgdGhpcy5pc01hbmFnZWQuY29weUlmVW5sb2NrZWQob3RoZXIuaXNNYW5hZ2VkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyUmVuZGVyRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGF5ZXI6IEMyTGF5ZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNFbmFibGVkOiBDMkJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IG5ldyBDMkxheWVyKHNjZW5lLCAwKTtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IG5ldyBDMkJvb2xlYW4oc2NlbmUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyUmVuZGVyRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGF5ZXIuY29weShvdGhlci5sYXllcik7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQuY29weShvdGhlci5pc0VuYWJsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMlJlbmRlckRhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNvcHlJZlVubG9ja2VkKG90aGVyLmxheWVyKTtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZC5jb3B5SWZVbmxvY2tlZChvdGhlci5pc0VuYWJsZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJFbGVtZW50RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNFbmFibGVkOiBDMkJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdXBkYXRlOiBDMlVwZGF0ZURhdGE7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IG5ldyBDMkJvb2xlYW4oc2NlbmUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IEMyVXBkYXRlRGF0YShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJFbGVtZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkLmNvcHkob3RoZXIuaXNFbmFibGVkKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZS5jb3B5KG90aGVyLnVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUlmVW5sb2NrZWQob3RoZXI6IEMyRWxlbWVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZC5jb3B5SWZVbmxvY2tlZChvdGhlci5pc0VuYWJsZWQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlLmNvcHlJZlVubG9ja2VkKG90aGVyLnVwZGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkdyYXBoaWNzRGF0YSBleHRlbmRzIEMyRWxlbWVudERhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHJlbmRlcjogQzJSZW5kZXJEYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBDMlJlbmRlckRhdGEoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyR3JhcGhpY3NEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuY29weShvdGhlcik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIuY29weShvdGhlci5yZW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkdyYXBoaWNzRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmNvcHlJZlVubG9ja2VkKG90aGVyKTtcclxuICAgICAgICB0aGlzLnJlbmRlci5jb3B5SWZVbmxvY2tlZChvdGhlci5yZW5kZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJTdHJva2VEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc0VuYWJsZWQ6IEMyQm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcjogQzJDb2xvcjtcclxuICAgIHB1YmxpYyByZWFkb25seSB3aWR0aDogQzJMZW5ndGg7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGluZUNhcDogQzJFbnVtPENhbnZhc0xpbmVDYXA+O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpbmVKb2luOiBDMkVudW08Q2FudmFzTGluZUpvaW4+O1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzY2VuZTogQzJCYXNlU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gbmV3IEMyQm9vbGVhbihzY2VuZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBDMkNvbG9yKHNjZW5lLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gbmV3IEMyTGVuZ3RoKHNjZW5lLCA1LCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLmxpbmVDYXAgPSBuZXcgQzJFbnVtPENhbnZhc0xpbmVDYXA+KHNjZW5lLCAncm91bmQnKTtcclxuICAgICAgICB0aGlzLmxpbmVKb2luID0gbmV3IEMyRW51bTxDYW52YXNMaW5lSm9pbj4oc2NlbmUsICdtaXRlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyU3Ryb2tlRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkLmNvcHkob3RoZXIuaXNFbmFibGVkKTtcclxuICAgICAgICB0aGlzLmNvbG9yLmNvcHkob3RoZXIuY29sb3IpO1xyXG4gICAgICAgIHRoaXMud2lkdGguY29weShvdGhlci53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5LmNvcHkob3RoZXIub3BhY2l0eSk7XHJcbiAgICAgICAgdGhpcy5saW5lQ2FwLmNvcHkob3RoZXIubGluZUNhcCk7XHJcbiAgICAgICAgdGhpcy5saW5lSm9pbi5jb3B5KG90aGVyLmxpbmVKb2luKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJTdHJva2VEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQuY29weUlmVW5sb2NrZWQob3RoZXIuaXNFbmFibGVkKTtcclxuICAgICAgICB0aGlzLmNvbG9yLmNvcHlJZlVubG9ja2VkKG90aGVyLmNvbG9yKTtcclxuICAgICAgICB0aGlzLndpZHRoLmNvcHlJZlVubG9ja2VkKG90aGVyLndpZHRoKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkuY29weUlmVW5sb2NrZWQob3RoZXIub3BhY2l0eSk7XHJcbiAgICAgICAgdGhpcy5saW5lQ2FwLmNvcHlJZlVubG9ja2VkKG90aGVyLmxpbmVDYXApO1xyXG4gICAgICAgIHRoaXMubGluZUpvaW4uY29weUlmVW5sb2NrZWQob3RoZXIubGluZUpvaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VG9Db250ZXh0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGFscGhhID0gKHRoaXMub3BhY2l0eS5nZXQoKSAqIGNvbG9yLmdldEEoKSkgLyAyNTUuMDtcclxuICAgICAgICBjb25zdCB0aGVtZU1vZGVJbmRleCA9IHRoaXMuc2NlbmUuZ2V0VGhlbWVNb2RlSW5kZXgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke2NvbG9yLmdldFIodGhlbWVNb2RlSW5kZXgpfSwgJHtjb2xvci5nZXRHKHRoZW1lTW9kZUluZGV4KX0sICR7Y29sb3IuZ2V0Qih0aGVtZU1vZGVJbmRleCl9LCAke2FscGhhfSlgO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLndpZHRoLmdldCh0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICBjdHgubGluZUNhcCA9IHRoaXMubGluZUNhcC5nZXQoKTtcclxuICAgICAgICBjdHgubGluZUpvaW4gPSB0aGlzLmxpbmVKb2luLmdldCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJGaWxsRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNFbmFibGVkOiBDMkJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29sb3I6IEMyQ29sb3I7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IG5ldyBDMkJvb2xlYW4oc2NlbmUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQzJDb2xvcihzY2VuZSwgMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMkZpbGxEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb2xvci5jb3B5KG90aGVyLmNvbG9yKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkuY29weShvdGhlci5vcGFjaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJGaWxsRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sb3IuY29weUlmVW5sb2NrZWQob3RoZXIuY29sb3IpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eS5jb3B5SWZVbmxvY2tlZChvdGhlci5vcGFjaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRvQ29udGV4dChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb25zdCBhbHBoYSA9ICh0aGlzLm9wYWNpdHkuZ2V0KCkgKiBjb2xvci5nZXRBKCkpIC8gMjU1LjA7XHJcbiAgICAgICAgY29uc3QgdGhlbWVNb2RlSW5kZXggPSB0aGlzLnNjZW5lLmdldFRoZW1lTW9kZUluZGV4KCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7Y29sb3IuZ2V0Uih0aGVtZU1vZGVJbmRleCl9LCAke2NvbG9yLmdldEcodGhlbWVNb2RlSW5kZXgpfSwgJHtjb2xvci5nZXRCKHRoZW1lTW9kZUluZGV4KX0sICR7YWxwaGF9KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkZvbnREYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzaXplOiBDMkxlbmd0aDtcclxuICAgIHB1YmxpYyByZWFkb25seSB3ZWlnaHQ6IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZhbWlseTogQzJTdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3R5bGU6IEMyRW51bTxDMkZvbnRTdHlsZT47XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2NlbmU6IEMyQmFzZVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgQzJMZW5ndGgoc2NlbmUsIDE2LCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDQwMCk7XHJcbiAgICAgICAgdGhpcy5mYW1pbHkgPSBuZXcgQzJTdHJpbmcoc2NlbmUsICdzYW5zLXNlcmlmJyk7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IG5ldyBDMkVudW08QzJGb250U3R5bGU+KHNjZW5lLCAnbm9ybWFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJGb250RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2l6ZS5jb3B5KG90aGVyLnNpemUpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0LmNvcHkob3RoZXIud2VpZ2h0KTtcclxuICAgICAgICB0aGlzLmZhbWlseS5jb3B5KG90aGVyLmZhbWlseSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jb3B5KG90aGVyLnN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJGb250RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2l6ZS5jb3B5SWZVbmxvY2tlZChvdGhlci5zaXplKTtcclxuICAgICAgICB0aGlzLndlaWdodC5jb3B5SWZVbmxvY2tlZChvdGhlci53ZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZmFtaWx5LmNvcHlJZlVubG9ja2VkKG90aGVyLmZhbWlseSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5jb3B5SWZVbmxvY2tlZChvdGhlci5zdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUb0NvbnRleHQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5zdHlsZS5nZXQoKTtcclxuICAgICAgICBjb25zdCB3ZWlnaHQgPSB0aGlzLndlaWdodC5nZXQoKTtcclxuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5zaXplLmdldCh2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGZhbWlseSA9IHRoaXMuZmFtaWx5LmdldCgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gYCR7c3R5bGV9ICR7d2VpZ2h0fSAke3NpemV9cHggJHtmYW1pbHl9YDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJWZWMyIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uLy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyVGlwYWJsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zMi1nbG9iYWxzJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0RhdGEsIHR5cGUgQzJFbGVtZW50RGF0YSB9IGZyb20gJy4vYzItZWxlbWVudC1kYXRhJztcclxuXHJcbmV4cG9ydCB0eXBlIEMyQmFzZUVsZW1lbnQgPSBDMkVsZW1lbnQ8QzJFbGVtZW50RGF0YT47XHJcbmV4cG9ydCB0eXBlIEMyQmFzZUdyYXBoaWNzID0gQzJHcmFwaGljc0VsZW1lbnQ8QzJHcmFwaGljc0RhdGE+O1xyXG5leHBvcnQgdHlwZSBDMkJhc2VUaXBhYmxlID0gQzJFbGVtZW50PEMyRWxlbWVudERhdGE+ICYgQzJUaXBhYmxlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkhhc0V4dGVudHMge1xyXG4gICAgZ2V0RXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkhhc1Bvc2l0aW9uIHtcclxuICAgIGdldFBvc2l0aW9uSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMySGFzQm91bmRzIGV4dGVuZHMgQzJIYXNQb3NpdGlvbiwgQzJIYXNFeHRlbnRzIHtcclxuICAgIGdldENlbnRlckludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZDtcclxuICAgIGdldFJlY3RQb2ludEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQzJIYXNQYXRoIHtcclxuICAgIGdldFBhdGgoKTogUGF0aDJEO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJFbGVtZW50PERhdGEgZXh0ZW5kcyBDMkVsZW1lbnREYXRhPiB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YTogRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNjZW5lOiBDMkJhc2VTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIGRhdGE6IERhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmlkID0gc2NlbmUuZ2V0TmV4dEVsZW1lbnRJZCgpO1xyXG4gICAgICAgIHNjZW5lLmF0dGFjaEVsZW1lbnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgdXBkYXRlKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDMkdyYXBoaWNzRWxlbWVudDxEYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGE+IGV4dGVuZHMgQzJFbGVtZW50PERhdGE+IHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgZGF0YTogRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZpZXdTcGFjZTogQzJTcGFjZSk6IHZvaWQ7XHJcbn1cclxuIiwgImltcG9ydCB7IEMyTWF0MngzIH0gZnJvbSAnLi9jMi1tYXQyeDMnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuL2MyLXZlYzInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMlBvb2xMaWtlPFQ+IHtcclxuICAgIGdldCgpOiBUO1xyXG4gICAgcmVsZWFzZShlbGVtZW50OiBUKTogdm9pZDtcclxuICAgIGdldENhcGFjaXR5KCk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDMkRlYnVnUG9vbExpa2U8VD4gZXh0ZW5kcyBDMlBvb2xMaWtlPFQ+IHtcclxuICAgIGdldEJvcnJvd2VkQ291bnQoKTogbnVtYmVyO1xyXG4gICAgYXNzZXJ0Tm9MZWFrcyhtZXNzYWdlPzogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRmFzdFBvb2w8VD4gaW1wbGVtZW50cyBDMlBvb2xMaWtlPFQ+IHtcclxuICAgIHByaXZhdGUgYXZhaWxhYmxlRWxlbWVudHM6IFRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlOiAoKSA9PiBUKSB7fVxyXG5cclxuICAgIGdldCgpOiBUIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdmFpbGFibGVFbGVtZW50cy5wb3AoKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQgOiB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGVhc2UoZWxlbWVudDogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlRWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXBhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRGVidWdQb29sPFQ+IGltcGxlbWVudHMgQzJEZWJ1Z1Bvb2xMaWtlPFQ+IHtcclxuICAgIHByaXZhdGUgYXZhaWxhYmxlRWxlbWVudHM6IFRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib3Jyb3dlZEVsZW1lbnRzOiBTZXQ8VD4gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjcmVhdGU6ICgpID0+IFQpIHt9XHJcblxyXG4gICAgZ2V0KCk6IFQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudCA/IGVsZW1lbnQgOiB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuYm9ycm93ZWRFbGVtZW50cy5hZGQodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm9ycm93ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvb2wgcmVsZWFzZTogZWxlbWVudCBpcyBub3QgY3VycmVudGx5IGJvcnJvd2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJvcnJvd2VkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlRWxlbWVudHMucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb3Jyb3dlZENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9ycm93ZWRFbGVtZW50cy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZhaWxhYmxlRWxlbWVudHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2VydE5vTGVha3MobWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJvcnJvd2VkQ291bnQgPSB0aGlzLmJvcnJvd2VkRWxlbWVudHMuc2l6ZTtcclxuICAgICAgICBpZiAoYm9ycm93ZWRDb3VudCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBtZXNzYWdlID8gYCAoJHttZXNzYWdlfSlgIDogJyc7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb29sIGxlYWsgZGV0ZWN0ZWQke2RldGFpbHN9OiAke2JvcnJvd2VkQ291bnR9IGJvcnJvd2VkIGVsZW1lbnQocykgd2VyZSBub3QgcmVsZWFzZWRgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQmFja3dhcmQtY29tcGF0aWJsZSBhbGlhcyBmb3IgdGhlIGZhc3QgaW1wbGVtZW50YXRpb24uXHJcbmV4cG9ydCBjbGFzcyBDMlBvb2w8VD4gZXh0ZW5kcyBDMkZhc3RQb29sPFQ+IHt9XHJcblxyXG5leHBvcnQgY2xhc3MgQzJWZWMyUG9vbCBleHRlbmRzIEMyRmFzdFBvb2w8QzJWZWMyPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigoKSA9PiBuZXcgQzJWZWMyKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEZWJ1Z1ZlYzJQb29sIGV4dGVuZHMgQzJEZWJ1Z1Bvb2w8QzJWZWMyPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigoKSA9PiBuZXcgQzJWZWMyKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJNYXQyeDNQb29sIGV4dGVuZHMgQzJGYXN0UG9vbDxDMk1hdDJ4Mz4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKCkgPT4gbmV3IEMyTWF0MngzKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEZWJ1Z01hdDJ4M1Bvb2wgZXh0ZW5kcyBDMkRlYnVnUG9vbDxDMk1hdDJ4Mz4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKCkgPT4gbmV3IEMyTWF0MngzKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgY2xhc3MgQzJUaW1lciB7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBkZWx0YTogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgdW5zY2FsZWREZWx0YTogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgc2NhbGU6IG51bWJlciA9IDE7XG4gICAgcHJvdGVjdGVkIG1heERlbHRhOiBudW1iZXIgPSAyMDA7XG4gICAgcHJvdGVjdGVkIGVsYXBzZWQ6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIHVuc2NhbGVkRWxhcHNlZDogbnVtYmVyID0gMDtcblxuICAgIHN0YXJ0KHRpbWVzdGFtcDogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZXN0YW1wOiBudW1iZXIpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0aW1lc3RhbXAgLSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICB0aGlzLnVuc2NhbGVkRGVsdGEgPSBNYXRoLm1pbihkZWx0YSwgdGhpcy5tYXhEZWx0YSk7XG4gICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLnVuc2NhbGVkRGVsdGEgKiB0aGlzLnNjYWxlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICB0aGlzLnVuc2NhbGVkRWxhcHNlZCArPSB0aGlzLnVuc2NhbGVkRGVsdGE7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSB0aGlzLmRlbHRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRNYXhpbXVtRGVsdGFUaW1lKG1heERlbHRhOiBudW1iZXIpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5tYXhEZWx0YSA9IG1heERlbHRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRUaW1lU2NhbGUoc2NhbGU6IG51bWJlcik6IHRoaXMge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFRpbWVTY2FsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZTtcbiAgICB9XG5cbiAgICBnZXREZWx0YSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWx0YTtcbiAgICB9XG5cbiAgICBnZXRVbnNjYWxlZERlbHRhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuc2NhbGVkRGVsdGE7XG4gICAgfVxuXG4gICAgZ2V0RWxhcHNlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICAgIH1cblxuICAgIGdldFVuc2NhbGVkRWxhcHNlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51bnNjYWxlZEVsYXBzZWQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEMyVGltZXIgfSBmcm9tICcuL2MyLXRpbWVyJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyUGxheWFibGUgfSBmcm9tICcuL2MyLXBsYXlhYmxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkFuaW1hdGlvbk1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdGFuY2U6IEMyQW5pbWF0aW9uTWFuYWdlciB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHRpbWVyOiBDMlRpbWVyO1xyXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUFuaW1hdGlvbnM6IFNldDxDMlBsYXlhYmxlPiA9IG5ldyBTZXQoKTtcclxuICAgIHByb3RlY3RlZCBzY2VuZVRvVXBkYXRlOiBTZXQ8QzJCYXNlU2NlbmU+ID0gbmV3IFNldCgpO1xyXG4gICAgcHJvdGVjdGVkIGlzQXdha2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgQzJUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDMkFuaW1hdGlvbk1hbmFnZXIge1xyXG4gICAgICAgIGlmICghQzJBbmltYXRpb25NYW5hZ2VyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltTWFuYWdlciA9IG5ldyBDMkFuaW1hdGlvbk1hbmFnZXIoKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1NYW5hZ2VyLm9uRmlyc3RGcmFtZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltTWFuYWdlci5vblVwZGF0ZSk7XHJcbiAgICAgICAgICAgIEMyQW5pbWF0aW9uTWFuYWdlci5faW5zdGFuY2UgPSBhbmltTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBDMkFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRBbmltYXRpb24oYW5pbWF0aW9uOiBDMlBsYXlhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBDMkFuaW1hdGlvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpbnN0YW5jZS5hY3RpdmVBbmltYXRpb25zLmFkZChhbmltYXRpb24pO1xyXG4gICAgICAgIGluc3RhbmNlLndha2VVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVBbmltYXRpb24oYW5pbWF0aW9uOiBDMlBsYXlhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBDMkFuaW1hdGlvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpbnN0YW5jZS5hY3RpdmVBbmltYXRpb25zLmRlbGV0ZShhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXF1ZXN0VXBkYXRlKHNjZW5lOiBDMkJhc2VTY2VuZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQzJBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2NlbmVUb1VwZGF0ZS5hZGQoc2NlbmUpO1xyXG4gICAgICAgIGluc3RhbmNlLndha2VVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuaW1hdGlvbihhbmltYXRpb246IEMyUGxheWFibGUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUFuaW1hdGlvbnMuYWRkKGFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy53YWtlVXAoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbmltYXRpb24oYW5pbWF0aW9uOiBDMlBsYXlhYmxlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVBbmltYXRpb25zLmRlbGV0ZShhbmltYXRpb24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHdha2VVcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0F3YWtlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0F3YWtlID0gdHJ1ZTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblVwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpcnN0RnJhbWUgPSAodGltZXN0YW1wOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KHRpbWVzdGFtcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgb25VcGRhdGUgPSAodGltZXN0YW1wOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVyLnVwZGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGhpcy50aW1lci5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGFuaW0gb2YgdGhpcy5hY3RpdmVBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGFuaW0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2NlbmUgb2YgdGhpcy5zY2VuZVRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVUb1VwZGF0ZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVBbmltYXRpb25zLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uVXBkYXRlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0F3YWtlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXdha2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsICJpbXBvcnQgeyBDMkNhbWVyYSB9IGZyb20gJy4uL21hdGgvYzItY2FtZXJhJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMk1hdDJ4MyB9IGZyb20gJy4uL21hdGgvYzItbWF0MngzJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0VsZW1lbnQsIHR5cGUgQzJCYXNlRWxlbWVudCwgdHlwZSBDMkJhc2VHcmFwaGljcyB9IGZyb20gJy4uL2VsZW1lbnQvYmFzZS9jMi1lbGVtZW50JztcclxuaW1wb3J0IHsgQzJMYXllciB9IGZyb20gJy4uL3NoYXJlZC9jMi1sYXllcic7XHJcbmltcG9ydCB0eXBlIHsgQzJQb2ludCB9IGZyb20gJy4uL3NoYXJlZC9jMi1wb2ludCc7XHJcbmltcG9ydCB7IEMyRGVidWdWZWMyUG9vbCwgQzJWZWMyUG9vbCwgdHlwZSBDMkRlYnVnUG9vbExpa2UsIHR5cGUgQzJQb29sTGlrZSB9IGZyb20gJy4uL21hdGgvYzItcG9vbCc7XHJcbmltcG9ydCB0eXBlIHsgQzJDb2xvclRoZW1lTW9kZSB9IGZyb20gJy4uL3NoYXJlZC9jMi1jb2xvci10aGVtZSc7XHJcbmltcG9ydCB7IEMyQW5pbWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2FuaW1hdGlvbi9jMi1hbmltYXRpb24tbWFuYWdlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEMyU2NlbmVPcHRpb25zIHtcclxuICAgIHZlY1Bvb2xNb2RlPzogJ2Zhc3QnIHwgJ2RlYnVnJztcclxuICAgIHRoZW1lTW9kZT86IEMyQ29sb3JUaGVtZU1vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDMkJhc2VTY2VuZSB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFNwYWNlOiBDMlNwYWNlID0gbmV3IEMyU3BhY2UoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2aWV3U3BhY2U6IEMyU3BhY2UgPSBuZXcgQzJTcGFjZSgpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZpZXdwb3J0U2l6ZTogQzJWZWMyID0gbmV3IEMyVmVjMig2NDAuMCwgMzYwLjApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNwYWNlczogQzJTcGFjZVtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2FtZXJhOiBDMkNhbWVyYTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2ZWNQb29sOiBDMlZlYzJbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHVzZWRWZWNzOiBTZXQ8QzJWZWMyPiA9IG5ldyBTZXQoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBtYXRQb29sOiBDMk1hdDJ4M1tdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWxlbWVudHM6IEMyQmFzZUVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlbmRlckNvbW1hbmRzOiBDMkJhc2VHcmFwaGljc1tdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVmVjMlBvb2w6IEMyUG9vbExpa2U8QzJWZWMyPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVidWdWZWMyUG9vbDogQzJEZWJ1Z1Bvb2xMaWtlPEMyVmVjMj4gfCBudWxsO1xyXG5cclxuICAgIHB1YmxpYyB0cmFjZVBvb2xBbGxvY2F0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBuZXh0RWxlbWVudElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBuZXh0VXBkYXRlSWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRoZW1lTW9kZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgb3B0aW9uczogQzJTY2VuZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDMkNhbWVyYSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNwYWNlcy5wdXNoKHRoaXMud29ybGRTcGFjZSwgdGhpcy52aWV3U3BhY2UpO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy52ZWNQb29sTW9kZSA9PT0gJ2RlYnVnJykge1xyXG4gICAgICAgICAgICBjb25zdCBkZWJ1Z1Bvb2wgPSBuZXcgQzJEZWJ1Z1ZlYzJQb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuVmVjMlBvb2wgPSBkZWJ1Z1Bvb2w7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdWZWMyUG9vbCA9IGRlYnVnUG9vbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlZlYzJQb29sID0gbmV3IEMyVmVjMlBvb2woKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z1ZlYzJQb29sID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnRoZW1lTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRoZW1lTW9kZUluZGV4ID0gb3B0aW9ucy50aGVtZU1vZGUgPT09ICdsaWdodCcgPyAwIDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2xDYXBhY2l0eSA9IDMyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjUG9vbENhcGFjaXR5OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZWNQb29sLnB1c2gobmV3IEMyVmVjMigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRWxlbWVudChlbGVtZW50OiBDMkJhc2VFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQzJHcmFwaGljc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21tYW5kcy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hFbGVtZW50KGVsZW1lbnQ6IEMyQmFzZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBDMkdyYXBoaWNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJJbmRleCA9IHRoaXMucmVuZGVyQ29tbWFuZHMuaW5kZXhPZihlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlbmRlckluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21tYW5kcy5zcGxpY2UocmVuZGVySW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVjUG9vbCgpOiBDMlBvb2xMaWtlPEMyVmVjMj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlZlYzJQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRoZW1lTW9kZSgpOiBDMkNvbG9yVGhlbWVNb2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVtZU1vZGVJbmRleCA9PT0gMCA/ICdsaWdodCcgOiAnZGFyayc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGhlbWVNb2RlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVtZU1vZGVJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBhY3F1aXJlVmVjMigpOiBDMlZlYzIge1xyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLnZlY1Bvb2wucG9wKCk7XHJcbiAgICAgICAgdmVjID0gdmVjID8gdmVjIDogbmV3IEMyVmVjMigpO1xyXG4gICAgICAgIHJldHVybiB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZVZlYzIodmVjOiBDMlZlYzIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZlY1Bvb2wucHVzaCh2ZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlY1Bvb2xTaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVjUG9vbC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlZFZlY0NvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlZFZlY3Muc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBhY3F1aXJlTWF0MngzKCk6IEMyTWF0MngzIHtcclxuICAgICAgICBsZXQgbWF0ID0gdGhpcy5tYXRQb29sLnBvcCgpO1xyXG4gICAgICAgIG1hdCA9IG1hdCA/IG1hdCA6IG5ldyBDMk1hdDJ4MygpO1xyXG4gICAgICAgIHJldHVybiBtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZU1hdDJ4MyhtYXQ6IEMyTWF0MngzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXRQb29sLnB1c2gobWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXRQb29sU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdFBvb2wubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdwb3J0U2l6ZUludG8oZHN0OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHRoaXMudmlld3BvcnRTaXplLngsIHRoaXMudmlld3BvcnRTaXplLnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdwb3J0U2l6ZSgpOiBDMlZlYzIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdwb3J0U2l6ZS5jbG9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdwb3J0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemUueDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3cG9ydEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdwb3J0U2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdwb3J0QXNwZWN0UmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemUueCAvIHRoaXMudmlld3BvcnRTaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dEVsZW1lbnRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5leHRFbGVtZW50SWQrKztcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0VXBkYXRlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0VXBkYXRlSWQrKztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW1lcmEoKTogQzJDYW1lcmEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbWVyYTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZFNwYWNlKCk6IEMyU3BhY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkU3BhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld1NwYWNlKCk6IEMyU3BhY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdTcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3cG9ydFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0U2l6ZS5zZXQod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld3BvcnRTaXplVihzaXplOiBDMlZlYzIpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWaWV3cG9ydFNpemUoc2l6ZS54LCBzaXplLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRoZW1lTW9kZShtb2RlOiBDMkNvbG9yVGhlbWVNb2RlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aGVtZU1vZGVJbmRleCA9IG1vZGUgPT09ICdsaWdodCcgPyAwIDogMTtcclxuICAgICAgICBDMkFuaW1hdGlvbk1hbmFnZXIucmVxdWVzdFVwZGF0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTcGFjZShwYXJlbnQ6IEMyU3BhY2UgPSB0aGlzLndvcmxkU3BhY2UpOiBDMlNwYWNlIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IG5ldyBDMlNwYWNlKHBhcmVudCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZXMucHVzaChzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHNwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaFNwYWNlKHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNwYWNlcy5pbmRleE9mKHNwYWNlKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGUoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwYWNlIG9mIHRoaXMuc3BhY2VzKSB7XHJcbiAgICAgICAgICAgIHNwYWNlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gQzJMYXllci5jb21wYXJlKGEuZGF0YS51cGRhdGUubGF5ZXIsIGIuZGF0YS51cGRhdGUubGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IDApIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGEuaXNFbmFibGVkLmdldCgpICYmICFlbGVtZW50LmRhdGEudXBkYXRlLmlzTWFuYWdlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdWZWMyUG9vbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnVmVjMlBvb2wuYXNzZXJ0Tm9MZWFrcygndXBkYXRlKCknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5jYW1lcmEudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tbWFuZHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEMyTGF5ZXIuY29tcGFyZShhLmRhdGEucmVuZGVyLmxheWVyLCBiLmRhdGEucmVuZGVyLmxheWVyKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAwKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMucmVuZGVyQ29tbWFuZHMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5pc0VuYWJsZWQuZ2V0KCkgJiYgZWxlbWVudC5kYXRhLnJlbmRlci5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVuZGVyKHRoaXMuY3R4LCB0aGlzLnZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnVmVjMlBvb2wpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z1ZlYzJQb29sLmFzc2VydE5vTGVha3MoJ3JlbmRlcigpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRDbGllbnRQb2ludEludG8oZHN0OiBDMlBvaW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBzY2FsZVggPSB0aGlzLmNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY2FudmFzWCA9ICh4IC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcclxuICAgICAgICBjb25zdCBjYW52YXNZID0gKHkgLSByZWN0LnRvcCkgKiBzY2FsZVk7XHJcblxyXG4gICAgICAgIGRzdC5zZXRWYWx1ZUZyb21TcGFjZShjYW52YXNYLCBjYW52YXNZLCB0aGlzLmdldFZpZXdTcGFjZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHksIEMySGFzTGVycCB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlBvaW50IGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJQb2ludD4sIEMySGFzQ29weTxDMlBvaW50PiwgQzJIYXNMZXJwPEMyUG9pbnQ+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAncG9zaXRpb24nIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBDMlZlYzI7XHJcbiAgICBwdWJsaWMgc3BhY2U6IEMyU3BhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQzJWZWMyKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMlBvaW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyUG9pbnQodGhpcy5zY2VuZSwgdGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnksIHRoaXMuc3BhY2UsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJQb2ludCk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weShvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShvdGhlcjogQzJQb2ludCk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzVih0aGlzLnZhbHVlLCBvdGhlci52YWx1ZSkgJiYgdGhpcy5zcGFjZSA9PT0gb3RoZXIuc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShvdGhlci52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG90aGVyLnNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMlBvaW50LCBzdGF0ZTE6IEMyUG9pbnQsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gc3RhdGUxLnNwYWNlO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTAgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgc3RhdGUwLmdldEludG8odmFsdWUwLCBzcGFjZSk7XHJcbiAgICAgICAgc3RhdGUxLmdldEludG8odmFsdWUxLCBzcGFjZSk7XHJcbiAgICAgICAgQzJWZWMyLmxlcnBWKHRoaXMudmFsdWUsIHZhbHVlMCwgdmFsdWUxLCB0KTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHZhbHVlMCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHZhbHVlMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoc3RhdGUwOiBDMlBvaW50LCBzdGF0ZTE6IEMyUG9pbnQsIHQ6IG51bWJlcik6IEMyUG9pbnQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJQb2ludChzdGF0ZTEuc2NlbmUsIDAsIDAsIHN0YXRlMS5zcGFjZSkubGVycChzdGF0ZTAsIHN0YXRlMSwgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHNwYWNlPzogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLnggPT09IHggJiYgdGhpcy52YWx1ZS55ID09PSB5ICYmIHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLnNldCh4LCB5KTtcclxuICAgICAgICBpZiAoc3BhY2UpIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWKHBvaW50OiBDMlZlYzIsIHNwYWNlPzogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzVih0aGlzLnZhbHVlLCBwb2ludCkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShwb2ludCk7XHJcbiAgICAgICAgaWYgKHNwYWNlKSB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVGcm9tU3BhY2UoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKEMyVmVjMi5lcXVhbHModGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnksIHgsIHkpICYmIHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvKHRoaXMudmFsdWUsIHgsIHksIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlVihwb2ludDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlRnJvbVNwYWNlKHBvaW50LngsIHBvaW50LnksIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc3BhY2UuY29udmVydFBvaW50SW50b1YoZHN0LCB0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3BhY2Uoc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BhY2UuY29udmVydFBvaW50SW50b1YodGhpcy52YWx1ZSwgdGhpcy52YWx1ZSwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHksIEMySGFzTGVycCB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB0eXBlIHsgQzJMZW5ndGggfSBmcm9tICcuL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkV4dGVudHMgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkV4dGVudHM+LCBDMkhhc0NvcHk8QzJFeHRlbnRzPiwgQzJIYXNMZXJwPEMyRXh0ZW50cz4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdleHRlbnRzJyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogQzJWZWMyO1xyXG4gICAgcHVibGljIHNwYWNlOiBDMlNwYWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IEMyVmVjMih4LCB5KTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJFeHRlbnRzIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyRXh0ZW50cyh0aGlzLnNjZW5lLCB0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSwgdGhpcy5zcGFjZSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMkV4dGVudHMpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyRXh0ZW50cyk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzVih0aGlzLnZhbHVlLCBvdGhlci52YWx1ZSkgJiYgdGhpcy5zcGFjZSA9PT0gb3RoZXIuc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShvdGhlci52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG90aGVyLnNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlcnAoc3RhdGUwOiBDMkV4dGVudHMsIHN0YXRlMTogQzJFeHRlbnRzLCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHN0YXRlMS5zcGFjZTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUwID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHN0YXRlMC5nZXRJbnRvKHZhbHVlMCwgc3BhY2UpO1xyXG4gICAgICAgIHN0YXRlMS5nZXRJbnRvKHZhbHVlMSwgc3BhY2UpO1xyXG4gICAgICAgIEMyVmVjMi5sZXJwVih0aGlzLnZhbHVlLCB2YWx1ZTAsIHZhbHVlMSwgdCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKHN0YXRlMDogQzJFeHRlbnRzLCBzdGF0ZTE6IEMyRXh0ZW50cywgdDogbnVtYmVyKTogQzJFeHRlbnRzIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyRXh0ZW50cyhzdGF0ZTEuc2NlbmUsIDAsIDAsIHN0YXRlMS5zcGFjZSkubGVycChzdGF0ZTAsIHN0YXRlMSwgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZT86IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS54ID09PSB4ICYmIHRoaXMudmFsdWUueSA9PT0geSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5zZXQoeCwgeSk7XHJcbiAgICAgICAgaWYgKHNwYWNlKSB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VihleHRlbnRzOiBDMlZlYzIsIHNwYWNlPzogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzVih0aGlzLnZhbHVlLCBleHRlbnRzKSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5jb3B5KGV4dGVudHMpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzKHRoaXMudmFsdWUueCwgdGhpcy52YWx1ZS55LCB4LCB5KSAmJiB0aGlzLnNwYWNlID09PSBzcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgc3BhY2UuY29udmVydEV4dGVudHNJbnRvKHRoaXMudmFsdWUsIHgsIHksIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlVihleHRlbnRzOiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWVGcm9tU3BhY2UoZXh0ZW50cy54LCBleHRlbnRzLnksIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc3BhY2UuY29udmVydEV4dGVudHNJbnRvVihkc3QsIHRoaXMudmFsdWUsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXhMZW5ndGhJbnRvKGRzdDogQzJMZW5ndGgpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBNYXRoLm1heCh0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSk7XHJcbiAgICAgICAgZHN0LnNldFZhbHVlRnJvbVNwYWNlKG1heExlbmd0aCwgdGhpcy5zcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWluTGVuZ3RoSW50byhkc3Q6IEMyTGVuZ3RoKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gTWF0aC5taW4odGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnkpO1xyXG4gICAgICAgIGRzdC5zZXRWYWx1ZUZyb21TcGFjZShtaW5MZW5ndGgsIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNwYWNlKHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnNwYWNlLmNvbnZlcnRFeHRlbnRzSW50b1YodGhpcy52YWx1ZSwgdGhpcy52YWx1ZSwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMkhhc0Nsb25lLCBDMkhhc0NvcHkgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJTcGFjZVJlZiBleHRlbmRzIEMyQmFzZVR5cGUgaW1wbGVtZW50cyBDMkhhc0Nsb25lPEMyU3BhY2VSZWY+LCBDMkhhc0NvcHk8QzJTcGFjZVJlZj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdzcGFjZS1yZWYnIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBDMlNwYWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgdmFsdWU6IEMyU3BhY2UsIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMlNwYWNlUmVmIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyU3BhY2VSZWYodGhpcy5zY2VuZSwgdGhpcy52YWx1ZSwgdGhpcy5sb2NrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlJZlVubG9ja2VkKG90aGVyOiBDMlNwYWNlUmVmKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm4gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3B5KG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KG90aGVyOiBDMlNwYWNlUmVmKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gb3RoZXIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IEMyU3BhY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMlBvaW50IH0gZnJvbSAnLi4vc2hhcmVkL2MyLXBvaW50JztcclxuaW1wb3J0IHsgQzJFeHRlbnRzIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWV4dGVudHMnO1xyXG5pbXBvcnQgeyBDMlNwYWNlUmVmIH0gZnJvbSAnLi4vc2hhcmVkL2MyLXNwYWNlLXJlZic7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NEYXRhLCBDMlN0cm9rZURhdGEgfSBmcm9tICcuL2Jhc2UvYzItZWxlbWVudC1kYXRhJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL2Jhc2UvYzItZWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJHcmlkRGF0YSBleHRlbmRzIEMyR3JhcGhpY3NEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBnZW9tZXRyeTogQzJHcmlkR2VvbWV0cnlEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQzJHcmlkR2VvbWV0cnlEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDEpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLm9wYWNpdHkuc2V0KDEpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLndpZHRoLnNldCgxLCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UubGluZUNhcC5zZXQoJ2J1dHQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyR3JpZEdlb21ldHJ5RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BhY2U6IEMyU3BhY2VSZWY7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYm91bmRBOiBDMlBvaW50O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGJvdW5kQjogQzJQb2ludDtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdGVwczogQzJFeHRlbnRzO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHJlZmVyZW5jZVBvaW50OiBDMlBvaW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkU3BhY2UgPSBzY2VuZS5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG5ldyBDMlNwYWNlUmVmKHNjZW5lLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLmJvdW5kQSA9IG5ldyBDMlBvaW50KHNjZW5lLCAtOCwgLTQuNSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5ib3VuZEIgPSBuZXcgQzJQb2ludChzY2VuZSwgKzgsICs0LjUsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc3RlcHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAxLCAxLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZVBvaW50ID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJHcmlkIGV4dGVuZHMgQzJHcmFwaGljc0VsZW1lbnQ8QzJHcmlkRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMkdyaWREYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge31cclxuXHJcbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHZpZXdTcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZ2VvbWV0cnk7XHJcbiAgICAgICAgY29uc3QgZXBzaWxvbiA9IDFlLTQ7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBkYXRhLnNwYWNlLmdldCgpO1xyXG5cclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgcG9pbnRBID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwb2ludEIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGRhdGEuYm91bmRBLmdldEludG8ocG9pbnRBLCBzcGFjZSk7XHJcbiAgICAgICAgZGF0YS5ib3VuZEIuZ2V0SW50byhwb2ludEIsIHNwYWNlKTtcclxuICAgICAgICBjb25zdCBsb3dlclggPSBNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpO1xyXG4gICAgICAgIGNvbnN0IHVwcGVyWCA9IE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCk7XHJcbiAgICAgICAgY29uc3QgbG93ZXJZID0gTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KTtcclxuICAgICAgICBjb25zdCB1cHBlclkgPSBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpO1xyXG5cclxuICAgICAgICBjb25zdCBzdGVwcyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBkYXRhLnN0ZXBzLmdldEludG8oc3RlcHMsIHNwYWNlKTtcclxuICAgICAgICBkYXRhLnJlZmVyZW5jZVBvaW50LmdldEludG8oYW5jaG9yLCBzcGFjZSk7XHJcbiAgICAgICAgY29uc3Qgc3RlcFggPSBzdGVwcy54IDw9IDAgPyBzdGVwcy54IDogMTtcclxuICAgICAgICBjb25zdCBzdGVwWSA9IHN0ZXBzLnkgPD0gMCA/IHN0ZXBzLnkgOiAxO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IGFuY2hvci54IC0gTWF0aC5mbG9vcigoYW5jaG9yLnggLSBsb3dlclggKyBlcHNpbG9uKSAvIHN0ZXBYKSAqIHN0ZXBYO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IGFuY2hvci55IC0gTWF0aC5mbG9vcigoYW5jaG9yLnkgLSBsb3dlclkgKyBlcHNpbG9uKSAvIHN0ZXBZKSAqIHN0ZXBZO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuc3Ryb2tlLmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gc3RhcnRYOyB4IDwgdXBwZXJYICsgZXBzaWxvbjsgeCArPSBzdGVwWCkge1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvKHBvaW50QSwgeCwgbG93ZXJZLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvKHBvaW50QiwgeCwgdXBwZXJZLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBwb2ludEEucm91bmQoKTtcclxuICAgICAgICAgICAgcG9pbnRCLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRBLngsIHBvaW50QS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludEIueCwgcG9pbnRCLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDwgdXBwZXJZICsgZXBzaWxvbjsgeSArPSBzdGVwWSkge1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvKHBvaW50QSwgbG93ZXJYLCB5LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvKHBvaW50QiwgdXBwZXJYLCB5LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBwb2ludEEucm91bmQoKTtcclxuICAgICAgICAgICAgcG9pbnRCLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRBLngsIHBvaW50QS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludEIueCwgcG9pbnRCLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShzdGVwcyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGFuY2hvcik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHBvaW50QSk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHBvaW50Qik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJIYXNDbG9uZSwgQzJIYXNDb3B5LCBDMkhhc0xlcnAgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyQmFzZVR5cGUgfSBmcm9tICcuL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyUG9pbnQgfSBmcm9tICcuL2MyLXBvaW50JztcclxuaW1wb3J0IHR5cGUgeyBDMkV4dGVudHMgfSBmcm9tICcuL2MyLWV4dGVudHMnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcblxyXG4vKipcclxuICogRFx1MDBFOWNyaXQgY29tbWVudCB1biByZWN0YW5nbGUgZXN0IGFuY3JcdTAwRTkgXHUwMEUwIHNhIHBvc2l0aW9uIGRlIHJcdTAwRTlmXHUwMEU5cmVuY2UuXHJcbiAqIExlcyBjb29yZG9ublx1MDBFOWVzICh4LCB5KSBpbmRpcXVlbnQgbFx1MjAxOWFuY3JhZ2UgcmVsYXRpZiA6XHJcbiAqICAtICgtMSwgLTEpIC0+IGNvaW4gaW5mXHUwMEU5cmlldXIgZ2F1Y2hlXHJcbiAqICAtICgrMCwgKzApIC0+IGNlbnRyZVxyXG4gKiAgLSAoKzEsICsxKSAtPiBjb2luIHN1cFx1MDBFOXJpZXVyIGRyb2l0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQzJBbmNob3IgZXh0ZW5kcyBDMkJhc2VUeXBlIGltcGxlbWVudHMgQzJIYXNDbG9uZTxDMkFuY2hvcj4sIEMySGFzQ29weTxDMkFuY2hvcj4sIEMySGFzTGVycDxDMkFuY2hvcj4ge1xyXG4gICAgcmVhZG9ubHkga2luZCA9ICdhbmNob3InIGFzIGNvbnN0O1xyXG4gICAgcHVibGljIHZhbHVlOiBDMlZlYzI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgbG9ja2VkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDMlZlYzIoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJBbmNob3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJBbmNob3IodGhpcy5zY2VuZSwgdGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnksIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJBbmNob3IpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyQW5jaG9yKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKEMyVmVjMi5lcXVhbHNWKHRoaXMudmFsdWUsIG90aGVyLnZhbHVlKSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5jb3B5KG90aGVyLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXRlMDogQzJBbmNob3IsIHN0YXRlMTogQzJBbmNob3IsIHQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIEMyVmVjMi5sZXJwVih0aGlzLnZhbHVlLCBzdGF0ZTAudmFsdWUsIHN0YXRlMS52YWx1ZSwgdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoc3RhdGUwOiBDMkFuY2hvciwgc3RhdGUxOiBDMkFuY2hvciwgdDogbnVtYmVyKTogQzJBbmNob3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJBbmNob3Ioc3RhdGUxLnNjZW5lLCAwLCAwKS5sZXJwKHN0YXRlMCwgc3RhdGUxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCk6IHRoaXMge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlLnggPT09IHggJiYgdGhpcy52YWx1ZS55ID09PSB5KSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLnNldCh4LCB5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWKG9mZnNldDogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKEMyVmVjMi5lcXVhbHNWKHRoaXMudmFsdWUsIG9mZnNldCkpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuY29weShvZmZzZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0SW50byhkc3Q6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG9GKFxyXG4gICAgICAgIGRzdDogQzJWZWMyLFxyXG4gICAgICAgIHBvc2l0aW9uWDogbnVtYmVyLFxyXG4gICAgICAgIHBvc2l0aW9uWTogbnVtYmVyLFxyXG4gICAgICAgIGV4dGVudHNYOiBudW1iZXIsXHJcbiAgICAgICAgZXh0ZW50c1k6IG51bWJlcixcclxuICAgICAgICBhbmNob3JYOiBudW1iZXIsXHJcbiAgICAgICAgYW5jaG9yWTogbnVtYmVyLFxyXG4gICAgKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LnNldChwb3NpdGlvblggLSAodGhpcy52YWx1ZS54IC0gYW5jaG9yWCkgKiBleHRlbnRzWCwgcG9zaXRpb25ZIC0gKHRoaXMudmFsdWUueSAtIGFuY2hvclkpICogZXh0ZW50c1kpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG9WKGRzdDogQzJWZWMyLCBwb3NpdGlvbjogQzJWZWMyLCBleHRlbnRzOiBDMlZlYzIsIGFuY2hvcjogQzJWZWMyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LnNldChwb3NpdGlvbi54IC0gKHRoaXMudmFsdWUueCAtIGFuY2hvci54KSAqIGV4dGVudHMueCwgcG9zaXRpb24ueSAtICh0aGlzLnZhbHVlLnkgLSBhbmNob3IueSkgKiBleHRlbnRzLnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG8oXHJcbiAgICAgICAgZHN0OiBDMlZlYzIsXHJcbiAgICAgICAgc3BhY2U6IEMyU3BhY2UsXHJcbiAgICAgICAgcG9zaXRpb246IEMyUG9pbnQsXHJcbiAgICAgICAgZXh0ZW50czogQzJFeHRlbnRzLFxyXG4gICAgICAgIGFuY2hvclg6IG51bWJlcixcclxuICAgICAgICBhbmNob3JZOiBudW1iZXIsXHJcbiAgICApOiB0aGlzIHtcclxuICAgICAgICBwb3NpdGlvbi5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IHBvc1ggPSBkc3QueDtcclxuICAgICAgICBjb25zdCBwb3NZID0gZHN0Lnk7XHJcbiAgICAgICAgZXh0ZW50cy5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IGV4dFggPSBkc3QueDtcclxuICAgICAgICBjb25zdCBleHRZID0gZHN0Lnk7XHJcbiAgICAgICAgZHN0LnNldChwb3NYIC0gKHRoaXMudmFsdWUueCAtIGFuY2hvclgpICogZXh0WCwgcG9zWSAtICh0aGlzLnZhbHVlLnkgLSBhbmNob3JZKSAqIGV4dFkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlcihzcGFjZTogQzJTcGFjZSwgcG9zaXRpb246IEMyUG9pbnQsIGV4dGVudHM6IEMyRXh0ZW50cyk6IEMyVmVjMiB7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2VudGVySW50byhjZW50ZXIsIHNwYWNlLCBwb3NpdGlvbiwgZXh0ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50ZXJJbnRvRihkc3Q6IEMyVmVjMiwgcG9zaXRpb25YOiBudW1iZXIsIHBvc2l0aW9uWTogbnVtYmVyLCBleHRlbnRzWDogbnVtYmVyLCBleHRlbnRzWTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgZHN0LnNldChwb3NpdGlvblggLSB0aGlzLnZhbHVlLnggKiBleHRlbnRzWCwgcG9zaXRpb25ZIC0gdGhpcy52YWx1ZS55ICogZXh0ZW50c1kpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlckludG9WKGRzdDogQzJWZWMyLCBwb3NpdGlvbjogQzJWZWMyLCBleHRlbnRzOiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICBkc3Quc2V0KHBvc2l0aW9uLnggLSB0aGlzLnZhbHVlLnggKiBleHRlbnRzLngsIHBvc2l0aW9uLnkgLSB0aGlzLnZhbHVlLnkgKiBleHRlbnRzLnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlckludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBwb3NpdGlvbjogQzJQb2ludCwgZXh0ZW50czogQzJFeHRlbnRzKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCBwb3NpdGlvbiwgZXh0ZW50cywgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG93ZXIoc3BhY2U6IEMyU3BhY2UsIHBvc2l0aW9uOiBDMlBvaW50LCBleHRlbnRzOiBDMkV4dGVudHMpOiBDMlZlYzIge1xyXG4gICAgICAgIGNvbnN0IGxvd2VyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgICAgIHRoaXMuZ2V0TG93ZXJJbnRvKGxvd2VyLCBzcGFjZSwgcG9zaXRpb24sIGV4dGVudHMpO1xyXG4gICAgICAgIHJldHVybiBsb3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb3dlckludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBwb3NpdGlvbjogQzJQb2ludCwgZXh0ZW50czogQzJFeHRlbnRzKTogdGhpcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCBwb3NpdGlvbiwgZXh0ZW50cywgLTEsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVcHBlcihzcGFjZTogQzJTcGFjZSwgcG9zaXRpb246IEMyUG9pbnQsIGV4dGVudHM6IEMyRXh0ZW50cyk6IEMyVmVjMiB7XHJcbiAgICAgICAgY29uc3QgdXBwZXIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVcHBlckludG8odXBwZXIsIHNwYWNlLCBwb3NpdGlvbiwgZXh0ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHVwcGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwcGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UsIHBvc2l0aW9uOiBDMlBvaW50LCBleHRlbnRzOiBDMkV4dGVudHMpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0UG9pbnRJbnRvKGRzdCwgc3BhY2UsIHBvc2l0aW9uLCBleHRlbnRzLCArMSwgKzEpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgeyBDMlZlYzIgfSBmcm9tICcuLi9tYXRoL2MyLXZlYzInO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMlBvaW50IH0gZnJvbSAnLi4vc2hhcmVkL2MyLXBvaW50JztcclxuaW1wb3J0IHsgQzJFeHRlbnRzIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWV4dGVudHMnO1xyXG5pbXBvcnQgeyBDMkxlbmd0aCB9IGZyb20gJy4uL3NoYXJlZC9jMi1sZW5ndGgnO1xyXG5pbXBvcnQgeyBDMkFuY2hvciB9IGZyb20gJy4uL3NoYXJlZC9jMi1hbmNob3InO1xyXG5pbXBvcnQgeyBDMlNwYWNlUmVmIH0gZnJvbSAnLi4vc2hhcmVkL2MyLXNwYWNlLXJlZic7XHJcbmltcG9ydCB7IEMyR3JhcGhpY3NFbGVtZW50LCB0eXBlIEMySGFzQm91bmRzIH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBDMkZpbGxEYXRhLCBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcbmltcG9ydCB0eXBlIHsgQzJTREYgfSBmcm9tICcuLi9tYXRoL2N1cnZlL2MyLXNkZic7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJQYXRoUmVjdERhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BhY2U6IEMyU3BhY2VSZWY7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuICAgIC8vIHB1YmxpYyByZWFkb25seSB0cmFuc2Zvcm06IEMyVHJhbnNmb3JtO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBwb3NpdGlvbjogQzJQb2ludDtcclxuICAgIHB1YmxpYyByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5jaG9yOiBDMkFuY2hvcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBjb3JuZXJSYWRpdXM6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvcm5lclRlbnNpb246IEMyTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICBjb25zdCB3b3JsZFNwYWNlID0gc2NlbmUuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuc3BhY2UgPSBuZXcgQzJTcGFjZVJlZihzY2VuZSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5maWxsID0gbmV3IEMyRmlsbERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IEMyU3Ryb2tlRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDEsIDEsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yID0gbmV3IEMyQW5jaG9yKHNjZW5lLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lclJhZGl1cyA9IG5ldyBDMkxlbmd0aChzY2VuZSwgMCwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmNvcm5lclRlbnNpb24gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDAuNTUyMjg0NzQ5ODMxKTsgLy8gNC8zKnRhbihwaS84KSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Ryb2tlLmlzRW5hYmxlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5maWxsLmlzRW5hYmxlZC5zZXQodHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlBhdGhSZWN0IGV4dGVuZHMgQzJHcmFwaGljc0VsZW1lbnQ8QzJQYXRoUmVjdERhdGE+IGltcGxlbWVudHMgQzJIYXNCb3VuZHMsIEMyU0RGIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJORTA6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJORTE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJORTI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJORTM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJOVzA6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJOVzE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJOVzI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJOVzM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTVzA6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTVzE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTVzI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTVzM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTRTA6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTRTE6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTRTI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb3JuZXJTRTM6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2ZWNORTogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlY05XOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmVjU0U6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB2ZWNTVzogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzZGZDZW50ZXI6IEMyVmVjMiA9IG5ldyBDMlZlYzIoKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzZGZFeHRlbnRzOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcbiAgICBwcm90ZWN0ZWQgc2RmUmFkaXVzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHBhdGg6IFBhdGgyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyUGF0aFJlY3REYXRhKHNjZW5lKSk7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBhdGgyRCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXRoKCk6IFBhdGgyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEuZXh0ZW50cy5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRlckludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFuY2hvci5nZXRDZW50ZXJJbnRvKGRzdCwgc3BhY2UsIHRoaXMuZGF0YS5wb3NpdGlvbiwgdGhpcy5kYXRhLmV4dGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCB0aGlzLmRhdGEucG9zaXRpb24sIHRoaXMuZGF0YS5leHRlbnRzLCBhbmNob3JYLCBhbmNob3JZKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3JuZXJSYWRpdXMoc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY29ybmVyUmFkaXVzLmdldChzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVTREYoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gTWF0aC5hYnMoeCAtIHRoaXMuc2RmQ2VudGVyLngpIC0gKHRoaXMuc2RmRXh0ZW50cy54IC0gdGhpcy5zZGZSYWRpdXMpO1xyXG4gICAgICAgIGNvbnN0IGR5ID0gTWF0aC5hYnMoeSAtIHRoaXMuc2RmQ2VudGVyLnkpIC0gKHRoaXMuc2RmRXh0ZW50cy55IC0gdGhpcy5zZGZSYWRpdXMpO1xyXG4gICAgICAgIGNvbnN0IGF4ID0gTWF0aC5tYXgoZHgsIDApO1xyXG4gICAgICAgIGNvbnN0IGF5ID0gTWF0aC5tYXgoZHksIDApO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkpICsgTWF0aC5taW4oTWF0aC5tYXgoZHgsIGR5KSwgMCkgLSB0aGlzLnNkZlJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVNERlYocDogQzJWZWMyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVNERihwLngsIHAueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUdlb21ldHJ5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGV4dGVudHMgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGNlbnRlciwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5leHRlbnRzLmdldEludG8oZXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0UmVjdFBvaW50SW50b0YoY2VudGVyLCBjZW50ZXIueCwgY2VudGVyLnksIGV4dGVudHMueCwgZXh0ZW50cy55LCAwLCAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY1ggPSBjZW50ZXIueDtcclxuICAgICAgICBjb25zdCBjWSA9IGNlbnRlci55O1xyXG4gICAgICAgIGNvbnN0IGVYID0gZXh0ZW50cy54O1xyXG4gICAgICAgIGNvbnN0IGVZID0gZXh0ZW50cy55O1xyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLm1pbih0aGlzLmRhdGEuY29ybmVyUmFkaXVzLmdldChzcGFjZSksIGVYLCBlWSk7XHJcbiAgICAgICAgY29uc3QgayA9IHIgKiB0aGlzLmRhdGEuY29ybmVyVGVuc2lvbi5nZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy52ZWNORS5zZXQoY1ggKyBlWCwgY1kgKyBlWSk7XHJcbiAgICAgICAgdGhpcy52ZWNOVy5zZXQoY1ggLSBlWCwgY1kgKyBlWSk7XHJcbiAgICAgICAgdGhpcy52ZWNTVy5zZXQoY1ggLSBlWCwgY1kgLSBlWSk7XHJcbiAgICAgICAgdGhpcy52ZWNTRS5zZXQoY1ggKyBlWCwgY1kgLSBlWSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ybmVyTkUwLmNvcHkodGhpcy52ZWNORSkuYWRkKDAsIC1yKTtcclxuICAgICAgICB0aGlzLmNvcm5lck5FMS5jb3B5KHRoaXMudmVjTkUpLmFkZCgwLCAtciArIGspO1xyXG4gICAgICAgIHRoaXMuY29ybmVyTkUyLmNvcHkodGhpcy52ZWNORSkuYWRkKC1yICsgaywgMCk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJORTMuY29weSh0aGlzLnZlY05FKS5hZGQoLXIsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvcm5lck5XMC5jb3B5KHRoaXMudmVjTlcpLmFkZCgrciwgMCk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJOVzEuY29weSh0aGlzLnZlY05XKS5hZGQoK3IgLSBrLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lck5XMi5jb3B5KHRoaXMudmVjTlcpLmFkZCgwLCAtciArIGspO1xyXG4gICAgICAgIHRoaXMuY29ybmVyTlczLmNvcHkodGhpcy52ZWNOVykuYWRkKDAsIC1yKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb3JuZXJTVzAuY29weSh0aGlzLnZlY1NXKS5hZGQoMCwgK3IpO1xyXG4gICAgICAgIHRoaXMuY29ybmVyU1cxLmNvcHkodGhpcy52ZWNTVykuYWRkKDAsICtyIC0gayk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJTVzIuY29weSh0aGlzLnZlY1NXKS5hZGQoK3IgLSBrLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lclNXMy5jb3B5KHRoaXMudmVjU1cpLmFkZCgrciwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ybmVyU0UwLmNvcHkodGhpcy52ZWNTRSkuYWRkKC1yLCAwKTtcclxuICAgICAgICB0aGlzLmNvcm5lclNFMS5jb3B5KHRoaXMudmVjU0UpLmFkZCgtciArIGssIDApO1xyXG4gICAgICAgIHRoaXMuY29ybmVyU0UyLmNvcHkodGhpcy52ZWNTRSkuYWRkKDAsICtyIC0gayk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJTRTMuY29weSh0aGlzLnZlY1NFKS5hZGQoMCwgK3IpO1xyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoY2VudGVyKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoZXh0ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVNERigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMuZGF0YS5zcGFjZS5nZXQoKTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKHBvc2l0aW9uLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmV4dGVudHMuZ2V0SW50byh0aGlzLnNkZkV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEuYW5jaG9yLmdldENlbnRlckludG9WKHRoaXMuc2RmQ2VudGVyLCBwb3NpdGlvbiwgdGhpcy5zZGZFeHRlbnRzKTtcclxuICAgICAgICB0aGlzLnNkZlJhZGl1cyA9IE1hdGgubWluKHRoaXMuZGF0YS5jb3JuZXJSYWRpdXMuZ2V0KHNwYWNlKSwgdGhpcy5zZGZFeHRlbnRzLngsIHRoaXMuc2RmRXh0ZW50cy55KTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTREYoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdlb21ldHJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB2aWV3U3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwMCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcDEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHAyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBwMyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgc3BhY2UgPSB0aGlzLmRhdGEuc3BhY2UuZ2V0KCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNvcm5lclJhZGl1cy52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDAsIHRoaXMuY29ybmVyTkUwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMSwgdGhpcy5jb3JuZXJORTEsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAyLCB0aGlzLmNvcm5lck5FMiwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDMsIHRoaXMuY29ybmVyTkUzLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBwMC5yb3VuZCgpO1xyXG4gICAgICAgICAgICBwMy5yb3VuZCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHAwLngsIHAwLnkpO1xyXG4gICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcclxuXHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAwLCB0aGlzLmNvcm5lck5XMCwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDEsIHRoaXMuY29ybmVyTlcxLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMiwgdGhpcy5jb3JuZXJOVzIsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAzLCB0aGlzLmNvcm5lck5XMywgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgcDAucm91bmQoKTtcclxuICAgICAgICAgICAgcDMucm91bmQoKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhwMC54LCBwMC55KTtcclxuICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8ocDEueCwgcDEueSwgcDIueCwgcDIueSwgcDMueCwgcDMueSk7XHJcblxyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMCwgdGhpcy5jb3JuZXJTVzAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvcm5lclNXMSwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHRoaXMuY29ybmVyU1cyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMywgdGhpcy5jb3JuZXJTVzMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHAwLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAzLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDAueCwgcDAueSk7XHJcbiAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHAxLngsIHAxLnksIHAyLngsIHAyLnksIHAzLngsIHAzLnkpO1xyXG5cclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDAsIHRoaXMuY29ybmVyU0UwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMSwgdGhpcy5jb3JuZXJTRTEsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAyLCB0aGlzLmNvcm5lclNFMiwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDMsIHRoaXMuY29ybmVyU0UzLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBwMC5yb3VuZCgpO1xyXG4gICAgICAgICAgICBwMy5yb3VuZCgpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHAwLngsIHAwLnkpO1xyXG4gICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBwMi54LCBwMi55LCBwMy54LCBwMy55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMCwgdGhpcy5jb3JuZXJORTAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHNwYWNlLmNvbnZlcnRQb2ludEludG9WKHAxLCB0aGlzLmNvcm5lck5XMCwgdmlld1NwYWNlKTtcclxuICAgICAgICAgICAgc3BhY2UuY29udmVydFBvaW50SW50b1YocDIsIHRoaXMuY29ybmVyU1cwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFjZS5jb252ZXJ0UG9pbnRJbnRvVihwMywgdGhpcy5jb3JuZXJTRTAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHAwLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAxLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAyLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIHAzLnJvdW5kKCk7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocDAueCwgcDAueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDEueCwgcDEueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocDMueCwgcDMueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5maWxsLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsbC5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0cm9rZS5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0cm9rZS5hcHBseVRvQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwMSk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKHAyKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocDMpO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgdHlwZSBDMkVhc2VUeXBlID0gKHQ6IG51bWJlcikgPT4gbnVtYmVyO1xyXG5leHBvcnQgdHlwZSBDMlBhcmFtRWFzZVR5cGUgPSAocGFyYW0/OiBudW1iZXIpID0+IEMyRWFzZVR5cGU7XHJcblxyXG4vLyBMaW5lYXIgZWFzaW5nIGZ1bmN0aW9uICh0KVxyXG5mdW5jdGlvbiBlYXNlTGluZWFyKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuLy8gUXVhZHJhdGljIGVhc2luZyBmdW5jdGlvbnMgKHReMilcclxuZnVuY3Rpb24gZWFzZUluUXVhZCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHQgKiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0UXVhZCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcyA9IDEgLSB0O1xyXG4gICAgcmV0dXJuIDEgLSBzICogcztcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHQgPCAwLjUpIHtcclxuICAgICAgICByZXR1cm4gMiAqIHQgKiB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgcmV0dXJuIDEgLSAyICogcyAqIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEN1YmljIGVhc2luZyBmdW5jdGlvbnMgKHReMylcclxuZnVuY3Rpb24gZWFzZUluQ3ViaWModDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0ICogdCAqIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcyA9IDEgLSB0O1xyXG4gICAgcmV0dXJuIDEgLSBzICogcyAqIHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodCA8IDAuNSkge1xyXG4gICAgICAgIHJldHVybiA0ICogdCAqIHQgKiB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgcmV0dXJuIDEgLSAyICogcyAqIHMgKiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBRdWFydGljIGVhc2luZyBmdW5jdGlvbnMgKHReNClcclxuZnVuY3Rpb24gZWFzZUluUXVhcnQodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0UXVhcnQodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHMgPSAxIC0gdDtcclxuICAgIHJldHVybiAxIC0gcyAqIHMgKiBzICogcztcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0UXVhcnQodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0IDwgMC41KSB7XHJcbiAgICAgICAgcmV0dXJuIDggKiB0ICogdCAqIHQgKiB0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzID0gMSAtIHQ7XHJcbiAgICAgICAgcmV0dXJuIDEgLSA4ICogcyAqIHMgKiBzICogcztcclxuICAgIH1cclxufVxyXG5cclxuLy8gRXhwb25lbnRpYWwgZWFzaW5nIGZ1bmN0aW9ucyAoMl50KVxyXG5mdW5jdGlvbiBlYXNlSW5FeHBvKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdCA8PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogdCAtIDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZU91dEV4cG8odDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0ID49IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRFeHBvKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gMDtcclxuICAgIGlmICh0ID49IDEpIHJldHVybiAxO1xyXG5cclxuICAgIGlmICh0IDwgMC41KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIDIwICogdCAtIDEwKSAvIDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoMiAtIE1hdGgucG93KDIsIC0yMCAqIHQgKyAxMCkpIC8gMjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2luZSBlYXNpbmcgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIGVhc2VJblNpbmUodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIChNYXRoLlBJIC8gMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0U2luZSh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc2luKHQgKiAoTWF0aC5QSSAvIDIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0U2luZSh0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWFzZVNtb290aFN0ZXAodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0ICogdCAqICgzIC0gMiAqIHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlU21vb3RoZXJTdGVwKHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogKHQgKiAodCAqIDYgLSAxNSkgKyAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlYXNlOiBSZWNvcmQ8c3RyaW5nLCBDMkVhc2VUeXBlPiA9IHtcclxuICAgIGxpbmVhcjogZWFzZUxpbmVhcixcclxuICAgIGluOiBlYXNlSW5RdWFkLFxyXG4gICAgaW5TaW5lOiBlYXNlSW5TaW5lLFxyXG4gICAgaW5RdWFkOiBlYXNlSW5RdWFkLFxyXG4gICAgaW5DdWJpYzogZWFzZUluQ3ViaWMsXHJcbiAgICBpblF1YXJ0OiBlYXNlSW5RdWFydCxcclxuICAgIGluRXhwbzogZWFzZUluRXhwbyxcclxuICAgIG91dDogZWFzZU91dFF1YWQsXHJcbiAgICBvdXRTaW5lOiBlYXNlT3V0U2luZSxcclxuICAgIG91dFF1YWQ6IGVhc2VPdXRRdWFkLFxyXG4gICAgb3V0Q3ViaWM6IGVhc2VPdXRDdWJpYyxcclxuICAgIG91dFF1YXJ0OiBlYXNlT3V0UXVhcnQsXHJcbiAgICBvdXRFeHBvOiBlYXNlT3V0RXhwbyxcclxuICAgIGluT3V0OiBlYXNlSW5PdXRRdWFkLFxyXG4gICAgaW5PdXRTaW5lOiBlYXNlSW5PdXRTaW5lLFxyXG4gICAgaW5PdXRRdWFkOiBlYXNlSW5PdXRRdWFkLFxyXG4gICAgaW5PdXRDdWJpYzogZWFzZUluT3V0Q3ViaWMsXHJcbiAgICBpbk91dFF1YXJ0OiBlYXNlSW5PdXRRdWFydCxcclxuICAgIGluT3V0RXhwbzogZWFzZUluT3V0RXhwbyxcclxuICAgIHNtb290aFN0ZXA6IGVhc2VTbW9vdGhTdGVwLFxyXG4gICAgc21vb3RoZXJTdGVwOiBlYXNlU21vb3RoZXJTdGVwLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZnVuY3Rpb24gZWFzZUluUG93ZXIocG93ZXI6IG51bWJlciA9IDIpOiBDMkVhc2VUeXBlIHtcclxuICAgIHJldHVybiAodDogbnVtYmVyKSA9PiBNYXRoLnBvdyh0LCBwb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRQb3dlcihwb3dlcjogbnVtYmVyID0gMik6IEMyRWFzZVR5cGUge1xyXG4gICAgcmV0dXJuICh0OiBudW1iZXIpID0+IDEgLSBNYXRoLnBvdygxIC0gdCwgcG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlSW5PdXRQb3dlcihwb3dlcjogbnVtYmVyID0gMik6IEMyRWFzZVR5cGUge1xyXG4gICAgcmV0dXJuICh0OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAodCA8IDAuNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coMiAqIHQsIHBvd2VyKSAvIDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnBvdygyICogKDEgLSB0KSwgcG93ZXIpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0QmFjayhvdmVyc2hvb3Q6IG51bWJlciA9IDEuNzAxNTgpOiBDMkVhc2VUeXBlIHtcclxuICAgIHJldHVybiAodDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IDEgLSB0O1xyXG4gICAgICAgIHJldHVybiAxIC0gKDEgKyBvdmVyc2hvb3QpICogcyAqIHMgKiBzICsgb3ZlcnNob290ICogcyAqIHM7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZWFzZVBhcmFtOiBSZWNvcmQ8c3RyaW5nLCBDMlBhcmFtRWFzZVR5cGU+ID0ge1xyXG4gICAgaW5Qb3dlcjogZWFzZUluUG93ZXIsXHJcbiAgICBvdXRQb3dlcjogZWFzZU91dFBvd2VyLFxyXG4gICAgaW5PdXRQb3dlcjogZWFzZUluT3V0UG93ZXIsXHJcbiAgICBvdXRCYWNrOiBlYXNlT3V0QmFjayxcclxufSBhcyBjb25zdDtcclxuXHJcbi8vIGNvbnN0IGhhbGZQSSA9IFBJIC8gMjtcclxuLy8gY29uc3QgZG91YmxlUEkgPSBQSSAqIDI7XHJcbi8vIC8qKiBAdHlwZSB7UG93ZXJFYXNpbmd9ICovXHJcbi8vIGV4cG9ydCBjb25zdCBlYXNlSW5Qb3dlciA9IChwID0gMS42OCkgPT4gdCA9PiBwb3codCwgK3ApO1xyXG5cclxuLy8vKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEVhc2VzRmFjdG9yeXxFYXNpbmdGdW5jdGlvbj59ICovXHJcbi8vIGNvbnN0IGVhc2VJbkZ1bmN0aW9ucyA9IHtcclxuLy8gICBbZW1wdHlTdHJpbmddOiBlYXNlSW5Qb3dlcixcclxuLy8gICBRdWFkOiBlYXNlSW5Qb3dlcigyKSxcclxuLy8gICBDdWJpYzogZWFzZUluUG93ZXIoMyksXHJcbi8vICAgUXVhcnQ6IGVhc2VJblBvd2VyKDQpLFxyXG4vLyAgIFF1aW50OiBlYXNlSW5Qb3dlcig1KSxcclxuLy8gICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xyXG4vLyAgIFNpbmU6IHQgPT4gMSAtIGNvcyh0ICogaGFsZlBJKSxcclxuLy8gICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xyXG4vLyAgIENpcmM6IHQgPT4gMSAtIHNxcnQoMSAtIHQgKiB0KSxcclxuLy8gICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xyXG4vLyAgIEV4cG86IHQgPT4gdCA/IHBvdygyLCAxMCAqIHQgLSAxMCkgOiAwLFxyXG4vLyAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXHJcbi8vICAgQm91bmNlOiB0ID0+IHtcclxuLy8gICAgIGxldCBwb3cyLCBiID0gNDtcclxuLy8gICAgIHdoaWxlICh0IDwgKChwb3cyID0gcG93KDIsIC0tYikpIC0gMSkgLyAxMSk7XHJcbi8vICAgICByZXR1cm4gMSAvIHBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBwb3coKHBvdzIgKiAzIC0gMikgLyAyMiAtIHQsIDIpO1xyXG4vLyAgIH0sXHJcbi8vICAgLyoqIEB0eXBlIHtCYWNrRWFzaW5nfSAqL1xyXG4vLyAgIEJhY2s6IChvdmVyc2hvb3QgPSAxLjcwMTU4KSA9PiB0ID0+ICgrb3ZlcnNob290ICsgMSkgKiB0ICogdCAqIHQgLSArb3ZlcnNob290ICogdCAqIHQsXHJcbi8vICAgLyoqIEB0eXBlIHtFbGFzdGljRWFzaW5nfSAqL1xyXG4vLyAgIEVsYXN0aWM6IChhbXBsaXR1ZGUgPSAxLCBwZXJpb2QgPSAuMykgPT4ge1xyXG4vLyAgICAgY29uc3QgYSA9IGNsYW1wKCthbXBsaXR1ZGUsIDEsIDEwKTtcclxuLy8gICAgIGNvbnN0IHAgPSBjbGFtcCgrcGVyaW9kLCBtaW5WYWx1ZSwgMik7XHJcbi8vICAgICBjb25zdCBzID0gKHAgLyBkb3VibGVQSSkgKiBhc2luKDEgLyBhKTtcclxuLy8gICAgIGNvbnN0IGUgPSBkb3VibGVQSSAvIHA7XHJcbi8vICAgICByZXR1cm4gdCA9PiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDogLWEgKiBwb3coMiwgLTEwICogKDEgLSB0KSkgKiBzaW4oKCgxIC0gdCkgLSBzKSAqIGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLyoqXHJcbi8vICAqIEBjYWxsYmFjayBFYXNlVHlwZVxyXG4vLyAgKiBAcGFyYW0ge0Vhc2luZ0Z1bmN0aW9ufSBFYXNlXHJcbi8vICAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxyXG4vLyAgKi9cclxuXHJcbi8vIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzZVR5cGU+fSAqL1xyXG4vLyBleHBvcnQgY29uc3QgZWFzZVR5cGVzID0ge1xyXG4vLyAgIGluOiBlYXNlSW4gPT4gdCA9PiBlYXNlSW4odCksXHJcbi8vICAgb3V0OiBlYXNlSW4gPT4gdCA9PiAxIC0gZWFzZUluKDEgLSB0KSxcclxuLy8gICBpbk91dDogZWFzZUluID0+IHQgPT4gdCA8IC41ID8gZWFzZUluKHQgKiAyKSAvIDIgOiAxIC0gZWFzZUluKHQgKiAtMiArIDIpIC8gMixcclxuLy8gICBvdXRJbjogZWFzZUluID0+IHQgPT4gdCA8IC41ID8gKDEgLSBlYXNlSW4oMSAtIHQgKiAyKSkgLyAyIDogKGVhc2VJbih0ICogMiAtIDEpICsgMSkgLyAyLFxyXG4vLyB9XHJcbiIsICJpbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSwgQzJIYXNMZXJwIH0gZnJvbSAnLi9jMi1iYXNlLXR5cGUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2UgfSBmcm9tICcuLi9tYXRoL2MyLXNwYWNlJztcclxuaW1wb3J0IHsgQzJCYXNlVHlwZSB9IGZyb20gJy4vYzItYmFzZS10eXBlJztcclxuaW1wb3J0IHsgQzJWZWMyIH0gZnJvbSAnLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyT2Zmc2V0IGV4dGVuZHMgQzJCYXNlVHlwZSBpbXBsZW1lbnRzIEMySGFzQ2xvbmU8QzJPZmZzZXQ+LCBDMkhhc0NvcHk8QzJPZmZzZXQ+LCBDMkhhc0xlcnA8QzJPZmZzZXQ+IHtcclxuICAgIHJlYWRvbmx5IGtpbmQgPSAnb2Zmc2V0JyBhcyBjb25zdDtcclxuICAgIHB1YmxpYyB2YWx1ZTogQzJWZWMyO1xyXG4gICAgcHVibGljIHNwYWNlOiBDMlNwYWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNwYWNlOiBDMlNwYWNlLCBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IEMyVmVjMih4LCB5KTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gc3BhY2U7XHJcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBsb2NrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQzJPZmZzZXQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQzJPZmZzZXQodGhpcy5zY2VuZSwgdGhpcy52YWx1ZS54LCB0aGlzLnZhbHVlLnksIHRoaXMuc3BhY2UsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5SWZVbmxvY2tlZChvdGhlcjogQzJPZmZzZXQpOiB0aGlzIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkob3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob3RoZXI6IEMyT2Zmc2V0KTogdGhpcyB7XHJcbiAgICAgICAgaWYgKEMyVmVjMi5lcXVhbHNWKHRoaXMudmFsdWUsIG90aGVyLnZhbHVlKSAmJiB0aGlzLnNwYWNlID09PSBvdGhlci5zcGFjZSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5jb3B5KG90aGVyLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNwYWNlID0gb3RoZXIuc3BhY2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycChzdGF0ZTA6IEMyT2Zmc2V0LCBzdGF0ZTE6IEMyT2Zmc2V0LCB0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHN0YXRlMS5zcGFjZTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUwID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTEgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHN0YXRlMC5nZXRJbnRvKHZhbHVlMCwgc3BhY2UpO1xyXG4gICAgICAgIHN0YXRlMS5nZXRJbnRvKHZhbHVlMSwgc3BhY2UpO1xyXG4gICAgICAgIEMyVmVjMi5sZXJwVih0aGlzLnZhbHVlLCB2YWx1ZTAsIHZhbHVlMSwgdCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTApO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh2YWx1ZTEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKHN0YXRlMDogQzJPZmZzZXQsIHN0YXRlMTogQzJPZmZzZXQsIHQ6IG51bWJlcik6IEMyT2Zmc2V0IHtcclxuICAgICAgICByZXR1cm4gbmV3IEMyT2Zmc2V0KHN0YXRlMS5zY2VuZSwgMCwgMCwgc3RhdGUxLnNwYWNlKS5sZXJwKHN0YXRlMCwgc3RhdGUxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgc3BhY2U/OiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUueCA9PT0geCAmJiB0aGlzLnZhbHVlLnkgPT09IHkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0KHgsIHkpO1xyXG4gICAgICAgIGlmIChzcGFjZSkgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFYob2Zmc2V0OiBDMlZlYzIsIHNwYWNlPzogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIGlmIChDMlZlYzIuZXF1YWxzVih0aGlzLnZhbHVlLCBvZmZzZXQpICYmIHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnZhbHVlLmNvcHkob2Zmc2V0KTtcclxuICAgICAgICBpZiAoc3BhY2UpIHRoaXMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZUZyb21TcGFjZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICBpZiAoQzJWZWMyLmVxdWFscyh0aGlzLnZhbHVlLngsIHRoaXMudmFsdWUueSwgeCwgeSkgJiYgdGhpcy5zcGFjZSA9PT0gc3BhY2UpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIHNwYWNlLmNvbnZlcnRPZmZzZXRJbnRvKHRoaXMudmFsdWUsIHgsIHksIHRoaXMuc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbVNwYWNlVihvZmZzZXQ6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZUZyb21TcGFjZShvZmZzZXQueCwgb2Zmc2V0LnksIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc3BhY2UuY29udmVydE9mZnNldEludG9WKGRzdCwgdGhpcy52YWx1ZSwgc3BhY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNwYWNlKHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhY2UgPT09IHNwYWNlKSByZXR1cm4gdGhpcztcclxuICAgICAgICB0aGlzLnNwYWNlLmNvbnZlcnRPZmZzZXRJbnRvVih0aGlzLnZhbHVlLCB0aGlzLnZhbHVlLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIC8vIE5vIG1hcmtEaXJ0eSgpIGJlY2F1c2UgdGhlIHBvaW50IHZhbHVlIGRpZCBub3QgY2hhbmdlXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4uLy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMkZpbGxEYXRhLCBDMkZvbnREYXRhLCBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgeyBDMk9mZnNldCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1vZmZzZXQnO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMkdyYXBoaWNzRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlRleHREYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGw6IEMyRmlsbERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IEMyUG9pbnQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb2Zmc2V0OiBDMk9mZnNldDtcclxuICAgIHB1YmxpYyByZWFkb25seSBmb250OiBDMkZvbnREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRleHRBbmNob3I6IEMyTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgQzJGb250RGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFdvcmxkU3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgQzJPZmZzZXQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDApO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlLmlzRW5hYmxlZC5zZXQoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDMkJhc2VUZXh0PERhdGEgZXh0ZW5kcyBDMlRleHREYXRhPiBleHRlbmRzIEMyR3JhcGhpY3NFbGVtZW50PERhdGE+IHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2VudGVyOiBDMlBvaW50O1xyXG4gICAgcHJvdGVjdGVkIGFzY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBkZXNjZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSwgZGF0YTogRGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmV4dGVudHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRWaWV3U3BhY2UoKSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgQzJQb2ludChzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50ZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY2VudGVyLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgoc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpLmNvbnZlcnRMZW5ndGgodGhpcy53aWR0aCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoUHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250QXNjZW50KHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKS5jb252ZXJ0TGVuZ3RoKHRoaXMuYXNjZW50LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9udEFzY2VudFB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnREZXNjZW50KHNwYWNlOiBDMlNwYWNlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKS5jb252ZXJ0TGVuZ3RoKHRoaXMuZGVzY2VudCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnREZXNjZW50UHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnRIZWlnaHQoc3BhY2U6IEMyU3BhY2UpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpLmNvbnZlcnRMZW5ndGgodGhpcy5hc2NlbnQgKyB0aGlzLmRlc2NlbnQsIHNwYWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb250SGVpZ2h0UHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc2NlbnQgKyB0aGlzLmRlc2NlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgIC8vICAgICBjb25zdCBmb250QXNjZW50ID0gdGhpcy5nZXRGb250QXNjZW50UHgoKTtcclxuICAgIC8vICAgICBjb25zdCBmb250RGVzY2VudCA9IHRoaXMuZ2V0Rm9udERlc2NlbnRQeCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aFB4KCk7XHJcbiAgICAvLyAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgIC8vICAgICB0aGlzLmdldFBvc2l0aW9uSW50byhkc3QsIHZpZXdTcGFjZSk7XHJcbiAgICAvLyAgICAgZHN0LnkgKz0gLTAuNSAqIChmb250QXNjZW50IC0gZm9udERlc2NlbnQpO1xyXG4gICAgLy8gICAgIGRzdC54ICs9IC0wLjUgKiB0aGlzLmRhdGEudGV4dEFuY2hvci5nZXQoKSAqIHdpZHRoO1xyXG4gICAgLy8gICAgIHZpZXdTcGFjZS5jb252ZXJ0UG9pbnRJbnRvKGRzdCwgZHN0LngsIGRzdC55LCBzcGFjZSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyQmFzZVRleHQsIEMyVGV4dERhdGEgfSBmcm9tICcuL2MyLWJhc2UtdGV4dCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJCYXNlUGxhaW5UZXh0PERhdGEgZXh0ZW5kcyBDMlRleHREYXRhPiBleHRlbmRzIEMyQmFzZVRleHQ8RGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIGNvbnRlbnQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJvdGVjdGVkIG1ldHJpY3M6IFRleHRNZXRyaWNzIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCBkYXRhOiBEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gdGhpcy5zY2VuZS5nZXRWaWV3U3BhY2UoKTtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLnNjZW5lLmdldENvbnRleHQoKTtcclxuICAgICAgICBjb25zdCB2ZWNQb29sID0gdGhpcy5zY2VuZS5nZXRWZWNQb29sKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5mb250LmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzID0gY3R4Lm1lYXN1cmVUZXh0KHRoaXMuY29udGVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXNjZW50ID0gdGhpcy5tZXRyaWNzLmZvbnRCb3VuZGluZ0JveEFzY2VudDtcclxuICAgICAgICB0aGlzLmRlc2NlbnQgPSB0aGlzLm1ldHJpY3MuZm9udEJvdW5kaW5nQm94RGVzY2VudDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tZXRyaWNzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMubWV0cmljcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICh0aGlzLm1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgdGhpcy5tZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpIC8gMixcclxuICAgICAgICAgICAgdmlld1NwYWNlLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRQb3NpdGlvbkludG8oY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNlbnRlci55ICs9IC0wLjUgKiAodGhpcy5hc2NlbnQgLSB0aGlzLmRlc2NlbnQpO1xyXG4gICAgICAgIGNlbnRlci54ICs9IC0wLjUgKiB0aGlzLmRhdGEudGV4dEFuY2hvci5nZXQoKSAqIHRoaXMud2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyLnNldFYoY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjZW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdmlld1NwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmZvbnQuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBleHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhwb3NpdGlvbiwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEub2Zmc2V0LmdldEludG8ob2Zmc2V0LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5nZXRJbnRvKGV4dGVudHMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgcG9zaXRpb24uYWRkVihvZmZzZXQpO1xyXG4gICAgICAgIHBvc2l0aW9uLnggLT0gdGhpcy5kYXRhLnRleHRBbmNob3IuZ2V0KCkgKiBleHRlbnRzLng7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc3Ryb2tlLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3Ryb2tlLmFwcGx5VG9Db250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KHRoaXMuY29udGVudCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZmlsbC5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbGwuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuY29udGVudCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb3NpdGlvbik7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKG9mZnNldCk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGV4dGVudHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJQbGFpblRleHQgZXh0ZW5kcyBDMkJhc2VQbGFpblRleHQ8QzJUZXh0RGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlRleHREYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB7IEMyUGxhaW5UZXh0IH0gZnJvbSAnLi9jMi1wbGFpbi10ZXh0JztcclxuaW1wb3J0IHsgQzJCYXNlVGV4dCwgQzJUZXh0RGF0YSB9IGZyb20gJy4vYzItYmFzZS10ZXh0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlNwYW4gZXh0ZW5kcyBDMlBsYWluVGV4dCB7XHJcbiAgICBwcm90ZWN0ZWQgY2F0ZWdvcnk6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXRlZ29yeSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkJhc2VSaWNoVGV4dDxEYXRhIGV4dGVuZHMgQzJUZXh0RGF0YT4gZXh0ZW5kcyBDMkJhc2VUZXh0PERhdGE+IHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBzcGFuczogQzJTcGFuW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIGRhdGE6IERhdGEpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3Bhbihjb250ZW50OiBzdHJpbmcsIGNhdGVnb3J5Pzogc3RyaW5nKTogQzJTcGFuIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gbmV3IEMyU3Bhbih0aGlzLnNjZW5lKTtcclxuICAgICAgICBzcGFuLmRhdGEudXBkYXRlLmlzTWFuYWdlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgc3Bhbi5zZXRDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIHNwYW4uc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkgPz8gJycpO1xyXG4gICAgICAgIHRoaXMuc3BhbnMucHVzaChzcGFuKTtcclxuICAgICAgICByZXR1cm4gc3BhbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFucygpOiBBcnJheTxDMlNwYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFucztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGFuQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFucy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BhbihpbmRleDogbnVtYmVyKTogQzJTcGFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFuc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZmluZFNwYW4ob3B0aW9uczogeyBjb250ZW50Pzogc3RyaW5nOyBjYXRlZ29yeT86IHN0cmluZyB9KTogQzJTcGFuIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFucy5maW5kKChzcGFuKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5jb250ZW50ID8gc3Bhbi5nZXRDb250ZW50KCkgPT09IG9wdGlvbnMuY29udGVudCA6IHRydWUpICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5jYXRlZ29yeSA/IHNwYW4uZ2V0Q2F0ZWdvcnkoKSA9PT0gb3B0aW9ucy5jYXRlZ29yeSA6IHRydWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwYW4gb2YgdGhpcy5zcGFucykge1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5kYXRhLmlzRW5hYmxlZC5zZXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuYXNjZW50ID0gMDtcclxuICAgICAgICB0aGlzLmRlc2NlbnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlckxheWVyID0gdGhpcy5kYXRhLnJlbmRlci5sYXllcjtcclxuICAgICAgICBjb25zdCB1cGRhdGVFbmFibGVkID0gdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKTtcclxuICAgICAgICBjb25zdCByZW5kZXJFbmFibGVkID0gdGhpcy5kYXRhLnJlbmRlci5pc0VuYWJsZWQuZ2V0KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzcGFuIG9mIHRoaXMuc3BhbnMpIHtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLmZvbnQuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmZvbnQpO1xyXG4gICAgICAgICAgICBzcGFuLmRhdGEuZmlsbC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuZmlsbCk7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS5zdHJva2UuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLnN0cm9rZSk7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS51cGRhdGUuaXNNYW5hZ2VkLnNldCh0cnVlKTtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLnJlbmRlci5sYXllci5jb3B5SWZVbmxvY2tlZChyZW5kZXJMYXllcik7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS5pc0VuYWJsZWQuc2V0KHVwZGF0ZUVuYWJsZWQpO1xyXG4gICAgICAgICAgICBzcGFuLmRhdGEucmVuZGVyLmlzRW5hYmxlZC5zZXQocmVuZGVyRW5hYmxlZCk7XHJcbiAgICAgICAgICAgIHNwYW4uZGF0YS50ZXh0QW5jaG9yLnNldCgtMSk7XHJcbiAgICAgICAgICAgIHNwYW4udXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHNwYW4uZ2V0V2lkdGhQeCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFzY2VudCA9IE1hdGgubWF4KHRoaXMuYXNjZW50LCBzcGFuLmdldEZvbnRBc2NlbnRQeCgpKTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjZW50ID0gTWF0aC5tYXgodGhpcy5kZXNjZW50LCBzcGFuLmdldEZvbnREZXNjZW50UHgoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2aWV3U3BhY2UgPSB0aGlzLnNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXQodGhpcy53aWR0aCAvIDIsICh0aGlzLmFzY2VudCArIHRoaXMuZGVzY2VudCkgLyAyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc2l0aW9uLmdldEludG8ocG9zaXRpb24sIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgcG9zaXRpb24ueCAtPSAwLjUgKiAoMSArIHRoaXMuZGF0YS50ZXh0QW5jaG9yLmdldCgpKSAqIHRoaXMud2lkdGg7XHJcbiAgICAgICAgZm9yIChjb25zdCBzcGFuIG9mIHRoaXMuc3BhbnMpIHtcclxuICAgICAgICAgICAgc3Bhbi5kYXRhLnBvc2l0aW9uLnNldFYocG9zaXRpb24sIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKz0gc3Bhbi5nZXRXaWR0aFB4KCk7XHJcbiAgICAgICAgICAgIHNwYW4udXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0UG9zaXRpb25JbnRvKGNlbnRlciwgdmlld1NwYWNlKTtcclxuICAgICAgICBjZW50ZXIueSArPSAtMC41ICogKHRoaXMuYXNjZW50IC0gdGhpcy5kZXNjZW50KTtcclxuICAgICAgICBjZW50ZXIueCArPSAtMC41ICogdGhpcy5kYXRhLnRleHRBbmNob3IuZ2V0KCkgKiB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2VudGVyLnNldFYoY2VudGVyLCB2aWV3U3BhY2UpO1xyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoY2VudGVyKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdmlld1NwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdm9pZCBjdHg7XHJcbiAgICAgICAgdm9pZCB2aWV3U3BhY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlJpY2hUZXh0IGV4dGVuZHMgQzJCYXNlUmljaFRleHQ8QzJUZXh0RGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlRleHREYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJTcGFjZSB9IGZyb20gJy4uLy4uL21hdGgvYzItc3BhY2UnO1xyXG5pbXBvcnQgdHlwZSB7IEMyVmVjMiB9IGZyb20gJy4uLy4uL21hdGgvYzItdmVjMic7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHsgQzJBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItYW5jaG9yJztcclxuaW1wb3J0IHsgQzJFeHRlbnRzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWV4dGVudHMnO1xyXG5pbXBvcnQgeyBDMkxlbmd0aCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1sZW5ndGgnO1xyXG5pbXBvcnQgeyBDMk51bWJlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgeyBDMlBvaW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLXBvaW50JztcclxuaW1wb3J0IHsgQzJTcGFjZVJlZiB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1zcGFjZS1yZWYnO1xyXG5pbXBvcnQgeyBDMkVsZW1lbnQsIHR5cGUgQzJIYXNCb3VuZHMgfSBmcm9tICcuLi9iYXNlL2MyLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBDMkZpbGxEYXRhLCBDMkZvbnREYXRhLCBDMkdyYXBoaWNzRGF0YSwgQzJTdHJva2VEYXRhIH0gZnJvbSAnLi4vYmFzZS9jMi1lbGVtZW50LWRhdGEnO1xyXG5pbXBvcnQgeyBDMlRleHREYXRhIH0gZnJvbSAnLi9jMi1iYXNlLXRleHQnO1xyXG5pbXBvcnQgeyBDMkJhc2VSaWNoVGV4dCB9IGZyb20gJy4vYzItcmljaC10ZXh0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlRleHRMaW5lRGF0YSBleHRlbmRzIEMyVGV4dERhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNraXA6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGhvcml6b250YWxBbGlnbjogQzJOdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc2tpcCA9IG5ldyBDMkxlbmd0aChzY2VuZSwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEFsaWduID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMlRleHRMaW5lIGV4dGVuZHMgQzJCYXNlUmljaFRleHQ8QzJUZXh0TGluZURhdGE+IHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBuZXcgQzJUZXh0TGluZURhdGEoc2NlbmUpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGV4dEdyb3VwRGF0YSBleHRlbmRzIEMyR3JhcGhpY3NEYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzcGFjZTogQzJTcGFjZVJlZjtcclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxsOiBDMkZpbGxEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0cm9rZTogQzJTdHJva2VEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBDMlBvaW50O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBmb250OiBDMkZvbnREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNraXA6IEMyTGVuZ3RoO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGhvcml6b250YWxBbGlnbjogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVydGljYWxBbGlnbjogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWluRXh0ZW50czogQzJFeHRlbnRzO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGFuY2hvcjogQzJBbmNob3I7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIGNvbnN0IHdvcmxkU3BhY2UgPSBzY2VuZS5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG5ldyBDMlNwYWNlUmVmKHNjZW5lLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLmZpbGwgPSBuZXcgQzJGaWxsRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgQzJTdHJva2VEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgQzJGb250RGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuc2tpcCA9IG5ldyBDMkxlbmd0aChzY2VuZSwgMCwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxBbGlnbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgLTEpO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbiA9IG5ldyBDMk51bWJlcihzY2VuZSwgLTEpO1xyXG4gICAgICAgIHRoaXMubWluRXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yID0gbmV3IEMyQW5jaG9yKHNjZW5lLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnN0cm9rZS5pc0VuYWJsZWQuc2V0KGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGV4dEdyb3VwIGV4dGVuZHMgQzJFbGVtZW50PEMyVGV4dEdyb3VwRGF0YT4gaW1wbGVtZW50cyBDMkhhc0JvdW5kcyB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dExpbmVzOiBDMlRleHRMaW5lW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjZW50ZXI6IEMyUG9pbnQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXh0ZW50czogQzJFeHRlbnRzO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHRleHRFeHRlbnRzOiBDMkV4dGVudHM7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIG5ldyBDMlRleHRHcm91cERhdGEoc2NlbmUpKTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBDMlBvaW50KHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRXb3JsZFNwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICB0aGlzLnRleHRFeHRlbnRzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmUob3B0aW9ucz86IHsgYWxpZ24/OiBudW1iZXI7IHNraXA/OiBudW1iZXIgfSk6IEMyVGV4dExpbmUge1xyXG4gICAgICAgIGNvbnN0IHRleHRMaW5lID0gbmV3IEMyVGV4dExpbmUodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnM/LmFsaWduICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGV4dExpbmUuZGF0YS5ob3Jpem9udGFsQWxpZ24uc2V0KG9wdGlvbnMuYWxpZ24pO1xyXG4gICAgICAgICAgICB0ZXh0TGluZS5kYXRhLmhvcml6b250YWxBbGlnbi5sb2NrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zPy5za2lwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGV4dExpbmUuZGF0YS5za2lwLnNldChvcHRpb25zLnNraXApO1xyXG4gICAgICAgICAgICB0ZXh0TGluZS5kYXRhLnNraXAubG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0TGluZS5kYXRhLnVwZGF0ZS5pc01hbmFnZWQuc2V0KHRydWUpO1xyXG4gICAgICAgIHRoaXMudGV4dExpbmVzLnB1c2godGV4dExpbmUpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0TGluZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaW5lQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0TGluZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpbmUoaW5kZXg6IG51bWJlcik6IEMyVGV4dExpbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRMaW5lc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb25JbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV4dGVudHNJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHRFeHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEuYW5jaG9yLmdldENlbnRlckludG8oZHN0LCBzcGFjZSwgdGhpcy5kYXRhLnBvc2l0aW9uLCB0aGlzLmV4dGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCB0aGlzLmRhdGEucG9zaXRpb24sIHRoaXMuZXh0ZW50cywgYW5jaG9yWCwgYW5jaG9yWSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJMYXllciA9IHRoaXMuZGF0YS5yZW5kZXIubGF5ZXI7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRW5hYmxlZCA9IHRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyRW5hYmxlZCA9IHRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGV4dCBzdHlsZXMgKGZvciBjb3JyZWN0IG1lYXN1cmVtZW50KVxyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLnRleHRMaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEuZm9udC5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuZm9udCk7XHJcbiAgICAgICAgICAgIGxpbmUuZGF0YS5maWxsLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5maWxsKTtcclxuICAgICAgICAgICAgbGluZS5kYXRhLnN0cm9rZS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuc3Ryb2tlKTtcclxuICAgICAgICAgICAgbGluZS5kYXRhLmhvcml6b250YWxBbGlnbi5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuaG9yaXpvbnRhbEFsaWduKTtcclxuICAgICAgICAgICAgbGluZS5kYXRhLnNraXAuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLnNraXApO1xyXG5cclxuICAgICAgICAgICAgbGluZS5kYXRhLnJlbmRlci5sYXllci5jb3B5SWZVbmxvY2tlZChyZW5kZXJMYXllcik7XHJcblxyXG4gICAgICAgICAgICBsaW5lLmRhdGEuaXNFbmFibGVkLnNldCh1cGRhdGVFbmFibGVkKTtcclxuICAgICAgICAgICAgbGluZS5kYXRhLnJlbmRlci5pc0VuYWJsZWQuc2V0KHJlbmRlckVuYWJsZWQpO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEudXBkYXRlLmlzTWFuYWdlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxpbmUudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXh0ZW50c1xyXG4gICAgICAgIGNvbnN0IHRleHRFeHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0ZXh0RXh0ZW50cy5zZXQoMCwgMCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHRoaXMudGV4dExpbmVzKSB7XHJcbiAgICAgICAgICAgIHRleHRFeHRlbnRzLnggPSBNYXRoLm1heCh0ZXh0RXh0ZW50cy54LCBsaW5lLmdldFdpZHRoUHgoKSk7XHJcbiAgICAgICAgICAgIHRleHRFeHRlbnRzLnkgKz0gbGluZS5nZXRGb250QXNjZW50UHgoKSArIGxpbmUuZ2V0Rm9udERlc2NlbnRQeCgpICsgbGluZS5kYXRhLnNraXAuZ2V0KHZpZXdTcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRFeHRlbnRzLnNjYWxlKDAuNSk7XHJcbiAgICAgICAgdmlld1NwYWNlLmNvbnZlcnRFeHRlbnRzSW50b1YodGV4dEV4dGVudHMsIHRleHRFeHRlbnRzLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0RXh0ZW50cy5zZXRWKHRleHRFeHRlbnRzLCBzcGFjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwRXh0ZW50cyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLm1pbkV4dGVudHMuZ2V0SW50byhncm91cEV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICBncm91cEV4dGVudHMubWF4Vih0ZXh0RXh0ZW50cyk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLnNldFYoZ3JvdXBFeHRlbnRzLCBzcGFjZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBjZW50ZXJcclxuICAgICAgICB0aGlzLmNlbnRlci5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwQ2VudGVyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGEucG9zaXRpb24uZ2V0SW50byhncm91cENlbnRlciwgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0Q2VudGVySW50b1YoZ3JvdXBDZW50ZXIsIGdyb3VwQ2VudGVyLCBncm91cEV4dGVudHMpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyLnNldFYoZ3JvdXBDZW50ZXIsIHNwYWNlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRleHQgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2QWxpZ24gPSAtdGhpcy5kYXRhLnZlcnRpY2FsQWxpZ24uZ2V0KCk7XHJcbiAgICAgICAgbGV0IGxpbmVZID0gZ3JvdXBDZW50ZXIueSArIHZBbGlnbiAqICh0ZXh0RXh0ZW50cy55IC0gZ3JvdXBFeHRlbnRzLnkpICsgdGV4dEV4dGVudHMueTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy50ZXh0TGluZXMpIHtcclxuICAgICAgICAgICAgbGluZVkgLT0gdmlld1NwYWNlLmNvbnZlcnRMZW5ndGgobGluZS5nZXRGb250QXNjZW50UHgoKSwgc3BhY2UpO1xyXG4gICAgICAgICAgICBjb25zdCBoQWxpZ24gPSBsaW5lLmRhdGEuaG9yaXpvbnRhbEFsaWduLmdldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lWCA9IGdyb3VwQ2VudGVyLnggKyBoQWxpZ24gKiBncm91cEV4dGVudHMueDtcclxuICAgICAgICAgICAgbGluZS5kYXRhLnRleHRBbmNob3Iuc2V0KCtoQWxpZ24pO1xyXG4gICAgICAgICAgICBsaW5lLmRhdGEucG9zaXRpb24uc2V0KGxpbmVYLCBsaW5lWSwgc3BhY2UpO1xyXG4gICAgICAgICAgICBsaW5lLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgbGluZVkgLT0gdmlld1NwYWNlLmNvbnZlcnRMZW5ndGgobGluZS5nZXRGb250RGVzY2VudFB4KCksIHNwYWNlKSArIGxpbmUuZGF0YS5za2lwLmdldChzcGFjZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UodGV4dEV4dGVudHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShncm91cEV4dGVudHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShncm91cENlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCB0eXBlIEMyQ29sb3JOYW1lID0gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBDMkNvbG9yU2NhbGUgPSBudW1iZXI7XHJcbmV4cG9ydCB0eXBlIEMySGV4Q29sb3IgPSBgIyR7c3RyaW5nfWA7XHJcbmV4cG9ydCB0eXBlIEMyUGFsZXR0ZSA9IFJlY29yZDxDMkNvbG9yTmFtZSwgUmVjb3JkPEMyQ29sb3JTY2FsZSwgQzJIZXhDb2xvcj4+O1xyXG5cclxuZXhwb3J0IHR5cGUgQzJDb2xvclRoZW1lTW9kZSA9ICdsaWdodCcgfCAnZGFyayc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJDb2xvclRoZW1lIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBwYWxldHRlOiBDMlBhbGV0dGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFsZXR0ZTogQzJQYWxldHRlKSB7XHJcbiAgICAgICAgdGhpcy5wYWxldHRlID0gcGFsZXR0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcihuYW1lOiBDMkNvbG9yTmFtZSwgc2NhbGU6IEMyQ29sb3JTY2FsZSk6IEMySGV4Q29sb3Ige1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5wYWxldHRlW25hbWVdPy5bc2NhbGVdO1xyXG4gICAgICAgIGlmICghY29sb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2xvciBub3QgZm91bmQ6ICR7bmFtZX0gLyAke3NjYWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgb3BhY2l0eShuYW1lOiBDMkNvbG9yTmFtZSwgc2NhbGU6IEMyQ29sb3JTY2FsZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgaGV4ID0gdGhpcy5jb2xvcihuYW1lLCBzY2FsZSk7XHJcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDkpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFIZXggPSBoZXguc3Vic3RyaW5nKDcsIDkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYWxwaGFIZXgsIDE2KSAvIDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgUzJIZXhDb2xvciwgUzJDb2xvclNjYWxlIH0gZnJvbSAnLi4vY29yZS9zaGFyZWQvczItY29sb3ItdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgZ3JheURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTExMTExJyxcbiAgICAyOiAnIzE5MTkxOScsXG4gICAgMzogJyMyMjIyMjInLFxuICAgIDQ6ICcjMmEyYTJhJyxcbiAgICA1OiAnIzMxMzEzMScsXG4gICAgNjogJyMzYTNhM2EnLFxuICAgIDc6ICcjNDg0ODQ4JyxcbiAgICA4OiAnIzYwNjA2MCcsXG4gICAgOTogJyM2ZTZlNmUnLFxuICAgIDEwOiAnIzdiN2I3YicsXG4gICAgMTE6ICcjYjRiNGI0JyxcbiAgICAxMjogJyNlZWVlZWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyYXlEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMCcsXG4gICAgMjogJyNmZmZmZmYwOScsXG4gICAgMzogJyNmZmZmZmYxMicsXG4gICAgNDogJyNmZmZmZmYxYicsXG4gICAgNTogJyNmZmZmZmYyMicsXG4gICAgNjogJyNmZmZmZmYyYycsXG4gICAgNzogJyNmZmZmZmYzYicsXG4gICAgODogJyNmZmZmZmY1NScsXG4gICAgOTogJyNmZmZmZmY2NCcsXG4gICAgMTA6ICcjZmZmZmZmNzInLFxuICAgIDExOiAnI2ZmZmZmZmFmJyxcbiAgICAxMjogJyNmZmZmZmZlZCcsXG59O1xuXG5leHBvcnQgY29uc3QgbWF1dmVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzEyMTExMycsXG4gICAgMjogJyMxYTE5MWInLFxuICAgIDM6ICcjMjMyMjI1JyxcbiAgICA0OiAnIzJiMjkyZCcsXG4gICAgNTogJyMzMjMwMzUnLFxuICAgIDY6ICcjM2MzOTNmJyxcbiAgICA3OiAnIzQ5NDc0ZScsXG4gICAgODogJyM2MjVmNjknLFxuICAgIDk6ICcjNmY2ZDc4JyxcbiAgICAxMDogJyM3YzdhODUnLFxuICAgIDExOiAnI2I1YjJiYycsXG4gICAgMTI6ICcjZWVlZWYwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXV2ZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDAwMDAwJyxcbiAgICAyOiAnI2Y1ZjRmNjA5JyxcbiAgICAzOiAnI2ViZWFmODE0JyxcbiAgICA0OiAnI2VlZTVmODFkJyxcbiAgICA1OiAnI2VmZTZmZTI1JyxcbiAgICA2OiAnI2YxZTZmZDMwJyxcbiAgICA3OiAnI2VlZTlmZjQwJyxcbiAgICA4OiAnI2VlZTdmZjVkJyxcbiAgICA5OiAnI2VhZTZmZDZlJyxcbiAgICAxMDogJyNlY2U5ZmQ3YycsXG4gICAgMTE6ICcjZjVmMWZmYjcnLFxuICAgIDEyOiAnI2ZkZmRmZmVmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzbGF0ZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTExMTEzJyxcbiAgICAyOiAnIzE4MTkxYicsXG4gICAgMzogJyMyMTIyMjUnLFxuICAgIDQ6ICcjMjcyYTJkJyxcbiAgICA1OiAnIzJlMzEzNScsXG4gICAgNjogJyMzNjNhM2YnLFxuICAgIDc6ICcjNDM0ODRlJyxcbiAgICA4OiAnIzVhNjE2OScsXG4gICAgOTogJyM2OTZlNzcnLFxuICAgIDEwOiAnIzc3N2I4NCcsXG4gICAgMTE6ICcjYjBiNGJhJyxcbiAgICAxMjogJyNlZGVlZjAnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNsYXRlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDAwMDAwMDAnLFxuICAgIDI6ICcjZDhmNGY2MDknLFxuICAgIDM6ICcjZGRlYWY4MTQnLFxuICAgIDQ6ICcjZDNlZGY4MWQnLFxuICAgIDU6ICcjZDllZGZlMjUnLFxuICAgIDY6ICcjZDZlYmZkMzAnLFxuICAgIDc6ICcjZDllZGZmNDAnLFxuICAgIDg6ICcjZDllZGZmNWQnLFxuICAgIDk6ICcjZGZlYmZkNmQnLFxuICAgIDEwOiAnI2U1ZWRmZDdiJyxcbiAgICAxMTogJyNmMWY3ZmViNScsXG4gICAgMTI6ICcjZmNmZGZmZWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhZ2VEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzEwMTIxMScsXG4gICAgMjogJyMxNzE5MTgnLFxuICAgIDM6ICcjMjAyMjIxJyxcbiAgICA0OiAnIzI3MmEyOScsXG4gICAgNTogJyMyZTMxMzAnLFxuICAgIDY6ICcjMzczYjM5JyxcbiAgICA3OiAnIzQ0NDk0NycsXG4gICAgODogJyM1YjYyNWYnLFxuICAgIDk6ICcjNjM3MDZiJyxcbiAgICAxMDogJyM3MTdkNzknLFxuICAgIDExOiAnI2FkYjViMicsXG4gICAgMTI6ICcjZWNlZWVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzYWdlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDAwMDAwMDAnLFxuICAgIDI6ICcjZjBmMmYxMDgnLFxuICAgIDM6ICcjZjNmNWY0MTInLFxuICAgIDQ6ICcjZjJmZWZkMWEnLFxuICAgIDU6ICcjZjFmYmZhMjInLFxuICAgIDY6ICcjZWRmYmY0MmQnLFxuICAgIDc6ICcjZWRmY2Y3M2MnLFxuICAgIDg6ICcjZWJmZGY2NTcnLFxuICAgIDk6ICcjZGZmZGYyNjYnLFxuICAgIDEwOiAnI2U1ZmRmNjc0JyxcbiAgICAxMTogJyNmNGZlZmJiMCcsXG4gICAgMTI6ICcjZmRmZmZlZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IG9saXZlRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMTEyMTAnLFxuICAgIDI6ICcjMTgxOTE3JyxcbiAgICAzOiAnIzIxMjIyMCcsXG4gICAgNDogJyMyODJhMjcnLFxuICAgIDU6ICcjMmYzMTJlJyxcbiAgICA2OiAnIzM4M2EzNicsXG4gICAgNzogJyM0NTQ4NDMnLFxuICAgIDg6ICcjNWM2MjViJyxcbiAgICA5OiAnIzY4NzA2NicsXG4gICAgMTA6ICcjNzY3ZDc0JyxcbiAgICAxMTogJyNhZmI1YWQnLFxuICAgIDEyOiAnI2VjZWVlYycsXG59O1xuXG5leHBvcnQgY29uc3Qgb2xpdmVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMCcsXG4gICAgMjogJyNmMWYyZjAwOCcsXG4gICAgMzogJyNmNGY1ZjMxMicsXG4gICAgNDogJyNmM2ZlZjIxYScsXG4gICAgNTogJyNmMmZiZjEyMicsXG4gICAgNjogJyNmNGZhZWQyYycsXG4gICAgNzogJyNmMmZjZWQzYicsXG4gICAgODogJyNlZGZkZWI1NycsXG4gICAgOTogJyNlYmZkZTc2NicsXG4gICAgMTA6ICcjZjBmZGVjNzQnLFxuICAgIDExOiAnI2Y2ZmVmNGIwJyxcbiAgICAxMjogJyNmZGZmZmRlZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FuZERhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTExMTEwJyxcbiAgICAyOiAnIzE5MTkxOCcsXG4gICAgMzogJyMyMjIyMjEnLFxuICAgIDQ6ICcjMmEyYTI4JyxcbiAgICA1OiAnIzMxMzEyZScsXG4gICAgNjogJyMzYjNhMzcnLFxuICAgIDc6ICcjNDk0ODQ0JyxcbiAgICA4OiAnIzYyNjA1YicsXG4gICAgOTogJyM2ZjZkNjYnLFxuICAgIDEwOiAnIzdjN2I3NCcsXG4gICAgMTE6ICcjYjViM2FkJyxcbiAgICAxMjogJyNlZWVlZWMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhbmREYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMCcsXG4gICAgMjogJyNmNGY0ZjMwOScsXG4gICAgMzogJyNmNmY2ZjUxMycsXG4gICAgNDogJyNmZWZlZjMxYicsXG4gICAgNTogJyNmYmZiZWIyMycsXG4gICAgNjogJyNmZmZhZWQyZCcsXG4gICAgNzogJyNmZmZiZWQzYycsXG4gICAgODogJyNmZmY5ZWI1NycsXG4gICAgOTogJyNmZmZhZTk2NScsXG4gICAgMTA6ICcjZmZmZGVlNzMnLFxuICAgIDExOiAnI2ZmZmNmNGIwJyxcbiAgICAxMjogJyNmZmZmZmRlZCcsXG59O1xuXG5leHBvcnQgY29uc3QgdG9tYXRvRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxODExMTEnLFxuICAgIDI6ICcjMWYxNTEzJyxcbiAgICAzOiAnIzM5MTcxNCcsXG4gICAgNDogJyM0ZTE1MTEnLFxuICAgIDU6ICcjNWUxYzE2JyxcbiAgICA2OiAnIzZlMjkyMCcsXG4gICAgNzogJyM4NTNhMmQnLFxuICAgIDg6ICcjYWM0ZDM5JyxcbiAgICA5OiAnI2U1NGQyZScsXG4gICAgMTA6ICcjZWM2MTQyJyxcbiAgICAxMTogJyNmZjk3N2QnLFxuICAgIDEyOiAnI2ZiZDNjYicsXG59O1xuXG5leHBvcnQgY29uc3QgdG9tYXRvRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZjExMjEyMDgnLFxuICAgIDI6ICcjZmY1NTMzMGYnLFxuICAgIDM6ICcjZmYzNTIzMmInLFxuICAgIDQ6ICcjZmQyMDExNDInLFxuICAgIDU6ICcjZmUzMzIxNTMnLFxuICAgIDY6ICcjZmY0ZjM4NjQnLFxuICAgIDc6ICcjZmQ2NDRhN2QnLFxuICAgIDg6ICcjZmU2ZDRlYTcnLFxuICAgIDk6ICcjZmU1NDMxZTQnLFxuICAgIDEwOiAnI2ZmNjg0N2ViJyxcbiAgICAxMTogJyNmZjk3N2QnLFxuICAgIDEyOiAnI2ZmZDZjZWZiJyxcbn07XG5cbmV4cG9ydCBjb25zdCByZWREYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE5MTExMScsXG4gICAgMjogJyMyMDEzMTQnLFxuICAgIDM6ICcjM2IxMjE5JyxcbiAgICA0OiAnIzUwMGYxYycsXG4gICAgNTogJyM2MTE2MjMnLFxuICAgIDY6ICcjNzIyMzJkJyxcbiAgICA3OiAnIzhjMzMzYScsXG4gICAgODogJyNiNTQ1NDgnLFxuICAgIDk6ICcjZTU0ODRkJyxcbiAgICAxMDogJyNlYzVkNWUnLFxuICAgIDExOiAnI2ZmOTU5MicsXG4gICAgMTI6ICcjZmZkMWQ5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCByZWREYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmNDEyMTIwOScsXG4gICAgMjogJyNmMjJmM2UxMScsXG4gICAgMzogJyNmZjE3M2YyZCcsXG4gICAgNDogJyNmZTBhM2I0NCcsXG4gICAgNTogJyNmZjIwNDc1NicsXG4gICAgNjogJyNmZjNlNTY2OCcsXG4gICAgNzogJyNmZjUzNjE4NCcsXG4gICAgODogJyNmZjVkNjFiMCcsXG4gICAgOTogJyNmZTRlNTRlNCcsXG4gICAgMTA6ICcjZmY2NDY1ZWInLFxuICAgIDExOiAnI2ZmOTU5MicsXG4gICAgMTI6ICcjZmZkMWQ5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBydWJ5RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxOTExMTMnLFxuICAgIDI6ICcjMWUxNTE3JyxcbiAgICAzOiAnIzNhMTQxZScsXG4gICAgNDogJyM0ZTEzMjUnLFxuICAgIDU6ICcjNWUxYTJlJyxcbiAgICA2OiAnIzZmMjUzOScsXG4gICAgNzogJyM4ODM0NDcnLFxuICAgIDg6ICcjYjM0NDVhJyxcbiAgICA5OiAnI2U1NDY2NicsXG4gICAgMTA6ICcjZWM1YTcyJyxcbiAgICAxMTogJyNmZjk0OWQnLFxuICAgIDEyOiAnI2ZlZDJlMScsXG59O1xuXG5leHBvcnQgY29uc3QgcnVieURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2Y0MTI0YTA5JyxcbiAgICAyOiAnI2ZlNWE3ZjBlJyxcbiAgICAzOiAnI2ZmMjM1ZDJjJyxcbiAgICA0OiAnI2ZkMTk1ZTQyJyxcbiAgICA1OiAnI2ZlMmQ2YjUzJyxcbiAgICA2OiAnI2ZmNDQ3NjY1JyxcbiAgICA3OiAnI2ZmNTc3ZDgwJyxcbiAgICA4OiAnI2ZmNWM3Y2FlJyxcbiAgICA5OiAnI2ZlNGM3MGU0JyxcbiAgICAxMDogJyNmZjYxN2JlYicsXG4gICAgMTE6ICcjZmY5NDlkJyxcbiAgICAxMjogJyNmZmQzZTJmZScsXG59O1xuXG5leHBvcnQgY29uc3QgY3JpbXNvbkRhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTkxMTE0JyxcbiAgICAyOiAnIzIwMTMxOCcsXG4gICAgMzogJyMzODE1MjUnLFxuICAgIDQ6ICcjNGQxMjJmJyxcbiAgICA1OiAnIzVjMTgzOScsXG4gICAgNjogJyM2ZDI1NDUnLFxuICAgIDc6ICcjODczMzU2JyxcbiAgICA4OiAnI2IwNDM2ZScsXG4gICAgOTogJyNlOTNkODInLFxuICAgIDEwOiAnI2VlNTE4YScsXG4gICAgMTE6ICcjZmY5MmFkJyxcbiAgICAxMjogJyNmZGQzZTgnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNyaW1zb25EYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmNDEyNjcwOScsXG4gICAgMjogJyNmMjJmN2ExMScsXG4gICAgMzogJyNmZTJhOGIyYScsXG4gICAgNDogJyNmZDE1ODc0MScsXG4gICAgNTogJyNmZDI3OGY1MScsXG4gICAgNjogJyNmZTQ1OTc2MycsXG4gICAgNzogJyNmZDU1OWI3ZicsXG4gICAgODogJyNmZTViOWJhYicsXG4gICAgOTogJyNmZTQxOGRlOCcsXG4gICAgMTA6ICcjZmY1NjkzZWQnLFxuICAgIDExOiAnI2ZmOTJhZCcsXG4gICAgMTI6ICcjZmZkNWVhZmQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHBpbmtEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE5MTExNycsXG4gICAgMjogJyMyMTEyMWQnLFxuICAgIDM6ICcjMzcxNzJmJyxcbiAgICA0OiAnIzRiMTQzZCcsXG4gICAgNTogJyM1OTFjNDcnLFxuICAgIDY6ICcjNjkyOTU1JyxcbiAgICA3OiAnIzgzMzg2OScsXG4gICAgODogJyNhODQ4ODUnLFxuICAgIDk6ICcjZDY0MDlmJyxcbiAgICAxMDogJyNkZTUxYTgnLFxuICAgIDExOiAnI2ZmOGRjYycsXG4gICAgMTI6ICcjZmRkMWVhJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwaW5rRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZjQxMmJjMDknLFxuICAgIDI6ICcjZjQyMGJiMTInLFxuICAgIDM6ICcjZmUzN2NjMjknLFxuICAgIDQ6ICcjZmMxZWM0M2YnLFxuICAgIDU6ICcjZmQzNWMyNGUnLFxuICAgIDY6ICcjZmQ1MWM3NWYnLFxuICAgIDc6ICcjZmQ2MmM4N2InLFxuICAgIDg6ICcjZmY2OGM4YTInLFxuICAgIDk6ICcjZmU0OWJjZDQnLFxuICAgIDEwOiAnI2ZmNWNjMGRjJyxcbiAgICAxMTogJyNmZjhkY2MnLFxuICAgIDEyOiAnI2ZmZDNlY2ZkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwbHVtRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxODExMTgnLFxuICAgIDI6ICcjMjAxMzIwJyxcbiAgICAzOiAnIzM1MWEzNScsXG4gICAgNDogJyM0NTFkNDcnLFxuICAgIDU6ICcjNTEyNDU0JyxcbiAgICA2OiAnIzVlMzA2MScsXG4gICAgNzogJyM3MzQwNzknLFxuICAgIDg6ICcjOTI1NDljJyxcbiAgICA5OiAnI2FiNGFiYScsXG4gICAgMTA6ICcjYjY1OGM0JyxcbiAgICAxMTogJyNlNzk2ZjMnLFxuICAgIDEyOiAnI2Y0ZDRmNCcsXG59O1xuXG5leHBvcnQgY29uc3QgcGx1bURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2YxMTJmMTA4JyxcbiAgICAyOiAnI2YyMmZmMjExJyxcbiAgICAzOiAnI2ZkNGNmZDI3JyxcbiAgICA0OiAnI2Y2NDZmZjNhJyxcbiAgICA1OiAnI2Y0NTVmZjQ4JyxcbiAgICA2OiAnI2Y2NmRmZjU2JyxcbiAgICA3OiAnI2YwN2NmZDcwJyxcbiAgICA4OiAnI2VlODRmZjk1JyxcbiAgICA5OiAnI2U5NjFmZWI2JyxcbiAgICAxMDogJyNlZDcwZmZjMCcsXG4gICAgMTE6ICcjZjE5Y2ZlZjMnLFxuICAgIDEyOiAnI2ZlZGRmZWY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJwbGVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE4MTExYicsXG4gICAgMjogJyMxZTE1MjMnLFxuICAgIDM6ICcjMzAxYzNiJyxcbiAgICA0OiAnIzNkMjI0ZScsXG4gICAgNTogJyM0ODI5NWMnLFxuICAgIDY6ICcjNTQzNDZiJyxcbiAgICA3OiAnIzY2NDI4MicsXG4gICAgODogJyM4NDU3YWEnLFxuICAgIDk6ICcjOGU0ZWM2JyxcbiAgICAxMDogJyM5YTVjZDAnLFxuICAgIDExOiAnI2QxOWRmZicsXG4gICAgMTI6ICcjZWNkOWZhJyxcbn07XG5cbmV4cG9ydCBjb25zdCBwdXJwbGVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNiNDEyZjkwYicsXG4gICAgMjogJyNiNzQ0ZjcxNCcsXG4gICAgMzogJyNjMTUwZmYyZCcsXG4gICAgNDogJyNiYjUzZmQ0MicsXG4gICAgNTogJyNiZTVjZmQ1MScsXG4gICAgNjogJyNjMTZkZmQ2MScsXG4gICAgNzogJyNjMzc4ZmQ3YScsXG4gICAgODogJyNjNDdlZmZhNCcsXG4gICAgOTogJyNiNjYxZmZjMicsXG4gICAgMTA6ICcjYmM2ZmZmY2QnLFxuICAgIDExOiAnI2QxOWRmZicsXG4gICAgMTI6ICcjZjFkZGZmZmEnLFxufTtcblxuZXhwb3J0IGNvbnN0IHZpb2xldERhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTQxMjFmJyxcbiAgICAyOiAnIzFiMTUyNScsXG4gICAgMzogJyMyOTFmNDMnLFxuICAgIDQ6ICcjMzMyNTViJyxcbiAgICA1OiAnIzNjMmU2OScsXG4gICAgNjogJyM0NzM4NzYnLFxuICAgIDc6ICcjNTY0NjhiJyxcbiAgICA4OiAnIzY5NThhZCcsXG4gICAgOTogJyM2ZTU2Y2YnLFxuICAgIDEwOiAnIzdkNjZkOScsXG4gICAgMTE6ICcjYmFhN2ZmJyxcbiAgICAxMjogJyNlMmRkZmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IHZpb2xldERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzQ0MjJmZjBmJyxcbiAgICAyOiAnIzg1M2ZmOTE2JyxcbiAgICAzOiAnIzgzNTRmZTM2JyxcbiAgICA0OiAnIzdkNTFmZDUwJyxcbiAgICA1OiAnIzg0NWZmZDVmJyxcbiAgICA2OiAnIzhmNmNmZDZkJyxcbiAgICA3OiAnIzk4NzlmZjgzJyxcbiAgICA4OiAnIzk3N2RmZWE4JyxcbiAgICA5OiAnIzg2NjhmZmNjJyxcbiAgICAxMDogJyM5MTc2ZmVkNycsXG4gICAgMTE6ICcjYmFhN2ZmJyxcbiAgICAxMjogJyNlM2RlZmZmZScsXG59O1xuXG5leHBvcnQgY29uc3QgaXJpc0Rhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTMxMzFlJyxcbiAgICAyOiAnIzE3MTYyNScsXG4gICAgMzogJyMyMDIyNDgnLFxuICAgIDQ6ICcjMjYyYTY1JyxcbiAgICA1OiAnIzMwMzM3NCcsXG4gICAgNjogJyMzZDNlODInLFxuICAgIDc6ICcjNGE0YTk1JyxcbiAgICA4OiAnIzU5NThiMScsXG4gICAgOTogJyM1YjViZDYnLFxuICAgIDEwOiAnIzZlNmFkZScsXG4gICAgMTE6ICcjYjFhOWZmJyxcbiAgICAxMjogJyNlMGRmZmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGlyaXNEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMzNjM2ZmUwZScsXG4gICAgMjogJyM1NjRiZjkxNicsXG4gICAgMzogJyM1MjViZmYzYicsXG4gICAgNDogJyM0ZDU4ZmY1YScsXG4gICAgNTogJyM1YjYyZmQ2YicsXG4gICAgNjogJyM2ZDZmZmQ3YScsXG4gICAgNzogJyM3Nzc3ZmU4ZScsXG4gICAgODogJyM3YjdhZmVhYycsXG4gICAgOTogJyM2YTZhZmVkNCcsXG4gICAgMTA6ICcjN2Q3OWZmZGMnLFxuICAgIDExOiAnI2IxYTlmZicsXG4gICAgMTI6ICcjZTFlMGZmZmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluZGlnb0Rhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTExMzFmJyxcbiAgICAyOiAnIzE0MTcyNicsXG4gICAgMzogJyMxODI0NDknLFxuICAgIDQ6ICcjMWQyZTYyJyxcbiAgICA1OiAnIzI1Mzk3NCcsXG4gICAgNjogJyMzMDQzODQnLFxuICAgIDc6ICcjM2E0Zjk3JyxcbiAgICA4OiAnIzQzNWRiMScsXG4gICAgOTogJyMzZTYzZGQnLFxuICAgIDEwOiAnIzU0NzJlNCcsXG4gICAgMTE6ICcjOWViMWZmJyxcbiAgICAxMjogJyNkNmUxZmYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluZGlnb0RhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzExMzNmZjBmJyxcbiAgICAyOiAnIzMzNTRmYTE3JyxcbiAgICAzOiAnIzJmNjJmZjNjJyxcbiAgICA0OiAnIzM1NjZmZjU3JyxcbiAgICA1OiAnIzQxNzFmZDZiJyxcbiAgICA2OiAnIzUxNzhmZDdjJyxcbiAgICA3OiAnIzVhN2ZmZjkwJyxcbiAgICA4OiAnIzViODFmZWFjJyxcbiAgICA5OiAnIzQ2NzFmZmRiJyxcbiAgICAxMDogJyM1YzdlZmVlMycsXG4gICAgMTE6ICcjOWViMWZmJyxcbiAgICAxMjogJyNkNmUxZmYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJsdWVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzBkMTUyMCcsXG4gICAgMjogJyMxMTE5MjcnLFxuICAgIDM6ICcjMGQyODQ3JyxcbiAgICA0OiAnIzAwMzM2MicsXG4gICAgNTogJyMwMDQwNzQnLFxuICAgIDY6ICcjMTA0ZDg3JyxcbiAgICA3OiAnIzIwNWQ5ZScsXG4gICAgODogJyMyODcwYmQnLFxuICAgIDk6ICcjMDA5MGZmJyxcbiAgICAxMDogJyMzYjllZmYnLFxuICAgIDExOiAnIzcwYjhmZicsXG4gICAgMTI6ICcjYzJlNmZmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBibHVlRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA0ZGYyMTEnLFxuICAgIDI6ICcjMTE2NmZiMTgnLFxuICAgIDM6ICcjMDA3N2ZmM2EnLFxuICAgIDQ6ICcjMDA3NWZmNTcnLFxuICAgIDU6ICcjMDA4MWZkNmInLFxuICAgIDY6ICcjMGY4OWZkN2YnLFxuICAgIDc6ICcjMmE5MWZlOTgnLFxuICAgIDg6ICcjMzA5NGZlYjknLFxuICAgIDk6ICcjMDA5MGZmJyxcbiAgICAxMDogJyMzYjllZmYnLFxuICAgIDExOiAnIzcwYjhmZicsXG4gICAgMTI6ICcjYzJlNmZmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBjeWFuRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwYjE2MWEnLFxuICAgIDI6ICcjMTAxYjIwJyxcbiAgICAzOiAnIzA4MmMzNicsXG4gICAgNDogJyMwMDM4NDgnLFxuICAgIDU6ICcjMDA0NTU4JyxcbiAgICA2OiAnIzA0NTQ2OCcsXG4gICAgNzogJyMxMjY3N2UnLFxuICAgIDg6ICcjMTE4MDljJyxcbiAgICA5OiAnIzAwYTJjNycsXG4gICAgMTA6ICcjMjNhZmQwJyxcbiAgICAxMTogJyM0Y2NjZTYnLFxuICAgIDEyOiAnI2I2ZWNmNycsXG59O1xuXG5leHBvcnQgY29uc3QgY3lhbkRhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwOTFmNzBhJyxcbiAgICAyOiAnIzAyYTdmMjExJyxcbiAgICAzOiAnIzAwYmVmZDI4JyxcbiAgICA0OiAnIzAwYmFmZjNiJyxcbiAgICA1OiAnIzAwYmVmZDRkJyxcbiAgICA2OiAnIzAwYzdmZDVlJyxcbiAgICA3OiAnIzE0Y2RmZjc1JyxcbiAgICA4OiAnIzExY2ZmZjk1JyxcbiAgICA5OiAnIzAwY2ZmZmMzJyxcbiAgICAxMDogJyMyOGQ2ZmZjZCcsXG4gICAgMTE6ICcjNTJlMWZlZTUnLFxuICAgIDEyOiAnI2JiZjNmZWY3Jyxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZWFsRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZDE1MTQnLFxuICAgIDI6ICcjMTExYzFiJyxcbiAgICAzOiAnIzBkMmQyYScsXG4gICAgNDogJyMwMjNiMzcnLFxuICAgIDU6ICcjMDg0ODQzJyxcbiAgICA2OiAnIzE0NTc1MCcsXG4gICAgNzogJyMxYzY5NjEnLFxuICAgIDg6ICcjMjA3ZTczJyxcbiAgICA5OiAnIzEyYTU5NCcsXG4gICAgMTA6ICcjMGViMzllJyxcbiAgICAxMTogJyMwYmQ4YjYnLFxuICAgIDEyOiAnI2FkZjBkZCcsXG59O1xuXG5leHBvcnQgY29uc3QgdGVhbERhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwZGVhYjA1JyxcbiAgICAyOiAnIzEyZmJlNjBjJyxcbiAgICAzOiAnIzAwZmZlNjFlJyxcbiAgICA0OiAnIzAwZmZlOTJkJyxcbiAgICA1OiAnIzAwZmZlYTNiJyxcbiAgICA2OiAnIzFjZmZlODRiJyxcbiAgICA3OiAnIzJlZmRlODVmJyxcbiAgICA4OiAnIzMyZmZlNzc1JyxcbiAgICA5OiAnIzEzZmZlNDlmJyxcbiAgICAxMDogJyMwZGZmZTBhZScsXG4gICAgMTE6ICcjMGFmZWQ1ZDYnLFxuICAgIDEyOiAnI2I4ZmZlYmVmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBqYWRlRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZDE1MTInLFxuICAgIDI6ICcjMTIxYzE4JyxcbiAgICAzOiAnIzBmMmUyMicsXG4gICAgNDogJyMwYjNiMmMnLFxuICAgIDU6ICcjMTE0ODM3JyxcbiAgICA2OiAnIzFiNTc0NScsXG4gICAgNzogJyMyNDY4NTQnLFxuICAgIDg6ICcjMmE3ZTY4JyxcbiAgICA5OiAnIzI5YTM4MycsXG4gICAgMTA6ICcjMjdiMDhiJyxcbiAgICAxMTogJyMxZmQ4YTQnLFxuICAgIDEyOiAnI2FkZjBkNCcsXG59O1xuXG5leHBvcnQgY29uc3QgamFkZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwZGU0NTA1JyxcbiAgICAyOiAnIzI3ZmJhNjBjJyxcbiAgICAzOiAnIzAyZjk5OTIwJyxcbiAgICA0OiAnIzAwZmZhYTJkJyxcbiAgICA1OiAnIzExZmZiNjNiJyxcbiAgICA2OiAnIzM0ZmZjMjRiJyxcbiAgICA3OiAnIzQ1ZmRjNzVlJyxcbiAgICA4OiAnIzQ4ZmZjZjc1JyxcbiAgICA5OiAnIzM4ZmVjYTlkJyxcbiAgICAxMDogJyMzMWZlYzdhYicsXG4gICAgMTE6ICcjMjFmZWMwZDYnLFxuICAgIDEyOiAnI2I4ZmZlMWVmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBncmVlbkRhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMGUxNTEyJyxcbiAgICAyOiAnIzEyMWIxNycsXG4gICAgMzogJyMxMzJkMjEnLFxuICAgIDQ6ICcjMTEzYjI5JyxcbiAgICA1OiAnIzE3NDkzMycsXG4gICAgNjogJyMyMDU3M2UnLFxuICAgIDc6ICcjMjg2ODRhJyxcbiAgICA4OiAnIzJmN2M1NycsXG4gICAgOTogJyMzMGE0NmMnLFxuICAgIDEwOiAnIzMzYjA3NCcsXG4gICAgMTE6ICcjM2RkNjhjJyxcbiAgICAxMjogJyNiMWYxY2InLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyZWVuRGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBkZTQ1MDUnLFxuICAgIDI6ICcjMjlmOTlkMGInLFxuICAgIDM6ICcjMjJmZjk5MWUnLFxuICAgIDQ6ICcjMTFmZjk5MmQnLFxuICAgIDU6ICcjMmJmZmEyM2MnLFxuICAgIDY6ICcjNDRmZmFhNGInLFxuICAgIDc6ICcjNTBmZGFjNWUnLFxuICAgIDg6ICcjNTRmZmFkNzMnLFxuICAgIDk6ICcjNDRmZmE0OWUnLFxuICAgIDEwOiAnIzQzZmVhNGFiJyxcbiAgICAxMTogJyM0NmZlYTVkNCcsXG4gICAgMTI6ICcjYmJmZmQ3ZjAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyYXNzRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZTE1MTEnLFxuICAgIDI6ICcjMTQxYTE1JyxcbiAgICAzOiAnIzFiMmExZScsXG4gICAgNDogJyMxZDNhMjQnLFxuICAgIDU6ICcjMjU0ODJkJyxcbiAgICA2OiAnIzJkNTczNicsXG4gICAgNzogJyMzNjY3NDAnLFxuICAgIDg6ICcjM2U3OTQ5JyxcbiAgICA5OiAnIzQ2YTc1OCcsXG4gICAgMTA6ICcjNTNiMzY1JyxcbiAgICAxMTogJyM3MWQwODMnLFxuICAgIDEyOiAnI2MyZjBjMicsXG59O1xuXG5leHBvcnQgY29uc3QgZ3Jhc3NEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGRlMTIwNScsXG4gICAgMjogJyM1ZWY3NzgwYScsXG4gICAgMzogJyM3MGZlOGMxYicsXG4gICAgNDogJyM1N2ZmODAyYycsXG4gICAgNTogJyM2OGZmOGIzYicsXG4gICAgNjogJyM3MWZmOGY0YicsXG4gICAgNzogJyM3N2ZkOTI1ZCcsXG4gICAgODogJyM3N2ZkOTA3MCcsXG4gICAgOTogJyM2NWZmODJhMScsXG4gICAgMTA6ICcjNzJmZjhkYWUnLFxuICAgIDExOiAnIzg5ZmY5ZmNkJyxcbiAgICAxMjogJyNjZWZmY2VlZicsXG59O1xuXG5leHBvcnQgY29uc3QgYnJvd25EYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzEyMTEwZicsXG4gICAgMjogJyMxYzE4MTYnLFxuICAgIDM6ICcjMjgyMTFkJyxcbiAgICA0OiAnIzMyMjkyMicsXG4gICAgNTogJyMzZTMxMjgnLFxuICAgIDY6ICcjNGQzYzJmJyxcbiAgICA3OiAnIzYxNGEzOScsXG4gICAgODogJyM3YzVmNDYnLFxuICAgIDk6ICcjYWQ3ZjU4JyxcbiAgICAxMDogJyNiODhjNjcnLFxuICAgIDExOiAnI2RiYjU5NCcsXG4gICAgMTI6ICcjZjJlMWNhJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm93bkRhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzkxMTEwMDAyJyxcbiAgICAyOiAnI2ZiYTY3YzBjJyxcbiAgICAzOiAnI2ZjYjU4YzE5JyxcbiAgICA0OiAnI2ZiYmI4YTI0JyxcbiAgICA1OiAnI2ZjYjg4OTMxJyxcbiAgICA2OiAnI2ZkYmE4NzQxJyxcbiAgICA3OiAnI2ZmYmI4ODU2JyxcbiAgICA4OiAnI2ZmYmU4NzczJyxcbiAgICA5OiAnI2ZlYjg3ZGE4JyxcbiAgICAxMDogJyNmZmMxOGNiMycsXG4gICAgMTE6ICcjZmVkMWFhZDknLFxuICAgIDEyOiAnI2ZlZWNkNGYyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm9uemVEYXJrOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzE0MTExMCcsXG4gICAgMjogJyMxYzE5MTcnLFxuICAgIDM6ICcjMjYyMjIwJyxcbiAgICA0OiAnIzMwMmEyNycsXG4gICAgNTogJyMzYjMzMzAnLFxuICAgIDY6ICcjNDkzZTNhJyxcbiAgICA3OiAnIzVhNGM0NycsXG4gICAgODogJyM2ZjVmNTgnLFxuICAgIDk6ICcjYTE4MDcyJyxcbiAgICAxMDogJyNhZThjN2UnLFxuICAgIDExOiAnI2Q0YjNhNScsXG4gICAgMTI6ICcjZWRlMGQ5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm9uemVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNkMTExMDAwNCcsXG4gICAgMjogJyNmYmJjOTEwYycsXG4gICAgMzogJyNmYWNlYjgxNycsXG4gICAgNDogJyNmYWNkYjYyMicsXG4gICAgNTogJyNmZmQyYzEyZCcsXG4gICAgNjogJyNmZmQxYzAzYycsXG4gICAgNzogJyNmZGQwYzA0ZicsXG4gICAgODogJyNmZmQ2YzU2NScsXG4gICAgOTogJyNmZWM3YjA5YicsXG4gICAgMTA6ICcjZmVjYWI1YTknLFxuICAgIDExOiAnI2ZmZDdjNmQxJyxcbiAgICAxMjogJyNmZmYxZTllYycsXG59O1xuXG5leHBvcnQgY29uc3QgZ29sZERhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTIxMjExJyxcbiAgICAyOiAnIzFiMWExNycsXG4gICAgMzogJyMyNDIzMWYnLFxuICAgIDQ6ICcjMmQyYjI2JyxcbiAgICA1OiAnIzM4MzUyZScsXG4gICAgNjogJyM0NDQwMzknLFxuICAgIDc6ICcjNTQ0ZjQ2JyxcbiAgICA4OiAnIzY5NjI1NicsXG4gICAgOTogJyM5NzgzNjUnLFxuICAgIDEwOiAnI2EzOTA3MycsXG4gICAgMTE6ICcjY2JiOTlmJyxcbiAgICAxMjogJyNlOGUyZDknLFxufTtcblxuZXhwb3J0IGNvbnN0IGdvbGREYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyM5MTkxMTEwMicsXG4gICAgMjogJyNmOWUyOWQwYicsXG4gICAgMzogJyNmOGVjYmIxNScsXG4gICAgNDogJyNmZmVlYzQxZScsXG4gICAgNTogJyNmZWVjYzIyYScsXG4gICAgNjogJyNmZWViY2IzNycsXG4gICAgNzogJyNmZmVkY2Q0OCcsXG4gICAgODogJyNmZGVhY2E1ZicsXG4gICAgOTogJyNmZmRiYTY5MCcsXG4gICAgMTA6ICcjZmVkZmIwOWQnLFxuICAgIDExOiAnI2ZlZTdjNmM4JyxcbiAgICAxMjogJyNmZWY3ZWRlNycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2t5RGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwZDE0MWYnLFxuICAgIDI6ICcjMTExYTI3JyxcbiAgICAzOiAnIzExMjg0MCcsXG4gICAgNDogJyMxMTM1NTUnLFxuICAgIDU6ICcjMTU0NDY3JyxcbiAgICA2OiAnIzFiNTM3YicsXG4gICAgNzogJyMxZjY2OTInLFxuICAgIDg6ICcjMTk3Y2FlJyxcbiAgICA5OiAnIzdjZTJmZScsXG4gICAgMTA6ICcjYThlZWZmJyxcbiAgICAxMTogJyM3NWM3ZjAnLFxuICAgIDEyOiAnI2MyZjNmZicsXG59O1xuXG5leHBvcnQgY29uc3Qgc2t5RGFya0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA0NGZmMGYnLFxuICAgIDI6ICcjMTE3MWZiMTgnLFxuICAgIDM6ICcjMTE4NGZjMzMnLFxuICAgIDQ6ICcjMTI4ZmZmNDknLFxuICAgIDU6ICcjMWM5ZGZkNWQnLFxuICAgIDY6ICcjMjhhNWZmNzInLFxuICAgIDc6ICcjMmJhZGZlOGInLFxuICAgIDg6ICcjMWRiMmZlYTknLFxuICAgIDk6ICcjN2NlM2ZmZmUnLFxuICAgIDEwOiAnI2E4ZWVmZicsXG4gICAgMTE6ICcjN2NkM2ZmZWYnLFxuICAgIDEyOiAnI2MyZjNmZicsXG59O1xuXG5leHBvcnQgY29uc3QgbWludERhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMGUxNTE1JyxcbiAgICAyOiAnIzBmMWIxYicsXG4gICAgMzogJyMwOTJjMmInLFxuICAgIDQ6ICcjMDAzYTM4JyxcbiAgICA1OiAnIzAwNDc0NCcsXG4gICAgNjogJyMxMDU2NTAnLFxuICAgIDc6ICcjMWU2ODVmJyxcbiAgICA4OiAnIzI3N2Y3MCcsXG4gICAgOTogJyM4NmVhZDQnLFxuICAgIDEwOiAnI2E4ZjVlNScsXG4gICAgMTE6ICcjNThkNWJhJyxcbiAgICAxMjogJyNjNGY1ZTEnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1pbnREYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGRlZGUwNScsXG4gICAgMjogJyMwMGY5ZjkwYicsXG4gICAgMzogJyMwMGZmZjYxZCcsXG4gICAgNDogJyMwMGZmZjQyYycsXG4gICAgNTogJyMwMGZmZjIzYScsXG4gICAgNjogJyMwZWZmZWI0YScsXG4gICAgNzogJyMzNGZkZTU1ZScsXG4gICAgODogJyM0MWZmZGY3NicsXG4gICAgOTogJyM5MmZmZTdlOScsXG4gICAgMTA6ICcjYWVmZWVkZjUnLFxuICAgIDExOiAnIzY3ZmZkZWQyJyxcbiAgICAxMjogJyNjYmZlZTlmNScsXG59O1xuXG5leHBvcnQgY29uc3QgbGltZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTExMzBjJyxcbiAgICAyOiAnIzE1MWExMCcsXG4gICAgMzogJyMxZjI5MTcnLFxuICAgIDQ6ICcjMjkzNzFkJyxcbiAgICA1OiAnIzMzNDQyMycsXG4gICAgNjogJyMzZDUyMmEnLFxuICAgIDc6ICcjNDk2MjMxJyxcbiAgICA4OiAnIzU3NzUzOCcsXG4gICAgOTogJyNiZGVlNjMnLFxuICAgIDEwOiAnI2Q0ZmY3MCcsXG4gICAgMTE6ICcjYmRlNTZjJyxcbiAgICAxMjogJyNlM2Y3YmEnLFxufTtcblxuZXhwb3J0IGNvbnN0IGxpbWVEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxMWJiMDAwMycsXG4gICAgMjogJyM3OGY3MDAwYScsXG4gICAgMzogJyM5YmZkNGMxYScsXG4gICAgNDogJyNhN2ZlNWMyOScsXG4gICAgNTogJyNhZmZlNjUzNycsXG4gICAgNjogJyNiMmZlNmQ0NicsXG4gICAgNzogJyNiNmZmNmY1NycsXG4gICAgODogJyNiNmZkNmQ2YycsXG4gICAgOTogJyNjYWZmNjllZCcsXG4gICAgMTA6ICcjZDRmZjcwJyxcbiAgICAxMTogJyNkMWZlNzdlNCcsXG4gICAgMTI6ICcjZTlmZWJmZjcnLFxufTtcblxuZXhwb3J0IGNvbnN0IHllbGxvd0Rhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTQxMjBiJyxcbiAgICAyOiAnIzFiMTgwZicsXG4gICAgMzogJyMyZDIzMDUnLFxuICAgIDQ6ICcjMzYyYjAwJyxcbiAgICA1OiAnIzQzMzUwMCcsXG4gICAgNjogJyM1MjQyMDInLFxuICAgIDc6ICcjNjY1NDE3JyxcbiAgICA4OiAnIzgzNmEyMScsXG4gICAgOTogJyNmZmU2MjknLFxuICAgIDEwOiAnI2ZmZmY1NycsXG4gICAgMTE6ICcjZjVlMTQ3JyxcbiAgICAxMjogJyNmNmVlYjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHllbGxvd0RhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2QxNTEwMDA0JyxcbiAgICAyOiAnI2Y5YjQwMDBiJyxcbiAgICAzOiAnI2ZmYWEwMDFlJyxcbiAgICA0OiAnI2ZkYjcwMDI4JyxcbiAgICA1OiAnI2ZlYmIwMDM2JyxcbiAgICA2OiAnI2ZlYzQwMDQ2JyxcbiAgICA3OiAnI2ZkY2IyMjVjJyxcbiAgICA4OiAnI2ZkY2EzMjdiJyxcbiAgICA5OiAnI2ZmZTYyOScsXG4gICAgMTA6ICcjZmZmZjU3JyxcbiAgICAxMTogJyNmZWU5NDlmNScsXG4gICAgMTI6ICcjZmVmNmJhZjYnLFxufTtcblxuZXhwb3J0IGNvbnN0IGFtYmVyRGFyazogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMxNjEyMGMnLFxuICAgIDI6ICcjMWQxODBmJyxcbiAgICAzOiAnIzMwMjAwOCcsXG4gICAgNDogJyMzZjI3MDAnLFxuICAgIDU6ICcjNGQzMDAwJyxcbiAgICA2OiAnIzVjM2QwNScsXG4gICAgNzogJyM3MTRmMTknLFxuICAgIDg6ICcjOGY2NDI0JyxcbiAgICA5OiAnI2ZmYzUzZCcsXG4gICAgMTA6ICcjZmZkNjBhJyxcbiAgICAxMTogJyNmZmNhMTYnLFxuICAgIDEyOiAnI2ZmZTdiMycsXG59O1xuXG5leHBvcnQgY29uc3QgYW1iZXJEYXJrQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNlNjNjMDAwNicsXG4gICAgMjogJyNmZDliMDAwZCcsXG4gICAgMzogJyNmYTgyMDAyMicsXG4gICAgNDogJyNmYzgyMDAzMicsXG4gICAgNTogJyNmZDhiMDA0MScsXG4gICAgNjogJyNmZDliMDA1MScsXG4gICAgNzogJyNmZmFiMjU2NycsXG4gICAgODogJyNmZmFlMzU4NycsXG4gICAgOTogJyNmZmM1M2QnLFxuICAgIDEwOiAnI2ZmZDYwYScsXG4gICAgMTE6ICcjZmZjYTE2JyxcbiAgICAxMjogJyNmZmU3YjMnLFxufTtcblxuZXhwb3J0IGNvbnN0IG9yYW5nZURhcms6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMTcxMjBlJyxcbiAgICAyOiAnIzFlMTYwZicsXG4gICAgMzogJyMzMzFlMGInLFxuICAgIDQ6ICcjNDYyMTAwJyxcbiAgICA1OiAnIzU2MjgwMCcsXG4gICAgNjogJyM2NjM1MGMnLFxuICAgIDc6ICcjN2U0NTFkJyxcbiAgICA4OiAnI2EzNTgyOScsXG4gICAgOTogJyNmNzZiMTUnLFxuICAgIDEwOiAnI2ZmODAxZicsXG4gICAgMTE6ICcjZmZhMDU3JyxcbiAgICAxMjogJyNmZmUwYzInLFxufTtcblxuZXhwb3J0IGNvbnN0IG9yYW5nZURhcmtBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2VjMzYwMDA3JyxcbiAgICAyOiAnI2ZlNmQwMDBlJyxcbiAgICAzOiAnI2ZiNmEwMDI1JyxcbiAgICA0OiAnI2ZmNTkwMDM5JyxcbiAgICA1OiAnI2ZmNjEwMDRhJyxcbiAgICA2OiAnI2ZkNzUwNDVjJyxcbiAgICA3OiAnI2ZmODMyYzc1JyxcbiAgICA4OiAnI2ZlODQzODlkJyxcbiAgICA5OiAnI2ZlNmQxNWY3JyxcbiAgICAxMDogJyNmZjgwMWYnLFxuICAgIDExOiAnI2ZmYTA1NycsXG4gICAgMTI6ICcjZmZlMGMyJyxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTMkhleENvbG9yLCBTMkNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb3JlL3NoYXJlZC9zMi1jb2xvci10aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBncmF5OiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZjZmNmYycsXG4gICAgMjogJyNmOWY5ZjknLFxuICAgIDM6ICcjZjBmMGYwJyxcbiAgICA0OiAnI2U4ZThlOCcsXG4gICAgNTogJyNlMGUwZTAnLFxuICAgIDY6ICcjZDlkOWQ5JyxcbiAgICA3OiAnI2NlY2VjZScsXG4gICAgODogJyNiYmJiYmInLFxuICAgIDk6ICcjOGQ4ZDhkJyxcbiAgICAxMDogJyM4MzgzODMnLFxuICAgIDExOiAnIzY0NjQ2NCcsXG4gICAgMTI6ICcjMjAyMDIwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBncmF5QTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwMDAwMycsXG4gICAgMjogJyMwMDAwMDAwNicsXG4gICAgMzogJyMwMDAwMDAwZicsXG4gICAgNDogJyMwMDAwMDAxNycsXG4gICAgNTogJyMwMDAwMDAxZicsXG4gICAgNjogJyMwMDAwMDAyNicsXG4gICAgNzogJyMwMDAwMDAzMScsXG4gICAgODogJyMwMDAwMDA0NCcsXG4gICAgOTogJyMwMDAwMDA3MicsXG4gICAgMTA6ICcjMDAwMDAwN2MnLFxuICAgIDExOiAnIzAwMDAwMDliJyxcbiAgICAxMjogJyMwMDAwMDBkZicsXG59O1xuXG5leHBvcnQgY29uc3QgbWF1dmU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmY2ZkJyxcbiAgICAyOiAnI2ZhZjlmYicsXG4gICAgMzogJyNmMmVmZjMnLFxuICAgIDQ6ICcjZWFlN2VjJyxcbiAgICA1OiAnI2UzZGZlNicsXG4gICAgNjogJyNkYmQ4ZTAnLFxuICAgIDc6ICcjZDBjZGQ3JyxcbiAgICA4OiAnI2JjYmFjNycsXG4gICAgOTogJyM4ZThjOTknLFxuICAgIDEwOiAnIzg0ODI4ZScsXG4gICAgMTE6ICcjNjU2MzZkJyxcbiAgICAxMjogJyMyMTFmMjYnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdXZlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyM1NTAwNTUwMycsXG4gICAgMjogJyMyYjAwNTUwNicsXG4gICAgMzogJyMzMDAwNDAxMCcsXG4gICAgNDogJyMyMDAwMzYxOCcsXG4gICAgNTogJyMyMDAwMzgyMCcsXG4gICAgNjogJyMxNDAwMzUyNycsXG4gICAgNzogJyMxMDAwMzMzMicsXG4gICAgODogJyMwODAwMzE0NScsXG4gICAgOTogJyMwNTAwMWQ3MycsXG4gICAgMTA6ICcjMDUwMDE5N2QnLFxuICAgIDExOiAnIzA0MDAxMTljJyxcbiAgICAxMjogJyMwMjAwMDhlMCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2xhdGU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmNmY2ZkJyxcbiAgICAyOiAnI2Y5ZjlmYicsXG4gICAgMzogJyNmMGYwZjMnLFxuICAgIDQ6ICcjZThlOGVjJyxcbiAgICA1OiAnI2UwZTFlNicsXG4gICAgNjogJyNkOWQ5ZTAnLFxuICAgIDc6ICcjY2RjZWQ2JyxcbiAgICA4OiAnI2I5YmJjNicsXG4gICAgOTogJyM4YjhkOTgnLFxuICAgIDEwOiAnIzgwODM4ZCcsXG4gICAgMTE6ICcjNjA2NDZjJyxcbiAgICAxMjogJyMxYzIwMjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNsYXRlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwNTUwMycsXG4gICAgMjogJyMwMDAwNTUwNicsXG4gICAgMzogJyMwMDAwMzMwZicsXG4gICAgNDogJyMwMDAwMmQxNycsXG4gICAgNTogJyMwMDA5MzIxZicsXG4gICAgNjogJyMwMDAwMmYyNicsXG4gICAgNzogJyMwMDA2MmUzMicsXG4gICAgODogJyMwMDA4MzA0NicsXG4gICAgOTogJyMwMDA1MWQ3NCcsXG4gICAgMTA6ICcjMDAwNzFiN2YnLFxuICAgIDExOiAnIzAwMDcxNDlmJyxcbiAgICAxMjogJyMwMDA1MDllMycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FnZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmYmZkZmMnLFxuICAgIDI6ICcjZjdmOWY4JyxcbiAgICAzOiAnI2VlZjFmMCcsXG4gICAgNDogJyNlNmU5ZTgnLFxuICAgIDU6ICcjZGZlMmUwJyxcbiAgICA2OiAnI2Q3ZGFkOScsXG4gICAgNzogJyNjYmNmY2QnLFxuICAgIDg6ICcjYjhiY2JhJyxcbiAgICA5OiAnIzg2OGU4YicsXG4gICAgMTA6ICcjN2M4NDgxJyxcbiAgICAxMTogJyM1ZjY1NjMnLFxuICAgIDEyOiAnIzFhMjExZScsXG59O1xuXG5leHBvcnQgY29uc3Qgc2FnZUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA4MDQwMDQnLFxuICAgIDI6ICcjMDA0MDIwMDgnLFxuICAgIDM6ICcjMDAyZDFlMTEnLFxuICAgIDQ6ICcjMDAxZjE1MTknLFxuICAgIDU6ICcjMDAxODA4MjAnLFxuICAgIDY6ICcjMDAxNDBkMjgnLFxuICAgIDc6ICcjMDAxNDBhMzQnLFxuICAgIDg6ICcjMDAwZjA4NDcnLFxuICAgIDk6ICcjMDAxMTBiNzknLFxuICAgIDEwOiAnIzAwMTAwYTgzJyxcbiAgICAxMTogJyMwMDBhMDdhMCcsXG4gICAgMTI6ICcjMDAwODA1ZTUnLFxufTtcblxuZXhwb3J0IGNvbnN0IG9saXZlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZjZmRmYycsXG4gICAgMjogJyNmOGZhZjgnLFxuICAgIDM6ICcjZWZmMWVmJyxcbiAgICA0OiAnI2U3ZTllNycsXG4gICAgNTogJyNkZmUyZGYnLFxuICAgIDY6ICcjZDdkYWQ3JyxcbiAgICA3OiAnI2NjY2ZjYycsXG4gICAgODogJyNiOWJjYjgnLFxuICAgIDk6ICcjODk4ZTg3JyxcbiAgICAxMDogJyM3Zjg0N2QnLFxuICAgIDExOiAnIzYwNjU1ZicsXG4gICAgMTI6ICcjMWQyMTFjJyxcbn07XG5cbmV4cG9ydCBjb25zdCBvbGl2ZUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDA1NTAwMDMnLFxuICAgIDI6ICcjMDA0OTAwMDcnLFxuICAgIDM6ICcjMDAyMDAwMTAnLFxuICAgIDQ6ICcjMDAxNjAwMTgnLFxuICAgIDU6ICcjMDAxODAwMjAnLFxuICAgIDY6ICcjMDAxNDAwMjgnLFxuICAgIDc6ICcjMDAwZjAwMzMnLFxuICAgIDg6ICcjMDQwZjAwNDcnLFxuICAgIDk6ICcjMDUwZjAwNzgnLFxuICAgIDEwOiAnIzA0MGUwMDgyJyxcbiAgICAxMTogJyMwMjBhMDBhMCcsXG4gICAgMTI6ICcjMDEwNjAwZTMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhbmQ6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmZGZjJyxcbiAgICAyOiAnI2Y5ZjlmOCcsXG4gICAgMzogJyNmMWYwZWYnLFxuICAgIDQ6ICcjZTllOGU2JyxcbiAgICA1OiAnI2UyZTFkZScsXG4gICAgNjogJyNkYWQ5ZDYnLFxuICAgIDc6ICcjY2ZjZWNhJyxcbiAgICA4OiAnI2JjYmJiNScsXG4gICAgOTogJyM4ZDhkODYnLFxuICAgIDEwOiAnIzgyODI3YycsXG4gICAgMTE6ICcjNjM2MzVlJyxcbiAgICAxMjogJyMyMTIwMWMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNhbmRBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzU1NTUwMDAzJyxcbiAgICAyOiAnIzI1MjUwMDA3JyxcbiAgICAzOiAnIzIwMTAwMDEwJyxcbiAgICA0OiAnIzFmMTUwMDE5JyxcbiAgICA1OiAnIzFmMTgwMDIxJyxcbiAgICA2OiAnIzE5MTMwMDI5JyxcbiAgICA3OiAnIzE5MTQwMDM1JyxcbiAgICA4OiAnIzE5MTUwMTRhJyxcbiAgICA5OiAnIzBmMGYwMDc5JyxcbiAgICAxMDogJyMwYzBjMDA4MycsXG4gICAgMTE6ICcjMDgwODAwYTEnLFxuICAgIDEyOiAnIzA2MDUwMGUzJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0b21hdG86IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmZmY2ZjJyxcbiAgICAyOiAnI2ZmZjhmNycsXG4gICAgMzogJyNmZWViZTcnLFxuICAgIDQ6ICcjZmZkY2QzJyxcbiAgICA1OiAnI2ZmY2RjMicsXG4gICAgNjogJyNmZGJkYWYnLFxuICAgIDc6ICcjZjVhODk4JyxcbiAgICA4OiAnI2VjOGU3YicsXG4gICAgOTogJyNlNTRkMmUnLFxuICAgIDEwOiAnI2RkNDQyNScsXG4gICAgMTE6ICcjZDEzNDE1JyxcbiAgICAxMjogJyM1YzI3MWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHRvbWF0b0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmYwMDAwMDMnLFxuICAgIDI6ICcjZmYyMDAwMDgnLFxuICAgIDM6ICcjZjUyYjAwMTgnLFxuICAgIDQ6ICcjZmYzNTAwMmMnLFxuICAgIDU6ICcjZmYyZTAwM2QnLFxuICAgIDY6ICcjZjkyZDAwNTAnLFxuICAgIDc6ICcjZTcyODAwNjcnLFxuICAgIDg6ICcjZGIyNTAwODQnLFxuICAgIDk6ICcjZGYyNjAwZDEnLFxuICAgIDEwOiAnI2Q3MjQwMGRhJyxcbiAgICAxMTogJyNjZDIyMDBlYScsXG4gICAgMTI6ICcjNDYwOTAwZTAnLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlZDogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZmZjZmMnLFxuICAgIDI6ICcjZmZmN2Y3JyxcbiAgICAzOiAnI2ZlZWJlYycsXG4gICAgNDogJyNmZmRiZGMnLFxuICAgIDU6ICcjZmZjZGNlJyxcbiAgICA2OiAnI2ZkYmRiZScsXG4gICAgNzogJyNmNGE5YWEnLFxuICAgIDg6ICcjZWI4ZTkwJyxcbiAgICA5OiAnI2U1NDg0ZCcsXG4gICAgMTA6ICcjZGMzZTQyJyxcbiAgICAxMTogJyNjZTJjMzEnLFxuICAgIDEyOiAnIzY0MTcyMycsXG59O1xuXG5leHBvcnQgY29uc3QgcmVkQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZjAwMDAwMycsXG4gICAgMjogJyNmZjAwMDAwOCcsXG4gICAgMzogJyNmMzAwMGQxNCcsXG4gICAgNDogJyNmZjAwMDgyNCcsXG4gICAgNTogJyNmZjAwMDYzMicsXG4gICAgNjogJyNmODAwMDQ0MicsXG4gICAgNzogJyNkZjAwMDM1NicsXG4gICAgODogJyNkMjAwMDU3MScsXG4gICAgOTogJyNkYjAwMDdiNycsXG4gICAgMTA6ICcjZDEwMDA1YzEnLFxuICAgIDExOiAnI2M0MDAwNmQzJyxcbiAgICAxMjogJyM1NTAwMGRlOCcsXG59O1xuXG5leHBvcnQgY29uc3QgcnVieTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZmZjZmQnLFxuICAgIDI6ICcjZmZmN2Y4JyxcbiAgICAzOiAnI2ZlZWFlZCcsXG4gICAgNDogJyNmZmRjZTEnLFxuICAgIDU6ICcjZmZjZWQ2JyxcbiAgICA2OiAnI2Y4YmZjOCcsXG4gICAgNzogJyNlZmFjYjgnLFxuICAgIDg6ICcjZTU5MmEzJyxcbiAgICA5OiAnI2U1NDY2NicsXG4gICAgMTA6ICcjZGMzYjVkJyxcbiAgICAxMTogJyNjYTI0NGQnLFxuICAgIDEyOiAnIzY0MTcyYicsXG59O1xuXG5leHBvcnQgY29uc3QgcnVieUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmYwMDU1MDMnLFxuICAgIDI6ICcjZmYwMDIwMDgnLFxuICAgIDM6ICcjZjMwMDI1MTUnLFxuICAgIDQ6ICcjZmYwMDI1MjMnLFxuICAgIDU6ICcjZmYwMDJhMzEnLFxuICAgIDY6ICcjZTQwMDI0NDAnLFxuICAgIDc6ICcjY2UwMDI1NTMnLFxuICAgIDg6ICcjYzMwMDI4NmQnLFxuICAgIDk6ICcjZGIwMDJjYjknLFxuICAgIDEwOiAnI2QyMDAyY2M0JyxcbiAgICAxMTogJyNjMTAwMzBkYicsXG4gICAgMTI6ICcjNTUwMDE2ZTgnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNyaW1zb246IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmZmY2ZkJyxcbiAgICAyOiAnI2ZlZjdmOScsXG4gICAgMzogJyNmZmU5ZjAnLFxuICAgIDQ6ICcjZmVkY2U3JyxcbiAgICA1OiAnI2ZhY2VkZCcsXG4gICAgNjogJyNmM2JlZDEnLFxuICAgIDc6ICcjZWFhY2MzJyxcbiAgICA4OiAnI2UwOTNiMicsXG4gICAgOTogJyNlOTNkODInLFxuICAgIDEwOiAnI2RmMzQ3OCcsXG4gICAgMTE6ICcjY2IxZDYzJyxcbiAgICAxMjogJyM2MjE2MzknLFxufTtcblxuZXhwb3J0IGNvbnN0IGNyaW1zb25BOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmMDA1NTAzJyxcbiAgICAyOiAnI2UwMDA0MDA4JyxcbiAgICAzOiAnI2ZmMDA1MjE2JyxcbiAgICA0OiAnI2Y4MDA1MTIzJyxcbiAgICA1OiAnI2U1MDA0ZjMxJyxcbiAgICA2OiAnI2QwMDA0YjQxJyxcbiAgICA3OiAnI2JmMDA0NzUzJyxcbiAgICA4OiAnI2I2MDA0YTZjJyxcbiAgICA5OiAnI2UyMDA1YmMyJyxcbiAgICAxMDogJyNkNzAwNTZjYicsXG4gICAgMTE6ICcjYzQwMDRmZTInLFxuICAgIDEyOiAnIzUzMDAyNmU5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBwaW5rOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZmZmNmZScsXG4gICAgMjogJyNmZWY3ZmInLFxuICAgIDM6ICcjZmVlOWY1JyxcbiAgICA0OiAnI2ZiZGNlZicsXG4gICAgNTogJyNmNmNlZTcnLFxuICAgIDY6ICcjZWZiZmRkJyxcbiAgICA3OiAnI2U3YWNkMCcsXG4gICAgODogJyNkZDkzYzInLFxuICAgIDk6ICcjZDY0MDlmJyxcbiAgICAxMDogJyNjZjM4OTcnLFxuICAgIDExOiAnI2MyMjk4YScsXG4gICAgMTI6ICcjNjUxMjQ5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBwaW5rQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZjAwYWEwMycsXG4gICAgMjogJyNlMDAwODAwOCcsXG4gICAgMzogJyNmNDAwOGMxNicsXG4gICAgNDogJyNlMjAwOGIyMycsXG4gICAgNTogJyNkMTAwODMzMScsXG4gICAgNjogJyNjMDAwNzg0MCcsXG4gICAgNzogJyNiNjAwNmY1MycsXG4gICAgODogJyNhZjAwNmY2YycsXG4gICAgOTogJyNjODAwN2ZiZicsXG4gICAgMTA6ICcjYzIwMDdhYzcnLFxuICAgIDExOiAnI2I2MDA3NGQ2JyxcbiAgICAxMjogJyM1OTAwM2JlZCcsXG59O1xuXG5leHBvcnQgY29uc3QgcGx1bTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZWZjZmYnLFxuICAgIDI6ICcjZmRmN2ZkJyxcbiAgICAzOiAnI2ZiZWJmYicsXG4gICAgNDogJyNmN2RlZjgnLFxuICAgIDU6ICcjZjJkMWYzJyxcbiAgICA2OiAnI2U5YzJlYycsXG4gICAgNzogJyNkZWFkZTMnLFxuICAgIDg6ICcjY2Y5MWQ4JyxcbiAgICA5OiAnI2FiNGFiYScsXG4gICAgMTA6ICcjYTE0NGFmJyxcbiAgICAxMTogJyM5NTNlYTMnLFxuICAgIDEyOiAnIzUzMTk1ZCcsXG59O1xuXG5leHBvcnQgY29uc3QgcGx1bUE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjYWEwMGZmMDMnLFxuICAgIDI6ICcjYzAwMGMwMDgnLFxuICAgIDM6ICcjY2MwMGNjMTQnLFxuICAgIDQ6ICcjYzIwMGM5MjEnLFxuICAgIDU6ICcjYjcwMGJkMmUnLFxuICAgIDY6ICcjYTQwMGIwM2QnLFxuICAgIDc6ICcjOTkwMGE4NTInLFxuICAgIDg6ICcjOTAwMGE1NmUnLFxuICAgIDk6ICcjODkwMDllYjUnLFxuICAgIDEwOiAnIzdmMDA5MmJiJyxcbiAgICAxMTogJyM3MzAwODZjMScsXG4gICAgMTI6ICcjNDAwMDRiZTYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHB1cnBsZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZWZjZmUnLFxuICAgIDI6ICcjZmJmN2ZlJyxcbiAgICAzOiAnI2Y3ZWRmZScsXG4gICAgNDogJyNmMmUyZmMnLFxuICAgIDU6ICcjZWFkNWY5JyxcbiAgICA2OiAnI2UwYzRmNCcsXG4gICAgNzogJyNkMWFmZWMnLFxuICAgIDg6ICcjYmU5M2U0JyxcbiAgICA5OiAnIzhlNGVjNicsXG4gICAgMTA6ICcjODM0N2I5JyxcbiAgICAxMTogJyM4MTQ1YjUnLFxuICAgIDEyOiAnIzQwMjA2MCcsXG59O1xuXG5leHBvcnQgY29uc3QgcHVycGxlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNhYTAwYWEwMycsXG4gICAgMjogJyM4MDAwZTAwOCcsXG4gICAgMzogJyM4ZTAwZjExMicsXG4gICAgNDogJyM4ZDAwZTUxZCcsXG4gICAgNTogJyM4MDAwZGIyYScsXG4gICAgNjogJyM3YTAxZDAzYicsXG4gICAgNzogJyM2ZDAwYzM1MCcsXG4gICAgODogJyM2NjAwYzA2YycsXG4gICAgOTogJyM1YzAwYWRiMScsXG4gICAgMTA6ICcjNTMwMDllYjgnLFxuICAgIDExOiAnIzUyMDA5YWJhJyxcbiAgICAxMjogJyMyNTAwNDlkZicsXG59O1xuXG5leHBvcnQgY29uc3QgdmlvbGV0OiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZkZmNmZScsXG4gICAgMjogJyNmYWY4ZmYnLFxuICAgIDM6ICcjZjRmMGZlJyxcbiAgICA0OiAnI2ViZTRmZicsXG4gICAgNTogJyNlMWQ5ZmYnLFxuICAgIDY6ICcjZDRjYWZlJyxcbiAgICA3OiAnI2MyYjVmNScsXG4gICAgODogJyNhYTk5ZWMnLFxuICAgIDk6ICcjNmU1NmNmJyxcbiAgICAxMDogJyM2NTRkYzQnLFxuICAgIDExOiAnIzY1NTBiOScsXG4gICAgMTI6ICcjMmYyNjVmJyxcbn07XG5cbmV4cG9ydCBjb25zdCB2aW9sZXRBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzU1MDBhYTAzJyxcbiAgICAyOiAnIzQ5MDBmZjA3JyxcbiAgICAzOiAnIzQ0MDBlZTBmJyxcbiAgICA0OiAnIzQzMDBmZjFiJyxcbiAgICA1OiAnIzM2MDBmZjI2JyxcbiAgICA2OiAnIzMxMDBmYjM1JyxcbiAgICA3OiAnIzJkMDFkZDRhJyxcbiAgICA4OiAnIzJiMDBkMDY2JyxcbiAgICA5OiAnIzI0MDBiN2E5JyxcbiAgICAxMDogJyMyMzAwYWJiMicsXG4gICAgMTE6ICcjMWYwMDk5YWYnLFxuICAgIDEyOiAnIzBiMDA0M2Q5Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBpcmlzOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZkZmRmZicsXG4gICAgMjogJyNmOGY4ZmYnLFxuICAgIDM6ICcjZjBmMWZlJyxcbiAgICA0OiAnI2U2ZTdmZicsXG4gICAgNTogJyNkYWRjZmYnLFxuICAgIDY6ICcjY2JjZGZmJyxcbiAgICA3OiAnI2I4YmFmOCcsXG4gICAgODogJyM5YjllZjAnLFxuICAgIDk6ICcjNWI1YmQ2JyxcbiAgICAxMDogJyM1MTUxY2QnLFxuICAgIDExOiAnIzU3NTNjNicsXG4gICAgMTI6ICcjMjcyOTYyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpcmlzQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDAwZmYwMicsXG4gICAgMjogJyMwMDAwZmYwNycsXG4gICAgMzogJyMwMDExZWUwZicsXG4gICAgNDogJyMwMDBiZmYxOScsXG4gICAgNTogJyMwMDBlZmYyNScsXG4gICAgNjogJyMwMDBhZmYzNCcsXG4gICAgNzogJyMwMDA4ZTY0NycsXG4gICAgODogJyMwMDA4ZDk2NCcsXG4gICAgOTogJyMwMDAwYzBhNCcsXG4gICAgMTA6ICcjMDAwMGI2YWUnLFxuICAgIDExOiAnIzA2MDBhYmFjJyxcbiAgICAxMjogJyMwMDAyNDZkOCcsXG59O1xuXG5leHBvcnQgY29uc3QgaW5kaWdvOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZkZmRmZScsXG4gICAgMjogJyNmN2Y5ZmYnLFxuICAgIDM6ICcjZWRmMmZlJyxcbiAgICA0OiAnI2UxZTlmZicsXG4gICAgNTogJyNkMmRlZmYnLFxuICAgIDY6ICcjYzFkMGZmJyxcbiAgICA3OiAnI2FiYmRmOScsXG4gICAgODogJyM4ZGE0ZWYnLFxuICAgIDk6ICcjM2U2M2RkJyxcbiAgICAxMDogJyMzMzU4ZDQnLFxuICAgIDExOiAnIzNhNWJjNycsXG4gICAgMTI6ICcjMWYyZDVjJyxcbn07XG5cbmV4cG9ydCBjb25zdCBpbmRpZ29BOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwMDA4MDAyJyxcbiAgICAyOiAnIzAwNDBmZjA4JyxcbiAgICAzOiAnIzAwNDdmMTEyJyxcbiAgICA0OiAnIzAwNDRmZjFlJyxcbiAgICA1OiAnIzAwNDRmZjJkJyxcbiAgICA2OiAnIzAwM2VmZjNlJyxcbiAgICA3OiAnIzAwMzdlZDU0JyxcbiAgICA4OiAnIzAwMzRkYzcyJyxcbiAgICA5OiAnIzAwMzFkMmMxJyxcbiAgICAxMDogJyMwMDJlYzljYycsXG4gICAgMTE6ICcjMDAyYmI3YzUnLFxuICAgIDEyOiAnIzAwMTA0NmUwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBibHVlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZiZmRmZicsXG4gICAgMjogJyNmNGZhZmYnLFxuICAgIDM6ICcjZTZmNGZlJyxcbiAgICA0OiAnI2Q1ZWZmZicsXG4gICAgNTogJyNjMmU1ZmYnLFxuICAgIDY6ICcjYWNkOGZjJyxcbiAgICA3OiAnIzhlYzhmNicsXG4gICAgODogJyM1ZWIxZWYnLFxuICAgIDk6ICcjMDA5MGZmJyxcbiAgICAxMDogJyMwNTg4ZjAnLFxuICAgIDExOiAnIzBkNzRjZScsXG4gICAgMTI6ICcjMTEzMjY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBibHVlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMDgwZmYwNCcsXG4gICAgMjogJyMwMDhjZmYwYicsXG4gICAgMzogJyMwMDhmZjUxOScsXG4gICAgNDogJyMwMDllZmYyYScsXG4gICAgNTogJyMwMDkzZmYzZCcsXG4gICAgNjogJyMwMDg4ZjY1MycsXG4gICAgNzogJyMwMDgzZWI3MScsXG4gICAgODogJyMwMDg0ZTZhMScsXG4gICAgOTogJyMwMDkwZmYnLFxuICAgIDEwOiAnIzAwODZmMGZhJyxcbiAgICAxMTogJyMwMDZkY2JmMicsXG4gICAgMTI6ICcjMDAyMzU5ZWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGN5YW46IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmFmZGZlJyxcbiAgICAyOiAnI2YyZmFmYicsXG4gICAgMzogJyNkZWY3ZjknLFxuICAgIDQ6ICcjY2FmMWY2JyxcbiAgICA1OiAnI2I1ZTlmMCcsXG4gICAgNjogJyM5ZGRkZTcnLFxuICAgIDc6ICcjN2RjZWRjJyxcbiAgICA4OiAnIzNkYjljZicsXG4gICAgOTogJyMwMGEyYzcnLFxuICAgIDEwOiAnIzA3OTdiOScsXG4gICAgMTE6ICcjMTA3ZDk4JyxcbiAgICAxMjogJyMwZDNjNDgnLFxufTtcblxuZXhwb3J0IGNvbnN0IGN5YW5BOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwOTljYzA1JyxcbiAgICAyOiAnIzAwOWRiMTBkJyxcbiAgICAzOiAnIzAwYzJkMTIxJyxcbiAgICA0OiAnIzAwYmNkNDM1JyxcbiAgICA1OiAnIzAxYjRjYzRhJyxcbiAgICA2OiAnIzAwYTdjMTYyJyxcbiAgICA3OiAnIzAwOWZiYjgyJyxcbiAgICA4OiAnIzAwYTNjMGMyJyxcbiAgICA5OiAnIzAwYTJjNycsXG4gICAgMTA6ICcjMDA5NGI3ZjgnLFxuICAgIDExOiAnIzAwNzQ5MWVmJyxcbiAgICAxMjogJyMwMDMyM2VmMicsXG59O1xuXG5leHBvcnQgY29uc3QgdGVhbDogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmYWZlZmQnLFxuICAgIDI6ICcjZjNmYmY5JyxcbiAgICAzOiAnI2UwZjhmMycsXG4gICAgNDogJyNjY2YzZWEnLFxuICAgIDU6ICcjYjhlYWUwJyxcbiAgICA2OiAnI2ExZGVkMicsXG4gICAgNzogJyM4M2NkYzEnLFxuICAgIDg6ICcjNTNiOWFiJyxcbiAgICA5OiAnIzEyYTU5NCcsXG4gICAgMTA6ICcjMGQ5YjhhJyxcbiAgICAxMTogJyMwMDg1NzMnLFxuICAgIDEyOiAnIzBkM2QzOCcsXG59O1xuXG5leHBvcnQgY29uc3QgdGVhbEE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBjYzk5MDUnLFxuICAgIDI6ICcjMDBhYTgwMGMnLFxuICAgIDM6ICcjMDBjNjlkMWYnLFxuICAgIDQ6ICcjMDBjMzk2MzMnLFxuICAgIDU6ICcjMDBiNDkwNDcnLFxuICAgIDY6ICcjMDBhNjg1NWUnLFxuICAgIDc6ICcjMDA5OTgwN2MnLFxuICAgIDg6ICcjMDA5NzgzYWMnLFxuICAgIDk6ICcjMDA5ZThjZWQnLFxuICAgIDEwOiAnIzAwOTY4NGYyJyxcbiAgICAxMTogJyMwMDg1NzMnLFxuICAgIDEyOiAnIzAwMzMyZGYyJyxcbn07XG5cbmV4cG9ydCBjb25zdCBqYWRlOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZiZmVmZCcsXG4gICAgMjogJyNmNGZiZjcnLFxuICAgIDM6ICcjZTZmN2VkJyxcbiAgICA0OiAnI2Q2ZjFlMycsXG4gICAgNTogJyNjM2U5ZDcnLFxuICAgIDY6ICcjYWNkZWM4JyxcbiAgICA3OiAnIzhiY2ViNicsXG4gICAgODogJyM1NmJhOWYnLFxuICAgIDk6ICcjMjlhMzgzJyxcbiAgICAxMDogJyMyNjk5N2InLFxuICAgIDExOiAnIzIwODM2OCcsXG4gICAgMTI6ICcjMWQzYjMxJyxcbn07XG5cbmV4cG9ydCBjb25zdCBqYWRlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGMwODAwNCcsXG4gICAgMjogJyMwMGEzNDYwYicsXG4gICAgMzogJyMwMGFlNDgxOScsXG4gICAgNDogJyMwMGE4NTEyOScsXG4gICAgNTogJyMwMGEyNTUzYycsXG4gICAgNjogJyMwMDlhNTc1MycsXG4gICAgNzogJyMwMDk0NWY3NCcsXG4gICAgODogJyMwMDk3NmVhOScsXG4gICAgOTogJyMwMDkxNmJkNicsXG4gICAgMTA6ICcjMDA4NzY0ZDknLFxuICAgIDExOiAnIzAwNzE1MmRmJyxcbiAgICAxMjogJyMwMDIyMTdlMicsXG59O1xuXG5leHBvcnQgY29uc3QgZ3JlZW46IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmJmZWZjJyxcbiAgICAyOiAnI2Y0ZmJmNicsXG4gICAgMzogJyNlNmY2ZWInLFxuICAgIDQ6ICcjZDZmMWRmJyxcbiAgICA1OiAnI2M0ZThkMScsXG4gICAgNjogJyNhZGRkYzAnLFxuICAgIDc6ICcjOGVjZWFhJyxcbiAgICA4OiAnIzViYjk4YicsXG4gICAgOTogJyMzMGE0NmMnLFxuICAgIDEwOiAnIzJiOWE2NicsXG4gICAgMTE6ICcjMjE4MzU4JyxcbiAgICAxMjogJyMxOTNiMmQnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyZWVuQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGMwNDAwNCcsXG4gICAgMjogJyMwMGEzMmYwYicsXG4gICAgMzogJyMwMGE0MzMxOScsXG4gICAgNDogJyMwMGE4MzgyOScsXG4gICAgNTogJyMwMTljMzkzYicsXG4gICAgNjogJyMwMDk2M2M1MicsXG4gICAgNzogJyMwMDkxNDA3MScsXG4gICAgODogJyMwMDkyNGJhNCcsXG4gICAgOTogJyMwMDhmNGFjZicsXG4gICAgMTA6ICcjMDA4NjQ3ZDQnLFxuICAgIDExOiAnIzAwNzEzZmRlJyxcbiAgICAxMjogJyMwMDI2MTZlNicsXG59O1xuXG5leHBvcnQgY29uc3QgZ3Jhc3M6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmJmZWZiJyxcbiAgICAyOiAnI2Y1ZmJmNScsXG4gICAgMzogJyNlOWY2ZTknLFxuICAgIDQ6ICcjZGFmMWRiJyxcbiAgICA1OiAnI2M5ZThjYScsXG4gICAgNjogJyNiMmRkYjUnLFxuICAgIDc6ICcjOTRjZTlhJyxcbiAgICA4OiAnIzY1YmE3NCcsXG4gICAgOTogJyM0NmE3NTgnLFxuICAgIDEwOiAnIzNlOWI0ZicsXG4gICAgMTE6ICcjMmE3ZTNiJyxcbiAgICAxMjogJyMyMDNjMjUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdyYXNzQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyMwMGMwMDAwNCcsXG4gICAgMjogJyMwMDk5MDAwYScsXG4gICAgMzogJyMwMDk3MDAxNicsXG4gICAgNDogJyMwMDlmMDcyNScsXG4gICAgNTogJyMwMDkzMDUzNicsXG4gICAgNjogJyMwMDhmMGE0ZCcsXG4gICAgNzogJyMwMThiMGY2YicsXG4gICAgODogJyMwMDhkMTk5YScsXG4gICAgOTogJyMwMDg2MTliOScsXG4gICAgMTA6ICcjMDA3YjE3YzEnLFxuICAgIDExOiAnIzAwNjUxNGQ1JyxcbiAgICAxMjogJyMwMDIwMDZkZicsXG59O1xuXG5leHBvcnQgY29uc3QgYnJvd246IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmVmZGZjJyxcbiAgICAyOiAnI2ZjZjlmNicsXG4gICAgMzogJyNmNmVlZTcnLFxuICAgIDQ6ICcjZjBlNGQ5JyxcbiAgICA1OiAnI2ViZGFjYScsXG4gICAgNjogJyNlNGNkYjcnLFxuICAgIDc6ICcjZGNiYzlmJyxcbiAgICA4OiAnI2NlYTM3ZScsXG4gICAgOTogJyNhZDdmNTgnLFxuICAgIDEwOiAnI2EwNzU1MycsXG4gICAgMTE6ICcjODE1ZTQ2JyxcbiAgICAxMjogJyMzZTMzMmUnLFxufTtcblxuZXhwb3J0IGNvbnN0IGJyb3duQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNhYTU1MDAwMycsXG4gICAgMjogJyNhYTU1MDAwOScsXG4gICAgMzogJyNhMDRiMDAxOCcsXG4gICAgNDogJyM5YjRhMDAyNicsXG4gICAgNTogJyM5ZjRkMDAzNScsXG4gICAgNjogJyNhMDRlMDA0OCcsXG4gICAgNzogJyNhMzRlMDA2MCcsXG4gICAgODogJyM5ZjRhMDA4MScsXG4gICAgOTogJyM4MjNjMDBhNycsXG4gICAgMTA6ICcjNzIzMzAwYWMnLFxuICAgIDExOiAnIzUyMjEwMGI5JyxcbiAgICAxMjogJyMxNDA2MDBkMScsXG59O1xuXG5leHBvcnQgY29uc3QgYnJvbnplOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZkZmNmYycsXG4gICAgMjogJyNmZGY3ZjUnLFxuICAgIDM6ICcjZjZlZGVhJyxcbiAgICA0OiAnI2VmZTRkZicsXG4gICAgNTogJyNlN2Q5ZDMnLFxuICAgIDY6ICcjZGZjZGM1JyxcbiAgICA3OiAnI2QzYmNiMycsXG4gICAgODogJyNjMmE0OTknLFxuICAgIDk6ICcjYTE4MDcyJyxcbiAgICAxMDogJyM5NTc0NjgnLFxuICAgIDExOiAnIzdkNWU1NCcsXG4gICAgMTI6ICcjNDMzMDJiJyxcbn07XG5cbmV4cG9ydCBjb25zdCBicm9uemVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzU1MDAwMDAzJyxcbiAgICAyOiAnI2NjMzMwMDBhJyxcbiAgICAzOiAnIzkyMjUwMDE1JyxcbiAgICA0OiAnIzgwMjgwMDIwJyxcbiAgICA1OiAnIzc0MjMwMDJjJyxcbiAgICA2OiAnIzczMjQwMDNhJyxcbiAgICA3OiAnIzZjMWYwMDRjJyxcbiAgICA4OiAnIzY3MWMwMDY2JyxcbiAgICA5OiAnIzU1MWEwMDhkJyxcbiAgICAxMDogJyM0YzE1MDA5NycsXG4gICAgMTE6ICcjM2QwZjAwYWInLFxuICAgIDEyOiAnIzFkMDYwMGQ0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBnb2xkOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2ZkZmRmYycsXG4gICAgMjogJyNmYWY5ZjInLFxuICAgIDM6ICcjZjJmMGU3JyxcbiAgICA0OiAnI2VhZTZkYicsXG4gICAgNTogJyNlMWRjY2YnLFxuICAgIDY6ICcjZDhkMGJmJyxcbiAgICA3OiAnI2NiYzBhYScsXG4gICAgODogJyNiOWE4OGQnLFxuICAgIDk6ICcjOTc4MzY1JyxcbiAgICAxMDogJyM4YzdhNWUnLFxuICAgIDExOiAnIzcxNjI0YicsXG4gICAgMTI6ICcjM2IzNTJiJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnb2xkQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyM1NTU1MDAwMycsXG4gICAgMjogJyM5ZDhhMDAwZCcsXG4gICAgMzogJyM3NTYwMDAxOCcsXG4gICAgNDogJyM2YjRlMDAyNCcsXG4gICAgNTogJyM2MDQ2MDAzMCcsXG4gICAgNjogJyM2NDQ0MDA0MCcsXG4gICAgNzogJyM2MzQyMDA1NScsXG4gICAgODogJyM2MzNkMDA3MicsXG4gICAgOTogJyM1MzMyMDA5YScsXG4gICAgMTA6ICcjNDkyZDAwYTEnLFxuICAgIDExOiAnIzM2MjEwMGI0JyxcbiAgICAxMjogJyMxMzBjMDBkNCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc2t5OiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnI2Y5ZmVmZicsXG4gICAgMjogJyNmMWZhZmQnLFxuICAgIDM6ICcjZTFmNmZkJyxcbiAgICA0OiAnI2QxZjBmYScsXG4gICAgNTogJyNiZWU3ZjUnLFxuICAgIDY6ICcjYTlkYWVkJyxcbiAgICA3OiAnIzhkY2FlMycsXG4gICAgODogJyM2MGIzZDcnLFxuICAgIDk6ICcjN2NlMmZlJyxcbiAgICAxMDogJyM3NGRhZjgnLFxuICAgIDExOiAnIzAwNzQ5ZScsXG4gICAgMTI6ICcjMWQzZTU2Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBza3lBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzAwZDVmZjA2JyxcbiAgICAyOiAnIzAwYTRkYjBlJyxcbiAgICAzOiAnIzAwYjNlZTFlJyxcbiAgICA0OiAnIzAwYWNlNDJlJyxcbiAgICA1OiAnIzAwYTFkODQxJyxcbiAgICA2OiAnIzAwOTJjYTU2JyxcbiAgICA3OiAnIzAwODljMTcyJyxcbiAgICA4OiAnIzAwODViZjlmJyxcbiAgICA5OiAnIzAwYzdmZTgzJyxcbiAgICAxMDogJyMwMGJjZjM4YicsXG4gICAgMTE6ICcjMDA3NDllJyxcbiAgICAxMjogJyMwMDI1NDBlMicsXG59O1xuXG5leHBvcnQgY29uc3QgbWludDogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmOWZlZmQnLFxuICAgIDI6ICcjZjJmYmY5JyxcbiAgICAzOiAnI2RkZjlmMicsXG4gICAgNDogJyNjOGY0ZTknLFxuICAgIDU6ICcjYjNlY2RlJyxcbiAgICA2OiAnIzljZTBkMCcsXG4gICAgNzogJyM3ZWNmYmQnLFxuICAgIDg6ICcjNGNiYmE1JyxcbiAgICA5OiAnIzg2ZWFkNCcsXG4gICAgMTA6ICcjN2RlMGNiJyxcbiAgICAxMTogJyMwMjc4NjQnLFxuICAgIDEyOiAnIzE2NDMzYycsXG59O1xuXG5leHBvcnQgY29uc3QgbWludEE6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjMDBkNWFhMDYnLFxuICAgIDI6ICcjMDBiMThhMGQnLFxuICAgIDM6ICcjMDBkMjllMjInLFxuICAgIDQ6ICcjMDBjYzk5MzcnLFxuICAgIDU6ICcjMDBjMDkxNGMnLFxuICAgIDY6ICcjMDBiMDg2NjMnLFxuICAgIDc6ICcjMDBhMTdkODEnLFxuICAgIDg6ICcjMDA5ZTdmYjMnLFxuICAgIDk6ICcjMDBkM2E1NzknLFxuICAgIDEwOiAnIzAwYzM5OTgyJyxcbiAgICAxMTogJyMwMDc3NjNmZCcsXG4gICAgMTI6ICcjMDAzMTJhZTknLFxufTtcblxuZXhwb3J0IGNvbnN0IGxpbWU6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmNmZGZhJyxcbiAgICAyOiAnI2Y4ZmFmMycsXG4gICAgMzogJyNlZWY2ZDYnLFxuICAgIDQ6ICcjZTJmMGJkJyxcbiAgICA1OiAnI2QzZTdhNicsXG4gICAgNjogJyNjMmRhOTEnLFxuICAgIDc6ICcjYWJjOTc4JyxcbiAgICA4OiAnIzhkYjY1NCcsXG4gICAgOTogJyNiZGVlNjMnLFxuICAgIDEwOiAnI2IwZTY0YycsXG4gICAgMTE6ICcjNWM3YzJmJyxcbiAgICAxMjogJyMzNzQwMWMnLFxufTtcblxuZXhwb3J0IGNvbnN0IGxpbWVBOiBSZWNvcmQ8UzJDb2xvclNjYWxlLCBTMkhleENvbG9yPiA9IHtcbiAgICAxOiAnIzY2OTkwMDA1JyxcbiAgICAyOiAnIzZiOTUwMDBjJyxcbiAgICAzOiAnIzk2YzgwMDI5JyxcbiAgICA0OiAnIzhmYzYwMDQyJyxcbiAgICA1OiAnIzgxYmIwMDU5JyxcbiAgICA2OiAnIzcyYWEwMDZlJyxcbiAgICA3OiAnIzYxOTkwMDg3JyxcbiAgICA4OiAnIzU1OTIwMGFiJyxcbiAgICA5OiAnIzkzZTQwMDljJyxcbiAgICAxMDogJyM4ZmRjMDBiMycsXG4gICAgMTE6ICcjMzc1ZjAwZDAnLFxuICAgIDEyOiAnIzFlMjkwMGUzJyxcbn07XG5cbmV4cG9ydCBjb25zdCB5ZWxsb3c6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmRmZGY5JyxcbiAgICAyOiAnI2ZlZmNlOScsXG4gICAgMzogJyNmZmZhYjgnLFxuICAgIDQ6ICcjZmZmMzk0JyxcbiAgICA1OiAnI2ZmZTc3MCcsXG4gICAgNjogJyNmM2Q3NjgnLFxuICAgIDc6ICcjZTRjNzY3JyxcbiAgICA4OiAnI2Q1YWUzOScsXG4gICAgOTogJyNmZmU2MjknLFxuICAgIDEwOiAnI2ZmZGMwMCcsXG4gICAgMTE6ICcjOWU2YzAwJyxcbiAgICAxMjogJyM0NzNiMWYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHllbGxvd0E6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjYWFhYTAwMDYnLFxuICAgIDI6ICcjZjRkZDAwMTYnLFxuICAgIDM6ICcjZmZlZTAwNDcnLFxuICAgIDQ6ICcjZmZlMzAxNmInLFxuICAgIDU6ICcjZmZkNTAwOGYnLFxuICAgIDY6ICcjZWJiYzAwOTcnLFxuICAgIDc6ICcjZDJhMTAwOTgnLFxuICAgIDg6ICcjYzk5NzAwYzYnLFxuICAgIDk6ICcjZmZlMTAwZDYnLFxuICAgIDEwOiAnI2ZmZGMwMCcsXG4gICAgMTE6ICcjOWU2YzAwJyxcbiAgICAxMjogJyMyZTIwMDBlMCcsXG59O1xuXG5leHBvcnQgY29uc3QgYW1iZXI6IFJlY29yZDxTMkNvbG9yU2NhbGUsIFMySGV4Q29sb3I+ID0ge1xuICAgIDE6ICcjZmVmZGZiJyxcbiAgICAyOiAnI2ZlZmJlOScsXG4gICAgMzogJyNmZmY3YzInLFxuICAgIDQ6ICcjZmZlZTljJyxcbiAgICA1OiAnI2ZiZTU3NycsXG4gICAgNjogJyNmM2Q2NzMnLFxuICAgIDc6ICcjZTljMTYyJyxcbiAgICA4OiAnI2UyYTMzNicsXG4gICAgOTogJyNmZmM1M2QnLFxuICAgIDEwOiAnI2ZmYmExOCcsXG4gICAgMTE6ICcjYWI2NDAwJyxcbiAgICAxMjogJyM0ZjM0MjInLFxufTtcblxuZXhwb3J0IGNvbnN0IGFtYmVyQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNjMDgwMDAwNCcsXG4gICAgMjogJyNmNGQxMDAxNicsXG4gICAgMzogJyNmZmRlMDAzZCcsXG4gICAgNDogJyNmZmQ0MDA2MycsXG4gICAgNTogJyNmOGNmMDA4OCcsXG4gICAgNjogJyNlYWI1MDA4YycsXG4gICAgNzogJyNkYzliMDA5ZCcsXG4gICAgODogJyNkYThhMDBjOScsXG4gICAgOTogJyNmZmIzMDBjMicsXG4gICAgMTA6ICcjZmZiMzAwZTcnLFxuICAgIDExOiAnI2FiNjQwMCcsXG4gICAgMTI6ICcjMzQxNTAwZGQnLFxufTtcblxuZXhwb3J0IGNvbnN0IG9yYW5nZTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNmZWZjZmInLFxuICAgIDI6ICcjZmZmN2VkJyxcbiAgICAzOiAnI2ZmZWZkNicsXG4gICAgNDogJyNmZmRmYjUnLFxuICAgIDU6ICcjZmZkMTlhJyxcbiAgICA2OiAnI2ZmYzE4MicsXG4gICAgNzogJyNmNWFlNzMnLFxuICAgIDg6ICcjZWM5NDU1JyxcbiAgICA5OiAnI2Y3NmIxNScsXG4gICAgMTA6ICcjZWY1ZjAwJyxcbiAgICAxMTogJyNjYzRlMDAnLFxuICAgIDEyOiAnIzU4MmQxZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgb3JhbmdlQTogUmVjb3JkPFMyQ29sb3JTY2FsZSwgUzJIZXhDb2xvcj4gPSB7XG4gICAgMTogJyNjMDQwMDAwNCcsXG4gICAgMjogJyNmZjhlMDAxMicsXG4gICAgMzogJyNmZjljMDAyOScsXG4gICAgNDogJyNmZjkxMDE0YScsXG4gICAgNTogJyNmZjhiMDA2NScsXG4gICAgNjogJyNmZjgxMDA3ZCcsXG4gICAgNzogJyNlZDZjMDA4YycsXG4gICAgODogJyNlMzVmMDBhYScsXG4gICAgOTogJyNmNjVlMDBlYScsXG4gICAgMTA6ICcjZWY1ZjAwJyxcbiAgICAxMTogJyNjYzRlMDAnLFxuICAgIDEyOiAnIzQzMTIwMGUyJyxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJCYXNlU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9jMi1iYXNlLXNjZW5lJztcclxuaW1wb3J0IHsgQzJOdW1iZXIgfSBmcm9tICcuLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHsgQzJHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRmlsbERhdGEsIEMyR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJGaWxsUmVjdERhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5maWxsID0gbmV3IEMyRmlsbERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5maWxsLm9wYWNpdHkuc2V0KDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJGaWxsUmVjdCBleHRlbmRzIEMyR3JhcGhpY3NFbGVtZW50PEMyRmlsbFJlY3REYXRhPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyRmlsbFJlY3REYXRhKHNjZW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKSkgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdmlld1NwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdmlld1NwYWNlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5pc0VuYWJsZWQuZ2V0KCkpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YS5yZW5kZXIuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1Bvb2wgPSB0aGlzLnNjZW5lLmdldFZlY1Bvb2woKTtcclxuICAgICAgICBjb25zdCBzaXplID0gdmVjUG9vbC5nZXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5nZXRWaWV3cG9ydFNpemVJbnRvKHNpemUpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZmlsbC5pc0VuYWJsZWQuZ2V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbGwuYXBwbHlUb0NvbnRleHQoY3R4KTtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIE1hdGgucm91bmQoc2l6ZS54KSwgTWF0aC5yb3VuZChzaXplLnkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShzaXplKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMyRWFzZVR5cGUgfSBmcm9tICcuL2MyLWVhc2luZyc7XHJcbmltcG9ydCB0eXBlIHsgQzJOdW1iZXIgfSBmcm9tICcuLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHR5cGUgeyBDMkNvbG9yIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWNvbG9yJztcclxuaW1wb3J0IHR5cGUgeyBDMlBvaW50IH0gZnJvbSAnLi4vc2hhcmVkL2MyLXBvaW50JztcclxuaW1wb3J0IHR5cGUgeyBDMk9mZnNldCB9IGZyb20gJy4uL3NoYXJlZC9jMi1vZmZzZXQnO1xyXG5pbXBvcnQgdHlwZSB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB0eXBlIHsgQzJFeHRlbnRzIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWV4dGVudHMnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQm9vbGVhbiB9IGZyb20gJy4uL3NoYXJlZC9jMi1ib29sZWFuJztcclxuaW1wb3J0IHR5cGUgeyBDMlN0cmluZyB9IGZyb20gJy4uL3NoYXJlZC9jMi1zdHJpbmcnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhY2VSZWYgfSBmcm9tICcuLi9zaGFyZWQvYzItc3BhY2UtcmVmJztcclxuaW1wb3J0IHsgQzJNYXRoVXRpbHMgfSBmcm9tICcuLi9tYXRoL2MyLW1hdGgtdXRpbHMnO1xyXG5pbXBvcnQgeyBlYXNlIH0gZnJvbSAnLi9jMi1lYXNpbmcnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQW5jaG9yIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWFuY2hvcic7XHJcbi8vaW1wb3J0IHR5cGUgeyBDMkFuaW1hdGFibGVDb2xvciwgQzJBbmltYXRhYmxlRXh0ZW50cyB9IGZyb20gJy4vYzItYW5pbWF0YWJsZSc7XHJcblxyXG5leHBvcnQgdHlwZSBDMkFuaW1hdGlvbkxpc3RlbmVyID0gKGFuaW06IEMyQmFzZUFuaW1hdGlvbikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCB0eXBlIEMyQW5pbVByb3BlcnR5ID1cclxuICAgIHwgQzJOdW1iZXJcclxuICAgIHwgQzJDb2xvclxyXG4gICAgfCBDMlBvaW50XHJcbiAgICB8IEMyT2Zmc2V0XHJcbiAgICB8IEMyTGVuZ3RoXHJcbiAgICB8IEMyRXh0ZW50c1xyXG4gICAgfCBDMkJvb2xlYW5cclxuICAgIHwgQzJTcGFjZVJlZlxyXG4gICAgfCBDMlN0cmluZ1xyXG4gICAgfCBDMkFuY2hvcjtcclxuLy8gfCBDMkFuaW1hdGFibGVDb2xvclxyXG4vLyB8IEMyQW5pbWF0YWJsZUV4dGVudHM7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJCYXNlQW5pbWF0aW9uIHtcclxuICAgIHByb3RlY3RlZCBzY2VuZTogQzJCYXNlU2NlbmU7XHJcbiAgICBwcm90ZWN0ZWQgY3ljbGVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBjeWNsZUNvdW50OiBudW1iZXIgPSAxO1xyXG4gICAgcHJvdGVjdGVkIGN5Y2xlRHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgcmF3Q3ljbGVBbHBoYTogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCByYXdFbGFwc2VkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHJhd0R1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIHdyYXBlZEN5Y2xlQWxwaGE6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgd3JhcGVkQ3ljbGVFbGFwc2VkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGVhc2U6IEMyRWFzZVR5cGUgPSBlYXNlLmxpbmVhcjtcclxuICAgIHByb3RlY3RlZCByZXZlcnNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIGFsdGVybmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIHByb3BlcnRpZXM6IFNldDxDMkFuaW1Qcm9wZXJ0eT47XHJcbiAgICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBDMkFuaW1hdGlvbkxpc3RlbmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IFNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjZW5lKCk6IEMyQmFzZVNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9wZXJ0aWVzKCk6IFNldDxDMkFuaW1Qcm9wZXJ0eT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJhd0VsYXBzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yYXdEdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDeWNsZUR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGVEdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDeWNsZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGVJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDeWNsZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGVDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDeWNsZUNvdW50KGN5Y2xlQ291bnQ6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY3ljbGVDb3VudCA9IGN5Y2xlQ291bnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSYXdEdXJhdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVhc2luZyhlYXNlOiBDMkVhc2VUeXBlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5lYXNlID0gZWFzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXZlcnNlZChyZXZlcnNlZDogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnJldmVyc2VkID0gcmV2ZXJzZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWx0ZXJuYXRlKGFsdGVybmF0ZTogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcjogQzJBbmltYXRpb25MaXN0ZW5lcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyOiBDMkFuaW1hdGlvbkxpc3RlbmVyKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGlzdGVuZXJzKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxhcHNlZChlbGFwc2VkOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNldFJhd0VsYXBzZWQoZWxhcHNlZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RWxhcHNlZFByb3BlcnR5SW1wbCh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbGFwc2VkUHJvcGVydHkocHJvcGVydHk6IEMyQW5pbVByb3BlcnR5LCBlbGFwc2VkOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnNldFJhd0VsYXBzZWQoZWxhcHNlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRFbGFwc2VkUHJvcGVydHlJbXBsKHByb3BlcnR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0RWxhcHNlZFByb3BlcnR5SW1wbChwcm9wZXJ0eTogQzJBbmltUHJvcGVydHkpOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGVSYXdEdXJhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJhd0R1cmF0aW9uID0gdGhpcy5jeWNsZUR1cmF0aW9uICogKHRoaXMuY3ljbGVDb3VudCA8IDAgPyAxIDogdGhpcy5jeWNsZUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJhd0VsYXBzZWQoZWxhcHNlZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmF3RWxhcHNlZCA9PT0gZWxhcHNlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmF3RWxhcHNlZCA9IGVsYXBzZWQ7XHJcbiAgICAgICAgdGhpcy5jeWNsZUluZGV4ID0gQzJNYXRoVXRpbHMuY2xhbXAoTWF0aC5mbG9vcih0aGlzLnJhd0VsYXBzZWQgLyB0aGlzLmN5Y2xlRHVyYXRpb24pLCAwLCB0aGlzLmN5Y2xlQ291bnQgLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGhpcy5jeWNsZUNvdW50ICogdGhpcy5jeWNsZUR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmF3Q3ljbGVBbHBoYSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yYXdDeWNsZUFscGhhID0gKHRoaXMucmF3RWxhcHNlZCAlIHRoaXMuY3ljbGVEdXJhdGlvbikgLyB0aGlzLmN5Y2xlRHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JhcGVkQ3ljbGVBbHBoYSA9IHRoaXMucmV2ZXJzZWQgPyAxIC0gdGhpcy5yYXdDeWNsZUFscGhhIDogdGhpcy5yYXdDeWNsZUFscGhhO1xyXG4gICAgICAgIGlmICh0aGlzLmFsdGVybmF0ZSAmJiB0aGlzLmN5Y2xlSW5kZXggJSAyID09PSAxKSB0aGlzLndyYXBlZEN5Y2xlQWxwaGEgPSAxIC0gdGhpcy53cmFwZWRDeWNsZUFscGhhO1xyXG4gICAgICAgIHRoaXMud3JhcGVkQ3ljbGVBbHBoYSA9IHRoaXMuZWFzZSh0aGlzLndyYXBlZEN5Y2xlQWxwaGEpO1xyXG4gICAgICAgIHRoaXMud3JhcGVkQ3ljbGVFbGFwc2VkID0gQzJNYXRoVXRpbHMuY2xhbXAodGhpcy53cmFwZWRDeWNsZUFscGhhLCAwLCAxKSAqIHRoaXMuY3ljbGVEdXJhdGlvbjtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQzJCYXNlQW5pbWF0aW9uIH0gZnJvbSAnLi9jMi1iYXNlLWFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJCYXNlRHVyYXRpb25BbmltYXRpb24gZXh0ZW5kcyBDMkJhc2VBbmltYXRpb24ge1xyXG4gICAgc2V0Q3ljbGVEdXJhdGlvbihjeWNsZUR1cmF0aW9uOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmN5Y2xlRHVyYXRpb24gPSBjeWNsZUR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmF3RHVyYXRpb24oKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgdHlwZSB7IEMySGFzQ2xvbmUsIEMySGFzQ29weSwgQzJIYXNMZXJwIH0gZnJvbSAnLi4vc2hhcmVkL2MyLWJhc2UtdHlwZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJDb2xvciB9IGZyb20gJy4uL3NoYXJlZC9jMi1jb2xvcic7XHJcbmltcG9ydCB0eXBlIHsgQzJPZmZzZXQgfSBmcm9tICcuLi9zaGFyZWQvYzItb2Zmc2V0JztcclxuaW1wb3J0IHR5cGUgeyBDMkV4dGVudHMgfSBmcm9tICcuLi9zaGFyZWQvYzItZXh0ZW50cyc7XHJcbmltcG9ydCB0eXBlIHsgQzJMZW5ndGggfSBmcm9tICcuLi9zaGFyZWQvYzItbGVuZ3RoJztcclxuaW1wb3J0IHR5cGUgeyBDMk51bWJlciB9IGZyb20gJy4uL3NoYXJlZC9jMi1udW1iZXInO1xyXG5pbXBvcnQgdHlwZSB7IEMyUG9pbnQgfSBmcm9tICcuLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgdHlwZSB7IEMyQW5pbVByb3BlcnR5IH0gZnJvbSAnLi9jMi1iYXNlLWFuaW1hdGlvbic7XHJcbmltcG9ydCB0eXBlIHsgQzJBbmNob3IgfSBmcm9tICcuLi9zaGFyZWQvYzItYW5jaG9yJztcclxuaW1wb3J0IHsgQzJCYXNlRHVyYXRpb25BbmltYXRpb24gfSBmcm9tICcuL2MyLWJhc2UtZHVyYXRpb24tYW5pbWF0aW9uJztcclxuXHJcbi8vIEZhY3RvcnkgY2xhc3NcclxuZXhwb3J0IGNsYXNzIEMyTGVycEFuaW1hdGlvbkZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGNyZWF0ZShzY2VuZTogQzJCYXNlU2NlbmUsIHByb3BlcnR5OiBDMk51bWJlcik6IEMyTGVycEFuaW1hdGlvbjtcclxuICAgIHN0YXRpYyBjcmVhdGUoc2NlbmU6IEMyQmFzZVNjZW5lLCBwcm9wZXJ0eTogQzJDb2xvcik6IEMyTGVycEFuaW1hdGlvbjtcclxuICAgIHN0YXRpYyBjcmVhdGUoc2NlbmU6IEMyQmFzZVNjZW5lLCBwcm9wZXJ0eTogQzJQb2ludCk6IEMyTGVycEFuaW1hdGlvbjtcclxuICAgIHN0YXRpYyBjcmVhdGUoc2NlbmU6IEMyQmFzZVNjZW5lLCBwcm9wZXJ0eTogQzJPZmZzZXQpOiBDMkxlcnBBbmltYXRpb247XHJcbiAgICBzdGF0aWMgY3JlYXRlKHNjZW5lOiBDMkJhc2VTY2VuZSwgcHJvcGVydHk6IEMyTGVuZ3RoKTogQzJMZXJwQW5pbWF0aW9uO1xyXG4gICAgc3RhdGljIGNyZWF0ZShzY2VuZTogQzJCYXNlU2NlbmUsIHByb3BlcnR5OiBDMkV4dGVudHMpOiBDMkxlcnBBbmltYXRpb247XHJcbiAgICBzdGF0aWMgY3JlYXRlKHNjZW5lOiBDMkJhc2VTY2VuZSwgcHJvcGVydHk6IEMyQW5jaG9yKTogQzJMZXJwQW5pbWF0aW9uO1xyXG4gICAgc3RhdGljIGNyZWF0ZShcclxuICAgICAgICBzY2VuZTogQzJCYXNlU2NlbmUsXHJcbiAgICAgICAgcHJvcGVydHk6IEMyTnVtYmVyIHwgQzJDb2xvciB8IEMyUG9pbnQgfCBDMk9mZnNldCB8IEMyTGVuZ3RoIHwgQzJFeHRlbnRzIHwgQzJBbmNob3IsXHJcbiAgICApOiBDMkxlcnBBbmltYXRpb24ge1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHkua2luZCkge1xyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyTnVtYmVyPihzY2VuZSwgcHJvcGVydHkgYXMgQzJOdW1iZXIpO1xyXG4gICAgICAgICAgICBjYXNlICdjb2xvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEMyQmFzZUxlcnBBbmltYXRpb248QzJDb2xvcj4oc2NlbmUsIHByb3BlcnR5IGFzIEMyQ29sb3IpO1xyXG4gICAgICAgICAgICBjYXNlICdwb3NpdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEMyQmFzZUxlcnBBbmltYXRpb248QzJQb2ludD4oc2NlbmUsIHByb3BlcnR5IGFzIEMyUG9pbnQpO1xyXG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyT2Zmc2V0PihzY2VuZSwgcHJvcGVydHkgYXMgQzJPZmZzZXQpO1xyXG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyTGVuZ3RoPihzY2VuZSwgcHJvcGVydHkgYXMgQzJMZW5ndGgpO1xyXG4gICAgICAgICAgICBjYXNlICdleHRlbnRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQzJCYXNlTGVycEFuaW1hdGlvbjxDMkV4dGVudHM+KHNjZW5lLCBwcm9wZXJ0eSBhcyBDMkV4dGVudHMpO1xyXG4gICAgICAgICAgICBjYXNlICdhbmNob3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyQW5jaG9yPihzY2VuZSwgcHJvcGVydHkgYXMgQzJBbmNob3IpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBwcm9wZXJ0eSB0eXBlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQzJMZXJwQW5pbWF0aW9uIGV4dGVuZHMgQzJCYXNlRHVyYXRpb25BbmltYXRpb24ge1xyXG4gICAgYWJzdHJhY3QgY29tbWl0SW5pdGlhbFN0YXRlKCk6IHRoaXM7XHJcbiAgICBhYnN0cmFjdCBjb21taXRGaW5hbFN0YXRlKCk6IHRoaXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkJhc2VMZXJwQW5pbWF0aW9uPFxyXG4gICAgVCBleHRlbmRzIEMyQW5pbVByb3BlcnR5ICYgQzJIYXNDbG9uZTxUPiAmIEMySGFzQ29weTxUPiAmIEMySGFzTGVycDxUPixcclxuPiBleHRlbmRzIEMyTGVycEFuaW1hdGlvbiB7XHJcbiAgICBwcm90ZWN0ZWQgcHJvcGVydHk6IFQ7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGUwOiBUO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRlMTogVDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUsIHByb3BlcnR5OiBUKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLnN0YXRlMCA9IHByb3BlcnR5LmNsb25lKCkgYXMgVDtcclxuICAgICAgICB0aGlzLnN0YXRlMSA9IHByb3BlcnR5LmNsb25lKCkgYXMgVDtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuYWRkKHByb3BlcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRJbml0aWFsU3RhdGUoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZTAuY29weSh0aGlzLnByb3BlcnR5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRGaW5hbFN0YXRlKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuc3RhdGUxLmNvcHkodGhpcy5wcm9wZXJ0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldEVsYXBzZWRQcm9wZXJ0eUltcGwocHJvcGVydHk6IEMyQW5pbVByb3BlcnR5KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzLnByb3BlcnR5KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eS5sZXJwKHRoaXMuc3RhdGUwLCB0aGlzLnN0YXRlMSwgdGhpcy53cmFwZWRDeWNsZUFscGhhKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNsYXNzIEMyQmFzZUxlcnBBbmltYXRpb25XaXRoQ2FtZXJhPFxyXG4vLyAgICAgVCBleHRlbmRzIEMyQW5pbVByb3BlcnR5ICYgQzJIYXNDbG9uZTxUPiAmIEMySGFzQ29weTxUPiAmIEMySGFzTGVycFdpdGhDYW1lcmE8VD4sXHJcbi8vID4gZXh0ZW5kcyBDMkxlcnBBbmltYXRpb24ge1xyXG4vLyAgICAgcHJvdGVjdGVkIHByb3BlcnR5OiBUO1xyXG4vLyAgICAgcHJvdGVjdGVkIHN0YXRlMDogVDtcclxuLy8gICAgIHByb3RlY3RlZCBzdGF0ZTE6IFQ7XHJcblxyXG4vLyAgICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lLCBwcm9wZXJ0eTogVCkge1xyXG4vLyAgICAgICAgIHN1cGVyKHNjZW5lKTtcclxuLy8gICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZTAgPSBwcm9wZXJ0eS5jbG9uZSgpIGFzIFQ7XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZTEgPSBwcm9wZXJ0eS5jbG9uZSgpIGFzIFQ7XHJcbi8vICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmFkZChwcm9wZXJ0eSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29tbWl0SW5pdGlhbFN0YXRlKCk6IHRoaXMge1xyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUwLmNvcHkodGhpcy5wcm9wZXJ0eSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29tbWl0RmluYWxTdGF0ZSgpOiB0aGlzIHtcclxuLy8gICAgICAgICB0aGlzLnN0YXRlMS5jb3B5KHRoaXMucHJvcGVydHkpO1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHByb3RlY3RlZCBzZXRFbGFwc2VkUHJvcGVydHlJbXBsKHByb3BlcnR5OiBDMkFuaW1Qcm9wZXJ0eSk6IHZvaWQge1xyXG4vLyAgICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gdGhpcy5wcm9wZXJ0eSkgcmV0dXJuO1xyXG4vLyAgICAgICAgIHRoaXMucHJvcGVydHkubGVycCh0aGlzLnN0YXRlMCwgdGhpcy5zdGF0ZTEsIHRoaXMud3JhcGVkQ3ljbGVBbHBoYSwgdGhpcy5zY2VuZS5nZXRBY3RpdmVDYW1lcmEoKSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkxlcnBBbmltYXRpb25OdW1iZXIgZXh0ZW5kcyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyTnVtYmVyPiB7fVxyXG5leHBvcnQgY2xhc3MgQzJMZXJwQW5pbWF0aW9uQ29sb3IgZXh0ZW5kcyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyQ29sb3I+IHt9XHJcbmV4cG9ydCBjbGFzcyBDMkxlcnBBbmltYXRpb25Qb3NpdGlvbiBleHRlbmRzIEMyQmFzZUxlcnBBbmltYXRpb248QzJQb2ludD4ge31cclxuZXhwb3J0IGNsYXNzIEMyTGVycEFuaW1hdGlvbkRpcmVjdGlvbiBleHRlbmRzIEMyQmFzZUxlcnBBbmltYXRpb248QzJPZmZzZXQ+IHt9XHJcbmV4cG9ydCBjbGFzcyBDMkxlcnBBbmltYXRpb25MZW5ndGggZXh0ZW5kcyBDMkJhc2VMZXJwQW5pbWF0aW9uPEMyTGVuZ3RoPiB7fVxyXG5leHBvcnQgY2xhc3MgQzJMZXJwQW5pbWF0aW9uRXh0ZW50cyBleHRlbmRzIEMyQmFzZUxlcnBBbmltYXRpb248QzJFeHRlbnRzPiB7fVxyXG5leHBvcnQgY2xhc3MgQzJMZXJwQW5pbWF0aW9uQW5jaG9yIGV4dGVuZHMgQzJCYXNlTGVycEFuaW1hdGlvbjxDMkFuY2hvcj4ge31cclxuIiwgImltcG9ydCB7IEMyVmVjMiB9IGZyb20gJy4vYzItdmVjMic7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJBQUJCIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBsb3dlcjogQzJWZWMyID0gbmV3IEMyVmVjMigpO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHVwcGVyOiBDMlZlYzIgPSBuZXcgQzJWZWMyKCk7XHJcblxyXG4gICAgc2V0RnJvbVBvaW50cyhwb2ludHM6IEMyVmVjMltdKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb3dlci5zZXQoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXIuc2V0KDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG93ZXIuc2V0KCtJbmZpbml0eSwgK0luZmluaXR5KTtcclxuICAgICAgICB0aGlzLnVwcGVyLnNldCgtSW5maW5pdHksIC1JbmZpbml0eSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG93ZXIubWluVihwb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBwZXIubWF4Vihwb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVtcHR5KCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubG93ZXIuc2V0KCtJbmZpbml0eSwgK0luZmluaXR5KTtcclxuICAgICAgICB0aGlzLnVwcGVyLnNldCgtSW5maW5pdHksIC1JbmZpbml0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kVG9JbmNsdWRlKHBvaW50OiBDMlZlYzIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmxvd2VyLm1pblYocG9pbnQpO1xyXG4gICAgICAgIHRoaXMudXBwZXIubWF4Vihwb2ludCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMubG93ZXIpLmFkZFYodGhpcy51cHBlcikuc2NhbGUoMC41KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMik6IHRoaXMge1xyXG4gICAgICAgIGRzdC5jb3B5KHRoaXMudXBwZXIpLnN1YlYodGhpcy5sb3dlcikuc2NhbGUoMC41KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpc1BvaW50SW5zaWRlKHBvaW50OiBDMlZlYzIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSB0aGlzLmxvd2VyLnggJiYgcG9pbnQueCA8PSB0aGlzLnVwcGVyLnggJiYgcG9pbnQueSA+PSB0aGlzLmxvd2VyLnkgJiYgcG9pbnQueSA8PSB0aGlzLnVwcGVyLnk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kKGFtb3VudDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5sb3dlci54IC09IGFtb3VudDtcclxuICAgICAgICB0aGlzLmxvd2VyLnkgLT0gYW1vdW50O1xyXG4gICAgICAgIHRoaXMudXBwZXIueCArPSBhbW91bnQ7XHJcbiAgICAgICAgdGhpcy51cHBlci55ICs9IGFtb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBDMkFBQkIge1xyXG4gICAgICAgIGNvbnN0IGFhYmIgPSBuZXcgQzJBQUJCKCk7XHJcbiAgICAgICAgYWFiYi5sb3dlci5jb3B5KHRoaXMubG93ZXIpO1xyXG4gICAgICAgIGFhYmIudXBwZXIuY29weSh0aGlzLnVwcGVyKTtcclxuICAgICAgICByZXR1cm4gYWFiYjtcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KGFhYmI6IEMyQUFCQik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubG93ZXIuY29weShhYWJiLmxvd2VyKTtcclxuICAgICAgICB0aGlzLnVwcGVyLmNvcHkoYWFiYi51cHBlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHsgQzJTcGFjZSwgQzJWZWMyIH0gZnJvbSAnLi4vLi4vLi4nO1xyXG5pbXBvcnQgeyBlYXNlIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9uL2MyLWVhc2luZyc7XHJcbmltcG9ydCB7IEMyTGVycEFuaW1hdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9hbmltYXRpb24vYzItbGVycC1hbmltYXRpb24nO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3RlcEFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9uL2MyLXN0ZXAtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBDMkFBQkIgfSBmcm9tICcuLi8uLi9tYXRoL2MyLWFhYmInO1xyXG5pbXBvcnQgdHlwZSB7IEMyQmFzZVNjZW5lIH0gZnJvbSAnLi4vLi4vc2NlbmUvYzItYmFzZS1zY2VuZSc7XHJcbmltcG9ydCB7IEMyRXh0ZW50cyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1leHRlbnRzJztcclxuaW1wb3J0IHsgQzJMZW5ndGggfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItbGVuZ3RoJztcclxuaW1wb3J0IHsgQzJOdW1iZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItbnVtYmVyJztcclxuaW1wb3J0IHsgQzJQb2ludCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1wb2ludCc7XHJcbmltcG9ydCB7IEMyRWxlbWVudCB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRmlsbERhdGEsIEMyR3JhcGhpY3NEYXRhLCBDMlN0cm9rZURhdGEgfSBmcm9tICcuLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcbmltcG9ydCB7IEMyUGF0aFJlY3QgfSBmcm9tICcuLi9jMi1wYXRoLXJlY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhbiB9IGZyb20gJy4vYzItcmljaC10ZXh0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDMlRleHRIaWdobGlnaHREYXRhIGV4dGVuZHMgQzJHcmFwaGljc0RhdGEge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGw6IEMyRmlsbERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Ryb2tlOiBDMlN0cm9rZURhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29ybmVyUmFkaXVzOiBDMkxlbmd0aDtcclxuICAgIHB1YmxpYyByZWFkb25seSBwYWRkaW5nOiBDMkV4dGVudHM7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuZmlsbCA9IG5ldyBDMkZpbGxEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBuZXcgQzJMZW5ndGgoc2NlbmUsIDUsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5wYWRkaW5nID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgNSwgMCwgdmlld1NwYWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyVGV4dEhpZ2hsaWdodCBleHRlbmRzIEMyRWxlbWVudDxDMlRleHRIaWdobGlnaHREYXRhPiB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVjdDogQzJQYXRoUmVjdDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSByZWZlcmVuY2VzOiBDMlNwYW5bXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFhYmI6IEMyQUFCQjtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2VudGVyOiBDMlBvaW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBuZXcgQzJUZXh0SGlnaGxpZ2h0RGF0YShzY2VuZSkpO1xyXG4gICAgICAgIHRoaXMucmVjdCA9IG5ldyBDMlBhdGhSZWN0KHNjZW5lKTtcclxuICAgICAgICB0aGlzLmFhYmIgPSBuZXcgQzJBQUJCKCk7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzID0gbmV3IEMyRXh0ZW50cyhzY2VuZSwgMCwgMCwgc2NlbmUuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFeHRlbnRzSW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLmV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50ZXJJbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY2VudGVyLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUmVmZXJlbmNlKHRleHQ6IEMyU3Bhbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlZmVyZW5jZXMoLi4udGV4dHM6IEMyU3BhbltdKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2goLi4udGV4dHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyUmVmZXJlbmNlcygpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZXMubGVuZ3RoID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlRmFkZUluKFxyXG4gICAgICAgIGFuaW1hdG9yOiBDMlN0ZXBBbmltYXRvcixcclxuICAgICAgICBvcHRpb25zOiB7IGxhYmVsPzogc3RyaW5nOyBvZmZzZXQ/OiBudW1iZXI7IGR1cmF0aW9uPzogbnVtYmVyIH0gPSB7fSxcclxuICAgICk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gYW5pbWF0b3IuZW5zdXJlTGFiZWwob3B0aW9ucy5sYWJlbCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgPz8gMDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPz8gNTAwO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vcGFjaXR5LnNldCgwLjApO1xyXG4gICAgICAgIGNvbnN0IG9wYWNpdHlBbmltID0gQzJMZXJwQW5pbWF0aW9uRmFjdG9yeS5jcmVhdGUodGhpcy5zY2VuZSwgdGhpcy5kYXRhLm9wYWNpdHkpXHJcbiAgICAgICAgICAgIC5zZXRDeWNsZUR1cmF0aW9uKGR1cmF0aW9uKVxyXG4gICAgICAgICAgICAuc2V0RWFzaW5nKGVhc2UuaW5PdXQpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vcGFjaXR5LnNldCgxLjApO1xyXG4gICAgICAgIG9wYWNpdHlBbmltLmNvbW1pdEZpbmFsU3RhdGUoKTtcclxuICAgICAgICBhbmltYXRvci5hZGRBbmltYXRpb24ob3BhY2l0eUFuaW0sIGxhYmVsLCBvZmZzZXQpO1xyXG4gICAgICAgIGFuaW1hdG9yLmVuYWJsZUVsZW1lbnQodGhpcywgdHJ1ZSwgbGFiZWwsIG9mZnNldCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZUZhZGVPdXQoXHJcbiAgICAgICAgYW5pbWF0b3I6IEMyU3RlcEFuaW1hdG9yLFxyXG4gICAgICAgIG9wdGlvbnM6IHsgbGFiZWw/OiBzdHJpbmc7IG9mZnNldD86IG51bWJlcjsgZHVyYXRpb24/OiBudW1iZXIgfSA9IHt9LFxyXG4gICAgKTogdGhpcyB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBhbmltYXRvci5lbnN1cmVMYWJlbChvcHRpb25zLmxhYmVsKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBvcHRpb25zLm9mZnNldCA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiA/PyA1MDA7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9wYWNpdHkuc2V0KDEuMCk7XHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eUFuaW0gPSBDMkxlcnBBbmltYXRpb25GYWN0b3J5LmNyZWF0ZSh0aGlzLnNjZW5lLCB0aGlzLmRhdGEub3BhY2l0eSlcclxuICAgICAgICAgICAgLnNldEN5Y2xlRHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAgICAgICAgIC5zZXRFYXNpbmcoZWFzZS5pbk91dCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9wYWNpdHkuc2V0KDAuMCk7XHJcbiAgICAgICAgb3BhY2l0eUFuaW0uY29tbWl0RmluYWxTdGF0ZSgpO1xyXG4gICAgICAgIGFuaW1hdG9yLmFkZEFuaW1hdGlvbihvcGFjaXR5QW5pbSwgbGFiZWwsIG9mZnNldCk7XHJcbiAgICAgICAgYW5pbWF0b3IuZW5hYmxlRWxlbWVudCh0aGlzLCBmYWxzZSwgbGFiZWwsIG9mZnNldCArIGR1cmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG5cclxuICAgICAgICBjb25zdCBleHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGxvd2VyID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCB1cHBlciA9IHZlY1Bvb2wuZ2V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWFiYi5zZXRFbXB0eSgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3BhbiBvZiB0aGlzLnJlZmVyZW5jZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFzcGFuLmRhdGEuaXNFbmFibGVkLmdldCgpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgc3Bhbi5nZXRFeHRlbnRzSW50byhleHRlbnRzLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBzcGFuLmdldENlbnRlckludG8oY2VudGVyLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgICAgICBsb3dlci5zZXRWKGNlbnRlcikuc3ViVihleHRlbnRzKTtcclxuICAgICAgICAgICAgdXBwZXIuc2V0VihjZW50ZXIpLmFkZFYoZXh0ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWFiYi5leHBhbmRUb0luY2x1ZGUobG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFhYmIuZXhwYW5kVG9JbmNsdWRlKHVwcGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWFiYi5nZXRFeHRlbnRzSW50byhleHRlbnRzKTtcclxuICAgICAgICB0aGlzLmFhYmIuZ2V0Q2VudGVySW50byhjZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wYWRkaW5nLmdldEludG8ocGFkZGluZywgdmlld1NwYWNlKTtcclxuXHJcbiAgICAgICAgZXh0ZW50cy5hZGRWKHBhZGRpbmcpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXRWKGV4dGVudHMsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIuc2V0VihjZW50ZXIsIHZpZXdTcGFjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3REYXRhID0gdGhpcy5yZWN0LmRhdGE7XHJcbiAgICAgICAgcmVjdERhdGEuaXNFbmFibGVkLnNldCh0aGlzLmRhdGEuaXNFbmFibGVkLmdldCgpKTtcclxuICAgICAgICByZWN0RGF0YS5wb3NpdGlvbi5zZXRWKGNlbnRlciwgdmlld1NwYWNlKTtcclxuICAgICAgICByZWN0RGF0YS5leHRlbnRzLnNldFYoZXh0ZW50cywgdmlld1NwYWNlKTtcclxuICAgICAgICByZWN0RGF0YS5hbmNob3Iuc2V0KDAsIDApO1xyXG4gICAgICAgIHJlY3REYXRhLmZpbGwuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmZpbGwpO1xyXG4gICAgICAgIHJlY3REYXRhLm9wYWNpdHkuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLm9wYWNpdHkpO1xyXG4gICAgICAgIHJlY3REYXRhLnN0cm9rZS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuc3Ryb2tlKTtcclxuICAgICAgICByZWN0RGF0YS5jb3JuZXJSYWRpdXMuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmNvcm5lclJhZGl1cyk7XHJcbiAgICAgICAgcmVjdERhdGEucmVuZGVyLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5yZW5kZXIpO1xyXG4gICAgICAgIHJlY3REYXRhLnVwZGF0ZS5pc01hbmFnZWQuc2V0KHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVjdC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGV4dGVudHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjZW50ZXIpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShwYWRkaW5nKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UobG93ZXIpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh1cHBlcik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IGVhc2UgfSBmcm9tICcuLi8uLi9hbmltYXRpb24vYzItZWFzaW5nJztcclxuaW1wb3J0IHsgQzJMZXJwQW5pbWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbi9jMi1sZXJwLWFuaW1hdGlvbic7XHJcbmltcG9ydCB0eXBlIHsgQzJTdGVwQW5pbWF0b3IgfSBmcm9tICcuLi8uLi9hbmltYXRpb24vYzItc3RlcC1hbmltYXRvcic7XHJcbmltcG9ydCB7IEMyTWF0aFV0aWxzIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1tYXRoLXV0aWxzJztcclxuaW1wb3J0IHR5cGUgeyBDMlNwYWNlIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi1zcGFjZSc7XHJcbmltcG9ydCB0eXBlIHsgQzJWZWMyIH0gZnJvbSAnLi4vLi4vbWF0aC9jMi12ZWMyJztcclxuaW1wb3J0IHR5cGUgeyBDMkJhc2VTY2VuZSB9IGZyb20gJy4uLy4uL3NjZW5lL2MyLWJhc2Utc2NlbmUnO1xyXG5pbXBvcnQgeyBDMkFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jMi1hbmNob3InO1xyXG5pbXBvcnQgeyBDMkV4dGVudHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItZXh0ZW50cyc7XHJcbmltcG9ydCB7IEMyTGVuZ3RoIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLWxlbmd0aCc7XHJcbmltcG9ydCB7IEMyTnVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLW51bWJlcic7XHJcbmltcG9ydCB7IEMyUG9pbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvYzItcG9pbnQnO1xyXG5pbXBvcnQgeyBDMlNwYWNlUmVmIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2MyLXNwYWNlLXJlZic7XHJcbmltcG9ydCB7IEMyRWxlbWVudCwgdHlwZSBDMkhhc0JvdW5kcyB9IGZyb20gJy4uL2Jhc2UvYzItZWxlbWVudCc7XHJcbmltcG9ydCB7IEMyRmlsbERhdGEsIEMyRm9udERhdGEsIEMyR3JhcGhpY3NEYXRhLCBDMlN0cm9rZURhdGEgfSBmcm9tICcuLi9iYXNlL2MyLWVsZW1lbnQtZGF0YSc7XHJcbmltcG9ydCB7IEMyUGF0aFJlY3QgfSBmcm9tICcuLi9jMi1wYXRoLXJlY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEMyU3BhbiB9IGZyb20gJy4vYzItcmljaC10ZXh0JztcclxuaW1wb3J0IHsgQzJUZXh0R3JvdXAgfSBmcm9tICcuL2MyLXRleHQtZ3JvdXAnO1xyXG5pbXBvcnQgeyBDMlRleHRIaWdobGlnaHQgfSBmcm9tICcuL2MyLXRleHQtaGlnaGxpZ2h0JztcclxuXHJcbmV4cG9ydCB0eXBlIEMyQ29kZVRva2VuID0ge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufTtcclxuZXhwb3J0IHR5cGUgQzJDb2RlVG9rZW5TZWxlY3RvciA9IHtcclxuICAgIGxpbmVJbmRleDogbnVtYmVyO1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG59O1xyXG5leHBvcnQgdHlwZSBDMlRva2VuU3R5bGVTZXR0ZXIgPSAodHNwYW46IEMyU3BhbiwgdHlwZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplQWxnb3JpdGhtKGlucHV0OiBzdHJpbmcpOiBDMkNvZGVUb2tlbltdIHtcclxuICAgIGNvbnN0IHRva2VuczogQzJDb2RlVG9rZW5bXSA9IFtdO1xyXG4gICAgLy8gUmVnZXggcXVpIGNhcHR1cmUgOlxyXG4gICAgLy8gMS4gQmFsaXNlcyAqKnRhZzp0ZXh0ZSoqXHJcbiAgICAvLyAyLiBFc3BhY2VzXHJcbiAgICAvLyAzLiBQb25jdHVhdGlvbiAoKClbXTssLilcclxuICAgIC8vIDQuIFRvdXQgbGUgcmVzdGUgKG1vdHMpXHJcbiAgICBjb25zdCByZWdleCA9IC9cXCpcXCooXFx3Kyk6KC4qPylcXCpcXCp8KFxccyspfChbKCl7fVxcW1xcXTssLl0pfChbXlxccygpe31cXFtcXF07LC5dKykvZztcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgaW5wdXQuc3BsaXQoJ1xcbicpKSB7XHJcbiAgICAgICAgbGV0IG1hdGNoO1xyXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogbWF0Y2hbMV0sIHZhbHVlOiBtYXRjaFsyXSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFszXSkge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiAnc3BhY2UnLCB2YWx1ZTogbWF0Y2hbM10gfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbNF0pIHtcclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogJ3B1bmN0JywgdmFsdWU6IG1hdGNoWzRdIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzVdKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6ICdwbGFpbicsIHZhbHVlOiBtYXRjaFs1XSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6ICduZXdsaW5lJywgdmFsdWU6ICdcXG4nIH0pO1xyXG4gICAgfVxyXG4gICAgdG9rZW5zLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGxhc3QgbmV3bGluZVxyXG4gICAgcmV0dXJuIHRva2VucztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ29kZURhdGEgZXh0ZW5kcyBDMkdyYXBoaWNzRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BhY2U6IEMyU3BhY2VSZWY7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcG9zaXRpb246IEMyUG9pbnQ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWluRXh0ZW50czogQzJFeHRlbnRzO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGFuY2hvcjogQzJBbmNob3I7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYmFja2dyb3VuZDogQzJDb2RlQmFja2dyb3VuZERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGV4dDogQzJDb2RlVGV4dERhdGE7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFkZGluZzogQzJFeHRlbnRzO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGN1cnJlbnRMaW5lOiBDMkNvZGVDdXJyZW50TGluZURhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIGNvbnN0IHdvcmxkU3BhY2UgPSBzY2VuZS5nZXRXb3JsZFNwYWNlKCk7XHJcbiAgICAgICAgY29uc3Qgdmlld1NwYWNlID0gc2NlbmUuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZSA9IG5ldyBDMlNwYWNlUmVmKHNjZW5lLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEMyUG9pbnQoc2NlbmUsIDAsIDAsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yID0gbmV3IEMyQW5jaG9yKHNjZW5lLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm1pbkV4dGVudHMgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAwLCAwLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBDMkNvZGVCYWNrZ3JvdW5kRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IEMyQ29kZVRleHREYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnBhZGRpbmcgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAxMCwgNSwgdmlld1NwYWNlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gbmV3IEMyQ29kZUN1cnJlbnRMaW5lRGF0YShzY2VuZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkNvZGVCYWNrZ3JvdW5kRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBjb3JuZXJSYWRpdXM6IEMyTGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuZmlsbCA9IG5ldyBDMkZpbGxEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJSYWRpdXMgPSBuZXcgQzJMZW5ndGgoc2NlbmUsIDUsIHZpZXdTcGFjZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Ryb2tlLm9wYWNpdHkuc2V0KDEpO1xyXG4gICAgICAgIHRoaXMuZmlsbC5vcGFjaXR5LnNldCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ29kZVRleHREYXRhIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBmaWxsOiBDMkZpbGxEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0cm9rZTogQzJTdHJva2VEYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IEMyTnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBmb250OiBDMkZvbnREYXRhO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGhvcml6b250YWxBbGlnbjogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVydGljYWxBbGlnbjogQzJOdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEMyQmFzZVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5maWxsID0gbmV3IEMyRmlsbERhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IEMyU3Ryb2tlRGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBuZXcgQzJGb250RGF0YShzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQWxpZ24gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIC0xKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ24gPSBuZXcgQzJOdW1iZXIoc2NlbmUsIDApO1xyXG5cclxuICAgICAgICB0aGlzLnN0cm9rZS5pc0VuYWJsZWQuc2V0KGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyQ29kZUN1cnJlbnRMaW5lRGF0YSB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsbDogQzJGaWxsRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdHJva2U6IEMyU3Ryb2tlRGF0YTtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcGFjaXR5OiBDMk51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpbmRleDogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3BhbjogQzJOdW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFkZGluZzogQzJFeHRlbnRzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBDMkJhc2VTY2VuZSkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHNjZW5lLmdldFZpZXdTcGFjZSgpO1xyXG4gICAgICAgIHRoaXMuZmlsbCA9IG5ldyBDMkZpbGxEYXRhKHNjZW5lKTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG5ldyBDMlN0cm9rZURhdGEoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBDMk51bWJlcihzY2VuZSwgMSk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IG5ldyBDMk51bWJlcihzY2VuZSwgMCk7XHJcbiAgICAgICAgdGhpcy5zcGFuID0gbmV3IEMyTnVtYmVyKHNjZW5lLCAxKTtcclxuICAgICAgICB0aGlzLnBhZGRpbmcgPSBuZXcgQzJFeHRlbnRzKHNjZW5lLCAwLCA1LCB2aWV3U3BhY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQzJDb2RlIGV4dGVuZHMgQzJFbGVtZW50PEMyQ29kZURhdGE+IGltcGxlbWVudHMgQzJIYXNCb3VuZHMge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNlbnRlcjogQzJQb2ludDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHRlbnRzOiBDMkV4dGVudHM7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dEdyb3VwOiBDMlRleHRHcm91cDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb2RlQmFja2dyb3VuZDogQzJQYXRoUmVjdDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBsaW5lQmFja2dyb3VuZDogQzJQYXRoUmVjdDtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBoaWdobGlnaHRzOiBDMlRleHRIaWdobGlnaHRbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHRva2VuU3R5bGVTZXR0ZXI6IEMyVG9rZW5TdHlsZVNldHRlciA9IEMyQ29kZS5kZWZhdWx0VG9rZW5TdHlsZVNldHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQzJCYXNlU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgbmV3IEMyQ29kZURhdGEoc2NlbmUpKTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IG5ldyBDMlBvaW50KHNjZW5lLCAwLCAwLCBzY2VuZS5nZXRXb3JsZFNwYWNlKCkpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cyA9IG5ldyBDMkV4dGVudHMoc2NlbmUsIDAsIDAsIHNjZW5lLmdldFZpZXdTcGFjZSgpKTtcclxuICAgICAgICB0aGlzLmNvZGVCYWNrZ3JvdW5kID0gbmV3IEMyUGF0aFJlY3Qoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMubGluZUJhY2tncm91bmQgPSBuZXcgQzJQYXRoUmVjdChzY2VuZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0R3JvdXAgPSBuZXcgQzJUZXh0R3JvdXAoc2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0R3JvdXAuZGF0YS5yZW5kZXIubGF5ZXIub3JkZXJJbkxheWVyID0gMTtcclxuICAgICAgICB0aGlzLmNvZGVCYWNrZ3JvdW5kLmRhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb25JbnRvKGRzdDogQzJWZWMyLCBzcGFjZTogQzJTcGFjZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2VudGVyLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHRlbnRzLmdldEludG8oZHN0LCBzcGFjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVySW50byhkc3Q6IEMyVmVjMiwgc3BhY2U6IEMyU3BhY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNlbnRlci5nZXRJbnRvKGRzdCwgc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY3RQb2ludEludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hbmNob3IuZ2V0UmVjdFBvaW50SW50byhkc3QsIHNwYWNlLCB0aGlzLmRhdGEucG9zaXRpb24sIHRoaXMuZXh0ZW50cywgYW5jaG9yWCwgYW5jaG9yWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWluRXh0ZW50c0ludG8oZHN0OiBDMlZlYzIsIHNwYWNlOiBDMlNwYWNlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm1pbkV4dGVudHMuZ2V0SW50byhkc3QsIHNwYWNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb250ZW50KHRva2VuczogQzJDb2RlVG9rZW5bXSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsaW5lRWxlbWVudCA9IHRoaXMudGV4dEdyb3VwLmFkZExpbmUoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xyXG4gICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgICAgICAgICAgbGluZUVsZW1lbnQuYWRkU3Bhbih0b2tlbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ25ld2xpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lRWxlbWVudCA9IHRoaXMudGV4dEdyb3VwLmFkZExpbmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBsaW5lRWxlbWVudC5hZGRTcGFuKHRva2VuLnZhbHVlLCB0b2tlbi50eXBlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5TdHlsZVNldHRlcihzcGFuLCB0b2tlbi50eXBlKTtcclxuICAgICAgICAgICAgICAgIC8vc3Bhbi51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFRva2VuU3R5bGVTZXR0ZXIodHNwYW46IEMyU3BhbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZuJzpcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjZmZjZDgyJywgMCkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNmZmNkODInLCAxKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHlwZSc6XHJcbiAgICAgICAgICAgICAgICB0c3Bhbi5kYXRhLmZpbGwuY29sb3Iuc2V0RnJvbUhleCgnIzcwQjhGRicsIDApLmxvY2soKTtcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjNzBCOEZGJywgMSkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2t3JzpcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjRTc5NkYzJywgMCkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNFNzk2RjMnLCAxKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndmFyJzpcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjQjZFQ0Y3JywgMCkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNCNkVDRjcnLCAxKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbnVtJzpcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjRTNGN0JBJywgMCkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNFM0Y3QkEnLCAxKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RyJzpcclxuICAgICAgICAgICAgICAgIHRzcGFuLmRhdGEuZmlsbC5jb2xvci5zZXRGcm9tSGV4KCcjZmZhYzk3JywgMCkubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNmZmFjOTcnLCAxKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHVuY3QnOlxyXG4gICAgICAgICAgICAgICAgdHNwYW4uZGF0YS5maWxsLmNvbG9yLnNldEZyb21IZXgoJyNFOUMyRUMnLCAwKS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0c3Bhbi5kYXRhLmZpbGwuY29sb3Iuc2V0RnJvbUhleCgnI0U5QzJFQycsIDEpLmxvY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kVG9rZW4oc2VsZWN0b3I6IEMyQ29kZVRva2VuU2VsZWN0b3IpOiBDMlNwYW4gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLnRleHRHcm91cC5nZXRMaW5lKHNlbGVjdG9yLmxpbmVJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmUuZmluZFNwYW4oeyBjb250ZW50OiBzZWxlY3Rvci5jb250ZW50LCBjYXRlZ29yeTogc2VsZWN0b3IuY2F0ZWdvcnkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVG9rZW5IaWdobGlnaHQoc2VsZWN0b3JzOiBDMkNvZGVUb2tlblNlbGVjdG9yW10pOiBDMlRleHRIaWdobGlnaHQge1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IG5ldyBDMlRleHRIaWdobGlnaHQodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuZmluZFRva2VuKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKHNwYW4pIHtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hZGRSZWZlcmVuY2Uoc3Bhbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Rva2VuIG5vdCBmb3VuZCBmb3Igc2VsZWN0b3I6Jywgc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgaGlnaGxpZ2h0LmRhdGEudXBkYXRlLmlzTWFuYWdlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlU2V0Q3VycmVudExpbmUoXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBhbmltYXRvcjogQzJTdGVwQW5pbWF0b3IsXHJcbiAgICAgICAgb3B0aW9uczogeyBsYWJlbD86IHN0cmluZzsgb2Zmc2V0PzogbnVtYmVyOyBkdXJhdGlvbj86IG51bWJlcjsgcHJldkluZGV4PzogbnVtYmVyIH0gPSB7fSxcclxuICAgICk6IHRoaXMge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gYW5pbWF0b3IuZW5zdXJlTGFiZWwob3B0aW9ucy5sYWJlbCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgPz8gMDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPz8gNTAwO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnByZXZJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jdXJyZW50TGluZS5pbmRleC5zZXQob3B0aW9ucy5wcmV2SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZXJwQW5pbSA9IEMyTGVycEFuaW1hdGlvbkZhY3RvcnkuY3JlYXRlKHRoaXMuc2NlbmUsIHRoaXMuZGF0YS5jdXJyZW50TGluZS5pbmRleClcclxuICAgICAgICAgICAgLnNldEN5Y2xlRHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAgICAgICAgIC5zZXRFYXNpbmcoZWFzZS5pbk91dCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnRMaW5lLmluZGV4LnNldChpbmRleCk7XHJcbiAgICAgICAgYW5pbWF0b3IuYWRkQW5pbWF0aW9uKGxlcnBBbmltLmNvbW1pdEZpbmFsU3RhdGUoKSwgbGFiZWwsIG9mZnNldCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmlzRW5hYmxlZC5nZXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVCYWNrZ3JvdW5kLmRhdGEuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEdyb3VwLmRhdGEuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmVjUG9vbCA9IHRoaXMuc2NlbmUuZ2V0VmVjUG9vbCgpO1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5kYXRhLnNwYWNlLmdldCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJMYXllciA9IHRoaXMuZGF0YS5yZW5kZXIubGF5ZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHREYXRhID0gdGhpcy50ZXh0R3JvdXAuZGF0YTtcclxuICAgICAgICB0ZXh0RGF0YS5mb250LmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS50ZXh0LmZvbnQpO1xyXG4gICAgICAgIHRleHREYXRhLmZpbGwuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLnRleHQuZmlsbCk7XHJcbiAgICAgICAgdGV4dERhdGEuc3Ryb2tlLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS50ZXh0LnN0cm9rZSk7XHJcbiAgICAgICAgdGV4dERhdGEub3BhY2l0eS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEudGV4dC5vcGFjaXR5KTtcclxuICAgICAgICB0ZXh0RGF0YS5ob3Jpem9udGFsQWxpZ24uY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLnRleHQuaG9yaXpvbnRhbEFsaWduKTtcclxuICAgICAgICB0ZXh0RGF0YS52ZXJ0aWNhbEFsaWduLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS50ZXh0LnZlcnRpY2FsQWxpZ24pO1xyXG4gICAgICAgIHRleHREYXRhLnVwZGF0ZS5pc01hbmFnZWQuc2V0KHRydWUpO1xyXG4gICAgICAgIHRleHREYXRhLnJlbmRlci5sYXllci5jb3B5SWZVbmxvY2tlZChyZW5kZXJMYXllcik7XHJcbiAgICAgICAgdGV4dERhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciArPSAzO1xyXG5cclxuICAgICAgICB0aGlzLnRleHRHcm91cC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGV4dGVudHNcclxuICAgICAgICB0aGlzLmV4dGVudHMuc3BhY2UgPSBzcGFjZTtcclxuICAgICAgICBjb25zdCBjb2RlRXh0ZW50cyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdGV4dEV4dGVudHMgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVFeHRlbnRzID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjb2RlUGFkZGluZyA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEV4dGVudHMgPSB2ZWNQb29sLmdldCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEucGFkZGluZy5nZXRJbnRvKGNvZGVQYWRkaW5nLCBzcGFjZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLm1pbkV4dGVudHMuZ2V0SW50byhjb2RlRXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMudGV4dEdyb3VwLmdldFRleHRFeHRlbnRzSW50byh0ZXh0RXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIGNvZGVFeHRlbnRzLm1heCh0ZXh0RXh0ZW50cy54ICsgY29kZVBhZGRpbmcueCwgdGV4dEV4dGVudHMueSArIGNvZGVQYWRkaW5nLnkpO1xyXG4gICAgICAgIHRoaXMuZXh0ZW50cy5zZXRWKGNvZGVFeHRlbnRzLCBzcGFjZSk7XHJcbiAgICAgICAgY29udGVudEV4dGVudHMuY29weShjb2RlRXh0ZW50cykuc3ViVihjb2RlUGFkZGluZyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBjZW50ZXJcclxuICAgICAgICB0aGlzLmNlbnRlci5zcGFjZSA9IHNwYWNlO1xyXG4gICAgICAgIGNvbnN0IGNvZGVDZW50ZXIgPSB2ZWNQb29sLmdldCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3NpdGlvbi5nZXRJbnRvKGNvZGVDZW50ZXIsIHNwYWNlKTtcclxuICAgICAgICB0aGlzLmRhdGEuYW5jaG9yLmdldENlbnRlckludG9WKGNvZGVDZW50ZXIsIGNvZGVDZW50ZXIsIGNvZGVFeHRlbnRzKTtcclxuICAgICAgICB0aGlzLmNlbnRlci5zZXRWKGNvZGVDZW50ZXIsIHNwYWNlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGJhY2tncm91bmRcclxuICAgICAgICBjb25zdCBiYWNrRGF0YSA9IHRoaXMuY29kZUJhY2tncm91bmQuZGF0YTtcclxuICAgICAgICBiYWNrRGF0YS5maWxsLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5iYWNrZ3JvdW5kLmZpbGwpO1xyXG4gICAgICAgIGJhY2tEYXRhLnN0cm9rZS5jb3B5SWZVbmxvY2tlZCh0aGlzLmRhdGEuYmFja2dyb3VuZC5zdHJva2UpO1xyXG4gICAgICAgIGJhY2tEYXRhLm9wYWNpdHkuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmJhY2tncm91bmQub3BhY2l0eSk7XHJcbiAgICAgICAgYmFja0RhdGEuY29ybmVyUmFkaXVzLmNvcHlJZlVubG9ja2VkKHRoaXMuZGF0YS5iYWNrZ3JvdW5kLmNvcm5lclJhZGl1cyk7XHJcbiAgICAgICAgYmFja0RhdGEucmVuZGVyLmxheWVyLmNvcHlJZlVubG9ja2VkKHJlbmRlckxheWVyKTtcclxuICAgICAgICBiYWNrRGF0YS5wb3NpdGlvbi5jb3B5KHRoaXMuY2VudGVyKTtcclxuICAgICAgICBiYWNrRGF0YS5leHRlbnRzLnNldFYoY29kZUV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICBiYWNrRGF0YS51cGRhdGUuaXNNYW5hZ2VkLnNldCh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlQmFja2dyb3VuZC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgbGluZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgY29uc3QgbGluZURhdGEgPSB0aGlzLmxpbmVCYWNrZ3JvdW5kLmRhdGE7XHJcbiAgICAgICAgY29uc3QgbGluZUNvdW50ID0gdGhpcy50ZXh0R3JvdXAuZ2V0TGluZUNvdW50KCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuY3VycmVudExpbmUuaW5kZXguZ2V0KCk7XHJcbiAgICAgICAgbGluZURhdGEudXBkYXRlLmlzTWFuYWdlZC5zZXQodHJ1ZSk7XHJcbiAgICAgICAgaWYgKGxpbmVDb3VudCA8PSAwIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBsaW5lQ291bnQpIHtcclxuICAgICAgICAgICAgLy8gQ3VycmVudCBsaW5lIGlzIG91dCBvZiBib3VuZHNcclxuICAgICAgICAgICAgbGluZURhdGEuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3VycmVudCBsaW5lIGlzIHZhbGlkXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uMCA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uMSA9IHZlY1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVQYWRkaW5nID0gdmVjUG9vbC5nZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnRMaW5lLnBhZGRpbmcuZ2V0SW50byhsaW5lUGFkZGluZywgc3BhY2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VyckluZGV4ID0gQzJNYXRoVXRpbHMuY2xhbXAodGhpcy5kYXRhLmN1cnJlbnRMaW5lLmluZGV4LmdldCgpLCAwLCBsaW5lQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXgwID0gQzJNYXRoVXRpbHMuY2xhbXAoTWF0aC5mbG9vcihjdXJySW5kZXgpLCAwLCBsaW5lQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXgxID0gQzJNYXRoVXRpbHMuY2xhbXAoTWF0aC5jZWlsKGN1cnJJbmRleCksIDAsIGxpbmVDb3VudCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdCA9IGN1cnJJbmRleCAtIGluZGV4MDtcclxuICAgICAgICAgICAgY29uc3QgbGluZTAgPSB0aGlzLnRleHRHcm91cC5nZXRMaW5lKGluZGV4MCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUxID0gdGhpcy50ZXh0R3JvdXAuZ2V0TGluZShpbmRleDEpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5kYXRhLmN1cnJlbnRMaW5lLnNwYW4uZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICBsaW5lMC5nZXRDZW50ZXJJbnRvKHBvc2l0aW9uMCwgc3BhY2UpO1xyXG4gICAgICAgICAgICBsaW5lMS5nZXRDZW50ZXJJbnRvKHBvc2l0aW9uMSwgc3BhY2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUwLmdldEZvbnRIZWlnaHQoc3BhY2UpO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb24wLnkgPSBDMk1hdGhVdGlscy5sZXJwKHBvc2l0aW9uMC55LCBwb3NpdGlvbjEueSwgdCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uMC55ICs9IGxpbmVIZWlnaHQgKiAwLjUgKyBsaW5lUGFkZGluZy55O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjAueCA9IHRoaXMuY2VudGVyLnZhbHVlLng7XHJcblxyXG4gICAgICAgICAgICBsaW5lRXh0ZW50cy54ID0gY29kZUV4dGVudHMueDtcclxuICAgICAgICAgICAgbGluZUV4dGVudHMueSA9IChzcGFuICogbGluZUhlaWdodCkgLyAyICsgbGluZVBhZGRpbmcueTtcclxuXHJcbiAgICAgICAgICAgIGxpbmVEYXRhLmZpbGwuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmN1cnJlbnRMaW5lLmZpbGwpO1xyXG4gICAgICAgICAgICBsaW5lRGF0YS5zdHJva2UuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmN1cnJlbnRMaW5lLnN0cm9rZSk7XHJcbiAgICAgICAgICAgIGxpbmVEYXRhLm9wYWNpdHkuY29weUlmVW5sb2NrZWQodGhpcy5kYXRhLmN1cnJlbnRMaW5lLm9wYWNpdHkpO1xyXG4gICAgICAgICAgICBsaW5lRGF0YS5wb3NpdGlvbi5zZXRWKHBvc2l0aW9uMCwgc3BhY2UpO1xyXG4gICAgICAgICAgICBsaW5lRGF0YS5hbmNob3Iuc2V0KDAsIDEpO1xyXG4gICAgICAgICAgICBsaW5lRGF0YS5leHRlbnRzLnNldFYobGluZUV4dGVudHMsIHNwYWNlKTtcclxuICAgICAgICAgICAgbGluZURhdGEucmVuZGVyLmxheWVyLmNvcHlJZlVubG9ja2VkKHJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgbGluZURhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciArPSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lQmFja2dyb3VuZC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZlY1Bvb2wucmVsZWFzZShwb3NpdGlvbjApO1xyXG4gICAgICAgICAgICB2ZWNQb29sLnJlbGVhc2UocG9zaXRpb24xKTtcclxuICAgICAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGxpbmVQYWRkaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHREYXRhLnBvc2l0aW9uLmNvcHkodGhpcy5jZW50ZXIpO1xyXG4gICAgICAgIHRleHREYXRhLm1pbkV4dGVudHMuc2V0Vihjb250ZW50RXh0ZW50cywgc3BhY2UpO1xyXG4gICAgICAgIHRoaXMudGV4dEdyb3VwLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGhpZ2hsaWdodCBvZiB0aGlzLmhpZ2hsaWdodHMpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0LmRhdGEucmVuZGVyLmxheWVyLmNvcHlJZlVubG9ja2VkKHJlbmRlckxheWVyKTtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0LmRhdGEucmVuZGVyLmxheWVyLm9yZGVySW5MYXllciArPSAyO1xyXG4gICAgICAgICAgICBoaWdobGlnaHQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWdobGlnaHQgdXBkYXRlZCcsIGhpZ2hsaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoY29kZUV4dGVudHMpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZSh0ZXh0RXh0ZW50cyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGxpbmVFeHRlbnRzKTtcclxuICAgICAgICB2ZWNQb29sLnJlbGVhc2UoY29kZVBhZGRpbmcpO1xyXG4gICAgICAgIHZlY1Bvb2wucmVsZWFzZShjb250ZW50RXh0ZW50cyk7XHJcbiAgICAgICAgdmVjUG9vbC5yZWxlYXNlKGNvZGVDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gICAgQzJCYXNlU2NlbmUsXHJcbiAgICBDMkdyaWQsXHJcbiAgICBDMlBsYWluVGV4dCxcclxuICAgIEMyUGF0aFJlY3QsXHJcbiAgICBDMlZlYzIsXHJcbiAgICBDMkNvbG9yVGhlbWUsXHJcbiAgICBzbGF0ZURhcmssXHJcbiAgICBjeWFuRGFyayxcclxuICAgIHJ1YnlEYXJrLFxyXG4gICAgc2xhdGUsXHJcbiAgICBjeWFuLFxyXG4gICAgcnVieSxcclxuICAgIHR5cGUgQzJQYWxldHRlLFxyXG59IGZyb20gJ0Bhcm5hdWRiYW5uaWVyL2MyJztcclxuaW1wb3J0IHsgQzJGaWxsUmVjdCB9IGZyb20gJ0Bhcm5hdWRiYW5uaWVyL2MyL2NvcmUvZWxlbWVudC9jMi1maWxsLXJlY3QnO1xyXG5pbXBvcnQgeyBDMkNvZGUsIHRva2VuaXplQWxnb3JpdGhtIH0gZnJvbSAnQGFybmF1ZGJhbm5pZXIvYzIvY29yZS9lbGVtZW50L3RleHQvYzItY29kZSc7XHJcblxyXG5jb25zdCBsaWdodFRoZW1lID0gbmV3IEMyQ29sb3JUaGVtZSh7XHJcbiAgICBiYWNrOiBzbGF0ZSxcclxuICAgIHByaW1hcnk6IGN5YW4sXHJcbiAgICBzZWNvbmRhcnk6IHJ1YnksXHJcbn0pO1xyXG5jb25zdCBkYXJrVGhlbWUgPSBuZXcgQzJDb2xvclRoZW1lKHtcclxuICAgIGJhY2s6IHNsYXRlRGFyayxcclxuICAgIHByaW1hcnk6IGN5YW5EYXJrLFxyXG4gICAgc2Vjb25kYXJ5OiBydWJ5RGFyayxcclxufSk7XHJcblxyXG5jb25zdCBkc2F0dXJBbGdvcml0aG0gPVxyXG4gICAgJyoqa3c6dGFudCBxdWUqKiAqKm51bTp2cmFpKiogKiprdzpmYWlyZSoqXFxuJyArXHJcbiAgICAnICAqKnR5cGU6c29tbWV0KiogKip2YXI6dSoqID0gKipudW06aW5kXHUwMEU5ZmluaSoqXFxuJyArXHJcbiAgICAnICAqKmt3OnBvdXIgY2hhcXVlKiogc29tbWV0ICoqdmFyOnYqKiBub24gY29sb3JpXHUwMEU5ICoqa3c6ZmFpcmUqKlxcbicgK1xyXG4gICAgJyAgICAqKmt3OnNpKiogKCoqdmFyOnUqKiBlc3QgKipudW06aW5kXHUwMEU5ZmluaSoqKVxcbicgK1xyXG4gICAgJyAgICAgICoqa3c6b3UqKiAoc2F0WyoqdmFyOnYqKl0gPiBzYXRbKip2YXI6dSoqXSlcXG4nICtcclxuICAgICcgICAgICAqKmt3Om91KiogKHNhdFsqKnZhcjp2KipdID0gc2F0WyoqdmFyOnUqKl0gKiprdzpldCoqIGRlZ1sqKnZhcjp2KipdID4gZGVnWyoqdmFyOnUqKl0pXFxuJyArXHJcbiAgICAnICAgICAgKiprdzphbG9ycyoqXFxuJyArXHJcbiAgICAnICAgICAgKip2YXI6dSoqID0gKip2YXI6dioqXFxuJyArXHJcbiAgICAnICAqKmt3OnNpKiogKip2YXI6dSoqIGVzdCAqKm51bTppbmRcdTAwRTlmaW5pKiogKiprdzphbG9ycyoqXFxuJyArXHJcbiAgICAnICAgICoqa3c6cXVpdHRlcioqXFxuJyArXHJcbiAgICAnICAqKnZhcjp1KiouY291bGV1ciA9IHBsdXMgcGV0aXRlIGNvdWxldXIgZGlzcG9uaWJsZVxcbicgK1xyXG4gICAgJyAgICBkYW5zIGxlIHZvaXNpbmFnZSBkZSAqKnZhcjp1KipcXG4nICtcclxuICAgICcgICoqa3c6cG91cioqIGNoYXF1ZSB2b2lzaW4gKip2YXI6dioqIGRlICoqdmFyOnUqKiBub24gY29sb3JpXHUwMEU5ICoqa3c6ZmFpcmUqKlxcbicgK1xyXG4gICAgJyAgICBtZXR0cmUgXHUwMEUwIGpvdXIgc2F0WyoqdmFyOnYqKl0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RTY2VuZSBleHRlbmRzIEMyQmFzZVNjZW5lIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBncm91cEFuY2hvcjogQzJWZWMyID0gbmV3IEMyVmVjMigwLCAwKTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBncm91cEFsaWduOiBDMlZlYzIgPSBuZXcgQzJWZWMyKDAsIDApO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGdyb3VwRXh0ZW50czogQzJWZWMyID0gbmV3IEMyVmVjMigxLCAwLjUpO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhZGRpbmc6IEMyVmVjMiA9IG5ldyBDMlZlYzIoMjAsIDEwKTtcclxuICAgIHByb3RlY3RlZCBmb250U2l6ZTogbnVtYmVyID0gMTg7XHJcbiAgICBwcm90ZWN0ZWQgY29ybmVyUmFkaXVzOiBudW1iZXIgPSAwLjI1O1xyXG5cclxuICAgIHBsYWluVGV4dDogQzJQbGFpblRleHQgfCBudWxsID0gbnVsbDtcclxuICAgIHJlY3Q6IEMyUGF0aFJlY3QgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBzdXBlcihjYW52YXMsIGNvbnRleHQsIHsgdmVjUG9vbE1vZGU6ICdkZWJ1ZycgfSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0RXh0ZW50cyg4LjAsIDQuNSk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEuc2V0Wm9vbSgyKTtcclxuICAgICAgICAvLyB0aGlzLmNhbWVyYS5zZXRSb3RhdGlvbkRlZygxMCk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRTcGFjZSA9IHRoaXMuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuZ2V0Vmlld1NwYWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUaGVtZU1vZGUoJ2RhcmsnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsbFJlY3QgPSBuZXcgQzJGaWxsUmVjdCh0aGlzKTtcclxuICAgICAgICBmaWxsUmVjdC5kYXRhLmZpbGwuY29sb3Iuc2V0VGhlbWVzKGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSwgJ2JhY2snLCAyKTtcclxuICAgICAgICBmaWxsUmVjdC5kYXRhLnJlbmRlci5sYXllci5zZXQoLTEpO1xyXG5cclxuICAgICAgICBjb25zdCBncmlkID0gbmV3IEMyR3JpZCh0aGlzKTtcclxuICAgICAgICBncmlkLmRhdGEuZ2VvbWV0cnkuYm91bmRBLnNldCgtOCwgLTQuNSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgZ3JpZC5kYXRhLmdlb21ldHJ5LmJvdW5kQi5zZXQoOCwgNC41LCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBncmlkLmRhdGEuZ2VvbWV0cnkuc3RlcHMuc2V0KDEsIDEsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIGdyaWQuZGF0YS5zdHJva2Uud2lkdGguc2V0KDIsIHRoaXMuZ2V0Vmlld1NwYWNlKCkpO1xyXG4gICAgICAgIGdyaWQuZGF0YS5zdHJva2UuY29sb3Iuc2V0VGhlbWVzKGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSwgJ2JhY2snLCA0KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29kZSA9IG5ldyBDMkNvZGUodGhpcyk7XHJcbiAgICAgICAgY29kZS5kYXRhLnBhZGRpbmcuc2V0KDIwLCAyMCwgdmlld1NwYWNlKTtcclxuICAgICAgICBjb2RlLmRhdGEuYW5jaG9yLnNldCgwLCAxKTtcclxuICAgICAgICBjb2RlLmRhdGEucG9zaXRpb24uc2V0KDAsIDIsIHdvcmxkU3BhY2UpO1xyXG4gICAgICAgIGNvZGUuZGF0YS5taW5FeHRlbnRzLnNldCg0LCAzLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBjb2RlLmRhdGEudGV4dC5mb250LnNpemUuc2V0KDE4LCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIGNvZGUuZGF0YS50ZXh0LmZvbnQuc2l6ZS5zZXQoMC4zLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBjb2RlLmRhdGEudGV4dC5mb250LmZhbWlseS5zZXQoJ21vbm9zcGFjZScpO1xyXG4gICAgICAgIGNvZGUuZGF0YS50ZXh0LmZpbGwuY29sb3Iuc2V0VGhlbWVzKGRhcmtUaGVtZSwgZGFya1RoZW1lLCAnYmFjaycsIDEyKTtcclxuICAgICAgICBjb2RlLmRhdGEudGV4dC5vcGFjaXR5LnNldCgxKTtcclxuICAgICAgICBjb2RlLmRhdGEudGV4dC52ZXJ0aWNhbEFsaWduLnNldCgxKTtcclxuICAgICAgICBjb2RlLmRhdGEudGV4dC5ob3Jpem9udGFsQWxpZ24uc2V0KC0xKTtcclxuICAgICAgICBjb2RlLmRhdGEuYmFja2dyb3VuZC5maWxsLmNvbG9yLnNldFRoZW1lcyhkYXJrVGhlbWUsIGRhcmtUaGVtZSwgJ2JhY2snLCAxKTtcclxuICAgICAgICBjb2RlLmRhdGEuYmFja2dyb3VuZC5zdHJva2UuY29sb3Iuc2V0VGhlbWVzKGRhcmtUaGVtZSwgZGFya1RoZW1lLCAnYmFjaycsIDQpO1xyXG4gICAgICAgIGNvZGUuZGF0YS5iYWNrZ3JvdW5kLnN0cm9rZS53aWR0aC5zZXQoNSwgdmlld1NwYWNlKTtcclxuICAgICAgICBjb2RlLmRhdGEuYmFja2dyb3VuZC5vcGFjaXR5LnNldCgxKTtcclxuICAgICAgICBjb2RlLmRhdGEuYmFja2dyb3VuZC5jb3JuZXJSYWRpdXMuc2V0KHRoaXMuY29ybmVyUmFkaXVzLCB3b3JsZFNwYWNlKTtcclxuXHJcbiAgICAgICAgY29kZS5kYXRhLmN1cnJlbnRMaW5lLnNwYW4uc2V0KDgpO1xyXG4gICAgICAgIGNvZGUuZGF0YS5jdXJyZW50TGluZS5pbmRleC5zZXQoMSk7XHJcbiAgICAgICAgY29kZS5kYXRhLmN1cnJlbnRMaW5lLnBhZGRpbmcuc2V0KDAsIDAsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgY29kZS5kYXRhLmN1cnJlbnRMaW5lLmZpbGwuY29sb3Iuc2V0VGhlbWVzKGRhcmtUaGVtZSwgZGFya1RoZW1lLCAnYmFjaycsIDMpO1xyXG4gICAgICAgIGNvZGUuZGF0YS5jdXJyZW50TGluZS5zdHJva2UuY29sb3Iuc2V0VGhlbWVzKGRhcmtUaGVtZSwgZGFya1RoZW1lLCAnYmFjaycsIDEwKTtcclxuICAgICAgICBjb2RlLmRhdGEuY3VycmVudExpbmUuc3Ryb2tlLndpZHRoLnNldCgxLCB2aWV3U3BhY2UpO1xyXG5cclxuICAgICAgICBjb2RlLnNldENvbnRlbnQodG9rZW5pemVBbGdvcml0aG0oZHNhdHVyQWxnb3JpdGhtKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWluVGV4dCA9IG5ldyBDMlBsYWluVGV4dCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYWluVGV4dCA9IHBsYWluVGV4dDtcclxuICAgICAgICBwbGFpblRleHQuc2V0Q29udGVudCgnSGVsbG8sIFdvcmxkIScpO1xyXG4gICAgICAgIHBsYWluVGV4dC5kYXRhLnBvc2l0aW9uLnNldCgwLCAzLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICBwbGFpblRleHQuZGF0YS5mb250LnNpemUuc2V0KHRoaXMuZm9udFNpemUsIHZpZXdTcGFjZSk7XHJcbiAgICAgICAgcGxhaW5UZXh0LmRhdGEuZm9udC5mYW1pbHkuc2V0KCdtb25vc3BhY2UnKTtcclxuICAgICAgICBwbGFpblRleHQuZGF0YS5maWxsLmNvbG9yLnNldFRoZW1lcyhsaWdodFRoZW1lLCBkYXJrVGhlbWUsICdiYWNrJywgMTEpO1xyXG4gICAgICAgIHBsYWluVGV4dC5kYXRhLmZpbGwub3BhY2l0eS5zZXQoMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgQzJQYXRoUmVjdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlY3QgPSByZWN0O1xyXG4gICAgICAgIHJlY3QuZGF0YS5wb3NpdGlvbi5zZXQoMCwgMywgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgcmVjdC5kYXRhLnN0cm9rZS5pc0VuYWJsZWQuc2V0KGZhbHNlKTtcclxuICAgICAgICByZWN0LmRhdGEuZmlsbC5vcGFjaXR5LnNldCgwLjUpO1xyXG4gICAgICAgIHJlY3QuZGF0YS5maWxsLmNvbG9yLnNldFRoZW1lcyhsaWdodFRoZW1lLCBkYXJrVGhlbWUsICdwcmltYXJ5JywgOSk7XHJcbiAgICAgICAgcmVjdC5kYXRhLmV4dGVudHMuc2V0KDIsIDIsIHZpZXdTcGFjZSk7XHJcblxyXG4gICAgICAgIHBsYWluVGV4dC5nZXRDZW50ZXJJbnRvKHJlY3QuZGF0YS5wb3NpdGlvbi52YWx1ZSwgd29ybGRTcGFjZSk7XHJcbiAgICAgICAgcGxhaW5UZXh0LmdldEV4dGVudHNJbnRvKHJlY3QuZGF0YS5leHRlbnRzLnZhbHVlLCB2aWV3U3BhY2UpO1xyXG4gICAgICAgIC8vcmVjdC5kYXRhLmV4dGVudHMuc2V0VlxyXG5cclxuICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBjb2RlLmNyZWF0ZVRva2VuSGlnaGxpZ2h0KFtcclxuICAgICAgICAgICAgeyBsaW5lSW5kZXg6IDEsIGNvbnRlbnQ6ICd1JyB9LFxyXG4gICAgICAgICAgICB7IGxpbmVJbmRleDogMSwgY29udGVudDogJ2luZFx1MDBFOWZpbmknIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaGlnaGxpZ2h0LmRhdGEuZmlsbC5jb2xvci5zZXRUaGVtZXMobGlnaHRUaGVtZSwgZGFya1RoZW1lLCAncHJpbWFyeScsIDkpO1xyXG4gICAgICAgIGhpZ2hsaWdodC5kYXRhLmZpbGwub3BhY2l0eS5zZXQoMC41KTtcclxuICAgICAgICBoaWdobGlnaHQuZGF0YS5zdHJva2UuaXNFbmFibGVkLnNldChmYWxzZSk7XHJcbiAgICAgICAgaGlnaGxpZ2h0LmRhdGEucmVuZGVyLmxheWVyLnNldCgxMCk7XHJcbiAgICAgICAgaGlnaGxpZ2h0LmRhdGEucGFkZGluZy5zZXQoNSwgMCwgdmlld1NwYWNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRTcGFjZSA9IHRoaXMuZ2V0V29ybGRTcGFjZSgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTcGFjZSA9IHRoaXMuZ2V0Vmlld1NwYWNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhaW5UZXh0ICYmIHRoaXMucmVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWluVGV4dC5nZXRDZW50ZXJJbnRvKHRoaXMucmVjdC5kYXRhLnBvc2l0aW9uLnZhbHVlLCB3b3JsZFNwYWNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFpblRleHQuZ2V0RXh0ZW50c0ludG8odGhpcy5yZWN0LmRhdGEuZXh0ZW50cy52YWx1ZSwgdmlld1NwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cEFuY2hvci5zZXQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsaWduKGg6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cEFsaWduLnNldChoLCB2KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXh0ZW50cyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBFeHRlbnRzLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9udFNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvcm5lclJhZGl1cyhyYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29ybmVyUmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRmlndXJlQmFzZSB9IGZyb20gJy4uL2ZpZ3VyZS1iYXNlJztcclxuaW1wb3J0IHsgVGVzdFNjZW5lIH0gZnJvbSAnLi90ZXN0LXNjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0RmlndXJlIGV4dGVuZHMgRmlndXJlQmFzZTxUZXN0U2NlbmU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBkaXZOYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gZGl2TmF2aWdhdGlvbi5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbic7XHJcbiAgICAgICAgLy8gY29udGFpbmVyLmluc2VydEJlZm9yZShkaXZOYXZpZ2F0aW9uLCB0aGlzLmZpZ3VyZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBUZXh0TmF2aWdhdGlvbihkaXZOYXZpZ2F0aW9uLCB0aGlzLnNjZW5lKTtcclxuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb24uaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVTY2VuZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiBUZXN0U2NlbmUge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGVzdFNjZW5lKGNhbnZhcywgY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3Rlc3QtZmlndXJlJyk7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG4gICAgY29uc3QgZmlndXJlID0gbmV3IFRlc3RGaWd1cmUoY29udGFpbmVyKTtcclxuICAgIGZpZ3VyZS5pbml0KCk7XHJcbn1cclxu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QUFBQSxFQUVBLGdCQUFnQixRQUFnQjtBQUM1QixTQUFLLGVBQWU7QUFDcEIsU0FBSyxPQUFPO0FBQ1osU0FBSyxPQUFPO0FBQUEsRUFDaEI7QUFDSjs7O0FDakxPLElBQU0sYUFBTixjQUF5QixXQUFzQjtBQUFBLEVBQ2xELFlBQVksV0FBd0I7QUFDaEMsVUFBTSxTQUFTO0FBQUEsRUFRbkI7QUFBQSxFQUVVLFlBQVksUUFBMkIsU0FBOEM7QUFDM0YsV0FBTyxJQUFJLFVBQVUsUUFBUSxPQUFPO0FBQUEsRUFDeEM7QUFBQSxFQUVBLE9BQU87QUFDSCxVQUFNLEtBQUs7QUFBQSxFQUNmO0FBQ0o7QUFFTyxTQUFTLE1BQU0sTUFBeUI7QUFDM0MsUUFBTSxZQUFZLEtBQUssY0FBMkIsY0FBYztBQUNoRSxNQUFJLENBQUMsVUFBVztBQUNoQixRQUFNLFNBQVMsSUFBSSxXQUFXLFNBQVM7QUFDdkMsU0FBTyxLQUFLO0FBQ2hCOyIsCiAgIm5hbWVzIjogWyJsaWdodFRoZW1lIiwgImRhcmtUaGVtZSIsICJlYXNlIl0KfQo=
