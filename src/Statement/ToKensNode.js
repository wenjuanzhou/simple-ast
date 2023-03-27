import { SemiSymbol } from "../../utils/index.js"

/**
 * 处理 tokens 内容
 */
class TokensNode {
  constructor(tokens) {
    this.tokens = tokens
    this.length = tokens.length
    this.current = 0

    // 初始化处理
    this.init()
  }

  init() {
    // 如果 token 第一个是 \n 这种形式的就会北调过
    const { blank } = this.tokens[0]
    if (blank) {
      this.next()
    }
  }

  //如果tokens结束,返回false否者返回本次tokens的值
  getToken(current = this.current) {
    if (this.exit(current)) return false

    return this.tokens[current]
  }

  /*建立一个对象，将tokens的type赋值给它{type:token.type}*/
  getTokenType() {
    if (this.exit(this.current)) return false
    const { type } = this.tokens[this.current]

    return type
  }

  //返回tokens的kewyord和value
  /*value,keyword值为{value:tokens.value,keyword:tokens.keyword}*/
  // 如果 token 中没有 value 就返回 keyword
  getTokenValue() {
    if (this.exit(this.current)) return false
    const { value, keyword } = this.tokens[this.current]

    return value || keyword
  }

  //如果tokens是数组，就返回数组长度，否者返回0
  getLength(tokens = this.tokens) {

    return tokens.length
  }

  next() {
    const current = ++this.current
    if (this.exit(current)) return false

    const { type, blank } = this.tokens[current]

    // ; 跳过
    // 但不知道跳过后会有什么问题
    // if (type === SemiSymbol) {
    //   this.next()
    // }
    // \n \t 这类的跳过
    if (blank) {
      this.next()
    }

    return true
  }

  test(type) {
    if (this.getTokenType() === type) {
      this.next()
      return true
    } else {
      return false
    }
  }

  /**
   * 判断下次的 token 的 type 与参数相同 是 next() 否 false 
   * @param {*} type 
   * @returns 
   */
  //接受的是type，将下一个tokens的值赋给nextToken
  //如果传入的type和下一个的type相等，
  //就进行next函
  //并返回true，如果不相等就返回flase
  nextTest(type) {
    const nextToken = this.peek()

    if (type === nextToken.type) {

      this.next()
      return true
    }

    return false
  }

  /**
   * 判断 type 和当前 type 是否一致 相同就 next() 否则 throw
   * @param {*} type 
   */
  //如果token的type和传入的type相等，就进行next即current+2
  //否者将type传入SyntaxError函数，即进行报错
  expect(type) {
    if (this.getTokenType() === type) {
      return this.next()
    }

    // todo 
    // 这里如果不对就要抛错 重写为函数
    throw SyntaxError(type)
  }

  /**
   * 预读取下一个 token 
   * @param {*} current 索引 默认为 this.current 
   * @returns 
   */
  //如果tokens结束返回false否者返回下一个tokens的值
  peek(current = this.current + 1) {
    if (this.exit(current)) return false

    return this.tokens[current]
  }

  /**
   * 当 this.current > tokens 的长度 返回 true 否则 true
   * @param {*} current 
   * @returns 
   */
  //如果tokens结束就返回true否者返回false
  exit(current = this.current) {
    if (current >= this.getLength()) return true

    return false
  }
}

export default TokensNode