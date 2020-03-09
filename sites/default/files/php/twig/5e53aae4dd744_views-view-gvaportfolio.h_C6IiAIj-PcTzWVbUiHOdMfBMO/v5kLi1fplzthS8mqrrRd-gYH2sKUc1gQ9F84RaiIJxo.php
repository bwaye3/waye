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

/* themes/gavias_edupia/templates/views/views-view-gvaportfolio.html.twig */
class __TwigTemplate_b70d48373d3bc0f2f48bb4ad181d7f97686b7792b2f34ab4881c1f4d14a2bc65 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 1, "for" => 21];
        $filters = ["escape" => 2, "t" => 18, "raw" => 31];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 't', 'raw'],
                []
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
        if (($context["attributes"] ?? null)) {
            // line 2
            echo "<div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null)), "html", null, true);
            echo ">
";
        }
        // line 4
        echo "   
   ";
        // line 5
        if (($context["header"] ?? null)) {
            // line 6
            echo "    <header>
      ";
            // line 7
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null)), "html", null, true);
            echo "
    </header>
  ";
        }
        // line 10
        echo "
   ";
        // line 11
        if (($context["title"] ?? null)) {
            // line 12
            echo "      <h3>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
            echo "</h3>
   ";
        }
        // line 14
        echo "  
  <nav class=\"portfolio-filter\">
    <ul class=\"nav nav-tabs\">
      ";
        // line 17
        if (($context["show_all"] ?? null)) {
            // line 18
            echo "        <li><a class=\"btn-filter ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pid"] ?? null)), "html", null, true);
            echo " all active\" href=\"#\" data-filter=\"*\"><span>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("All"));
            echo "</span></a></li>
      ";
        }
        // line 20
        echo "
      ";
        // line 21
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["terms"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["term"]) {
            // line 22
            echo "        <li class=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["term"], "tid", [])), "html", null, true);
            echo "\"><a href=\"#\" class=\"btn-filter ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pid"] ?? null)), "html", null, true);
            echo "\" data-filter=\".";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["term"], "tid", [])), "html", null, true);
            echo "\"><span>";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["term"], "name", [])), "html", null, true);
            echo "</span></a></li>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['term'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 24
        echo "    </ul> 
  </nav>   

  <div class=\"gva-portfolio-items clearfix\">
    <div class=\"row\">
      <div class=\"isotope-items view-portfolio\" data-pid=\"";
        // line 29
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pid"] ?? null)), "html", null, true);
        echo "\" data-drupal-views-infinite-scroll-content-wrapper-gvaloadmore>
        ";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 31
            echo "          ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($context["row"], "content", [])));
            echo "
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "      </div>
    </div>
  </div>  
   
";
        // line 37
        if (($context["attributes"] ?? null)) {
            // line 38
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/gavias_edupia/templates/views/views-view-gvaportfolio.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 38,  155 => 37,  149 => 33,  140 => 31,  136 => 30,  132 => 29,  125 => 24,  110 => 22,  106 => 21,  103 => 20,  95 => 18,  93 => 17,  88 => 14,  82 => 12,  80 => 11,  77 => 10,  71 => 7,  68 => 6,  66 => 5,  63 => 4,  57 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_edupia/templates/views/views-view-gvaportfolio.html.twig", "/Users/bradleywaye/Sites/local.waye.com/themes/gavias_edupia/templates/views/views-view-gvaportfolio.html.twig");
    }
}
