const int MAX_NAMES = 10;

App app;

extern fn void jslog(int, int) @wasm;

fn void printLog(String s){
    jslog((int) s.ptr, s.len);
}

fn void printLogf(String format, args...){
    DString sb = "";
    sb.appendf(format, args);
    String s = sb.copy_str();

    jslog((int) s.ptr, s.len);
}
struct App {
    String[MAX_NAMES] names; 
    usz names_count;
}

fn App createApp(){
    String[MAX_NAMES] names = {} ;
    usz names_count = 0;
    return {
        names,
        names_count,
    };
}

fn void init() @extern("init") @wasm {
    printLog("Creando App...");

    app = createApp();
}

fn void addName(String name) @extern("addName") @wasm{
    DString sb = "";
    if (app.names_count < MAX_NAMES) {
        app.names[app.names_count] = name;
        app.names_count ++;
        sb.appendf("Added name: %s" , name);
        sb.appendf("Current Names:");
        foreach(n : app.names){
            sb.appendf("  - %s" , n);
        }
    }else{
        sb.appendf("Cant fit more names. Max is %d",MAX_NAMES);
    }
    printLog(sb.str_view());
}



