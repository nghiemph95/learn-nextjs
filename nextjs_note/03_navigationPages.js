/**
 *  . Pre-rendering
    . SSG - Static Site Generation
    . SSR - Server Side Rendering
    . CSR - Client Side Rendering
    . ISR - Incremental Static Regenerationn
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
