import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ad7652b4c16a4a4790dcfe6c1791bce8'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '4768ba5e5d424f5f957dcdce9621d247'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '923c51850842469eabd07efda3a6f0d0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e0380558ee4349dfba87f7ba4f2c07c3'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '7b70d79f0018448186fde62b11ee6927'
                    }
                }
            }
        }
    }
}
