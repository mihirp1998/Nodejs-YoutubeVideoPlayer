interface I1 { public void abc();}
interface I2 { }
final class C1 implements I1 { 
@Override
public void abc(){
System.out.println("hello");
}

}
class C2 implements I2 { }




public class temp{

public static void main(String args[]){

String a = "hello";
String[] l = a.split("");
System.out.println("this is l "+ Float.parseFloat(a));

}



}
