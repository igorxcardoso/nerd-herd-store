class ApiConstraints
    def initialize(options)
        @version = options[:version]
        @default = options[:default]
    end

    # def matches?(req)
    #     @default || requ.headers['Accept'].include?("/api/v#{@version}")
    # end
end