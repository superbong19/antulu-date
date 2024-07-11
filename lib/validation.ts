import { z } from "zod"
export const formSchemaLogin = z.object({
    username: z.string(),
    password: z.string(),
})

export const formSchemaRegister = z.object({
    fullname: z.string(),
    username: z.string()
        .min(8, {
            message: 'Tên đăng nhập phải có ít nhất 8 kí tự'
        })
        .regex(/[a-z]/, {
            message: 'Tên đăng nhập phải có kí tự chử thường'
        }),
    password: z.string()
        .min(8, {
            message: 'Mật khẩu ít nhất 8 kí tự'
        })
        .regex(/[A-Z]/, {
            message: 'Mật khẩu phải có 1 kí tự in hoa'
        })
        .regex(/[a-z]/, {
            message: 'Mật khẩu phải có 1 kí tự in thường'
        })
        .regex(/[0-9]/, {
            message: 'Mật khẩu phải có 1 kí tự số'
        })
        .regex(/[^A-Za-z0-9]/, {
            message: 'Mật khẩu phải có 1 kí tự đặc biệt'
        }),
    confirmPassword: z.string(),
    birthdate: z.string(),
    email: z.string()
        .email({
            message: "Vui lòng nhập đúng định dạng Email"
        })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu và xác nhận mật khẩu không khớp",
    path: ["confirmPassword"], // Đặt lỗi tại trường confirmPassword
});