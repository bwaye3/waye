<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_edupia/templates/page/parts/topbar.html.twig */
class __TwigTemplate_47f8e6f5c7b8320c8a9c5a5355655daebf01c0771174e85bd4e8b476d8e84e75 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 7];
        $filters = ["escape" => 9, "raw" => 19, "t" => 35];
        $functions = ["file_url" => 23, "path" => 35];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 'raw', 't'],
                ['file_url', 'path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<div class=\"topbar\">
  <div class=\"container\">
    <div class=\"topbar-inner\">
      <div class=\"row\">
        
        <div class=\"topbar-left col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6\">
          ";
        // line 7
        if ($this->getAttribute(($context["page"] ?? null), "topbar", [])) {
            // line 8
            echo "          <div class=\"topbar-left-content\">
            ";
            // line 9
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "topbar", [])), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 12
        echo "        </div>

        <div class=\"topbar-right col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6\">
          
          <div class=\"gva-user-region user-region\">
            <div class=\"user-top\">
              ";
        // line 18
        if (($context["custom_account"] ?? null)) {
            // line 19
            echo "                <span class=\"account-name\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed(($context["custom_account"] ?? null)));
            echo "</span>
              ";
        }
        // line 21
        echo "              <span class=\"icon\">
                ";
        // line 22
        if (($context["user_picture"] ?? null)) {
            // line 23
            echo "                  <img src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed(($context["user_picture"] ?? null))]), "html", null, true);
            echo "\" alt=\"\"/>
                ";
        } else {
            // line 24
            echo "  
                  <i class=\"fa fa-user\"></i>
                ";
        }
        // line 27
        echo "              </span>
            </div>  
            <div class=\"user-content\">  
              ";
        // line 30
        if (($context["custom_account"] ?? null)) {
            // line 31
            echo "                <div class=\"account-message\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed(($context["custom_account"] ?? null)));
            echo "</div>
              ";
        }
        // line 32
        echo "  
              <ul class=\"user-links\">
                ";
        // line 34
        if (($context["custom_account"] ?? null)) {
            // line 35
            echo "                  <li><a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.page"));
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("+ My Account"));
            echo "</a></li>
                  <li><a href=\"";
            // line 36
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.logout"));
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("+ Logout"));
            echo "</a></li>
                ";
        } else {
            // line 38
            echo "                  <li><a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.login"));
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("+ Login"));
            echo "</a></li>
                  <li><a href=\"";
            // line 39
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.register"));
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("+ Register"));
            echo "</a></li>
                ";
        }
        // line 40
        echo "  
              </ul>
            </div>  
          </div>

        </div>

      </div>
    </div>  
  </div>  
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/page/parts/topbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  153 => 40,  146 => 39,  139 => 38,  132 => 36,  125 => 35,  123 => 34,  119 => 32,  113 => 31,  111 => 30,  106 => 27,  101 => 24,  95 => 23,  93 => 22,  90 => 21,  84 => 19,  82 => 18,  74 => 12,  68 => 9,  65 => 8,  63 => 7,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/page/parts/topbar.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/page/parts/topbar.html.twig");
    }
}
