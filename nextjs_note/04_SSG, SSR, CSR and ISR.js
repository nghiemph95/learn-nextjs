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
 * Build ra file HTML, sau đó user sẽ get file HTML về -> Tốc độ nhanh
 */

/** SSR: Thực hiện ở run time
 * Tức là mỗi lầ nhận 1 request từ user -> tạo ra file HTML sau đó mới trả về
 */

/** CSG: Kết hợp fetch data từ client và SSG : tạo ra file markup sẵn, và dữ liệu không cần lấy từ server */
