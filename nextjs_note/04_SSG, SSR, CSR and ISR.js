/**
 *  . Pre-rendering
    . SSG - Static Site Generation
    . SSR - Server Side Rendering
    . CSR - Client Side Rendering
    . ISR - Incremental Static Regeneration
 */

/** Pre-rendering (SSR - SSG): Render sẵn file HTML ở fía server lên cho user
 * - Initial Load: Pre-render HTML để hiện thị cho user
 * - JS Loads: Browser sẽ load file JS lên
 * - Hydrate: Giống như hàm render(). Nhưng sử dụng để hydrate HTML container reactDOM đã được render
 * từ server, sau đó client lấy file html đó về và nhiệm vụ của hydrate là thêm event listener vào markup.
 *
 */

/** Lưu ý:
 * Đối với ReactApp: Ban đầu nó chưa render, nó chỉ tải file html có div root là rỗng, sau đó mới load JS và render APP
 */

/** SSG: Thực hiện ở build time
 * Build ra 1 mớ file HTML, sau đó user sẽ get mớ file HTML về -> Tốc độ nhanh
 */

/** SSR: Thực hiện ở run time
 * Tức là mỗi lầ nhận 1 request từ user -> tạo ra file HTML sau đó mới trả về
 */

/** CSG: Kết hợp fetch data từ client và SSG : tạo ra file markup sẵn, và dữ liệu không cần lấy từ server */

/** ISR: Nếu có hàng triệu sản phẩm, nếu build mà phải tạo hàng triệu file html nếu sử dụng SSG, còn n
 * nếu sử dụng SSR thì mỗi lần server pk làm việc rất cực.
 * -> Tạo ra khái niệm ISR: Tức là, thay vì có 1tr sản phẩm, nhưng có 1k sản phẩm phổ biển
 * thì sẽ build ra sẵn 1k file HTML theo SSG, nếu như query sản phâmr nào chưa có
 * thì sẽ tạo ra 1 file HTML mới để gửi lên cho user bằng SSR.
 */
